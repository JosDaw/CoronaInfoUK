//Commas to number function
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Request for UK cases
function UKCasesLive(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = numberWithCommas(objectsArray['data'][0].newCasesBySpecimenDate);
        let cumCases = numberWithCommas(objectsArray['data'][0].cumCasesBySpecimenDate);
        document.getElementById(`UK-cases`).innerHTML = 'Cases: <br />' + cumCases;
        document.getElementById(`new-UK-Cases`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`UK-cases`).innerHTML = 'Cases currently available';
      }
  });
  
  xhr.send(null);
}
UKCasesLive();

//Request UK deaths
function UKDeathsLive(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newDeaths = numberWithCommas(objectsArray['data'][0].newDeaths28DaysByDeathDate);
        let cumDeaths = numberWithCommas(objectsArray['data'][0].cumDeaths28DaysByDeathDate);
        document.getElementById(`UK-deaths`).innerHTML = 'Deaths: <br />' + cumDeaths;
        document.getElementById(`new-UK-deaths`).innerHTML = 'New: ' + newDeaths;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`UK-deaths`).innerHTML = 'Deaths currently unavailable';
      }
  });
  
  xhr.send(null);
}
UKDeathsLive();

//UKTests
function UKTestsLive(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview;areaName=United%2520Kingdom&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newTests = numberWithCommas(objectsArray['data'][0].newTestsByPublishDate);
        let cumTests = numberWithCommas(objectsArray['data'][0].cumTestsByPublishDate);
        document.getElementById(`UK-tests`).innerHTML = 'Tests: <br />' + cumTests;
        document.getElementById(`new-UK-tests`).innerHTML = 'New: ' + newTests;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`UK-tests`).innerHTML = 'Tests currently unavailable';
      }
  });
  
  xhr.send(null);
}
UKTestsLive();

//Load Google Charts
google.charts.load('current', {'packages':['corechart', 'controls', 'table', 'line']});

google.charts.setOnLoadCallback(PercentagesStackedBarChart); //stacked percentages
google.charts.setOnLoadCallback(FatalityBarChart); 
google.charts.setOnLoadCallback(DailyDeathsChart); //Load daily deaths increases chart
google.charts.setOnLoadCallback(UKTotalByAgeGenderColumn); //Load ONS deaths by age & gender
google.charts.setOnLoadCallback(CasesAndDeathsTable); //Load Cases & Deaths Google Table 
google.charts.setOnLoadCallback(TestsChart); //Load tests chart
google.charts.setOnLoadCallback(UKLocalCasesTable);  //Load all UK cases table
google.charts.setOnLoadCallback(UKDeathsComparisonLineChart); //Load uk deaths line chart
google.charts.setOnLoadCallback(EnglandCasesDeathsAreaChart);  //Load England cases & deaths chart
google.charts.setOnLoadCallback(ScotlandCasesDeathsAreaChart); //Load Scotland cases & deaths chart
google.charts.setOnLoadCallback(WalesCasesDeathsAreaChart); //Load Wales cases & deaths
google.charts.setOnLoadCallback(NICasesDeathsAreaChart); //Load NI cases & deaths
google.charts.setOnLoadCallback(WorldCasesDeathsChart);//Load world chart
google.charts.setOnLoadCallback(UKCasesLineChart);
google.charts.setOnLoadCallback(UKDeathsLineChart);

//UK Percentages Bar chart
function PercentagesStackedBarChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=E12:G13');
  query.send(handlePercentagesStackedBarChartQuery);
}

function handlePercentagesStackedBarChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
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
      ]);
      
      let chart = new google.visualization.BarChart(document.getElementById('percentages-live-stacked-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//UK fatality bar chart
function FatalityBarChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=E16:G17');
      console.log(query)
  query.send(handleFatalityBarChartQuery);
}

function handleFatalityBarChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" }, 2
       
      ]);
      
      let chart = new google.visualization.BarChart(document.getElementById('fatality-live-bar-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Cases & Daily combo chart
function UKCasesLineChart() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        
        const objectsArray = JSON.parse(e.target.responseText);
        const latestDate = objectsArray['data'][0].date;
        document.getElementById(`uk-cases-update-date`).innerHTML = 'Latest Update: ' + latestDate;

        const cases = objectsArray['data'].reverse();

        let arrData = [['Date', 'Daily Cases', 'Total Cases']];    // Define an array and assign columns for the chart.

        for (let i = 0; i < cases.length; i++) {
          if(cases[i].cumCasesBySpecimenDate !== null){
            arrData.push([cases[i]['date'],cases[i]['newCasesBySpecimenDate'],cases[i]['cumCasesBySpecimenDate'] ]);
          }
        }

        const options = {
          height: 450,
          legend: { position: 'bottom'},
          series: {
            0: {targetAxisIndex: 1, type: 'bars', color: '#008FFB'},
            1: {targetAxisIndex: 0, type: 'line', color: '#00E396'}
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
          chartArea:  {'height': '70%',top: 10, left: 65, right: 55},
        };
          
        const figures = google.visualization.arrayToDataTable(arrData)
        const chart = new google.visualization.LineChart(document.getElementById('UK-cases-chart'));
        chart.draw(figures, options);
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`UK-cases-chart`).innerHTML = 'Cases currently unavailable';
      }
  });
  
  xhr.send(null);

}

//Deaths & Daily combo chart
function UKDeathsLineChart() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200 && e.target.responseText.length > 1) {
        
        const objectsArray = JSON.parse(e.target.responseText);
        const cases = objectsArray['data'].reverse();

        let arrData = [['Date', 'Daily Deaths', 'Total Deaths']];

        for (let i = 0; i < cases.length; i++) {
          if(cases[i].cumDeaths28DaysByPublishDate !== null){
            arrData.push([cases[i]['date'],cases[i]['newDeaths28DaysByDeathDate'],cases[i]['cumDeaths28DaysByDeathDate'] ]);
          }
        }

        const options = {
          height: 450,
          legend: { position: 'bottom'},
          series: {
            0: {targetAxisIndex: 1, type: 'bars', color: '#D7263D', opacity: 0.5 },
            1: {targetAxisIndex: 0, type: 'line', color: '#D7263D'}
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
          chartArea:  {'height': '70%',top: 10, left: 55, right: 55},
        };
          
        const figures = google.visualization.arrayToDataTable(arrData)
        const chart = new google.visualization.LineChart(document.getElementById('UK-deaths-chart'));
        chart.draw(figures, options);
      }
      else {
        document.getElementById(`UK-deaths-chart`).innerHTML = 'Deaths chart currently unavailable';
      }
  });
  
  xhr.send(null);
}

//Daily deaths bar chart
function DailyDeathsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J40:J1000,P40:P1000');
  query.send(handleDailyDeathsChartQuery);
}

function handleDailyDeathsChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
    let data = response.getDataTable();
    let chart = new google.visualization.BarChart(document.getElementById('daily-deaths-chart'));
    chart.draw(data, options);

    }
    window.onload = resize();
    window.onresize = resize;
}

//Tests area chart
function TestsChart() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview;areaName=United%2520Kingdom&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22plannedCapacityByPublishDate%22:%22plannedCapacityByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {

        const objectsArray = JSON.parse(e.target.responseText);
        const latestDate = objectsArray['data'][0].date;
        document.getElementById(`uk-tests-update-date`).innerHTML = 'Latest Update: ' + latestDate;

        const cases = objectsArray['data'].reverse();

        let arrData = [['Date', 'Daily Tests', 'Total Tests']];  

        for (let i = 0; i < cases.length; i++) {
          if(cases[i].cumTestsByPublishDate !== null){
            arrData.push([cases[i]['date'],cases[i]['newTestsByPublishDate'],cases[i]['cumTestsByPublishDate'] ]);
          }
        }
        
        let options = {
          height: 450,
          legend: { position: 'bottom'},
          series: {
            0: {targetAxisIndex: 1, type: 'bars', color: '#fbea00'},
            1: {targetAxisIndex: 0, type: 'line', color: '#A54DFF'}
          },
          axes: {},
          hAxis:{slantedText: true,
            minorGridlines:{count:0},
            textStyle: {
              fontSize: 10
            }
          },
          vAxis:{
            format: 'short',
            minorGridlines:{count:0},
            textStyle: {
              fontSize: 12
            },
          },
          vAxes: {
            0: {title: 'Total Tests', format: 'short',},
            1: {title: 'Daily Tests',}
          },
          pointsVisible: false, 
          tooltip: {isHtml: true},	
          chartArea: {'height': '70%',top: 10, left: 55, right: 55},
        };
          
        let figures = google.visualization.arrayToDataTable(arrData)
        let chart = new google.visualization.LineChart(document.getElementById('tests-chart'));
        chart.draw(figures, options);
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`UK-cases-chart`).innerHTML = 'Cases currently unavailable';
      }
  });
  
  xhr.send(null);

}

