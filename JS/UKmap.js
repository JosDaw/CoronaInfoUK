//Show the death map 
$(".death-button").click(function(){

  //For the map title
  $(".map-container h2").text("Deaths Map");

  var regions=[
    {
      "region_name": "East of England",
      "region_code": "GB-UKH",
      "deaths": 4052
    },
    {
      "region_name": "London",
      "region_code": "GB-UKI",
      "deaths": 8464
    },
    {
      "region_name": "Midlands",
      "region_code": "GB-UKF",
      "deaths": 9000
    },
    {
      "region_name": "North East & Yorkshire and the Humber",
      "region_code": "GB-UKE",
      "deaths": 7000
    },
    {
      "region_name": "North West",
      "region_code": "GB-UKD",
      "deaths": 7578
    },
    {
      "region_name": "South East",
      "region_code": "GB-UKJ",
      "deaths": 7022
    },
    {
      "region_name": "South West",
      "region_code": "GB-UKK",
      "deaths": 2479
    },
    {
      "region_name": "Scotland",
      "region_code": "GB-UKM",
      "deaths": 2488
    },
    {
      "region_name": "Wales",
      "region_code": "GB-UKL",
      "deaths": 1531
    },
    {
      "region_name": "Northern Ireland",
      "region_code": "GB-UKN",
      "deaths": 554
    }
  ];
  
  
  var temp_array= regions.map(function(item){
    return item.deaths;
  });
  var highest_value = Math.max.apply(Math, temp_array);
  
  $(function() {
  
    for(i = 0; i < regions.length; i++) {
  
        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(215, 38, 61 ,' + regions[i].deaths/highest_value +')'})
        .data('region', regions[i]);
    }
  
  });

  //For the map gradient
  var rgba = "rgb(215, 38, 61)";
  var rgbaTwo = "rgb(237, 157, 168)";
  var rgbaThree = "rgb(250, 230, 233)";

  $('.map-gradient').css({
    'background' : '-webkit-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
    'background' : '-moz-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
    'background' : '-o-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
    'background' : '-ms-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
    'background' : 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')'
  });

  //For the map gradient text
  $(".gradient-text-high").text("Highest Deaths");
  $(".gradient-text-low").text("Lowest Deaths");


}); 

//Show the cases map 
$(".cases-button").click(function() {

  //For the map title
  $(".map-container h2").text("Cases Map");

//Default cases map
var regions=[
  {
    "region_name": "East of England",
    "region_code": "GB-UKH",
    "cases": 23371
  },
  {
    "region_name": "London",
    "region_code": "GB-UKI",
    "cases": 33836
  },
  {
    "region_name": "Midlands",
    "region_code": "GB-UKF",
    "cases": 46000
  },
  {
    "region_name": "North East & Yorkshire and the Humber",
    "region_code": "GB-UKE",
    "cases": 45000
  },
  {
    "region_name": "North West",
    "region_code": "GB-UKD",
    "cases": 42757
  },
  {
    "region_name": "South East",
    "region_code": "GB-UKJ",
    "cases": 33863
  },
  {
    "region_name": "South West",
    "region_code": "GB-UKK",
    "cases": 12759
  },
  {
    "region_name": "Scotland",
    "region_code": "GB-UKM",
    "cases": 18300
  },
  {
    "region_name": "Wales",
    "region_code": "GB-UKL",
    "cases": 15898
  },
  {
    "region_name": "Northern Ireland",
    "region_code": "GB-UKN",
    "cases": 5756
  }
];
  
  
  var temp_array= regions.map(function(item){
    return item.cases;
  });
  var highest_value = Math.max.apply(Math, temp_array);
  
  $(function() {
  
    for(i = 0; i < regions.length; i++) {
  
        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(13, 134, 215,' + regions[i].cases/highest_value +')'})
        .data('region', regions[i]);
    }
  
  });

    //For the map gradient
    var rgba = "rgb(13, 134, 215,1)";
    var rgbaTwo = "rgb(201,228,246,1)";
    var rgbaThree = "rgb(239, 247, 253)";
  
    $('.map-gradient').css({
      'background' : '-webkit-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
      'background' : '-moz-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
      'background' : '-o-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
      'background' : '-ms-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')',
      'background' : 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ', ' + rgbaThree + ')'
    });

    //For the map gradient text
    $(".gradient-text-high").text("Highest Cases");
    $(".gradient-text-low").text("Lowest Cases");

   

});

//Default cases map
var regions=[
  {
    "region_name": "East of England",
    "region_code": "GB-UKH",
    "cases": 23371
  },
  {
    "region_name": "London",
    "region_code": "GB-UKI",
    "cases": 33836
  },
  {
    "region_name": "Midlands",
    "region_code": "GB-UKF",
    "cases": 46000
  },
  {
    "region_name": "North East & Yorkshire and the Humber",
    "region_code": "GB-UKE",
    "cases": 45000
  },
  {
    "region_name": "North West",
    "region_code": "GB-UKD",
    "cases": 42757
  },
  {
    "region_name": "South East",
    "region_code": "GB-UKJ",
    "cases": 33863
  },
  {
    "region_name": "South West",
    "region_code": "GB-UKK",
    "cases": 12759
  },
  {
    "region_name": "Scotland",
    "region_code": "GB-UKM",
    "cases": 18300
  },
  {
    "region_name": "Wales",
    "region_code": "GB-UKL",
    "cases": 15898
  },
  {
    "region_name": "Northern Ireland",
    "region_code": "GB-UKN",
    "cases": 5756
  }
];


