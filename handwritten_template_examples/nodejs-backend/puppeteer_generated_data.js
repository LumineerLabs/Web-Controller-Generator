const data_model = require("./puppeteer_data_model");

// enum values
exports.RWRADIOVALS = 
{
    rwradio_0: "rwradio_0",
    rwradio_1: "rwradio_1",
    rwradio_2: "rwradio_2",
    rwradio_3: "rwradio_3"
}

exports.RORADIOVALS = 
{
    roradio_0: "roradio_0",
    roradio_1: "roradio_1",
    roradio_2: "roradio_2",
    roradio_3: "roradio_3"
}

var wsclients = [];

exports.init = function(app)
{
    // load the defaults, the application should overwrite these after this function, if values are persisted
    // server -> client
    module.exports.data = new Map();
    module.exports.data["history"] = data_model.HistoryData(0, 100, (val) => 
    {
        var obj = {
            type: "update",
            id: "history",
            history: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["multihistory0"] = data_model.HistoryData(0, 100, (val) => 
    {
        var obj = {
            type: "update",
            id: "multihistory0",
            multihistory0: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["multihistory1"] = data_model.HistoryData(0, 100, (val) => 
    {
        var obj = {
            type: "update",
            id: "multihistory1",
            multihistory1: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["multihistory2"] = data_model.HistoryData(0, 100, (val) => 
    {
        var obj = {
            type: "update",
            id: "multihistory2",
            multihistory2: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["rotxt"] = data_model.Datum(5, (val) => 
    {
        var obj = {
            type: "update",
            id: "rotxt",
            rotxt: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["rochk"] = data_model.Datum(true, (val) => 
    {
        var obj = {
            type: "update",
            id: "rochk",
            rochk: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["roradio"] = data_model.Datum(module.exports.RORADIOVALS.roradio_3, (val) => 
    {
        var obj = {
            type: "update",
            id: "roradio",
            roradio: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["roslide"] = data_model.Datum(80, (val) => 
    {
        var obj = {
            type: "update",
            id: "roslide",
            roslide: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });

    // client -> server
    module.exports.data["rwtxt"] = data_model.Datum("", (val) => 
    {
        var obj = {
            type: "update",
            id: "rwtxt",
            rwtxt: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["rwchk"] = data_model.Datum(true, (val) => 
    {
        var obj = {
            type: "update",
            id: "rwchk",
            rwchk: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["rwradio"] = data_model.Datum(module.exports.RWRADIOVALS.rwradio_0, (val) => 
    {
        var obj = {
            type: "update",
            id: "rwradio",
            rwradio: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });
    module.exports.data["rwslide"] = data_model.Datum(5.5, (val) => 
    {
        var obj = {
            type: "update",
            id: "rwslide",
            rwslide: val
        }
        for(var i in wsclients)
        {
            wsclients[i].send(JSON.stringify(obj));
        }
    });

    var expressWs = require('express-ws')(app);

    app.ws('/wsevents', function (ws, req) {        
        wsclients.push(ws);
        console.log("new wsclient!");

        var data = {
            type: "connect",
            history: module.exports.data["history"].history,
            multihistory: [module.exports.data["multihistory0"].history, module.exports.data["multihistory1"].history, module.exports.data["multihistory2"].history],
            rotxt: module.exports.data["rotxt"].value,
            rochk: module.exports.data["rochk"].value,
            roradio: module.exports.data["roradio"].value,
            roslide: module.exports.data["roslide"].value,
            rwtxt: module.exports.data["rwtxt"].value,
            rwchk: module.exports.data["rwchk"].value,
            rwradio: module.exports.data["rwradio"].value,
            rwslide: module.exports.data["rwslide"].value
        }

        ws.send(JSON.stringify(data));

        ws.on('message', function(msg) {
            var obj = JSON.parse(msg);

            if(typeof obj.rwtxt !== 'undefined') module.exports.data["rwtxt"].value = obj.rwtxt;
            if(typeof obj.rwchk !== 'undefined') module.exports.data["rwchk"].value = obj.rwchk;
            if(typeof obj.rwradio !== 'undefined') module.exports.data["rwradio"].value = obj.rwradio;
            if(typeof obj.rwslide !== 'undefined') module.exports.data["rwslide"].value = obj.rwslide;
        });

        ws.on('close', () => {
            console.log("Bye wsclient!");
            wsclients.splice(wsclients.indexOf(ws), 1);
        });
    });
}