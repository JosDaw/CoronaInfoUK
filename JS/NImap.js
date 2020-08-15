//NI cases map 
var regions=[
    {
        "region_name": "Antrim-Newtownabbey",
        "region_code": "Antrim-Newtownabbey",
        "cases": 456
    },
    {
        "region_name": "Ards-North-Down",
        "region_code": "Ards-North-Down",
        "cases": 450
    },
    {
        "region_name": "Armagh-Banbridge-Craigavon",
        "region_code": "Armagh-Banbridge-Craigavon",
        "cases": 744
    },
    {
        "region_name": "Belfast",
        "region_code": "Belfast",
        "cases": 1412
    },
    {
        "region_name": "Causeway Coast & Glens",
        "region_code": "Causeway-Coast-Glens",
        "cases": 276
    },
    {
        "region_name": "Derry City & Strabane",
        "region_code": "Derry-City-Strabane",
        "cases": 212
    },
    {
        "region_name": "Fermanagh-Omagh",
        "region_code": "Fermanagh-Omagh",
        "cases": 180
    },
    {
        "region_name": "Lisburn-Castlereagh",
        "region_code": "Lisburn-Castlereagh",
        "cases": 513
    },
    {
      "region_name": "Mid & East Antrim",
      "region_code": "Mid-East-Antrim",
      "cases": 387
    },
    {
        "region_name": "Mid-Ulster",
        "region_code": "Mid-Ulster",
        "cases": 408
    },
    {
      "region_name": "Newry-Mourne-Down",
      "region_code": "Newry-Mourne-Down",
      "cases": 368
    }
  ];
  
  
  var temp_array= regions.map(function(item){
    return item.cases;
  });
  var highest_value = Math.max.apply(Math, temp_array);
  
  $(function() {
  
    for(i = 0; i < regions.length; i++) {
  
        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(43,144,143,' + regions[i].cases/highest_value +')'})
        .data('region', regions[i]);
    }
  
  });

