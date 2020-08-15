google.charts.load('current', {'packages':['corechart', 'controls', 'table', 'line']});

google.charts.setOnLoadCallback(UKLocalCasesTable); 

//All UK cases table with search
function UKLocalCasesTable() {
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/gviz/tq?sheet=AllLowerAuthorities&range=A1:b364,D1:D364');
  
  
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
  