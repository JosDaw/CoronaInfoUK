google.charts.load('current', {packages: ['corechart','controls', 'table', 'line']});
google.charts.setOnLoadCallback(NICasesLiveTable); //Load NI Cases Live Update Table
google.charts.setOnLoadCallback(NIDeathsLiveTable); //Load NI deaths Live Update Table
google.charts.setOnLoadCallback(NIUpdateTimeTable); //Load update time
// google.charts.setOnLoadCallback(PercentagesStackedBarChart); //stacked percentages

google.charts.setOnLoadCallback(NILocalCasesLineChart); //local cases line chart

google.charts.setOnLoadCallback(NIcasesLineChart); //NI cases area chart
google.charts.setOnLoadCallback(NIdeathsLineChart); //NI deaths area chart

google.setOnLoadCallback(NITestsLineChart); //NI tests chart
google.setOnLoadCallback(NIDemographicsChart); //NI demographics age chart
google.setOnLoadCallback(NIDemographicsGenderChart); //NI demographics gender chart

google.setOnLoadCallback(NIDeathDemographicsChart); //NI death demographics age chart
google.setOnLoadCallback(NIDeathDemographicsGenderChart); //NI death demographics gender chart

google.setOnLoadCallback(NILocalTable); //All local cases and search

google.setOnLoadCallback(antrimLineChart); //Load antrim
google.setOnLoadCallback(armaghLineChart); //Load armagh
google.setOnLoadCallback(belfastLineChart); //Load belfast
google.setOnLoadCallback(causewayLineChart); //Load causeway
google.setOnLoadCallback(fermanaghLineChart); //load fermanagh
google.setOnLoadCallback(midantrimLineChart); //load mid antrim

//Load NI Cases Live Update Table
function NICasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A3:B4');
  query.send(handleNICasesLiveTableQuery);
}

function handleNICasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('NI-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

function NIDeathsLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A5:B6');
  query.send(handleNIDeathsLiveTableQuery);
}

function handleNIDeathsLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('NI-deaths-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI update time
function NIUpdateTimeTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A7:B7');
  query.send(handleNIUpdateTimeTableQuery);
}

function handleNIUpdateTimeTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('NI-update-time-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//NI percentage

// function PercentagesStackedBarChart() {

//   var query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A10:C11');
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
      
//       var chart = new google.visualization.BarChart(document.getElementById('NI-percentages-live-stacked-chart'));
//       chart.draw(view, options);
//     }
//     window.onload = resize();
//     window.onresize = resize;
// }

//Local cases line chart
function NILocalCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=N1:N1000,O1:O1000,Q1:Q1000,S1:S1000,U1:U1000,W1:W1000,Y1:Y1000,AA1:AA1000,AC1:AC1000,AE1:AE1000,AG1:AG1000,AI1:AI1000');
  query.send(handleNILocalCasesLineChartQuery);
}

function handleNILocalCasesLineChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 480,
      legend: {
        textStyle: {
          fontSize: 12
        },
        maxLines: 8,
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
          0: {  },
          1: { pointShape: 'triangle' },
          2: { pointShape: 'square'  },
          3: {  pointShape: 'diamond'  },
          4: {  pointShape: 'star' },
          5: {  pointShape: 'polygon' },
          6: {},
          7: { pointShape: 'triangle' },
          8: { pointShape: 'square'  },
          9: {  pointShape: 'diamond'  },
          10: {  pointShape: 'star' }
        },
        pointsVisible: true, tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%', left: 45, top: 60, right: 10, bottom: 55},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.LineChart(document.getElementById('NI-local-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI cases line chart
function NIcasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:H1000');
  query.send(handleNICasesQuery);
}

function handleNICasesQuery(response) {
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
          0: { color: '#2b908f' },
          1: {type: 'bars', color: '#2b908f'}
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
        pointsVisible: true, tooltip: {isHtml: true},	
      chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 10},
    };
    


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('NI-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI deaths line chart
function NIdeathsLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:F1000,I1:J1000');
  query.send(handleNIDeathsQuery);
}