//Show the death map 
$(".death-button").click(function(){

  //For the map title
  $(".map-container h2").text("Northern Ireland Deaths Map");

  var regions=[
    {
        "region_name": "Antrim-Newtownabbey",
        "region_code": "Antrim-Newtownabbey",
        "deaths": 59
    },
    {
        "region_name": "Ards-North-Down",
        "region_code": "Ards-North-Down",
        "deaths": 45
    },
    {
        "region_name": "Armagh-Banbridge-Craigavon",
        "region_code": "Armagh-Banbridge-Craigavon",
        "deaths": 59
    },
    {
        "region_name": "Belfast",
        "region_code": "Belfast",
        "deaths": 161
    },
    {
        "region_name": "Causeway Coast & Glens",
        "region_code": "Causeway-Coast-Glens",
        "deaths": 39
    },
    {
        "region_name": "Derry City & Strabane",
        "region_code": "Derry-City-Strabane",
        "deaths": 21
    },
    {
        "region_name": "Fermanagh-Omagh",
        "region_code": "Fermanagh-Omagh",
        "deaths": 11
    },
    {
        "region_name": "Lisburn-Castlereagh",
        "region_code": "Lisburn-Castlereagh",
        "deaths": 49
    },
    {
      "region_name": "Mid & East Antrim",
      "region_code": "Mid-East-Antrim",
      "deaths": 43
    },
    {
        "region_name": "Mid-Ulster",
        "region_code": "Mid-Ulster",
        "deaths": 30
    },
    {
      "region_name": "Newry-Mourne-Down",
      "region_code": "Newry-Mourne-Down",
      "deaths": 33
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

//Return to Cases map
$(".cases-button").click(function() {

  //For the map title
  $(".map-container h2").text("Northern Ireland Cases Map");

  var regions=[
    {
        "region_name": "Antrim-Newtownabbey",
        "region_code": "Antrim-Newtownabbey",
        "cases": 456
    },
    {
        "region_name": "Ards-North-Down",
        "region_code": "Ards-North-Down",
        "cases": 450
    },
    {
        "region_name": "Armagh-Banbridge-Craigavon",
        "region_code": "Armagh-Banbridge-Craigavon",
        "cases": 744
    },
    {
        "region_name": "Belfast",
        "region_code": "Belfast",
        "cases": 1412
    },
    {
        "region_name": "Causeway Coast & Glens",
        "region_code": "Causeway-Coast-Glens",
        "cases": 276
    },
    {
        "region_name": "Derry City & Strabane",
        "region_code": "Derry-City-Strabane",
        "cases": 212
    },
    {
        "region_name": "Fermanagh-Omagh",
        "region_code": "Fermanagh-Omagh",
        "cases": 180
    },
    {
        "region_name": "Lisburn-Castlereagh",
        "region_code": "Lisburn-Castlereagh",
        "cases": 513
    },
    {
      "region_name": "Mid & East Antrim",
      "region_code": "Mid-East-Antrim",
      "cases": 387
    },
    {
        "region_name": "Mid-Ulster",
        "region_code": "Mid-Ulster",
        "cases": 408
    },
    {
      "region_name": "Newry-Mourne-Down",
      "region_code": "Newry-Mourne-Down",
      "cases": 368
    }
  ];
  
  
  
  var temp_array= regions.map(function(item){
    return item.cases;
  });
  var highest_value = Math.max.apply(Math, temp_array);
  
  $(function() {
  
    for(i = 0; i < regions.length; i++) {
  
        $('#'+ regions[i].region_code)
        .css({'fill': 'rgba(43,144,143,' + regions[i].cases/highest_value +')'})
        .data('region', regions[i]);
    }
  
  });

    //For the map gradient
    var rgba = "rgb(43,144,143,1)";
    var rgbaTwo = "rgb(176,214,213,1)";
    var rgbaThree = "rgb(236, 245, 245)";
  
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
  
//For the click popup 
$(document).ready(function(){
     
    $("#Antrim-Newtownabbey").click(function(){
      $("div#NI1pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI1pop").fadeOut(300);
    });

    $("#Ards-North-Down").click(function(){
      $("div#NI2pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI2pop").fadeOut(300);
    });

    $("#Belfast").click(function(){
      $("div#NI3pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI3pop").fadeOut(300);
    });

    $("#Causeway-Coast-Glens").click(function(){
      $("div#NI4pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI4pop").fadeOut(300);
    });

    $("#Derry-City-Strabane").click(function(){
      $("div#NI5pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI5pop").fadeOut(300);
    });

    $("#Fermanagh-Omagh").click(function(){
      $("div#NI6pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI6pop").fadeOut(300);
    });

    $("#Lisburn-Castlereagh").click(function(){
      $("div#NI7pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
      $("div#NI7pop").fadeOut(300);
    });

    $("#Mid-East-Antrim").click(function(){
        $("div#NI8pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
        $("div#NI8pop").fadeOut(300);
    });

    $("#Mid-Ulster").click(function(){
        $("div#NI9pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
        $("div#NI9pop").fadeOut(300);
    });

    $("#Newry-Mourne-Down").click(function(){
        $("div#NI10pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
        $("div#NI10pop").fadeOut(300);
    });

    $("#Armagh-Banbridge-Craigavon").click(function(){
        $("div#NI11pop").fadeIn(300);
    });
    $("span.close-btn").click(function(){ 
        $("div#NI11pop").fadeOut(300);
    });


  });

  google.charts.load('current', {packages: ['corechart', 'table']});

  google.setOnLoadCallback(antrimCasesLiveTable); 
  google.setOnLoadCallback(ardsCasesLiveTable);
  google.setOnLoadCallback(armaghCasesLiveTable);
  google.setOnLoadCallback(belfastCasesLiveTable);
  google.setOnLoadCallback(causewayCasesLiveTable);
  google.setOnLoadCallback(derryCasesLiveTable);
  google.setOnLoadCallback(fermanaghCasesLiveTable);
  google.setOnLoadCallback(lisburnCasesLiveTable);
  google.setOnLoadCallback(midantrimCasesLiveTable);
  google.setOnLoadCallback(midulsterCasesLiveTable);
  google.setOnLoadCallback(newryCasesLiveTable);



//Load Antrim
  function antrimCasesLiveTable() {

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b14,b12,c14');
    query.send(handleantrimCasesLiveTableQuery);
  }
 
  function handleantrimCasesLiveTableQuery(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
 
    var options = {
      };
 
 
    function resize() {
        var data = response.getDataTable();
        var table = new google.visualization.Table(document.getElementById('antrim-cases-live-table'));
        table.draw(data, options);
      }
      window.onload = resize();
      window.onresize = resize;
  }
 
//Loads Ards 
function ardsCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b15,b12,c15');
  query.send(handleardsCasesLiveTableQuery);
}

function handleardsCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('ards-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Armagh
function armaghCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b16,b12,c16');
  query.send(handlearmaghCasesLiveTableQuery);
}

function handlearmaghCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('armagh-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Belfast
function belfastCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b17,b12,c17');
  query.send(handlebelfastCasesLiveTableQuery);
}

function handlebelfastCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('belfast-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Causeway
function causewayCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b18,b12,c18');
  query.send(handlecausewayCasesLiveTableQuery);
}

function handlecausewayCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('causeway-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Derry
function derryCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b19,b12,c19');
  query.send(handlederryCasesLiveTableQuery);
}

function handlederryCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('derry-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Fermanagh
function fermanaghCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b20,b12,c20');
  query.send(handlefermanaghCasesLiveTableQuery);
}

function handlefermanaghCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('fermanagh-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//Load Lisburn
function lisburnCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b21,b12,c21');
  query.send(handlelisburnCasesLiveTableQuery);
}

function handlelisburnCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('lisburn-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}


//Load Mid Antrim
function midantrimCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b22,b12,c22');
  query.send(handlemidantrimCasesLiveTableQuery);
}

function handlemidantrimCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('midantrim-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Mid Ulster
function midulsterCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b23,b12,c23');
  query.send(handlemidulsterCasesLiveTableQuery);
}

function handlemidulsterCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('midulster-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}

//Load Newry
function newryCasesLiveTable() {

  var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=NorthernIreland&range=a12,b24,b12,c24');
  query.send(handlenewryCasesLiveTableQuery);
}

function handlenewryCasesLiveTableQuery(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var options = {
    };


  function resize() {
      var data = response.getDataTable();
      var table = new google.visualization.Table(document.getElementById('newry-cases-live-table'));
      table.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
}