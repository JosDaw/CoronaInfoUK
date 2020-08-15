# CoronaInfoUK
A project for displaying coronavirus information in the UK.
<br/>
Visit the live site <a href="https://coronainfo.uk">CoronaInfoUK</a>

## Introduction
This project was initially developed in March 2020 as a substitute for the lack of statistical and informative data released by the UK government.
Since that time, the project has been updated to reflect new data collection methods. 
The project currently incorporates API data from <a href="https://coronavirus.data.gov.uk/">the official government site</a>,
as well as data manually input into a Google Sheets database. 
The database can be viewed here: 
<a href="https://docs.google.com/spreadsheets/d/1JfqJ153dHK8AabuJvJ2V4cbRWOiywP9HQCEwFUBIxxc/edit?usp=sharing">UK COVID-19 - CoronaInfoUK Sheet</a>.

## Technologies
- Bootstrap 4
- PHP 
- JS
- jQuery
- Google Charts

## Examples
The chart below uses API data combined with Google Charts
<br/>
<img src="/images/UKAPIChart.png" alt="UK API Chart" width="400"/>

The charts below use Google Sheets data with Google Charts
<br/>
<img src="/images/UKData.png" alt="UK Data" width="400"/>


## Installation
Please see the PHP guide for the latest installation process for your OS:
<a href="https://www.php.net/manual/en/install.php">Install PHP</a>

Please see the Bootstrap guide for the latest installation process for your OS:
<a href="https://getbootstrap.com/docs/3.4/getting-started/">Install Bootstrap</a>

Please see the jQuery guide for the latest installation process for your OS:
<a href="https://jquery.com/download/">Download jQuery </a>

## Usage
This project is predominantly designed with data from the UK in mind. 
However, the data sources for the charts can be altered very easily by simply changing the URLs in the GET requests for each chart.

## Project Status
This project will continue to be updated as additional sources of statistical data become available.

## Support 
Please contact contact@coronainfo.uk for more support or information about this project.

## License 
[MIT License](/LICENSE.txt)