//UK Cases & Deaths Google Table
function CasesAndDeathsTable() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A4:C9');
      query.send(handleCasesAndDeathsTableResponse);
}

function handleCasesAndDeathsTableResponse(response) {
  if (response.isError()) {
      console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
  }

  let options = {'showRowNumber': false};

  let data = response.getDataTable();
  let table = new google.visualization.Table(document.getElementById('cases-and-deaths-table'));
  table.draw(data, options);
}

//All UK cases table with search
function UKLocalCasesTable() {
  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=AllLowerAuthorities&range=A1:b382,D1:D382');


  // Send the query with a callback function.
  query.send(drawUKLocalCasesTableDashboard);
}

function drawUKLocalCasesTableDashboard(response) {

    //Load query data
    let data = response.getDataTable();

    //create the search bar
    let searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_uk_all_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    let showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'uk_all_table_div'
    });

    let dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_uk_all_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}

//UK Deaths Comparison Line Chart
function UKDeathsComparisonLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=J1:J1000,AF1:AP1000');
  query.send(handleUKDeathsLineChartQuery);
}

function handleUKDeathsLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('uk-deaths-comparison-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//England Cases & Deaths Area chart
function EnglandCasesDeathsAreaChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:G1000,K1:K1000');
  query.send(handleEnglandCasesDeathsAreaChartQuery);
}

function handleEnglandCasesDeathsAreaChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let chart = new google.visualization.AreaChart(document.getElementById('eng-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Scotland Cases & Deaths Area chart
function ScotlandCasesDeathsAreaChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Scotland&range=G1:H1000,J1:J1000');
  query.send(handleScotlandCasesDeathsAreaChartQuery);
}

function handleScotlandCasesDeathsAreaChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let chart = new google.visualization.AreaChart(document.getElementById('scotland-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales Cases & Deaths Area chart
function WalesCasesDeathsAreaChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:G1000,L1:L1000');
  query.send(handleWalesCasesDeathsAreaChartQuery);
}

function handleWalesCasesDeathsAreaChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let chart = new google.visualization.AreaChart(document.getElementById('wales-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Northern Ireland Cases & Deaths Area chart
function NICasesDeathsAreaChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=F1:G1000,I1:I1000');
  query.send(handleNICasesDeathsAreaChartQuery);
}

function handleNICasesDeathsAreaChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let chart = new google.visualization.AreaChart(document.getElementById('NI-cases-deaths-chart'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//World bar chart
function WorldCasesDeathsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=A12:C19');
  query.send(handleWorldCasesDeathsChartQuery);
}

function handleWorldCasesDeathsChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
      let data = response.getDataTable();
      let view = new google.visualization.DataView(data);
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
      
      let chart = new google.visualization.BarChart(document.getElementById('world-cases-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


function UKTotalByAgeGenderColumn() {

    let query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=S11:S18,U11:V18');
    query.send(handleUKTotalByAgeGenderColumnQuery);
}
  
function handleUKTotalByAgeGenderColumnQuery(response) {
if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
}

let options = {
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
    let data = response.getDataTable();
    let view = new google.visualization.DataView(data);
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
    
    let chart = new google.visualization.BarChart(document.getElementById('ONS-UK-age-gender-live-column-chart'));
    chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}