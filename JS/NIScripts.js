
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//Google Charts
google.charts.load('current', {packages: ['corechart','controls', 'table', 'line']});
google.charts.setOnLoadCallback(NIcasesLineChart); //NI cases line combo chart
google.charts.setOnLoadCallback(NIdeathsLineChart); //NI deaths line combo chart
google.charts.setOnLoadCallback(NITestsLineChart); //NI tests chart
google.charts.setOnLoadCallback(NIDemographicsChart); //NI demographics age chart
google.charts.setOnLoadCallback(NIDemographicsGenderChart); //NI demographics gender chart
google.charts.setOnLoadCallback(NIDeathDemographicsChart); //NI death demographics age chart
google.charts.setOnLoadCallback(NIDeathDemographicsGenderChart); //NI death demographics gender chart
google.charts.setOnLoadCallback(NILocalTable); //All local cases and search
google.charts.setOnLoadCallback(antrimLineChart); //Load antrim
google.charts.setOnLoadCallback(armaghLineChart); //Load armagh
google.charts.setOnLoadCallback(belfastLineChart); //Load belfast
google.charts.setOnLoadCallback(causewayLineChart); //Load causeway
google.charts.setOnLoadCallback(fermanaghLineChart); //load fermanagh
google.charts.setOnLoadCallback(midantrimLineChart); //load mid antrim
google.charts.setOnLoadCallback(NILocalCasesLineChart); //local cases line chart

//Load NI Cases Live Update Table
function NICasesLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Northern%2520Ireland&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = objectsArray['data'][0].newCasesBySpecimenDate;
        let cumCases = numberWithCommas(objectsArray['data'][0].cumCasesBySpecimenDate);
        document.getElementById(`NI-live-cases`).innerHTML = 'Cases: <br />' + cumCases;
        document.getElementById(`new-NI-Cases`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`NI-live-cases`).innerHTML = 'Cases currently available';
      }
  });
  
  xhr.send(null);
}
NICasesLiveTable();

//Load NI Deaths Live Update Table
function NIDeathsLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Northern%2520Ireland&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = objectsArray['data'][0].newDeaths28DaysByDeathDate;
        let cumCases = numberWithCommas(objectsArray['data'][0].cumDeaths28DaysByDeathDate);
        document.getElementById(`NI-live-deaths`).innerHTML = 'Deaths: <br />' + cumCases;
        document.getElementById(`new-NI-deaths`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`NI-live-deaths`).innerHTML = 'Deaths currently available';
      }
  });
  
  xhr.send(null);
}
NIDeathsLiveTable();

function NILocalCasesLineChart() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=N1:N1000,O1:O1000,Q1:Q1000,S1:S1000,U1:U1000,W1:W1000,Y1:Y1000,AA1:AA1000,AC1:AC1000,AE1:AE1000,AG1:AG1000,AI1:AI1000');
  query.send(handleNILocalCasesLineChartQuery);
}

function handleNILocalCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
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
      var chart = new google.visualization.LineChart(document.getElementById('NI-Local-Cases'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//NI Cases & Daily Cases Combo chart
function NIcasesLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Northern%2520Ireland&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json",
    dataType: "json",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      let arrData = [['Date', 'Daily Cases', 'Total Cases']];    // Define an array and assign columns for the chart.

      // Loop through each data and populate the array.
      $.each(data['data'].reverse(), function (index, value) {
        arrData.push([value.date, value.newCasesBySpecimenDate, value.cumCasesBySpecimenDate]);
      });

      let options = {
        height: 450,
        legend: { position: 'bottom'},
        series: {
          0: {targetAxisIndex: 0, type: 'bars', color: '#DB9B2C'},
          1: {targetAxisIndex: 1, type: 'line', color: '#2b908f' }
        },
        hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 10
          }
        },
        vAxis:{
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 12
          }
        },
        vAxes: {
          0: {title: 'Total Cases'},
          1: {title: 'Daily Cases'}
        },
        pointsVisible: false, 
        tooltip: {isHtml: true},	
        chartArea:  {'height': '70%',top: 10, left: 55, right: 55},
      };
        
      let figures = google.visualization.arrayToDataTable(arrData)
      let chart = new google.visualization.LineChart(document.getElementById('NI-Cases-Daily'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

//NI Deaths & Daily Deaths Combo chart
function NIdeathsLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Northern%2520Ireland&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json",
    dataType: "json",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      let arrData = [['Date', 'Daily Deaths', 'Total Deaths']];    // Define an array and assign columns for the chart.

      // Loop through each data and populate the array.
      $.each(data['data'].reverse(), function (index, value) {
          arrData.push([value.date, value.newDeaths28DaysByDeathDate, value.cumDeaths28DaysByDeathDate]);
      });

      let options = {
        height: 450,
        legend: { position: 'bottom'},
        series: {
          0: {targetAxisIndex: 0, type: 'bars', color: '#f9a3a4'},
          1: {targetAxisIndex: 1, type: 'line', color: '#D7263D' }
        },
        hAxis:{slantedText: true,
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 10
          }
        },
        vAxis:{
          minorGridlines:{count:0},
          textStyle: {
            fontSize: 12
          }
        },
        vAxes: {
          0: {title: 'Total Deaths'},
          1: {title: 'Daily Deaths'}
        },
        pointsVisible: false, 
        tooltip: {isHtml: true},	
        chartArea:  {'height': '70%',  left: 55, right: 55, top: 10},
      };
        
      let figures = google.visualization.arrayToDataTable(arrData)
      let chart = new google.visualization.LineChart(document.getElementById('NI-Deaths-Daily'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

//NI tests chart
function NITestsLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:F1000,K1:L1000');
  query.send(handleNITestsLineChartQuery);
}

function handleNITestsLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'bottom'
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#fbea00'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#A54DFF'}
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
    vAxes: {
      0: {title: 'Total Tests'},
      1: {title: 'Daily Tested'}
    },
    pointsVisible: false, 
    tooltip: {isHtml: true},	

    chartArea:  {'height': '70%', left: 55, right: 55}
    };


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('NI-tests-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Demographics Age chart
function NIDemographicsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A27:B32');
  query.send(handleNIDemographicsChartQuery);
}

function handleNIDemographicsChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
      ]);
      
      let chart = new google.visualization.BarChart(document.getElementById('NI-demographics-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Demographics Gender chart
function NIDemographicsGenderChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=C28:D29');
  query.send(handleNIDemographicsGenderChartQuery);
}

function handleNIDemographicsGenderChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
      ]);
      
      let chart = new google.visualization.PieChart(document.getElementById('NI-demographics-gender-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Death Demographics Age chart
function NIDeathDemographicsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A36:B41');
  query.send(handleNIDeathDemographicsChartQuery);
}

function handleNIDeathDemographicsChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
      ]);
      
      let chart = new google.visualization.BarChart(document.getElementById('NI-death-demographics-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//NI Death Demographics Gender chart
function NIDeathDemographicsGenderChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=C36:D38');
  query.send(handleNIDeathDemographicsGenderChartQuery);
}

function handleNIDeathDemographicsGenderChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
      ]);
      
      let chart = new google.visualization.PieChart(document.getElementById('NI-death-demographics-gender-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//NI local table with search
function NILocalTable() {
  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=A13:D24');


  // Send the query with a callback function.
  query.send(drawNIDashboard);
}

function drawNIDashboard(response) {

    //Load query data
    let data = response.getDataTable();

    //create the search bar
    let searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_NI_local_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    let showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'NI_local_table_div'
    });

    let dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_NI_local_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}

//Antrim chart
function antrimLineChart() {

  let query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,o1:r1000');
  query.send(handleantrimQuery);
}

function handleantrimQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'top',
        maxLines: 3,
        textStyle: {
          fontSize: 14
        } 
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#008FFB'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#008FFB'},
        2: {targetAxisIndex: 0, type: 'line', color: '#00E396'},
        3: {targetAxisIndex: 1,type: 'bars', color: '#00E396'}
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily/Weekly Cases'}
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
      pointsVisible: false, 
      tooltip: {isHtml: true},	
      chartArea:  {'height': '70%', left: 55, right: 55}
    };


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('antrim-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//Armagh line chart
function armaghLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,s1:t1000,ac1:ad1000');
  query.send(handlearmaghQuery);
}

function handlearmaghQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'top',
    maxLines: 3,
      textStyle: {
        fontSize: 14
      }
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#D7263D'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#D7263D'},
      2: {targetAxisIndex: 0, type: 'line', color: '#FEB019'},
      3: {targetAxisIndex: 1,type: 'bars', color: '#FEB019'}
    },
    vAxes: {
      0: {title: 'Total Cases'},
      1: {title: 'Daily/Weekly Cases'}
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
    pointsVisible: false, 
    tooltip: {isHtml: true},	
    chartArea:  {'height': '70%', left: 55, right: 55}
  };

  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('armagh-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Belfast line chart
function belfastLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,u1:v1000');
  query.send(handlebelfastQuery);
}

function handlebelfastQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'top',
      textStyle: {
        fontSize: 14
      }
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#FEB019'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#FEB019'},
    },
    vAxes: {
      0: {title: 'Total Cases'},
      1: {title: 'Daily/Weekly Cases'}
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
    pointsVisible: false, 
    tooltip: {isHtml: true},	
    chartArea:  {'height': '70%', left: 55, right: 55}
  };

  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('belfast-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Causeway chart
function causewayLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,w1:z1000');
  query.send(handlecausewayQuery);
}

function handlecausewayQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'top',
    maxLines: 3,
      textStyle: {
        fontSize: 14
      } 
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#1c91c0'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#1c91c0'},
      2: {targetAxisIndex: 0, type: 'line', color: '#8D5B4C'},
      3: {targetAxisIndex: 1,type: 'bars', color: '#8D5B4C'}
    },
    vAxes: {
      0: {title: 'Total Cases'},
      1: {title: 'Daily/Weekly Cases'}
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
    pointsVisible: false, 
    tooltip: {isHtml: true},	
    chartArea:  {'height': '70%', left: 55, right: 55}
  };


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('causeway-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//fermanagh chart
function fermanaghLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,aa1:ab1000,Ag1:ah1000');
  query.send(handlefermanaghQuery);
}

function handlefermanaghQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'top',
    maxLines:3,
      textStyle: {
        fontSize: 14
      }
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#CC33FF'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#CC33FF'},
      2: {targetAxisIndex: 0, type: 'line', color: '#D7263D'},
      3: {targetAxisIndex: 1,type: 'bars', color: '#D7263D'}
    },
    vAxes: {
      0: {title: 'Total Cases'},
      1: {title: 'Daily/Weekly Cases'}
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
    pointsVisible: false, 
    tooltip: {isHtml: true},	
    chartArea:  {'height': '70%', left: 55, right: 55}
  };


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('fermanagh-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}



//mid antrim
function midantrimLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=n1:n1000,ae1:af1000,ai1:aj1000');
  query.send(handlemidantrimQuery);
}

function handlemidantrimQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 350,
    legend: { position: 'top',
    maxLines: 3,
      textStyle: {
        fontSize: 14
      }
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#00E396'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#00E396'},
      2: {targetAxisIndex: 0, type: 'line', color: '#FEB019'},
      3: {targetAxisIndex: 1,type: 'bars', color: '#FEB019'}
    },
    vAxes: {
      0: {title: 'Total Cases'},
      1: {title: 'Daily/Weekly Cases'}
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
    pointsVisible: false, 
    tooltip: {isHtml: true},	
    chartArea:  {'height': '70%', left: 55, right: 55}
  };


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.ComboChart(document.getElementById('midantrim-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}