var temp_array= regions.map(function(item){
  return item.cases;
});
var highest_value = Math.max.apply(Math, temp_array);

$(function() {

  for(i = 0; i < regions.length; i++) {

      $('#'+ regions[i].region_code)
      .css({'fill': 'rgba(13, 134, 215,' + regions[i].cases/highest_value +')'})
      .data('region', regions[i]);
  }

});
  
  
$(document).ready(function(){
  //East Eng show
  $("path#GB-UKH").click(function(){
    $("div#eastengpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#eastengpop").fadeOut(300);
  });

  //London show
  $("span.close-btn").click(function(){ 
    $("div#londonpop").fadeOut(300);
  });
  $("path#GB-UKI").click(function(){
    $("div#londonpop").fadeIn(300);
  });

  //Mids show
  $("path#GB-UKF").click(function(){
    $("div#midlandspop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#midlandspop").fadeOut(300);
  });

  //North East & Yorkshire show
  $("path#GB-UKE").click(function(){
    $("div#northeastpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#northeastpop").fadeOut(300);
  });

  //North West show
  $("path#GB-UKD").click(function(){
    $("div#northwestpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#northwestpop").fadeOut(300);
  });

  //South East show
  $("path#GB-UKJ").click(function(){
    $("div#southeastpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#southeastpop").fadeOut(300);
  });

  //South West show
  $("span.close-btn").click(function(){  
    $("div#southwestpop").fadeOut(300);
  });
  $("path#GB-UKK").click(function(){//
    $("div#southwestpop").fadeIn(300);
    
  });

  //Scotland show
  $("path#GB-UKM").click(function(){
    $("div#scotpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#scotpop").fadeOut(300);
  });

  //Wales show
  $("path#GB-UKL").click(function(){
    $("div#walespop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#walespop").fadeOut(300);
  });

  //Northern Ireland show
  $("path#GB-UKN").click(function(){
    $("div#NIpop").fadeIn(300);
  });
  $("span.close-btn").click(function(){ 
    $("div#NIpop").fadeOut(300);
  });

});

//For the live map data
google.charts.load('current', {packages: ['corechart', 'table']});

google.setOnLoadCallback(eastEngCasesLiveTable); 
google.setOnLoadCallback(LondonCasesLiveTable); 
google.setOnLoadCallback(MidlandsCasesLiveTable); 
google.setOnLoadCallback(NorthEastCasesLiveTable); 
google.setOnLoadCallback(NorthWestCasesLiveTable); 
google.setOnLoadCallback(SouthEastCasesLiveTable); 
google.setOnLoadCallback(SouthWestCasesLiveTable); 
google.setOnLoadCallback(WalesCasesLiveTable); 
google.setOnLoadCallback(ScotlandCasesLiveTable); 
google.setOnLoadCallback(NICasesLiveTable); 

//East Eng
function eastEngCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B22,D22,C22');
  query.send(handleeastEngCasesLiveTableQuery);
}

function handleeastEngCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('east-eng-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//London
function LondonCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B23,D22,C23');
  query.send(handleLondonCasesLiveTableQuery);
}

function handleLondonCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('london-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Midlands
function MidlandsCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B24,D22,C24');
  query.send(handleMidlandsCasesLiveTableQuery);
}

function handleMidlandsCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('midlands-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//North East
function NorthEastCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B25,D22,C25');
  query.send(handleNorthEastCasesLiveTableQuery);
}

function handleNorthEastCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('north-east-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//North West
function NorthWestCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B26,D22,C26');
  query.send(handleNorthWestCasesLiveTableQuery);
}

function handleNorthWestCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('north-west-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//South East
function SouthEastCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B27,D22,C27');
  query.send(handleSouthEastCasesLiveTableQuery);
}

function handleSouthEastCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('south-east-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//South West
function SouthWestCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=England&range=D21,B28,D22,C28');
  query.send(handleSouthWestCasesLiveTableQuery);
}

function handleSouthWestCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('south-west-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}
//Scotland
function ScotlandCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=I4,F8,I5,G8');
  query.send(handleScotlandCasesLiveTableQuery);
}

function handleScotlandCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('scotland-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}
//Wales
function WalesCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=I4,F9,I5,G9');
  query.send(handleWalesCasesLiveTableQuery);
}

function handleWalesCasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
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

//Northern Ireland
function NICasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=UK&range=I4,F7,I5,G7');
  query.send(handleNICasesLiveTableQuery);
}

function handleNICasesLiveTableQuery(response) {
  if (response.isError()) {
    console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
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
