//Load Google Charts
google.charts.load('current', {'packages':['corechart', 'controls', 'table', 'line']});

google.charts.setOnLoadCallback(PercentagesStackedBarChart); //stacked percentages

google.charts.setOnLoadCallback(FatalityBarChart); 

google.charts.setOnLoadCallback(CasesDeathsChart); //Load cases,deaths area chart
google.charts.setOnLoadCallback(DailyDeathsChart); //Load daily deaths increases chart

google.charts.setOnLoadCallback(UKTotalByAgeGenderColumn); //Load ONS deaths by age & gender

google.charts.setOnLoadCallback(CasesAndDeathsTable); //Load Cases & Deaths Google Table 

google.charts.setOnLoadCallback(TestsChart); //Load tests chart

google.charts.setOnLoadCallback(UKLocalCasesTable);  //Load all UK cases table

google.charts.setOnLoadCallback(UKDeathsLineChart); //Load uk deaths line chart
// google.charts.setOnLoadCallback(EuropeDeathsAreaChart); //Load Europe

google.charts.setOnLoadCallback(EnglandCasesDeathsAreaChart);  //Load England cases & deaths chart

google.charts.setOnLoadCallback(ScotlandCasesDeathsAreaChart); //Load Scotland cases & deaths chart

google.charts.setOnLoadCallback(WalesCasesDeathsAreaChart); //Load Wales cases & deaths

google.charts.setOnLoadCallback(NICasesDeathsAreaChart); //Load NI cases & deaths

google.charts.setOnLoadCallback(WorldCasesDeathsChart);//Load world chart
google.charts.setOnLoadCallback(WorldUpdateTimeTable); //Load world update


//UK Percentages Bar chart
function PercentagesStackedBarChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=E12:H13');
  query.send(handlePercentagesStackedBarChartQuery);
}

function handlePercentagesStackedBarChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 100,
    legend: { position: 'top' ,
      textStyle: {
        fontSize: 12
      },
      maxLines: 3
    },
    hAxis:{slantedText: true,
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 12
        }
      },
    bar: {groupWidth: "95%"},
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {isHtml: true},
      colors: ['#FEB019', '#008FFB', '#D7263D'  ],
      chartArea: {'width': '80%','height': '80%', top: 20, left: 60, right: 50},
      annotations: {
        textStyle: {
          fontSize: 14,
        }
      },


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
          role: "annotation" },
          3,
          { calc: "stringify",
          sourceColumn: 3,
          type: "string",
          role: "annotation" }
      ]);
      
      var chart = new google.visualization.BarChart(document.getElementById('percentages-live-stacked-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//UK fatality bar chart
function FatalityBarChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=E16:G17');
  query.send(handleFatalityBarChartQuery);
}

function handleFatalityBarChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 100,
    legend: { position: 'top' ,
      textStyle: {
        fontSize: 14
      }
    },
    hAxis:{slantedText: true,
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 12
        }
      },
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {isHtml: true},
      colors: ['#D7263D', '#26d7c0'  ],
      chartArea: {'width': '80%','height': '80%', top: 20, left: 60, right: 30},
      annotations: {
        textStyle: {
          fontSize: 14,
        }
      },
      isStacked: 'true',
        hAxis: {
          minValue: 0,
        }

  };

  function resize() {
      var data = response.getDataTable();
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" }, 2
       
      ]);
      
      var chart = new google.visualization.BarChart(document.getElementById('fatality-live-bar-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//Cases and deaths area chart
function CasesDeathsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J1:K1000,M1:M1000');
  query.send(handleCasesDeathsChartQuery);
}

function handleCasesDeathsChartQuery(response) {
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
        position: 'bottom'
    },
      hAxis:{slantedText: true,
          minorGridlines:{count:1},
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
          0: { color: '#008FFB', areaOpacity: 0.1 },
          1: { color: '#00E396', areaOpacity: 0.2, pointShape: 'triangle' }
        },
        tooltip: {isHtml: true},
        pointsVisible: true,
      chartArea: {'width': '90%','height': '70%', left: 50, top: 15, right: 10},
    };
    

  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('cases-deaths-recovered-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Daily deaths bar chart
function DailyDeathsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J40:J1000,P40:P1000');
  query.send(handleDailyDeathsChartQuery);
}

