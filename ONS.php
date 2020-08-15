<!DOCTYPE html>
  <html lang="en">
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>

      <!-- Meta tags -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="copyright" content="Material on this site is the property of CoronaInfo except where specified.">
      <meta name="keywords" content="UK ONS deaths, all UK covid deaths, CoronaInfo, covid-19 England, corona cases England, corona deaths England, corona London, corona Birmingham, coronavirus England,
      corona information, corona symptoms, corona advice, covid19 uk, covid19 info uk, corona uk, coronavirus uk, 
      corona cases uk, corona data uk, corona charts uk, corona deaths uk, corona england, corona scotland, corona wales">
      <meta name="robots" content="index,follow">
      <meta name="description" content="Up-to-date UK coronavirus information, including cases and deaths for each region">
      <meta property="og:site_name" content="CoronaInfo">
      <meta property="og:title" content="CoronaInfo">
      <meta property="og:description" content="Up-to-date coronavirus information for the UK">
      <meta property="og:url" content="http://CoronaInfo.uk/ONS.php">

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

      <title>ONS Death Data - CoronaInfoUK</title>


    </head>

    <body data-spy="scroll" data-target=".navbar" data-offset="50">
        <!--[if lt IE 7]>
          <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please change your browser to see the best version of this site.</p>
        <![endif]-->

      <!--Navigation-->
      <?php include("PHP/navigation.php"); ?>

      <header>
        <h1>ONS Coronavirus Death Data</h1>
        
      </header>

      <!--Lead Information-->
      <div class="container lead-info">
        
        <div class="row ">

          <div class="top-info">
              <div class="live-update-table">
                <div id="ONS-deaths-live-table"></div>
              </div>
            <p class="small-info">ONS data released every week</p>
          </div>

        </div>

        <div class="small-support">
          <a href="https://www.buymeacoffee.com/coronainfo">
          <button type="button" class="btn btn-outline-primary">Support the Site!</button>
          </a>
        </div>

      </div>


      <!--Main Content-->
      <div class="container-fluid">

        <!-- ONS Total & UK/Age Gender -->
        <div class="row">

            <div class="col-lg container uk-class">
                <div class="chart-container">
                    <h3>UK ONS Deaths</h3>
                    <div class="update-chart">
                        <div id="ONS-total-deaths-live-line-chart"></div>
                    </div>
                    <p class="sources">
                        This data includes deaths reported for England, Scotland, Wales, and Northern Ireland.
                        <br>
                        The 'UK Total Deaths' includes the latest ONS data with the latest death data released by each national government.
                        This figure is an estimate and will change with every update. 
                    </p>
                </div>
            </div>

            
            <div class="col-lg container uk-class">
                <div class="chart-container">
                    <h3>UK ONS Deaths by Age</h3>
                    <div class="update-chart">
                        <div id="ONS-UK-age-live-pie-chart"></div>
                    </div>
                    <p class="sources">
                        This data includes deaths reported for England, Scotland, Wales, and Northern Ireland.
                    </p>
                </div>
            </div>
            

        <!--end of row-->
        </div>

        
        <!--ONS Gender-->
        <div class="row">

            <div class="col-lg container uk-class">
                <div class="chart-container">
                    <h3>UK ONS Deaths by Age & Gender</h3>
                    <div class="update-chart">
                        <div id="ONS-UK-age-gender-live-column-chart"></div>
                    </div>
                    <p class="sources">
                        This data includes deaths reported for England, Scotland, Wales, and Northern Ireland.
                    </p>
                </div>
            </div>

            <div class="col-lg container uk-class">
              <div class="chart-container">
                <h3>England & Wales Deaths by Age & Gender</h3>
                <div class="update-chart">
                  <div id="ONS-age-gender-live-column-chart"></div>
                </div>
                <p class="sources">
                  This data includes only deaths that occurred in England and Wales. They are detailed by 'Weekly Occurrences'.
                </p>
              </div>
          </div>   

        <!--end of row-->
        </div>

        <!-- ONS regional -->
        <div class="row">

            <div class="col-lg container uk-class">
                <div class="chart-container">
                    <h3>England & Wales ONS Deaths by Region</h3>
                    <div class="update-chart">
                        <div id="ONS-regional-live-line-chart"></div>
                    </div>
                    <p class="sources">
                        This data includes only deaths that occurred in England and Wales. They are detailed by 'Weekly Occurrences'.
                    </p>
                </div>

            </div>
        </div>

        <!-- About ONS & Donate -->
        <div class="row">
            <div class="col-lg container UK-class" id="about">
                <div class="extra-info">
                  <h3>About the Data</h3>
                  <p>
                    The data shown above has been collected from the 
                    <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/weeklyprovisionalfiguresondeathsregisteredinenglandandwales">
                      Office for National Statistics</a>.

                      <br>
                      The data is released once per week, for the previous week's data. As a result, 
                      the ONS data is always at least 10 days behind the latest death data.
                  </p>
  
                </div>
              </div>

              <?php include('PHP/supportContainer.php');?>
        </div>


        <!-- Further Info Button-->
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

      <!-- Scroll button -->
      <a id="back-to-top" href="#" class="btn btn-dark btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>

      <!--Data Retrieval & Custom JS-->
      <script src="JS/responsive.js"></script>
      <script src="JS/ONSLiveUpdate.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  
    </body>


</html>
