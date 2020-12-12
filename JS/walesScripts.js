google.charts.load('current', {packages: ['corechart','controls', 'table', 'line']});
google.charts.setOnLoadCallback(walesRegionalCasesLineChart);
google.charts.setOnLoadCallback(walescasesLineChart);
google.charts.setOnLoadCallback(walesdeathsLineChart);
google.charts.setOnLoadCallback(walesTestsLineChart);
google.charts.setOnLoadCallback(walesRegionalTable);
google.charts.setOnLoadCallback(aneurinLineChart);
google.charts.setOnLoadCallback(betsiLineChart);
google.charts.setOnLoadCallback(cardiffLineChart);
google.charts.setOnLoadCallback(cwmLineChart);
google.charts.setOnLoadCallback(hywelLineChart);
google.charts.setOnLoadCallback(powysLineChart);
google.charts.setOnLoadCallback(swanseaLineChart);
  

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Wales Cases Live Update Table
function walesCasesLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Wales&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = numberWithCommas(objectsArray['data'][0].newCasesBySpecimenDate);
        let cumCases = numberWithCommas(objectsArray['data'][0].cumCasesBySpecimenDate);
        document.getElementById(`wales-live-cases`).innerHTML = 'Cases: <br />' + cumCases;
        document.getElementById(`new-wales-Cases`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`wales-live-cases`).innerHTML = 'Cases currently available';
      }
  });
  
  xhr.send(null);
}
walesCasesLiveTable();

//Wales deaths increase live table
function walesDeathsLiveTable(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Wales&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json');
  xhr.addEventListener('readystatechange', function(e) {
      if (e.target.readyState === 4 && e.target.status === 200) {
        let objectsArray = JSON.parse(e.target.responseText);
        
        let newCases = objectsArray['data'][0].newDeaths28DaysByDeathDate;
        let cumCases = numberWithCommas(objectsArray['data'][0].cumDeaths28DaysByDeathDate);
        document.getElementById(`wales-live-deaths`).innerHTML = 'Deaths: <br />' + cumCases;
        document.getElementById(`new-wales-deaths`).innerHTML = 'New: ' + newCases;
      }
      else if(e.target.readyState === 4 && e.target.status != 200) {
        document.getElementById(`wales-live-deaths`).innerHTML = 'Deaths currently available';
      }
  });
  
  xhr.send(null);
}
walesDeathsLiveTable();

//Wales regional cases line chart
function walesRegionalCasesLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:F1000,R1:R1000,T1:T1000,V1:V1000,X1:X1000,Z1:Z1000,AB1:AB1000,AD1:AD1000');
  query.send(handlewalesRegionalCasesLineQuery);
}

