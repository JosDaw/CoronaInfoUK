google.charts.load('current', {packages: ['corechart', 'table', 'line', 'controls']});

google.charts.setOnLoadCallback(EnglandCasesLiveTable); //Load England Cases Live Update Table
google.charts.setOnLoadCallback(EnglandDeathsLiveTable);//Load England Deaths Live Update Table
google.charts.setOnLoadCallback(EnglandUpdateTimeTable); //Load update time table
// google.charts.setOnLoadCallback(PercentagesStackedBarChart); //stacked percentages

google.charts.setOnLoadCallback(EnglandCasesDeathsAreaChart); 
// google.setOnLoadCallback(EnglandAllAreasTable); //Load Full England Google Table

google.setOnLoadCallback(EnglandRegionalCasesLineChart); //Load England Line Chart
google.setOnLoadCallback(EnglandRegionalCasesDeathsChart); //Load England bar chart

google.setOnLoadCallback(EnglandDailyDeathsChart); //Load daily deaths chart

google.setOnLoadCallback(eastEngCasesLineChart); //Load EE line chart

google.setOnLoadCallback(LondonCasesLineChart); //Load london line chart

google.setOnLoadCallback(MidlandsCasesLineChart); //Load Midlands  line chart

google.setOnLoadCallback(NorthEastCasesLineChart); //Load NE line chart

google.setOnLoadCallback(NorthWestCasesLineChart); //Load NW line chart

google.setOnLoadCallback(SouthEastCasesLineChart); //Load SE line chart

google.setOnLoadCallback(southWestCasesLineChart); //Load SW line chart



//England Cases & Deaths Area chart
function EnglandCasesDeathsAreaChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:G1000,K1:K1000');
  query.send(handleEnglandCasesDeathsAreaChartQuery);
}

function handleEnglandCasesDeathsAreaChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 480,
      legend: { 
        textStyle: {
          fontSize: 14
        },
        maxLines: 3,
        position: 'bottom'
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#A300D6', areaOpacity: 0.1 },
          1: { color: '#f9ce1d', pointShape: 'triangle', areaOpacity: 0.3 },
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '90%','height': '70%', left: 55, top: 10, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('eng-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Full England Google Table with search
// function EnglandAllAreasTable() {
//   var query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=AllLowerAuthorities&range=F1:G364,I1:I364');


//   // Send the query with a callback function.
//   query.send(drawEnglandAllAreasDashboard);
// }

// function drawEnglandAllAreasDashboard(response) {

//     //Load query data
//     var data = response.getDataTable();

//     //create the search bar
//     var searchFilter= new google.visualization.ControlWrapper({
//         'controlType': 'StringFilter',
//         'containerId': 'filter_eng_all_div',
//         'options': {
//         'filterColumnLabel': 'Area',
//         'matchType':'any',
//         'ui.realtimeTrigger': 'true'    
//         }
//     });
    
//     //create table
//     var showChart = new google.visualization.ChartWrapper({
//         'chartType': 'Table',
//         'containerId': 'eng_all_table_div'
//     });

//     var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_eng_all_div'));
//     dashboard.bind(searchFilter, showChart);
//     dashboard.draw(data);
// }


//England cases increase live table
function EnglandCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A3:B4');
  query.send(handleEnglandCasesLiveTableQuery);
}

function handleEnglandCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('england-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//England deaths increase live table
function EnglandDeathsLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A5:b6');
  query.send(handleEnglandDeathsLiveTableQuery);
}

function handleEnglandDeathsLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('england-deaths-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//England update time table
function EnglandUpdateTimeTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A7:B7');
  query.send(handleEnglandUpdateTimeTableQuery);
}

function handleEnglandUpdateTimeTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('england-update-time-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Percentages
// function PercentagesStackedBarChart() {

//   var query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A18:c19');
//   query.send(handlePercentagesStackedBarChartQuery);
// }

// function handlePercentagesStackedBarChartQuery(response) {
//   if (response.isError()) {
//     alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//     return;
//   }

//   var options = {
//     height: 80,
//     legend: { position: 'top' ,
//       textStyle: {
//         fontSize: 12
//       }
//     },
//     hAxis:{slantedText: true,
//         textStyle: {
//           fontSize: 12
//         },
//       },
//     vAxis:{
//         textStyle: {
//           fontSize: 14
//         }
//       },
//       tooltip: {isHtml: true},
//       colors: [ '#FEB019', '#008FFB', '#D7263D'  ],
//       chartArea: {top: 20},
//       annotations: {
//         textStyle: {
//           fontSize: 14,
//         }
//       },


//   };

//   function resize() {
//       var data = response.getDataTable();
//       var view = new google.visualization.DataView(data);
//       view.setColumns([0, 1,
//         { calc: "stringify",
//           sourceColumn: 1,
//           type: "string",
//           role: "annotation" },
//         2,
//         { calc: "stringify",
//           sourceColumn: 2,
//           type: "string",
//           role: "annotation" }
//       ]);
      
//       var chart = new google.visualization.BarChart(document.getElementById('england-percentages-live-stacked-chart'));
//       chart.draw(view, options);
//     }
//     window.onload = resize();
//     window.onresize = resize;
// }


//England regional cases line chart
function EnglandRegionalCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,N1:N1000,R1:R1000,V1:V1000,Z1:Z1000,AD1:AD1000,AH1:AH1000,AL1:AL1000,AP1:AP1000,AT1:AT1000');
  query.send(handleEnglandRegionalCasesLineQuery);
}

function handleEnglandRegionalCasesLineQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 480,
      legend: { 
        textStyle: {
          fontSize: 14
        },
        maxLines: 5,
        position: 'top'
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#008FFB' },
          1: { color: '#00E396', pointShape: 'triangle' },
          2: { color: '#D7263D', pointShape: 'square'  },
          3: { color: '#FEB019', pointShape: 'diamond'  },
          4: { color: '#546E7A', pointShape: 'star' },
          5: { color: '#8D5B4C', pointShape: 'polygon' },
          6: { color: '#A300D6', pointShape: 'triangle' },
          8: { color: '#f9a3a4', pointShape: 'square'  }

        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%', left: 45, top: 60, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('England-regional-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//England Regional cases & deaths bar chart
function EnglandRegionalCasesDeathsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A25:C34');
  query.send(handleEnglandRegionalCasesDeathsChartQuery);
}

function handleEnglandRegionalCasesDeathsChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 400,
    legend: { position: 'bottom' ,
      textStyle: {
        fontSize: 12
      }
    },
    tooltip: {isHtml: true},
    bar: {groupWidth: "95%"},
    hAxis:{slantedText: true,
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 14
        }
      },
      
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 14
        }
      },
      colors: ['#4ecdc4', '#D7263D'],
      chartArea: {'width': '80%','height': '80%', left: 100, right: 50,  bottom: 60},
      annotations: {alwaysOutside: true,
        textStyle: {
          fontSize: 14,
        }
      }

  };

  function resize() {
      var data = response.getDataTable();
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
        2,
        { calc: "stringify",
          sourceColumn: 2,
          type: "string",
          role: "annotation" } 
      ]);
      
      var chart = new google.visualization.BarChart(document.getElementById('eng-reg-cases-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//England Daily Deaths
function EnglandDailyDeathsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F40:F1000,J40:J1000');
  query.send(handleEnglandDailyDeathsChartQuery);
}

function handleEnglandDailyDeathsChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 700,
      legend: { 
        textStyle: {
          fontSize: 14
        },
        position: 'none'
    },
    bar: {groupWidth: "55%"},
      hAxis:{slantedText: true,
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#D7263D' }
        },
        tooltip: {isHtml: true},
        pointsVisible: true,
        annotations: {
          textStyle: {
            fontSize: 12,
          },
        },
      chartArea: {'width': '80%','height': '90%', left: 40, right: 30, bottom: 38, top: 0},
    };
    

  function resize() {
      var data = response.getDataTable();
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" }
      ]);
      var chart = new google.visualization.BarChart(document.getElementById('England-daily-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//East Eng cases line chart
function eastEngCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,R1:R1000,T1:T1000');
  query.send(handleeastEngCasesLineChartQuery);
}

function handleeastEngCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      series: {
          0: { color: '#008FFB' },
          1: {color: '#D7263D'}
        },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#008FFB' },
          1: {color: '#D7263D', pointshape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('east-eng-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//London cases line chart
function LondonCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,V1:V1000,X1:X1000');
  query.send(handleLondonCasesLineChartQuery);
}

function handleLondonCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      series: {
          0: { color: '#00E396', pointShape: 'triangle' },
          1: {color: '#D7263D'}
        },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#00E396', pointShape: 'triangle' },
          1: {color: '#D7263D', pointshape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('london-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//Midlands cases line chart
function MidlandsCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,N1:N1000,P1:P1000,AP1:AP1000,AR1:AR1000');
  query.send(handleMidlandsCasesLineChartQuery);
}

function handleMidlandsCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#83B547', pointShape: 'square'  },
          1: { color: '#f9a3a4', pointShape: 'square'  },
          2: {color: '#D7263D', pointshape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('Midlands-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//NE cases line chart
function NorthEastCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,Z1:Z1000,AB1:AB1000,AT1:AT1000,AV1:AV1000');
  query.send(handleNorthEastCasesLineChartQuery);
}

function handleNorthEastCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: {color: '#FEB019', pointShape: 'diamond'},
          1: {color: '#BD66FF', pointShape: 'diamond'},
          2: {color: '#D7263D', pointShape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('north-east-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}




//NW cases line chart
function NorthWestCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AD1:AD1000,AF1:AF1000');
  query.send(handleNorthWestCasesLineChartQuery);
}

function handleNorthWestCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#546E7A', pointShape: 'star' },
          1: {color: '#D7263D', pointShape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('north-west-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}



//SE local cases line chart
function SouthEastCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AH1:AH1000,AJ1:AJ1000');
  query.send(handleSouthEastCasesLineChartQuery);
}

function handleSouthEastCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#8D5B4C', pointShape: 'polygon' },
          1: {color: '#D7263D', pointShape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('south-east-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//SW local cases line chart
function southWestCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AL1:AL1000,AN1:AN1000');
  query.send(handlesouthWestCasesLineChartQuery);
}

function handlesouthWestCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 280,
      legend: { position: 'bottom' ,
        textStyle: {
          fontSize: 12
        }
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          }
        },
        series: {
          0: { color: '#A300D6', pointShape: 'triangle' },
          1: {color: '#D7263D', pointShape: 'circle'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('south-west-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