function handleDailyDeathsChartQuery(response) {
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
          minorGridlines:{count:4},
          textStyle: {
            fontSize: 12
          },
          
        },
      vAxis:{
          minorGridlines:{count:1},
          textStyle: {
            fontSize: 12
          },
          minSpacing: 40
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
      chartArea: {'width': '80%','height': '90%', left: 40, right: 40,bottom: 38, top: 0},
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
      var chart = new google.visualization.BarChart(document.getElementById('daily-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Tests area chart
function TestsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J1:J1000,R1:T1000');
  query.send(handleTestsChartQuery);
}

function handleTestsChartQuery(response) {
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
          minorGridlines:{count:1},
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
        seriesType: 'area',
        series: {
          0: { color: '#fbea00'},
          1: {type: 'bars', color: '#A54DFF'}
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '90%','height': '70%', left: 60, top: 20, right: 10},
    };
    

  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('tests-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//UK Cases & Deaths Google Table
function CasesAndDeathsTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A4:C9');
      query.send(handleCasesAndDeathsTableResponse);
}

function handleCasesAndDeathsTableResponse(response) {
  if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
  }

  var options = {'showRowNumber': false};

  var data = response.getDataTable();
  var table = new google.visualization.Table(document.getElementById('cases-and-deaths-table'));
  table.draw(data, options);
}


//All UK cases table with search
function UKLocalCasesTable() {
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=AllLowerAuthorities&range=A1:b382,D1:D382');


  // Send the query with a callback function.
  query.send(drawUKLocalCasesTableDashboard);
}

function drawUKLocalCasesTableDashboard(response) {

    //Load query data
    var data = response.getDataTable();

    //create the search bar
    var searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_uk_all_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    var showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'uk_all_table_div'
    });

    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_uk_all_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}

//UK Deaths Comparison Line Chart
function UKDeathsLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J1:J1000,AF1:AP1000');
  query.send(handleUKDeathsLineChartQuery);
}