function handlewalesRegionalCasesLineQuery(response) {
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
        pointsVisible: false, tooltip: {isHtml: true},
      chartArea: {'width': '100%','height': '70%', left: 45, top: 90, right: 10, bottom: 55},
    };
    


  function resize() {
      let data = response.getDataTable();
      let chart = new google.visualization.LineChart(document.getElementById('wales-regional-cases-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Wales cases combo chart
function walescasesLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Wales&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newCasesBySpecimenDate%22:%22newCasesBySpecimenDate%22,%22cumCasesBySpecimenDate%22:%22cumCasesBySpecimenDate%22%7D&format=json",
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
          0: {targetAxisIndex: 0, type: 'bars', color: '#F86624'},
          1: {targetAxisIndex: 1, type: 'line', color: '#662E9B' }
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
      let chart = new google.visualization.LineChart(document.getElementById('wales-cases-chart'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

//Wales deaths line chart
function walesdeathsLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Wales&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newDeaths28DaysByDeathDate%22:%22newDeaths28DaysByDeathDate%22,%22cumDeaths28DaysByDeathDate%22:%22cumDeaths28DaysByDeathDate%22%7D&format=json",
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
          0: {targetAxisIndex: 0, type: 'bars', color: '#662E9B'},
          1: {targetAxisIndex: 1, type: 'line', color: '#F86624' }
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
      let chart = new google.visualization.LineChart(document.getElementById('wales-deaths-chart'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

//Wales tests chart
function walesTestsLineChart() {
  $.ajax({
    url: "https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=Wales&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newPillarOneTestsByPublishDate%22:%22newPillarOneTestsByPublishDate%22,%22newPillarTwoTestsByPublishDate%22:%22newPillarTwoTestsByPublishDate%22,%22newPillarThreeTestsByPublishDate%22:%22newPillarThreeTestsByPublishDate%22,%22newPillarFourTestsByPublishDate%22:%22newPillarFourTestsByPublishDate%22,%22newTestsByPublishDate%22:%22newTestsByPublishDate%22,%22cumPillarOneTestsByPublishDate%22:%22cumPillarOneTestsByPublishDate%22,%22cumPillarTwoTestsByPublishDate%22:%22cumPillarTwoTestsByPublishDate%22,%22cumPillarThreeTestsByPublishDate%22:%22cumPillarThreeTestsByPublishDate%22,%22cumPillarFourTestsByPublishDate%22:%22cumPillarFourTestsByPublishDate%22,%22cumTestsByPublishDate%22:%22cumTestsByPublishDate%22%7D&format=json",
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
          0: {targetAxisIndex: 1, type: 'bars', color: '#fbea00'},
          1: {targetAxisIndex: 0, type: 'line', color: '#A54DFF'},
        },
        vAxes: {
          0: {title: 'Total Tested'},
          1: {title: 'Daily Tested'}
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
        pointsVisible: false, 
        tooltip: {isHtml: true},	
        chartArea:  {'height': '70%',  left: 55, right: 55, top: 10},
      };
        
      let figures = google.visualization.arrayToDataTable(arrData)
      let chart = new google.visualization.LineChart(document.getElementById('wales-tests-chart'));
      chart.draw(figures, options);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log('Got an Error');
    }
  });
}

// function walesTestsLineChart() {

//   let query = new google.visualization.Query(
//       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=F1:F1000,O1:P1000');
//   query.send(handleWalesTestsLineChartQuery);
// }

// function handleWalesTestsLineChartQuery(response) {
//   if (response.isError()) {
//     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
//     return;
//   }

//   let options = {
//       height: 350,
//       legend: { position: 'bottom'
//       },
//       series: {
//         0: {targetAxisIndex: 0, type: 'line', color: '#A54DFF'},
//         1: {targetAxisIndex: 1, type: 'bars', color: '#fbea00'},
//       },
//       vAxes: {
//         0: {title: 'Total Tested'},
//         1: {title: 'Daily Tested'}
//       },
//       hAxis:{slantedText: true,
//         minorGridlines:{count:0},
//         textStyle: {
//           fontSize: 14
//         }
//       },
//       vAxis:{
//           minorGridlines:{count:0},
//           textStyle: {
//             fontSize: 14
//           }
//       },
//       pointsVisible: false, 
//       tooltip: {isHtml: true},	
//       chartArea:  {'height': '70%', left: 55, right: 55}
//     };


//   function resize() {
//       let data = response.getDataTable();
//       let chart = new google.visualization.ComboChart(document.getElementById('wales-tests-chart'));
//       chart.draw(data, google.charts.Line.convertOptions(options));
//     }
//     window.onload = resize();
//     window.onresize = resize;
// }

//Wales Regional table with Search bar
function walesRegionalTable() {
  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=a13:d35');


  // Send the query with a callback function.
  query.send(drawWalesDashboard);
}

function drawWalesDashboard(response) {

    //Load query data
    let data = response.getDataTable();

    //create the search bar
    let searchFilter= new google.visualization.ControlWrapper({
        'controlType': 'StringFilter',
        'containerId': 'filter_wales_reg_div',
        'options': {
        'filterColumnLabel': 'Area',
        'matchType':'any',
        'ui.realtimeTrigger': 'true'    
        }
    });
    
    //create table
    let showChart = new google.visualization.ChartWrapper({
        'chartType': 'Table',
        'containerId': 'wales_reg_table_div'
    });

    let dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_wales_reg_div'));
    dashboard.bind(searchFilter, showChart);
    dashboard.draw(data);
}


//Aneurin Line chart
function aneurinLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,R1:S1000');
  query.send(handleAneurinQuery);
}

function handleAneurinQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
      textStyle: {
        fontSize: 14
      } },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('aneurin-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Betsi line chart
function betsiLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,T1:U1000');
  query.send(handleBetsiQuery);
}

function handleBetsiQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('betsi-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Cardiff line chart
function cardiffLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,V1:W1000');
  query.send(handlecardiffQuery);
}

function handlecardiffQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('cardiff-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Cwm line chart
function cwmLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,X1:Y1000');
  query.send(handleCwmQuery);
}

function handleCwmQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('cwm-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Hywel Dda
function hywelLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,Z1:AA1000');
  query.send(handleHywelQuery);
}

function handleHywelQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        } 
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('hywel-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Powys
function powysLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,AB1:AC1000');
  query.send(handlePowysQuery);
}

function handlePowysQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('powys-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

//Swansea
function swanseaLineChart() {

  let query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=f1:f1000,AD1:AE1000');
  query.send(handleSwanseaQuery);
}

function handleSwanseaQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  let options = {
      height: 350,
      legend: { position: 'bottom',
        textStyle: {
          fontSize: 14
        }
      },
      series: {
        0: {targetAxisIndex: 0, type: 'line', color: '#662E9B'},
        1: {targetAxisIndex: 1, type: 'bars', color: '#F86624'},
      },
      vAxes: {
        0: {title: 'Total Cases'},
        1: {title: 'Daily Cases'}
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
      let chart = new google.visualization.ComboChart(document.getElementById('swansea-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}
