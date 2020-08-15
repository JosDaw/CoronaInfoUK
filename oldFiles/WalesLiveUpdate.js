google.charts.load('current', {packages: ['corechart','controls', 'table', 'line']});

google.setOnLoadCallback(walesCasesLiveTable);
google.setOnLoadCallback(walesDeathsLiveTable);
google.setOnLoadCallback(WalesUpdateTimeTable); //Load update time table
// google.charts.setOnLoadCallback(PercentagesStackedBarChart); //stacked percentages

google.setOnLoadCallback(walesRegionalCasesLineChart);
google.setOnLoadCallback(walescasesLineChart);
google.setOnLoadCallback(walesdeathsLineChart);

google.setOnLoadCallback(walesTestsLineChart);

google.setOnLoadCallback(walesRegionalTable);

google.setOnLoadCallback(aneurinLineChart);
google.setOnLoadCallback(betsiLineChart);
google.setOnLoadCallback(cardiffLineChart);
google.setOnLoadCallback(cwmLineChart);
google.setOnLoadCallback(hywelLineChart);
google.setOnLoadCallback(powysLineChart);
google.setOnLoadCallback(swanseaLineChart);
  
//Wales cases increase live table
function walesCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A3:B4');
  query.send(handleWalesCasesLiveTableQuery);
}

function handleWalesCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('wales-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales deaths increase live table
function walesDeathsLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A5:B6');
  query.send(handleWalesDeathsLiveTableQuery);
}

function handleWalesDeathsLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('wales-deaths-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales update time
function WalesUpdateTimeTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A7:B7');
  query.send(handleWalesUpdateTimeTableQuery);
}

function handleWalesUpdateTimeTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('wales-update-time-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

// //Percentages
// function PercentagesStackedBarChart() {

//   var query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A10:C11');
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
//       colors: ['#FEB019', '#008FFB', '#D7263D'  ],
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
      
//       var chart = new google.visualization.BarChart(document.getElementById('wales-percentages-live-stacked-chart'));
//       chart.draw(view, options);
//     }
//     window.onload = resize();
//     window.onresize = resize;
// }


//Wales regional cases line chart
function walesRegionalCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:F1000,R1:R1000,T1:T1000,V1:V1000,X1:X1000,Z1:Z1000,AB1:AB1000,AD1:AD1000');
  query.send(handlewalesRegionalCasesLineQuery);
}

function handlewalesRegionalCasesLineQuery(response) {
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
        maxLines: 4,
        position: 'top'
    },
      series: {
          0: { color: '#F86624' },
        },
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
        series: {
          0: { color: '#008FFB' },
          1: { color: '#00E396', pointShape: 'triangle' },
          2: { color: '#D7263D', pointShape: 'square'  },
          3: { color: '#FEB019', pointShape: 'diamond'  },
          4: { color: '#1c91c0', pointShape: 'star' },
          5: { color: '#8D5B4C', pointShape: 'polygon' },
          6: {color: '#CC33FF'}
        },
        pointsVisible: true, tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%', left: 45, top: 90, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('wales-regional-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales cases line chart
function walescasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:H1000');
  query.send(handleWalesCasesQuery);
}

function handleWalesCasesQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom'
      },
      seriesType: 'line',
      series: {
          0: { color: '#F86624' },
          1: {type: 'bars', color: '#F86624'},
          2: { color: '#F86624' }
        },
      hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 14
          }
        },
        
      vAxis:{
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 12
          }
        },
         tooltip: {isHtml: true},	
      chartArea:  {'width': '80%','height': '70%', left: 50, right: 10, top: 20},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('wales-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales deaths line chart
function walesdeathsLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:F1000,L1:L1000,K1:K1000');
  query.send(handleWalesDeathsQuery);
}

function handleWalesDeathsQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom'
      },
      seriesType: 'line',
      series: {
          0: { color: '#662E9B' },
          1: {type: 'bars', color: '#D7263D'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	

        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('wales-deaths-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales tests chart
function walesTestsLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:F1000,O1:P1000');
  query.send(handleWalesTestsLineChartQuery);
}

function handleWalesTestsLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom'
      },
      seriesType: 'area',
      series: {
          0: { color: '#fbea00' },
          1: {type: 'bars', color: '#A54DFF'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	

        chartArea:  {'width': '80%','height': '70%', left: 50, right: 10, top: 20}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('wales-tests-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales Regional table with Search bar
function walesRegionalTable() {
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=a13:d35');


  // Send the query with a callback function.
  query.send(drawWalesDashboard);
}

function drawWalesDashboard(response) {

    //Load query data
    var data = response.getDataTable();

    //create the search bar
    var searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_wales_reg_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    var showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'wales_reg_table_div'
    });

    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_wales_reg_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}


//Aneurin Line chart
function aneurinLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,R1:S1000');
  query.send(handleAneurinQuery);
}

function handleAneurinQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
      textStyle: {
        fontSize: 14
      } },
      seriesType: 'line',
      series: {
        0: { color: '#008FFB' },
        1: {type: 'bars', color: '#F86624'}
      },
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
      pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('aneurin-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Betsi line chart
function betsiLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,T1:U1000');
  query.send(handleBetsiQuery);
}

function handleBetsiQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#00E396', pointShape: 'triangle' },
          1: {type: 'bars', color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('betsi-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Cardiff line chart
function cardiffLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,V1:W1000');
  query.send(handlecardiffQuery);
}

function handlecardiffQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#D7263D', pointShape: 'square'  },
          1: {type: 'bars',color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('cardiff-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Cwm line chart
function cwmLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,X1:Y1000');
  query.send(handleCwmQuery);
}

function handleCwmQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#FEB019', pointShape: 'diamond' },
          1: {type: 'bars', color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('cwm-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Hywel Dda
function hywelLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,Z1:AA1000');
  query.send(handleHywelQuery);
}

function handleHywelQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        } 
      },
      seriesType: 'line',
      series: {
          0: { color: '#1c91c0', pointShape: 'star' },
          1: {type: 'bars',color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('hywel-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Powys
function powysLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,AB1:AC1000');
  query.send(handlePowysQuery);
}

function handlePowysQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#8D5B4C', pointShape: 'polygon' },
          1: {type: 'bars', color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('powys-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Swansea
function swanseaLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,AD1:AE1000');
  query.send(handleSwanseaQuery);
}

function handleSwanseaQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#CC33FF' },
          1: {type: 'bars', color: '#F86624'}
        },
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
        pointsVisible: true, tooltip: {isHtml: true},	
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('swansea-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}
