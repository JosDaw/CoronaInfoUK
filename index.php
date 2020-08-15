<!DOCTYPE html>
  <html lang="en">
    <head>

      <!-- Meta tags -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="copyright" content="Material on this site is the property of CoronaInfo except where specified.">
      <meta name="keywords" content="CoronaInfo, corona information, corona symptoms, corona advice, covid19 uk, covid19 info uk, corona uk, coronavirus uk, 
      corona cases uk, corona data uk, corona charts uk, corona deaths uk, corona england, corona scotland, corona wales">
      <meta name="robots" content="index,follow">
      <meta name="description" content="Up-to-date UK coronavirus information, including cases, deaths, and testing details for each region of the UK">
      <meta property="og:site_name" content="CoronaInfo">
      <meta property="og:title" content="CoronaInfo">
      <meta property="og:description" content="Up-to-date UK coronavirus information">
      <meta property="og:url" content="http://CoronaInfo.uk/index.php">

      <!--Styles & Scripts -->
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400&display=swap" rel="stylesheet"> 
      <script src="https://kit.fontawesome.com/4eabe4bda9.js" crossorigin="anonymous"></script>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

      <!--Google Charts script -->
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160054052-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-160054052-1');
      </script>


      <title>CoronaInfoUK</title>


    </head>

    <body data-spy="scroll" data-target=".navbar" data-offset="50">
        <!--[if lt IE 7]>
          <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please change your browser to see the best version of this site.</p>
        <![endif]-->
      <?php include("PHP/navigation.php"); ?>

      <header>
        <h1>UK Coronavirus Updates</h1>
      </header>

      <!--Lead Information-->
      <div class="container lead-info">
        
        <div class="row ">
          <div class="top-info">
            <p id="UK-cases">
            </p>
            <p class="updated-info" id="new-UK-Cases"></p>
          </div>
          <div class="top-info">
            <p>Deaths: <br />41,358</p>
            <!-- <p id="UK-deaths"></p> -->
            <!-- <p class="updated-info" id="new-UK-deaths"></p> -->
          </div>
          <div class="top-info">
            <p id="UK-tests"></p>
            <p class="updated-info" id="new-UK-tests"></p>
          </div>
          
        </div>
        <p class="medium-info">Updated daily</p>

        <div class="small-support">
          <a href="https://www.buymeacoffee.com/coronainfo">
          <button type="button" class="btn btn-outline-primary">Support the Site!</button>
          </a>
        </div>

      </div>

      <!-- Main Content-->
      <div class="container-fluid">
        
        <!-- UK Map & Cases/Deaths -->
        <div class="row">

          <div class="col-lg container uk-class " id="ukcases">
            <div class="chart-container">
              <h3>UK Cases</h3>

              <div class="swap-button">
                <button type="button" class="btn btn-info" onclick="showHideUKCases()">Show/Hide Data per 100,000</button>
              </div>
              
              <div id="swapUKcaseschart">
                <div class="update-chart">
                  <div id="UK-cases-chart"></div>
                </div>
              </div>

              <div id="swapUKcasestable">
                <div class="update-chart">
                  <div id="cases-and-deaths-table"></div>
                </div>
              </div>

              <p class="sources"> 
                Graph updated daily.
                <br />
                <span id="uk-cases-update-date"></span>
                <br/>
                Sources: 
                <a href="https://coronavirus.data.gov.uk/cases?areaType=overview&areaName=United%20Kingdom">
                Gov.uk
                </a>, 
                <a href="https://www.gov.scot/publications/coronavirus-covid-19-daily-data-for-scotland/">
                  Gov.scot
                </a>,
                <a href="https://public.tableau.com/profile/public.health.wales.health.protection#!/vizhome/RapidCOVID-19virology-Public/Headlinesummary">
                Public Health Wales
                </a>, and 
                <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  Department of Health NI
                </a> 
                <br />
                <span class="small-info">The decrease in cases on July 1st resulted from the removal of duplicate cases.</span>
               </p>
              </p>
            </div>
          </div>

          <div class="col-lg container uk-class" id="ukdeaths">
            <div class="chart-container">
              <h3>UK Deaths</h3>

              <div class="update-chart">
                <div id="UK-deaths-chart"></div>
              </div>

              <p class="sources">
                Updated daily. (Data is currently being revised and is unable.)
                <br/>
                Source: <a href="https://coronavirus.data.gov.uk">coronavirus.data.gov.uk</a>
                <br />
                <span class="small-info">Note: This chart does not include deaths from the Office for National Statistics</span>
              </p>

            </div>
          </div>



        </div>

        <!--UK Daily Deaths & Tests-->
        <div class="row">

          <div class="col-lg container" id="UKmap">
            <?php include('PHP/UKSVG.php'); ?>
          </div>

          <div class="col-lg container uk-class" id="ukdailydeaths">
            <div class="chart-container">
              <h3>UK Daily Deaths</h3>

              <div class="update-chart">
                <div id="daily-deaths-chart"></div>
              </div>

              <p class="sources">
                Updated weekly.
                <br />
                Combines death data from all 4 nations for each date. Started from the first date over 100 daily deaths.
                <br />
                It combines the latest daily death records from the Office for National Statistics with the latest daily deaths released by each nation.
                <br />
                Sources: <a href="https://coronavirus.data.gov.uk">coronavirus.data.gov.uk</a> and 
                <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales">Office for National Statistics</a>
              </p>

            </div>
          </div>

        <!--end of row-->
        </div> 

        <!--Percentages & Fatalities-->
        <div class="row">
          <div class="col-lg container uk-class" id="percentagepop">
            <div class="chart-container rates-table">
              <h3>Infected & Deceased</h3>

              <div class="update-chart">
                <div id="percentages-live-stacked-chart"></div>
              </div>

              <p class="sources">
                Updated weekly.
                <br/>
                This chart shows the number of infected and deceased as a percentage of the UK population.
                <br />
                The number of individuals tested in the UK has not been released by the government since May 22nd.
                <br />
              <span class="small-info">
                Infection rates include only those tested. The actual figures are likely to be higher.
                See <a href="#aboutdata">note</a> on data.
              </span>
            </p>

            </div>

            <div class="chart-container rates-table" id="fatalityrate">
              <h3>Fatality Rate</h3>
              
              <div class="update-chart">
              <div id="fatality-live-bar-chart"></div>
              </div>

              <p class="sources">
                Updated weekly.
                <br/>
              <span class="small-info">
                This data represents the fatality rates of those who have been tested.
                <br />
                Fatality figures are likely to be lower than the above, as many individuals have not been tested.
              </span>
            </p>

            </div>
          </div>

          <div class="col-lg container uk-class" id="#ONSdeathsagegender">
            <div class="chart-container">
                <h3>UK ONS Deaths by Age & Gender</h3>
                <div class="update-chart">
                    <div id="ONS-UK-age-gender-live-column-chart"></div>
                </div>
                <p class="sources">
                  This data includes deaths reported for England, Scotland, Wales, and Northern Ireland by the 
                  <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales">
                    Office for National Statistics (ONS).
                  </a>
                    <br />
                    This data is released on a weekly basis, and records data from the previous week.
                </p>

                <div class="hideButton">
                  <a href="ONS.html">
                    <button type="button" class="btn btn-info">See More ONS Charts</button>
                  </a>
                </div>
            </div>
          </div>

        </div>

        <!-- UK Per 100k deaths & Europe Deaths-->
        <div class="row">

          <div class="col-lg container uk-class" id="ukcasestests">
            <div class="chart-container">
              <h3>UK Tests</h3>

              <div class="update-chart">
                <div id="tests-chart"></div>
              </div>

              <p class="sources">
                Graph updated daily.
                <br />
                <span id="uk-tests-update-date"></span>
                <br/>
                Source: <a href="https://coronavirus.data.gov.uk">coronavirus.data.gov.uk</a>
              </p>
              
            </div>
          </div>

        <div class="col-lg container uk-class " id="deathscompare">
          <div class="chart-container">
            <h3>Deaths per 100,000 Comparison</h3>
            <div class="update-chart">
              <div id="uk-deaths-comparison-chart"></div>
            </div>
            <p class="sources">
              Updated weekly.
              <br />
              This chart shows the number of deaths per 100,000 population for each nation over time. 
              <br />
              The UK deaths includes data from all 4 nations.
              <br />
              'UK (Total)' includes the most recent deaths from the Office for National Statistics (England and Wales), Scotland, Northern Ireland, and the latest daily deaths. 
              This line will be corrected weekly as new data is released.
            </p>

          </div>
        </div>

        <!--end of row-->
        </div> 

        <!--All UK Cases -->
        <div class="row">

          <div class="col-lg container uk-class " id="uklocalcasespop">
            <div class="chart-container">
              <h3>All UK Cases (Local Data)</h3>
              <p class="sources">
                <strong>England Lower Tier Local Authorities & Scotland councils data now added!</strong>
                <br />
                Click on 'Per 10,000' to sort by the areas with the lowest/highest cases per 10,000 population
              <span class="small-info">*Unreported cases are likely to be high - see <a href="#casesdata">note </a> for more details
              </span>
              </p>

              <div class="hideButton">
                <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#hideukallcases">Show (Long) Table </button>
                <div id="hideukallcases" class="collapse cf">

                  <div class="update-chart">
                    <div id="dashboard_uk_all_div">
                      <div id="filter_uk_all_div"></div>
                      <div id="uk_all_table_div"></div>
                    </div>
                  </div>

                </div>
              </div>

              <p class="sources">
                Updated weekly.
              </p>

            </div>
          </div>
          
          <?php include('PHP/supportContainer.php'); ?>

        </div>

        <!-- England -->
        <div class="row">

          <div class="col-lg container eng-class" id="engcases">
            <div class="chart-container">
              <h3>England Cases & Deaths</h3>

              <div class="update-chart">
                <div id="eng-cases-deaths-chart"></div>
              </div>

              <p class="sources">
                Updated weekly.
                <br />
                Source: 
                <a href="https://coronavirus.data.gov.uk/">
                coronavirus.data.gov.uk
                </a>
              </p>
            </div>
          </div>
    

          <div class="col-lg container eng-class" id="allengcases">
            <div class="chart-container">
              <h3>All England Data</h3>
               <div class="hideButton">
              <a href="england.html">
                <button type="button" class="btn btn-info">See England Regional & Local Data</button>
              </a>
              </div>
            </div>
             
          </div>

        <!--end of row-->
        </div>


        <!-- Scotland -->
        <div class="row">

          <div class="col-lg container" id="scotscases">
            <div class="chart-container scots-class">
              <h3>Scotland Cases & Deaths</h3>
              <div class="update-chart">
                <div id="scotland-cases-deaths-chart"></div>
              </div>
              <p class="sources">
                Updated weekly.
                <br/>
                Source: 
                <a href="https://www.gov.scot/coronavirus-covid-19/">
                  Gov.scot
                </a>
              </p>


            </div>
          </div>
    
          <div class="col-lg container">
            <div class="chart-container scots-class">
              
              <h3>All Scotland Data</h3>

              <div class="hideButton">
                <a href="https://www.travellingtabby.com/scotland-coronavirus-tracker/">
                  <button type="button" class="btn btn-info">Visit TravellingTabby's Scotland Coronavirus Tracker </button>
                </a>
              </div>

            </div>
          </div>

        <!--end of row-->
        </div>
        

        <!--Wales-->
        <div class="row">

          <div class="col-lg container wales-class" id="walescases">
            <div class="chart-container">
              <h3>Wales Cases & Deaths</h3>
              <div class="update-chart">
                <div id="wales-cases-deaths-chart"></div>
              </div>
              <p class="sources">
                Updated weekly.
                <br/>
                Source: 
                <a href="https://public.tableau.com/profile/public.health.wales.health.protection#!/vizhome/RapidCOVID-19virology-Public/Headlinesummary">
                Public Health Wales
                </a>
                
              </p>
            </div>
          </div>

          <div class="col-lg container wales-class" id="walesareacases">
            <div class="chart-container">
              <h3>All Wales Data</h3>
              <div class="hideButton">
                <a href="wales.html">
                  <button type="button" class="btn btn-info">See Wales Regional & Local Data</button>
                </a>
              </div>

            </div>
          </div>
          


        <!--end of row-->
        </div>
      
        <!--Northern Ireland -->
        <div class="row">

          <div class="col-lg container NI-class" id="NIcases">
            <div class="chart-container">
              <h3>Northern Ireland Cases & Deaths</h3>
              <div class="update-chart">
                <div id="NI-cases-deaths-chart"></div>
              </div>
              <p class="sources">
                Updated weekly.
                <br/>  
                Source: 
                <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  Department of Health NI
                </a>
              </p>
            </div>
          </div>

          <div class="col-lg container NI-class">
            <div class="chart-container">
              <h3>All Northern Ireland Data</h3>
              <div class="hideButton">
                <a href="northernIreland.php">
                  <button type="button" class="btn btn-info">See Northern Ireland Regional & Local Data</button>
                </a>
              </div>

            </div>
          </div>

        <!--end of row-->
        </div>

        <!-- World & About -->
        <div class="row">


          <div class="col-lg container" id="worldcases">
            <div class="chart-container">
              <h3>World Data</h3>
              <div class="update-chart">
                <div id="world-cases-deaths-chart"></div>
              </div>
              <p class="sources">
                Updated weekly.
              </p>
            </div>
          </div>

          <div class="col-lg container" id="aboutdata">
            <div class="extra-info">
              <h3>About the Data</h3>
              <h5 id="casesdata">Cases</h5>
              <p>
                The UK is still limiting its coronavirus testing to those who show respiratory symptoms 
                and go to a hospital, as well as some of those in key worker positions. As a result, the actual number of cases is likely to be much higher than officially reported. 
                The cases recorded on this site may be used to identify the number of individuals with severe symptoms or who are among
                the key workers who have been tested for the virus without severe symptoms. 
              </p>
              <h5 id="deathsdata">Deaths</h5>
              <p>
                  The number of deaths reported on this site is calculated based on figures from the UK government, national governments, 
                  and the data released by the Office for National Statistics.
                  Sources: 
                  <a href="https://coronavirus.data.gov.uk">coronavirus.data.gov.uk</a>,
                  <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales"
                  >ONS </a>,
                  <a href="https://www.gov.scot/coronavirus-covid-19/">Scottish Government</a>,
                  <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">the Department of Health NI</a>, and
                  <a href="https://public.tableau.com/profile/public.health.wales.health.protection#!/vizhome/RapidCOVID-19virology-Public/Headlinesummary">Public Health Wales</a>.
                <br />

                  <br />
                Additionally, the number of deaths in the UK is higher than the reported totals by each national government. 
                <br />
                All deaths that occur in England and Wales are also reported by the Office for National Statistics (ONS).
                The data can be found on the 
                <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales"
                >ONS site </a> every week or on the <a href="ONS.html">ONS</a> page on CoronaInfoUK.
              </p>
              <h5 id="testsdata">Tests</h5>
              <p>
                  The data concerning testing in the UK has changed considerably. 
                  In recent months, it has been revealed that the total number of tests reported by the UK included
                   tests that were not completed, as well as antibodies testing and surveillance testing.
                   Additionally, the UK government has not released the number of individuals tested since May 22.
                   As a result, the reported testing data for the UK should not be considered a reliable source of information.
              </p>

              <div class="UK-FAQ">
                <h4>Frequently Asked Questions</h4>
                <h6>Why do the daily deaths and cases change every day?</h6>
                <p>
                  At present, many deaths and cases are released on the most recent day and then later added to the correct date. This most commonly occurs with the death data, 
                  as some deaths are released weeks after they happened. As a result, the daily death rate and cases are constantly changing.
                  <br />
                  This site is updated and backdated whenever new information becomes available. 
                </p>
                <h6>Why isn't there more Scotland data?</h6>
                <p>
                  A huge wealth of accurate Scotland data is provided by <a href="https://www.travellingtabby.com/scotland-coronavirus-tracker/">TravellingTabby</a>. 
                  It is unnecessary for this site to generate additional charts and graphs on the data. 
                </p>
                <h6>Who made this site?</h6>
                <p>
                  This site is a personal project that is not affiliated with any organisation or government entity. Although best efforts are made to make sure the data 
                  is as accurate and up-to-date as possible, there are occasionally some errors or typos. If you notice a mistake that is not quickly rectified, please send an email to 
                  <a href="mailto:contact@coronainfo.uk?Subject=CoronaInfo" target="_top">contact@coronainfo.uk</a>. If you find this site useful, please share it with your friends 
                  or consider sending a donation.
                  <div class="small-support">
                    <a href="https://www.buymeacoffee.com/coronainfo">
                      <button type="button" class="btn btn-outline-primary">Support the Site!</button>
                    </a>
                  </div>
                </p>
              </div>

            </div>
          </div>

        </div>


        <!-- Further Info-->
        <div class="row">

          <div class="col-lg container uk-class" id="furtherinfo">
              <div class="swap-button">
                <a href="furtherInformation.php">
                <button type="button" class="btn btn-info">Further Information</button>
              </a>
              </div>
          </div>


        <!--end of row-->
        </div>


      <!--end of container-fluid-->
      </div>

      <!-- Social media section-->
      <?php include("PHP/socialMedia.php"); ?>

      <!--Footer-->
      <?php include("PHP/footer.php"); ?>
      <!--Scroll button-->
      <a id="back-to-top" href="#" class="btn btn-dark btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>

      <!--Data Retrieval & Custom JS-->
      <script src="JS/responsive.js"></script>
      <script src="JS/UKScripts.js"></script>
      <script src="JS/UKmap.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      
  
    </body>


</html>
