google.charts.load('current', {packages: ['corechart', 'table', 'line', 'controls']});

google.charts.setOnLoadCallback(ONSDeathsLiveTable);
google.charts.setOnLoadCallback(TotalDeathsAreaChart);
google.charts.setOnLoadCallback(UKAgeDeathsPieChart);
google.charts.setOnLoadCallback(UKTotalByAgeGenderColumn);
google.charts.setOnLoadCallback(ONSRegionalDeathsLineChart);
google.charts.setOnLoadCallback(ByAgeGenderColumn);


function ONSDeathsLiveTable() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=A1:B2');
    query.send(handleONSDeathsLiveTableQuery);
  }
  
  function handleONSDeathsLiveTableQuery(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
  
    var options = {
      };
  
  
    function resize() {
        var data = response.getDataTable();
        var table = new google.visualization.Table(document.getElementById('ONS-deaths-live-table'));
        table.draw(data, options);
      }
      window.onload = resize();
      window.onresize = resize;
  }

function TotalDeathsAreaChart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=D1:G1000');
    query.send(handleTotalDeathsAreaChartQuery);
}

function handleTotalDeathsAreaChartQuery(response) {
if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
}

var options = {
    height: 350,
    legend: { position: 'top', maxLines: 4
    },
    seriesType: 'area',
    series: {
        0: { color: '#fbea00' },
        1: {type: 'bars'},
        2: {type: 'bars', color: '#354d68'}
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
    annotations: {
        textStyle: {
        fontSize: 18,
        }
    },
    pointsVisible: true, tooltip: {isHtml: true},	
    chartArea:  {'width': '80%','height': '70%', left: 50, right: 30, top: 40}
};


function resize() {
    var data = response.getDataTable();
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        2, 3,
        { calc: "stringify",
        sourceColumn: 3,
        type: "string",
        role: "annotation" }
    ]);

    var chart = new google.visualization.ComboChart(document.getElementById('ONS-total-deaths-live-line-chart'));
    chart.draw(view, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}

function UKAgeDeathsPieChart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=S11:T18');
    query.send(handleUKAgeDeathsPieChartQuery);
  }
  
  function handleUKAgeDeathsPieChartQuery(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
  
    var options = {
      pieHole: 0.4,
      chartArea: {'width': '100%', 'height': '100%', top: 10, bottom: 0},
      colors: ["#8D5B4C", "#A300D6", "#008FFB","#00E396", "#D7263D", "#FEB019","#f9a3a4"]
    };
  
  
  
    function resize() {
        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('ONS-UK-age-live-pie-chart'));
        chart.draw(data, options);
      }
      window.onload = resize();
      window.onresize = resize;
  }
  

function UKTotalByAgeGenderColumn() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=S11:V18');
    query.send(handleUKTotalByAgeGenderColumnQuery);
}
  
function handleUKTotalByAgeGenderColumnQuery(response) {
if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
}

var options = {
    height: 400,
    legend: { position: 'top' ,
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
        0: {color: '#EBAF70'},
        1: { color: '#33b2df' },
        2: {color: '#d4526e'}
        },
    chartArea: {'width': '80%','height': '80%', left: 60, right: 50, top: 30, bottom: 40},
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
        role: "annotation" },3,
         { calc: "stringify",
        sourceColumn: 3,
        type: "string",
        role: "annotation" }
    ]);
    
    var chart = new google.visualization.BarChart(document.getElementById('ONS-UK-age-gender-live-column-chart'));
    chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


function ByAgeGenderColumn() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=S21:U41');
    query.send(handleByAgeGenderColumnQuery);
}
  
function handleByAgeGenderColumnQuery(response) {
if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
}

var options = {
    height: 600,
    legend: { position: 'top' ,
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
    
    var chart = new google.visualization.BarChart(document.getElementById('ONS-age-gender-live-column-chart'));
    chart.draw(view, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

function ONSRegionalDeathsLineChart() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=ONS&range=D1:D1000,H1:Q1000');
    query.send(handleONSRegionalDeathsLineChartQuery);
  }
  
function handleONSRegionalDeathsLineChartQuery(response) {
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
        },
        pointsVisible: true,
        tooltip: {isHtml: true},
    chartArea: {'width': '100%','height': '70%', left: 45, top: 60, right: 10, bottom: 55},
    };
    


function resize() {
    var data = response.getDataTable();
    var chart = new google.visualization.LineChart(document.getElementById('ONS-regional-live-line-chart'));
    chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = resize();
    window.onresize = resize;
}