function handleNIDeathsQuery(response) {
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
          0: { color: '#f9a3a4' },
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
      var chart = new google.visualization.ComboChart(document.getElementById('NI-deaths-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI tests chart
function NITestsLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:F1000,K1:L1000');
  query.send(handleNITestsLineChartQuery);
}

function handleNITestsLineChartQuery(response) {
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

        chartArea:  {'width': '80%','height': '70%', left: 55, top: 20, right: 10, bottom: 55}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('NI-tests-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Demographics Age chart
function NIDemographicsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A27:B32');
  query.send(handleNIDemographicsChartQuery);
}

function handleNIDemographicsChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 200,
    legend: { position: 'bottom' ,
      textStyle: {
        fontSize: 12
      }
    },
    tooltip: {isHtml: true},
    hAxis:{slantedText: true,
        minorGridlines:{count:2},
        textStyle: {
          fontSize: 12
        }
      },
    
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 12
        }
      },
      colors: ['#2b908f'],
      chartArea: {'width': '80%','height': '80%', left: 40, bottom: 20},
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
      ]);
      
      var chart = new google.visualization.BarChart(document.getElementById('NI-demographics-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Demographics Gender chart
function NIDemographicsGenderChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=C28:D29');
  query.send(handleNIDemographicsGenderChartQuery);
}

function handleNIDemographicsGenderChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 200,
    legend: { position: 'bottom' ,
      textStyle: {
        fontSize: 14
      }
    },
    tooltip: {isHtml: true},
    colors: ['#2b908f', '#f9a3a4'],
    pieHole: 0.4,
    chartArea: {'width': '100%', 'height': '100%', top: 10, bottom: 20},
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
      ]);
      
      var chart = new google.visualization.PieChart(document.getElementById('NI-demographics-gender-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Death Demographics Age chart
function NIDeathDemographicsChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A36:B41');
  query.send(handleNIDeathDemographicsChartQuery);
}

function handleNIDeathDemographicsChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 200,
    legend: { position: 'bottom' ,
      textStyle: {
        fontSize: 12
      }
    },
    tooltip: {isHtml: true},
    hAxis:{slantedText: true,
        minorGridlines:{count:2},
        textStyle: {
          fontSize: 12
        }
      },
    
    vAxis:{
        minorGridlines:{count:0},
        textStyle: {
          fontSize: 12
        }
      },
      colors: ['#D7263D'],
      chartArea: {'width': '80%','height': '80%', left: 40, bottom: 20},
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
      ]);
      
      var chart = new google.visualization.BarChart(document.getElementById('NI-death-demographics-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Death Demographics Gender chart
function NIDeathDemographicsGenderChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=C36:D38');
  query.send(handleNIDeathDemographicsGenderChartQuery);
}

function handleNIDeathDemographicsGenderChartQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    height: 200,
    legend: { position: 'bottom' ,
      textStyle: {
        fontSize: 14
      }
    },
    tooltip: {isHtml: true},
    colors: ['#2b908f', '#f9a3a4'],
    pieHole: 0.4,
    chartArea: {'width': '100%', 'height': '100%', bottom: 20},
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
      ]);
      
      var chart = new google.visualization.PieChart(document.getElementById('NI-death-demographics-gender-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//NI local table with search
function NILocalTable() {
  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A13:D24');


  // Send the query with a callback function.
  query.send(drawNIDashboard);
}

function drawNIDashboard(response) {

    //Load query data
    var data = response.getDataTable();

    //create the search bar
    var searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_NI_local_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    var showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'NI_local_table_div'
    });

    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_NI_local_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}

//Antrim chart
function antrimLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,o1:r1000');
  query.send(handleantrimQuery);
}

function handleantrimQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
      maxLines: 3,
      textStyle: {
        fontSize: 14
      } },
      seriesType: 'line',
      series: {
        0: { color: '#008FFB' },
        1: {type: 'bars', color: '#008FFB'},
        2: {color: '#00E396', pointShape: 'triangle' },
        3: {type: 'bars', color: '#00E396'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('antrim-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//Armagh line chart
function armaghLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,s1:t1000,ac1:ad1000');
  query.send(handlearmaghQuery);
}

function handlearmaghQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
      maxLines: 3,
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#D7263D', pointShape: 'square'  },
          1: {type: 'bars', color: '#D7263D'},
          2: { color: '#FEB019', pointShape: 'diamond' },
          3: {type: 'bars', color: '#FEB019'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('armagh-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Belfast line chart
function belfastLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,u1:v1000');
  query.send(handlebelfastQuery);
}

function handlebelfastQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#FEB019', pointShape: 'diamond' },
          1: {type: 'bars', color: '#2b908f'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('belfast-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Causeway chart
function causewayLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,w1:z1000');
  query.send(handlecausewayQuery);
}

function handlecausewayQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
      maxLines: 3,
        textStyle: {
          fontSize: 14
        } 
      },
      seriesType: 'line',
      series: {
          0: { color: '#1c91c0', pointShape: 'star' },
          1: {type: 'bars', color: '#1c91c0'},
          2: { color: '#8D5B4C', pointShape: 'polygon' },
          3: {type: 'bars', color: '#8D5B4C'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('causeway-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//fermanagh chart
function fermanaghLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,aa1:ab1000,Ag1:ah1000');
  query.send(handlefermanaghQuery);
}

function handlefermanaghQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
      maxLines:3,
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#CC33FF' },
          1: {type: 'bars', color: '#CC33FF'},
          2: { color: '#D7263D', pointShape: 'square'  },
          3: {type: 'bars', color: '#D7263D'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('fermanagh-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}



//mid antrim
function midantrimLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,ae1:af1000,ai1:aj1000');
  query.send(handlemidantrimQuery);
}

function handlemidantrimQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
      height: 350,
      legend: { position: 'top',
      maxLines: 3,
        textStyle: {
          fontSize: 14
        }
      },
      seriesType: 'line',
      series: {
          0: { color: '#00E396', pointShape: 'triangle' },
          1: {type: 'bars', color: '#00E396'},
          2: { color: '#FEB019', pointShape: 'diamond' },
          3: {type: 'bars', color: '#FEB019'}
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
        chartArea:  {'width': '80%','height': '70%', left: 40, right: 10, top: 40}
    };


  function resize() {
      var data = response.getDataTable();
      var chart = new google.visualization.ComboChart(document.getElementById('midantrim-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}