function handleUKDeathsLineChartQuery(response) {
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
        0: {color: '#E8250C', lineWidth: 4},
        1:  {color: '#E8250C', lineWidth: 2, lineDashStyle: [1,1]},
        2: {color: '#A300D6', lineWidth: 2},
        3: {color: '#2b908f', lineWidth: 2},
        4: {color: '#3f51b5', lineWidth: 2},
        5: {color: '#F86624', lineWidth: 2},
        6: {color: '#4ecdc4', lineDashStyle: [10, 2]},
        7: {color: '#c7f464', lineDashStyle: [10, 2]},
        8: {color: '#81D4FA', lineDashStyle: [10, 2]},
        9: {color: '#FFEB66', lineDashStyle: [10, 2]},
        10: {color: '#F20DFF', lineDashStyle: [10, 2]},

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
      chartArea: {'width': '90%','height': '70%', left: 45, top: 70, right: 10, bottom: 45},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('uk-deaths-comparison-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

// //European Deaths Area Chart
// function EuropeDeathsAreaChart() {

//   var query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A23:F1000');
//   query.send(handleEuropeDeathsAreaChartQuery);
// }

// function handleEuropeDeathsAreaChartQuery(response) {
//   if (response.isError()) {
//     alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//     return;
//   }

//   var options = {
//       height: 480,
//       legend: { 
//         textStyle: {
//           fontSize: 14
//         },
//         maxLines: 3,
//         position: 'bottom'
//     },
//       hAxis:{slantedText: true,
//           minorGridlines:{count:0},
//           textStyle: {
//             fontSize: 14
//           }
//         },
        
//       vAxis:{
//           minorGridlines:{count:0},
//           textStyle: {
//             fontSize: 12
//           }
//         },
//         series: {
//           0: { color: '#4ecdc4', areaOpacity: 0.1 },
//           1: { color: '#c7f464', areaOpacity: 0.2 },
//           2: { color: '#81D4FA', areaOpacity: 0.3 },
//           3: { color: '#fd6a6a', areaOpacity: 0.4 },
//           4: { color: '#FFEB66', areaOpacity: 0.1 }
//         },
//         pointsVisible: true,
//         tooltip: {isHtml: true},
//       chartArea: {'width': '90%','height': '70%', left: 45, top: 35, right: 10, bottom: 100},
//     };
    


//   function resize() {
//       var data = response.getDataTable();
//       var chart = new google.visualization.LineChart(document.getElementById('europe-deaths-chart'));
//       chart.draw(data, options);
//     }
//     window.onload = resize();
//     window.onresize = resize;
// }

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
      chartArea: {'width': '90%','height': '70%', left: 50, top: 15, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('eng-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Scotland Cases & Deaths Area chart
function ScotlandCasesDeathsAreaChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Scotland&range=G1:H1000,J1:J1000');
  query.send(handleScotlandCasesDeathsAreaChartQuery);
}

function handleScotlandCasesDeathsAreaChartQuery(response) {
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
          0: { color: '#3f51b5', areaOpacity: 0.1 },
          1: { color: '#03a9f4', pointShape: 'triangle', areaOpacity: 0.3 },
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '90%','height': '70%', left: 45, top: 10, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('scotland-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales Cases & Deaths Area chart
function WalesCasesDeathsAreaChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:G1000,L1:L1000');
  query.send(handleWalesCasesDeathsAreaChartQuery);
}

function handleWalesCasesDeathsAreaChartQuery(response) {
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
          0: { color: '#F86624', areaOpacity: 0.1 },
          1: { color: '#662E9B', pointShape: 'triangle', areaOpacity: 0.3 },
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '90%','height': '70%', left: 45, top: 10, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('wales-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Northern Ireland Cases & Deaths Area chart
function NICasesDeathsAreaChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:G1000,I1:I1000');
  query.send(handleNICasesDeathsAreaChartQuery);
}

function handleNICasesDeathsAreaChartQuery(response) {
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
          0: { color: '#2b908f', areaOpacity: 0.1 },
          1: { color: '#f9a3a4', pointShape: 'triangle', areaOpacity: 0.3 },
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
      chartArea: {'width': '90%','height': '70%', left: 45, top: 10, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.AreaChart(document.getElementById('NI-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//World bar chart
function WorldCasesDeathsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A12:C19');
  query.send(handleWorldCasesDeathsChartQuery);
}

function handleWorldCasesDeathsChartQuery(response) {
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
        minorGridlines:{count:2},
        textStyle: {
          fontSize: 12
        }
      },
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 14
        }
      },
      colors: ['#4ecdc4', '#D7263D'],
      chartArea: {'width': '80%','height': '80%', left: 80, right: 60, bottom: 60},
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
      
      var chart = new google.visualization.BarChart(document.getElementById('world-cases-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//World update time
function WorldUpdateTimeTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A20:B20');
  query.send(handleWorldUpdateTimeTableQuery);
}

function handleWorldUpdateTimeTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('world-update-time-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

function UKTotalByAgeGenderColumn() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=S11:S18,U11:V18');
    query.send(handleUKTotalByAgeGenderColumnQuery);
}
  
function handleUKTotalByAgeGenderColumnQuery(response) {
if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
}

var options = {
    height: 300,
    legend: { position: 'top' ,
    maxLines: 2,
    textStyle: {
        fontSize: 12
    }
    },
    hAxis:{slantedText: true,
        textStyle: {
        fontSize: 12
        },
    },
    vAxis:{
        textStyle: {
        fontSize: 14
        }
    },
    tooltip: {isHtml: true},
    series: {
        0: { color: '#33b2df' },
        1: {color: '#d4526e'}
    },
    chartArea: {'width': '80%','height': '80%', left: 60, right: 50, top: 30, bottom: 30},
    annotations: {
        textStyle: {
        fontSize: 14,
        }
    },
    bar: {groupWidth: "100%"}
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
    
    var chart = new google.visualization.BarChart(document.getElementById('ONS-UK-age-gender-live-column-chart'));
    chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}