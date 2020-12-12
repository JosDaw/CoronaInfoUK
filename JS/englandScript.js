google.charts.load('current', {packages: ['corechart', 'table', 'line', 'controls']});
google.charts.setOnLoadCallback(EnglandCasesLineChart);
// google.charts.setOnLoadCallback(EnglandDeathsLineChart);
google.charts.setOnLoadCallback(EnglandDailyDeathsChart);
google.charts.setOnLoadCallback(EnglandRegionalCasesLineChart); //Load England Line Chart
google.charts.setOnLoadCallback(EnglandRegionalCasesDeathsChart); //Load England bar chart
google.charts.setOnLoadCallback(EnglandTestsChart); //Load tests chart
google.charts.setOnLoadCallback(eastEngCasesLineChart); //Load EE line chart
google.charts.setOnLoadCallback(LondonCasesLineChart); //Load london line chart
google.charts.setOnLoadCallback(MidlandsCasesLineChart); //Load Midlands  line chart
google.charts.setOnLoadCallback(NorthEastCasesLineChart); //Load NE line chart
google.charts.setOnLoadCallback(NorthWestCasesLineChart); //Load NW line chart
google.charts.setOnLoadCallback(SouthEastCasesLineChart); //Load SE line chart
google.charts.setOnLoadCallback(southWestCasesLineChart); //Load SW line chart

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//England cases live table
function EnglandCasesLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = numberWithCommas(objectsArray['data'][0].newCasesBySpecimenDate);
        let cumCases = numberWithCommas(objectsArray['data'][0].cumCasesBySpecimenDate);
        document.getElementById(`eng-live-cases`).innerHTML = 'Cases: <br />' + cumCases;
        document.getElementById(`new-eng-Cases`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`eng-live-cases`).innerHTML = 'Cases currently available';
      }
  });
  
  xhr.send(null);
}
EnglandCasesLiveTable();

function EnglandDeathsLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = numberWithCommas(objectsArray['data'][0].newDeaths28DaysByDeathDate);
        let cumCases = numberWithCommas(objectsArray['data'][0].cumDeaths28DaysByDeathDate);
        document.getElementById(`eng-live-deaths`).innerHTML = 'Deaths: <br />' + cumCases;
        document.getElementById(`new-eng-deaths`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`eng-live-deaths`).innerHTML = 'Deaths currently available';
      }
  });
  
  xhr.send(null);
}
EnglandDeathsLiveTable();

function EnglandTestsLive(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = numberWithCommas(objectsArray['data'][0].newTestsByPublishDate);
        let cumCases = numberWithCommas(objectsArray['data'][0].cumTestsByPublishDate);
        document.getElementById(`eng-tests`).innerHTML = 'Tests: <br />' + cumCases;
        document.getElementById(`new-eng-tests`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`eng-tests`).innerHTML = 'Tests currently available';
      }
  });
  
  xhr.send(null);
}
EnglandTestsLive();


//England Cases & Daily combo chart
function EnglandCasesLineChart() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {

        const objectsArray = JSON.parse(e.target.responseText);
        const cases = objectsArray['data'].reverse();

        let arrData = [['Date', 'Daily Cases', 'Total Cases']];
        
        for (let i = 0; i < cases.length; i++) {
          if(cases[i].cumCasesBySpecimenDate !== null){
            arrData.push([cases[i]['date'],cases[i]['newCasesBySpecimenDate'],cases[i]['cumCasesBySpecimenDate'] ]);
          }
        }
  
        let options = {
          height: 450,
          legend: { position: 'bottom'},
          series: {
            0: {targetAxisIndex: 1, type: 'bars', color: '#f9ce1d'},
            1: {targetAxisIndex: 0, type: 'line', color: '#A300D6' }
          },
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
        let chart = new google.visualization.LineChart(document.getElementById('england-cases-chart'));
        chart.draw(figures, options);
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`england-cases-chart`).innerHTML = 'Cases currently unavailable';
      }
  });
  
  xhr.send(null);

}

