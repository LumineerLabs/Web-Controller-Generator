// WARNING: This file is automatically generated by puppeteer. Any modifications made by hand will be lost if the generator is run again.

function generatedResizeFn()
{
    // rotxt
    var div = $( "#rotxt_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    div.resizable({
        minHeight: div.height(),
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    
    // rwtxt
    var div = $( "#rwtxt_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    div.resizable({
        minHeight: div.height(),
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    
    // rochk
    /*var div = $( "#rochk_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    var minDivHeight = Math.max(25, minDivWidth);
    div.resizable({
        minHeight: minDivHeight,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    div.height(minDivHeight);*/
    
    // rwchk
    var div = $( "#rwchk_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    div.resizable({
        minHeight: div.height(),
        minWidth: minDivWidth
      });
    div.width(minDivWidth);

    // roradio
    var div = $( "#roradio_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    div.resizable({
        minHeight: div.height(),
        minWidth: minDivWidth
      });
    div.width(minDivWidth);

    // rwradio
    var div = $( "#rwradio_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    div.resizable({
        minHeight: div.height(),
        minWidth: minDivWidth
      });
    div.width(minDivWidth);

    // roslide
    var div = $( "#roslide_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    var minDivHeight = div.height();
    div.resizable({
        minHeight: minDivHeight,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    div.height(minDivHeight);

    // rwslide
    var div = $( "#rwslide_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width());
    var minDivHeight = div.height();
    div.resizable({
        minHeight: minDivHeight,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    div.height(minDivHeight);

    // history
    var div = $( "#history_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width(), 600);
    div.resizable({
        minHeight: minDivWidth/3,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    div.height(minDivWidth/3);
    var div = $( "#history" );
    div.resizable({
        minHeight: minDivWidth/3,
        minWidth: minDivWidth
      });

    // tabs1
    $( ".tabs" ).css('height','auto');
    /*var minDivWidth = Math.max(div.width(), div.parent().parent().width());
    var minDivHeight = Math.max(div.height(), div.parent().parent().height())
    div.resizable({
        minHeight: 1000,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);*/

    // history
    var div = $( "#multihistory_div" );
    var minDivWidth = Math.max(div.width(), div.parent().width(), 600);
    div.resizable({
        minHeight: minDivWidth/3,
        minWidth: minDivWidth
      });
    div.width(minDivWidth);
    div.height(minDivWidth/3);
    var div = $( "#multihistory" );
    div.resizable({
        minHeight: minDivWidth/3,
        minWidth: minDivWidth
      });
}

function generatedCheckFunction(event)
{
  /*switch(event.target.id)
  {
    case "rwradio_0":
      $( "#roradio_0" ).iCheck('check');
      break;
    case "rwradio_1":
      $( "#roradio_1" ).iCheck('check');
      break;
    case "rwradio_2":
      $( "#roradio_2" ).iCheck('check');
      break;
    case "rwradio_3":
      $( "#roradio_3" ).iCheck('check');
      break;
  }*/
}

function generatedDialFn()
{
  var input = $( "#roslide" );
  input.knob({
    min: 25,
    max: 100,
    step: 1,
    readOnly: true,
    angleOffset: -125,
    angleArc: 250,
    fgColor:"#33b5e5",
    bgColor:"#2f2d2d"
  });
  
  var input = $( "#rwslide" );
  input.knob({
    min: 0,
    max: 30,
    step: .1,
    angleOffset: -125,
    angleArc: 250,
    fgColor:"#33b5e5",
    bgColor:"#2f2d2d",
    'change' : function (v) { 
      var obj = {
        rwslide: v
      };
      websocket.send(JSON.stringify(obj));
    }
  });
}

function generatedGraphFn()
{
  historyPlot = $.plot($("#history"), [ { color: 3, data: [ ] } ], 
    {
      colors: ["#33b5e5"],
      yaxis: 
      { 
        max: 2
      },
      grid: 
      {
				hoverable: true
			},
      crosshair:
      {
        mode: "x"
      },
      lines:
      {
        show: true,
        fill: true,
        fillColor:  {colors:  [{ opacity: 0.1 }, { opacity: 0.1 }] } //[{ opacity: 0.1 }, { opacity: 0.8 }]
      }
    }
  );

  $("<div id='history_tooltip'></div>").css({
    position: "absolute",
    display: "none",
    border: "1px solid #666666",
    padding: "2px",
    "background-color": "#000000",
    opacity: 0.80
  }).appendTo("body");

  $("#history").bind("plothover", function (event, pos, item) 
  {
    if (item) {
      var x = item.datapoint[0].toFixed(2),
        y = item.datapoint[1].toFixed(2);

      $("#history_tooltip").html("(" + x + ", " + y + ")")
        .css({top: item.pageY+5, left: item.pageX+5})
        .fadeIn(200);
    } else {
      $("#history_tooltip").hide();
    }
  });

  multiHistoryPlot = $.plot($("#multihistory"), [ multiHistoryData ], 
    {
      yaxis: 
      { 
        max: 2
      },
      grid: 
      {
				hoverable: true
			},
      crosshair:
      {
        mode: "x"
      },
      lines:
      {
        show: true,
        fill: true,
        fillColor:  {colors:  [{ opacity: 0.1 }, { opacity: 0.1 }] } //[{ opacity: 0.1 }, { opacity: 0.8 }]
      }
    }
  );

  $("<div id='multihistory_tooltip'></div>").css({
    position: "absolute",
    display: "none",
    border: "1px solid #666666",
    padding: "2px",
    "background-color": "#000000",
    opacity: 0.80
  }).appendTo("body");

  $("#multihistory").bind("plothover", function (event, pos, item) 
  {
    if (item) {
      var x = item.datapoint[0].toFixed(2),
        y = item.datapoint[1].toFixed(2);

      $("#multihistory_tooltip").html("(" + x + ", " + y + ")")
        .css({top: item.pageY+5, left: item.pageX+5})
        .fadeIn(200);
    } else {
      $("#multihistory_tooltip").hide();
    }
  });
}

function generatedConnectFn(obj)
{
  historyData = obj["history"];
  historyPlot.setData([historyData]);
  historyPlot.setupGrid();
  historyPlot.draw();

  multiHistoryData[0].data = obj["multihistory"][0];
  multiHistoryData[1].data = obj["multihistory"][1];
  multiHistoryData[2].data = obj["multihistory"][2];
  multiHistoryPlot.setData([multiHistoryData]);
  multiHistoryPlot.setupGrid();
  multiHistoryPlot.draw();

  $("#rotxt").html(obj["rotxt"]);

  $( "#roslide" ).val(obj["roslide"]).trigger('change');;
    
  if(obj["rochk"])
  {
      $( "#rochk" ).removeClass("toggle-false");
      $( "#rochk" ).addClass("toggle-true");
  }
  else
  {
      $( "#rochk" ).removeClass("toggle-true");
      $( "#rochk" ).addClass("toggle-false");
  }

  $( "#" + obj["roradio"] ).iCheck('check');

  $("#rwtxt").html(obj["rwtxt"]);

  $( "#rswlide" ).val(obj["rwslide"]).trigger('change');;
    
  if(obj["rwchk"])
  {
      $( "#rwchk" ).removeClass("toggle-false");
      $( "#rwchk" ).addClass("toggle-true");
  }
  else
  {
      $( "#rwchk" ).removeClass("toggle-true");
      $( "#rwchk" ).addClass("toggle-false");
  }

  $( "#" + obj["rwradio"] ).iCheck('check');
}

function generatedUpdateFn(obj)
{
  switch(obj["id"])
  {
    case "history":
    {
      if (historyData.length > 0)
        historyData = historyData.slice(1);
      historyData.push(obj["history"]);
      historyPlot.setData([historyData]);
      historyPlot.setupGrid();
      historyPlot.draw();
      break;
    }
    case "multihistory0":
    {
      if (multiHistoryData[0].data.length > 0)
        multiHistoryData[0].data = multiHistoryData[0].data.slice(1);
      multiHistoryData[0].data.push(obj["multihistory0"]);
      multiHistoryPlot.setData(multiHistoryData);
      multiHistoryPlot.setupGrid();
      multiHistoryPlot.draw();
      break;
    }
    case "multihistory1":
    {
      if (multiHistoryData[1].data.length > 0)
        multiHistoryData[1].data = multiHistoryData[1].data.slice(1);
      multiHistoryData[1].data.push(obj["multihistory1"]);
      multiHistoryPlot.setData(multiHistoryData);
      multiHistoryPlot.setupGrid();
      multiHistoryPlot.draw();
      break;
    }
    case "multihistory2":
    {
      if (multiHistoryData[2].data.length > 0)
        multiHistoryData[2].data = multiHistoryData[2].data.slice(1);
      multiHistoryData[2].data.push(obj["multihistory2"]);
      multiHistoryPlot.setData(multiHistoryData);
      multiHistoryPlot.setupGrid();
      multiHistoryPlot.draw();
      break;
    }
    case "rotxt":
      $("#rotxt").html(obj["rotxt"]);
      break;
    case "rochk":
    {
      if(obj["rochk"])
      {
        $( "#rochk" ).removeClass("toggle-false");
        $( "#rochk" ).addClass("toggle-true");
      }
      else
      {
        $( "#rochk" ).removeClass("toggle-true");
        $( "#rochk" ).addClass("toggle-false");
      }
      break;
    }
    case "roradio":
      $( "#" + obj["roradio"] ).iCheck('check');
      break;
    case "roslide":
      $( "#roslide" ).val(obj["roslide"]).trigger('change');;
      break;
    case "rwtxt":
      $("#rwtxt").html(obj["rwtxt"]);
      break;
    case "rwchk":
    {
      if(obj["rwchk"])
      {
        $( "#rwchk" ).removeClass("toggle-false");
        $( "#rwchk" ).addClass("toggle-true");
      }
      else
      {
        $( "#rwchk" ).removeClass("toggle-true");
        $( "#rwchk" ).addClass("toggle-false");
      }
      break;
    }
    case "rwradio":
      $( "#" + obj["rwradio"] ).iCheck('check');
      break;
    case "rwslide":
      $( "#rwslide" ).val(obj["rwslide"]).trigger('change');;
      break;
  }
}

var historyData = [];
var lastHistoryX = 2*Math.PI;
var historyPlot = null;

var multiHistoryData = [{data: []},{data: []},{data: []}];
var multiHistoryPlot = null;

function fetchHistoryData()
{
  for(var i = 0; i < 2 * Math.PI; i+= (2*Math.PI)/100)
  {
    historyData.push([i, Math.sin(i) + 1]);
  }
  return historyData;
}

function generatedInputHandlerFn()
{
  $("#rwtxt").change(function()
  {
    var obj = {
      rwtxt: $("#rwtxt")[0].value
    };
    websocket.send(JSON.stringify(obj));
  });

  $("#rwslide").change(function()
  {
    var obj = {
      rwslide: parseFloat($("#rwslide")[0].value)
    };
    websocket.send(JSON.stringify(obj));
  });

  $("#rwchk").change(function()
  {
    var obj = {
      rwchk: $("#rwchk")[0].checked
    };
    websocket.send(JSON.stringify(obj));
  });

  $("#rwradio_0").on('ifChecked', function()
  {
    var obj = {
      rwradio: "rwradio_0"
    };
    websocket.send(JSON.stringify(obj));
  });

  $("#rwradio_1").on('ifChecked', function()
  {
    var obj = {
      rwradio: "rwradio_1"
    };
    if($("#rwradio_1")[0].checked) websocket.send(JSON.stringify(obj));
  });

  $("#rwradio_2").on('ifChecked', function()
  {
    var obj = {
      rwradio: "rwradio_2"
    };
    if($("#rwradio_2")[0].checked) websocket.send(JSON.stringify(obj));
  });

  $("#rwradio_3").on('ifChecked', function()
  {
    var obj = {
      rwradio: "rwradio_3"
    };
    if($("#rwradio_3")[0].checked) websocket.send(JSON.stringify(obj));
  });

  $( "#drop" ).on( "selectmenuchange", function(event, ui)
  {
    var obj = {
      drop: ui.item.value
    }
    websocket.send(JSON.stringify(obj));
  });
}