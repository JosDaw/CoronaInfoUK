//Wales cases map 
var regions=[
  {
      "region_name": "Aneurin Bevan",
      "region_code": "Aneurin-Bevan",
      "cases": 2640
  },
  {
    "region_name": "Betsi Cadwaladr",
    "region_code": "Betsi-Cadwaldr",
    "cases": 3720
  },
  {
      "region_name": "Cardiff & Vale",
      "region_code": "Cardiff-Vale",
      "cases": 2986
  },
  {
      "region_name": "Cwm Taf",
      "region_code": "Cwm-Taf",
      "cases": 2888
  },
  {
      "region_name": "Hywel Dda",
      "region_code": "Hywel-Dda",
      "cases": 1128
  },
  {
    "region_name": "Powys",
    "region_code": "Powys",
    "cases": 302
  },
  {
    "region_name": "Swansea Bay",
    "region_code": "Swansea-Bay",
    "cases": 1916
  }
];


var temp_array= regions.map(function(item){
  return item.cases;
});
var highest_value = Math.max.apply(Math, temp_array);

$(function() {

  for(i = 0; i < regions.length; i++) {

      $('.'+ regions[i].region_code)
      .css({'fill': 'rgba(248, 102, 36,' + regions[i].cases/highest_value +')'})
      .data('region', regions[i]);
  }

});


//For the click popup 
   $(document).ready(function(){
     
     $(".Betsi-Cadwaldr").click(function(){
       $("div#wales2pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales2pop").fadeOut(300);
     });

     $(".Powys").click(function(){
       $("div#wales3pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales3pop").fadeOut(300);
     });

     $(".Hywel-Dda").click(function(){
       $("div#wales4pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales4pop").fadeOut(300);
     });

     $(".Aneurin-Bevan").click(function(){
       $("div#wales5pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales5pop").fadeOut(300);
     });

     $(".Swansea-Bay").click(function(){
       $("div#wales6pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales6pop").fadeOut(300);
     });

     $(".Cwm-Taf").click(function(){
       $("div#wales7pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales7pop").fadeOut(300);
     });

     $(".Cardiff-Vale").click(function(){
       $("div#wales8pop").fadeIn(300);
     });
     $("span.close-btn").click(function(){ 
       $("div#wales8pop").fadeOut(300);
     });

   });

  
 //For the Live map numbers
 google.charts.load('current', {packages: ['corechart', 'table']});

 google.setOnLoadCallback(aneurinCasesLiveTable);
 google.setOnLoadCallback(betsiCasesLiveTable);
 google.setOnLoadCallback(cardiffCasesLiveTable);
 google.setOnLoadCallback(cwmCasesLiveTable);
 google.setOnLoadCallback(hywelCasesLiveTable);
 google.setOnLoadCallback(powysCasesLiveTable);
 google.setOnLoadCallback(swanseaCasesLiveTable);

 //Aneurin live
 function aneurinCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A14:B18');
   query.send(handleAneurinCasesLiveTableQuery);
 }

 function handleAneurinCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('aneurin-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Betsi live
 function betsiCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A19:B24');
   query.send(handlebetsiCasesLiveTableQuery);
 }

 function handlebetsiCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('betsi-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Cardiff live
 function cardiffCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A25:B26');
   query.send(handlecardiffCasesLiveTableQuery);
 }

 function handlecardiffCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('cardiff-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Cwm live
 function cwmCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A27:B29');
   query.send(handlecwmCasesLiveTableQuery);
 }

 function handlecwmCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('cwm-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Hywel live
 function hywelCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A30:B32');
   query.send(handlehywelCasesLiveTableQuery);
 }

 function handlehywelCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('hywel-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Powys live
 function powysCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A33:B33');
   query.send(handlepowysCasesLiveTableQuery);
 }

 function handlepowysCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('powys-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }

 //Swansea live
 function swanseaCasesLiveTable() {

   var query = new google.visualization.Query(
       'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=Wales&range=A34:B35');
   query.send(handleswanseaCasesLiveTableQuery);
 }

 function handleswanseaCasesLiveTableQuery(response) {
   if (response.isError()) {
     console.log('Error in query:' + response.getMessage() + ' ' + response.getDetailedMessage());
     return;
   }

   var options = {
     };


   function resize() {
       var data = response.getDataTable();
       var table = new google.visualization.Table(document.getElementById('swansea-cases-live-table'));
       table.draw(data, options);
     }
     window.onload = resize();
     window.onresize = resize;
 }