//England Deaths & Daily combo chart
function EnglandDeathsLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json",
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
          0: {targetAxisIndex: 1, type: 'bars', color: '#f9ce1d'},
          1: {targetAxisIndex: 0, type: 'line', color: '#D7263D' }
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
        
      let figures = google.visualization.arrayToDataTable(arrData)
      let chart = new google.visualization.LineChart(document.getElementById('england-deaths-chart'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

//England Daily Deaths
function EnglandDailyDeathsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,I1:J1000');
  query.send(handleEnglandDailyDeathsChartQuery);
}

function handleEnglandDailyDeathsChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
    height: 450,
    legend: { 
      textStyle: {
        fontSize: 14
      },
      position: 'bottom'
    },
    series: {
      0: {targetAxisIndex: 0, type: 'line', color: '#D7263D'},
      1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
    },
    vAxes: {
      0: {title: 'Total Deaths'},
      1: {title: 'Daily Deaths'}
    },
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
    tooltip: {isHtml: true},
    pointsVisible: false,
    annotations: {
      textStyle: {
        fontSize: 12,
      },
    },
    chartArea: {'height': '70%',top: 10, left: 55, right: 55},
  };
    

  function resize() {
    let data = response.getDataTable();
    let chart = new google.visualization.ComboChart(document.getElementById('England-daily-deaths-chart'));
    chart.draw(data, google.charts.Line.convertOptions(options));
  
    }
    window.onload = resize();
    window.onresize = resize;
}

function EnglandTestsChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22%7D&format=json",
    dataType: "json",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      let arrData = [['Date', 'Daily Tests', 'Total Tests']];    // Define an array and assign columns for the chart.

      // Loop through each data and populate the array.
      $.each(data['data'].reverse(), function (index, value) {
        if(value.cumTestsByPublishDate !== null){
          arrData.push([value.date, value.newTestsByPublishDate, value.cumTestsByPublishDate]);
        }
      });

      let options = {
        height: 450,
        legend: { position: 'bottom'},
        series: {
          0: {targetAxisIndex: 1, type: 'bars', color: '#f9ce1d'},
          1: {targetAxisIndex: 0, type: 'line', color: '#D7263D' }
        },
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
          }
        },
        vAxes: {
          0: {title: 'Total Tests'},
          1: {title: 'Daily Tests'}
        },
        pointsVisible: false, 
        tooltip: {isHtml: true},	
        chartArea:  {'height': '70%',top: 10, left: 55, right: 55},
      };
        
      let figures = google.visualization.arrayToDataTable(arrData)
      let chart = new google.visualization.LineChart(document.getElementById('eng-tests-chart'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}


function EnglandRegionalCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,N1:N1000,R1:R1000,V1:V1000,Z1:Z1000,AD1:AD1000,AH1:AH1000,AL1:AL1000,AP1:AP1000,AT1:AT1000');
  query.send(handleEnglandRegionalCasesLineQuery);
}

function handleEnglandRegionalCasesLineQuery(response) {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%', left: 45, top: 60, right: 10, bottom: 55},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('England-regional-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//England Regional cases & deaths bar chart
function EnglandRegionalCasesDeathsChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=A25:C34');
  query.send(handleEnglandRegionalCasesDeathsChartQuery);
}

function handleEnglandRegionalCasesDeathsChartQuery(response) {
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
      
      let chart = new google.visualization.BarChart(document.getElementById('eng-reg-cases-deaths-chart'));
      chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//East Eng cases line chart
function eastEngCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,R1:R1000,T1:T1000');
  query.send(handleeastEngCasesLineChartQuery);
}

function handleeastEngCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('east-eng-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//London cases line chart
function LondonCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,V1:V1000,X1:X1000');
  query.send(handleLondonCasesLineChartQuery);
}

function handleLondonCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('london-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//Midlands cases line chart
function MidlandsCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,N1:N1000,P1:P1000,AP1:AP1000,AR1:AR1000');
  query.send(handleMidlandsCasesLineChartQuery);
}

function handleMidlandsCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('Midlands-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//NE cases line chart
function NorthEastCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,Z1:Z1000,AB1:AB1000,AT1:AT1000,AV1:AV1000');
  query.send(handleNorthEastCasesLineChartQuery);
}

function handleNorthEastCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('north-east-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}




//NW cases line chart
function NorthWestCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AD1:AD1000,AF1:AF1000');
  query.send(handleNorthWestCasesLineChartQuery);
}

function handleNorthWestCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('north-west-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}



//SE local cases line chart
function SouthEastCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AH1:AH1000,AJ1:AJ1000');
  query.send(handleSouthEastCasesLineChartQuery);
}

function handleSouthEastCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('south-east-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}


//SW local cases line chart
function southWestCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=F1:F1000,AL1:AL1000,AN1:AN1000');
  query.send(handlesouthWestCasesLineChartQuery);
}

function handlesouthWestCasesLineChartQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
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
        pointsVisible: false,
        tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%',top: 15, left: 40, right: 10},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('south-west-line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

