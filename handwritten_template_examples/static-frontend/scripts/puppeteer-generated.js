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
    bgColor:"#2f2d2d"
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

  /*historyPlot.setData([fetchHistoryData()]);
  historyPlot.setupGrid();
  historyPlot.draw();*/

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
}

function generatedConnectFn(data)
{
  obj = $.parseJSON(data);

  historyData = obj["history"];
  historyPlot.setData([historyData]);
  historyPlot.setupGrid();
  historyPlot.draw();

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
}

function generatedUpdateFn(data)
{
  obj = $.parseJSON(data);
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
  }
}

var historyData = []
var lastHistoryX = 2*Math.PI;
var historyPlot = null;

function fetchHistoryData()
{
  for(var i = 0; i < 2 * Math.PI; i+= (2*Math.PI)/100)
  {
    historyData.push([i, Math.sin(i) + 1]);
  }
  return historyData;
}