<!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Meta tags -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="copyright" content="Material on this site is the property of CoronaInfo except where specified.">
      <meta name="keywords" content="CoronaInfo, covid-19 Northern Ireland, corona cases Northern Ireland, corona deaths Northern Ireland, corona swansea, corona cardiff, coronavirus Northern Ireland,
        corona information, corona symptoms, corona advice, covid19 uk, covid19 info uk, corona uk, coronavirus uk, 
        corona cases uk, corona data uk, corona charts uk, corona deaths uk, corona england, corona scotland, corona Northern Ireland">
      <meta name="robots" content="index,follow">
      <meta name="description" content="Up-to-date Northern Ireland coronavirus information, including cases and deaths for each region of Northern Ireland">
      <meta property="og:site_name" content="CoronaInfo">
      <meta property="og:title" content="CoronaInfo">
      <meta property="og:description" content="Up-to-date Northern Ireland coronavirus information">
      <meta property="og:url" content="http://CoronaInfo.uk/northernIreland.php">

      <!--Styles & Scripts -->
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400&display=swap" rel="stylesheet"> 
      <script src="https://kit.fontawesome.com/4eabe4bda9.js" crossorigin="anonymous"></script>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

      <!--High Charts Scripts -->
      <script src="https://code.highcharts.com/highcharts.js"></script>
      <script src="https://code.highcharts.com/modules/data.js"></script>
      <script src="https://code.highcharts.com/modules/exporting.js"></script>
      
      <!--Google Charts script -->
      <script src="https://www.gstatic.com/charts/loader.js"></script>

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160054052-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-160054052-1');
      </script>

      <title>Northern Ireland - CoronaInfoUK</title>

    </head>

    <body data-spy="scroll" data-target=".navbar" data-offset="50">
        <!--[if lt IE 7]>
          <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please change your browser to see the best version of this site.</p>
        <![endif]-->

      <!--Navigation-->
      <?php include("PHP/navigation.php"); ?>

      <!-- Main Content-->
      <div class="container-fluid">
        <header>
          <h1>Northern Ireland Coronavirus Updates</h1>
        </header>

        <!--Lead Information-->
        <div class="container lead-info">
          
          <div class="row ">
            <div class="top-info">
              <p id="NI-live-cases">
              </p>
              <p class="updated-info" id="new-NI-Cases"></p>
            </div>
            <div class="top-info">
              <p id="NI-live-deaths"></p>
              <p class="updated-info" id="new-NI-deaths"></p>
            </div>  
          </div>

        <p class="medium-info">            
          Updated daily.
        </p>

        <div class="small-support">
          <a href="https://www.buymeacoffee.com/coronainfo">
            <button type="button" class="btn btn-outline-primary">Support the Site!</button>
          </a>
        </div>

      </div>


      <!-- Main Content-->
      <div class="container-fluid">

        <!--NI Map & Area line chart-->
        <div class="row">

          <div class="col-lg container NI-class" id="NImap">
            <div class="map-container ">
              <h2>Northern Ireland Cases Map</h2>

              <div class="map-btn-group NI-class">
                <button class="death-button btn btn-info">Deaths Map</button>
                <button class="cases-button btn btn-info">Cases Map</button>
              </div>
  
              <div class="map NI-map">
                <svg version="1.1"  
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 1350 1250"
                stroke="black">
                    <g transform="translate(0.000000,1200.000000) scale(0.12000,-0.12000)">
                    
                        <path id="Causeway-Coast-Glens" d="m6665 8717c-30-16-48-38-70-82-38-76-72-98-182-120-48-9-128-28-177-42-49-13-101-23-115-22-36 4-75-20-103-61-13-19-33-37-43-39-40-7-145-62-155-80-5-11-10-33-10-48 0-48-19-62-95-72-63-9-72-8-90 9-24 22-82 27-200 16-45-5-122-3-178 3-113 11-159 33-245 113-44 41-57 49-85 46l-32-3-7-117c-5-80-14-141-31-195-14-43-31-107-38-143-12-62-31-106-54-122-5-4-27-8-48-8s-48-5-59-11c-20-11-20-17-14-107l7-96-43-85c-33-65-49-87-73-96-53-22-231-55-299-55-36 0-67-4-70-9s3-34 13-64c11-31 23-78 27-104 17-115 58-157 160-166 97-8 106-13 99-51-4-17-14-47-23-66-12-25-17-61-16-130 0-87 4-106 46-222 47-134 50-137 110-205 51-57 63-105 60-246-3-137 8-168 66-193 29-12 46-13 79-5 23 6 80 11 127 11 68 0 96-5 138-24 29-13 59-33 66-45 16-27 50-27 85 2 24 19 29 32 36 95 10 99 39 114 136 71 35-16 62-20 100-17 58 5 79 22 159 133 69 96 80 136 72 265l-7 110 48 21c66 28 143 23 198-14 68-46 133-31 221 53 35 33 61 50 78 50 36 0 134-39 144-57 7-11 11-12 16-4 4 6 15 11 24 11s40 12 67 25c28 14 56 25 63 25 6 0 12 6 12 13 0 8 9 22 20 32 18 16 21 17 44 1 14-9 36-34 48-55 20-35 29-41 80-51 60-13 151-7 201 12 27 10 57 53 57 80 0 7-18 29-39 49-52 47-60 79-30 118 32 39 78 58 174 71 117 15 274 60 285 80 24 44 103 124 132 135 18 6 78 21 133 34 105 24 143 39 238 95 56 32 61 33 150 30 91-3 92-4 125-39 17-19 32-44 32-54 0-48 23-122 46-146 21-23 31-26 61-22 19 3 46 13 59 22 24 15 85 134 126 242 27 72 96 134 175 156 66 18 110 47 99 65-5 8-44 12-115 12-138 0-150 8-152 95-1 51 4 73 40 148 37 79 41 95 41 165 0 49 8 100 20 140 29 94 27 132-13 184-19 24-50 69-70 99-44 66-72 99-85 99-5 0-37 18-71 40s-77 47-97 55c-19 8-42 28-52 46-39 71-50 79-107 79-46 0-70-8-155-52-95-50-106-53-187-57l-85-3-67 70c-86 92-105 100-298 137-80 15-122 11-195-20-21-8-64-15-96-15-55 0-62 3-123 50-63 49-65 50-134 50-54 0-79-6-110-23z"/>
                        <path id="Mid-East-Antrim" d="m8805 7326c-22-13-69-32-105-41s-70-20-77-23c-21-13-103-119-103-135 0-8-13-46-29-84-36-85-122-183-162-183-74 0-147 67-175 160-8 29-31 69-51 91-49 54-81 53-189-8-47-27-98-55-115-65-19-10-68-19-127-23-53-4-105-12-115-17-22-11-60-72-76-120-16-49-27-56-107-68-200-29-253-39-275-50-47-25-109-83-109-101 0-11 21-32 55-54 30-19 55-37 55-39s-12-29-26-60c-34-76-52-86-145-86-51 0-80-4-88-13-13-17-6-123 16-227 18-84 23-367 9-531-16-187-4-198 231-200 149-1 200 8 258 45 51 33 96 39 315 46 143 5 236 12 255 20 23 10 126 13 415 12l385-1 120-46c66-26 143-54 170-62 91-29 115-69 115-188 0-109 39-195 157-342l18-23 60 25c33 13 76 25 95 25 51 1 168 35 199 58 15 11 44 29 66 40 64 33 188 149 214 199 33 67 52 195 50 356l-2 139-40 51c-57 74-118 136-149 153-33 17-125 18-154 1-12-6-33-20-48-31-26-18-26-18-45 5-11 13-23 35-26 48-7 27-15 44-103 213-69 133-227 392-279 455-42 52-104 95-159 111-23 7-47 19-54 27s-18 15-24 15-24 10-39 23c-38 30-53 103-32 154 8 19 15 44 15 55s20 58 45 106c54 102 61 169 23 196-32 22-67 20-113-8z"/>
                        <path id="Derry-City-Strabane" d="m3506 7314c-22-15-65-35-96-45-73-23-187-96-237-153-21-24-52-70-68-103-28-55-29-67-36-237-6-147-5-184 7-207 8-16 14-32 14-38 0-13-56-31-97-31-45 0-86-22-101-55-16-35-15-158 3-285 18-125 14-153-36-250-52-101-101-163-179-227-118-97-151-133-177-190l-26-56 17-106c10-58 22-113 27-123 5-9 9-30 9-47 0-27-4-31-35-37-23-4-51-1-78 9-23 8-68 18-99 22-32 3-79 17-105 31-26 13-56 24-66 24-9 0-37-18-61-40s-62-47-85-55-61-30-84-49c-23-18-61-43-83-54-23-12-57-41-75-64-44-57-46-58-104-57-49 0-51 1-118 75-55 59-70 82-74 115-10 70-74 89-123 37-11-12-42-68-69-125-53-111-47-105-159-128-43-9-57-36-41-79 10-26 10-50 1-104-7-39-9-84-6-100 9-42 45-73 98-83 73-13 115-35 127-66 25-65 72-80 142-44 20 10 46 21 58 24 26 7 92-29 130-69 28-30 70-54 95-54 10 0 51 17 91 37 69 36 73 37 90 20 15-14 16-21 5-37-30-49-4-72 39-36 17 14 43 29 57 32 15 3 52 12 83 20 32 8 102 14 170 14 126 0 147 7 174 61 14 26 20 29 66 29 35 0 67 9 109 30 71 36 82 36 155 9 46-17 61-19 88-10 38 13 108 86 144 150 38 67 50 78 109 105 30 14 85 52 124 85 38 33 89 70 113 82 58 29 85 56 92 93 17 87 41 106 133 106 43 0 71 7 116 30 93 47 150 60 306 70 80 5 161 13 180 19 19 5 51 14 70 19 20 5 45 14 57 20 12 7 52 18 90 26 37 8 106 33 153 55 122 57 173 61 280 21 96-35 128-34 196 5 69 40 82 117 33 186-21 29-21 35-9 81 10 41 10 54 0 74-17 31-105 65-187 71-56 5-66 3-112-26-28-17-55-31-59-31-9 0-91 95-114 132-16 25-17 37-7 96 21 134 21 149 4 232-16 81-20 88-76 147-32 34-59 66-59 71 0 6-15 30-33 54-70 92-85 201-46 314 31 88 27 94-74 94-92 0-108 8-121 65-4 17-21 57-38 90-34 65-41 135-23 244 12 78 5 81-169 81-160 0-192-8-256-62-51-42-61-42-31 0 11 17 22 40 23 53 3 22-1 24-52 27-46 2-61-2-94-24z"/>
                        <path id="Mid-Ulster" d="m6610 6449c-14-6-54-29-88-51-49-32-76-43-116-46-50-4-55-2-101 38-59 51-78 49-152-21-28-27-64-54-78-59-43-16-97-11-145 14-64 33-95 38-133 22-45-18-53-45-66-214-9-126-14-149-38-194-35-63-119-133-184-152-41-13-63-13-129-4-53 8-83 9-90 2-5-5-14-31-19-57-10-57-21-71-88-114-82-52-92-87-43-148 44-55 41-91-13-154-24-28-49-69-55-90-18-57-42-82-122-126-131-72-158-131-126-274 37-163 45-209 55-289 6-45 22-119 36-165 26-85 44-216 52-373l5-90-36-45c-19-24-49-69-66-99-18-34-52-73-85-99-53-43-160-164-184-208-8-17-21-23-44-23-85 0-106-10-155-73-52-66-107-108-167-127-22-7-62-24-89-37-32-16-95-32-175-45-69-11-143-29-163-39-21-11-79-28-130-38-51-11-118-29-148-40s-74-20-97-21c-34 0-46-5-59-25-15-24-15-28 1-70 9-26 33-59 56-78 52-45 69-89 62-160l-6-57 36-15c22-9 67-15 113-15 69 0 75-2 69-17-21-50 14-159 60-189 24-16 32-16 74-4 25 7 68 15 94 18 43 3 55 0 93-28 76-54 110-51 219 20 17 11 46 28 65 39 45 25 65 47 79 93 7 21 32 66 55 100 23 35 57 90 75 123s45 72 59 88c23 24 33 27 93 27 38 0 78-4 91-9s45-15 73-22c88-23 174-121 265-303 67-133 104-176 151-176 89 0 208 149 274 345 35 101 60 151 80 159 9 3 58-1 108-9 187-30 214-19 202 86l-7 61 55 57c64 66 73 82 123 219 63 172 68 177 227 222 117 33 147 47 147 69 0 9-19 42-42 75-33 47-43 70-46 112-6 76 3 100 51 135 75 54 207 182 264 256 55 71 56 74 65 164 12 112 5 166-29 216-49 72-53 92-53 266 0 134 3 167 15 177 8 7 15 19 15 27s21 50 46 93l46 80 9 167c28 521 28 681-2 771-17 50-20 80-16 153l4 92-56 58c-56 60-73 67-121 48z"/>
                        <path id="Antrim-Newtownabbey" d="m8470 5510c-58-4-197-8-310-8s-236-5-274-12c-38-6-157-15-265-19-167-8-207-13-271-34-124-41-438-65-468-35-21 21-27-2-27-105 0-91 3-107 27-152 31-59 44-101 53-172 6-43 13-58 41-82 59-52 96-57 262-37 93 12 185 30 252 51 110 34 275 63 303 52 26-10 49-54 42-77-4-12-55-71-113-131-123-127-151-170-191-294-16-49-37-110-47-135-32-84 0-119 96-104 49 8 68-4 110-65 57-83 116-93 222-37 35 19 131 53 214 77 142 40 158 42 329 48 99 4 185 10 191 13 13 9 40 70 54 125 13 51 65 100 117 108 70 11 79 14 118 41 32 21 52 26 112 28 73 3 75 4 120 47 25 24 65 74 90 111 25 38 49 70 54 74 15 9 10 50-8 66-10 9-32 23-50 32-86 43-154 202-159 368-1 54-5 102-9 108-12 19-65 40-137 54-91 18-184 50-221 76-34 25-110 31-257 20z"/>
                        <path id="Fermanagh-Omagh" d="m4610 5288c-30-11-82-30-115-43-111-42-290-95-321-95-17 0-64-9-105-19s-110-22-154-26c-53-5-121-21-200-48-66-22-140-43-165-46-47-6-63-24-75-83-8-41-50-83-133-134-42-26-93-62-112-79-19-18-57-45-85-60-61-34-121-90-142-130-8-16-29-51-47-77-37-55-56-60-201-51-77 4-108 2-136-10-20-8-55-18-79-22-27-4-56-19-79-40-56-50-70-54-207-59-134-5-190-18-267-64-21-12-42-22-48-22-5 0-17-4-27-9-9-5-36-17-60-27-40-16-116-67-169-113-13-11-44-27-70-37-84-30-157-121-204-252-6-17-29-45-50-61l-39-28 41-6c23-3 45-11 49-18 4-6 13-8 20-4 8 5 11 1 8-11-2-10-12-20-23-22s-27-10-35-18c-23-19-97-45-154-52-53-8-71-26-34-36 64-17 190 3 245 39 12 8 36 15 53 15 21 0 43 11 73 39 48 44 102 59 132 37 18-13 18-16 3-57-9-24-18-65-21-90-4-46-4-46 37-65 22-10 45-17 50-16 4 2 19-4 32-13 30-19 33-69 6-84-15-8-18-21-17-78 2-64 24-133 43-133 4 0 16-14 26-32 11-17 45-65 77-107 86-113 197-371 161-371-12 0-65 75-117 164-35 59-77 104-93 98-14-4-122 96-122 114 0 7-9 18-20 24-37 20-170 122-170 131 0 5-7 9-15 9s-22 11-31 25-22 25-29 25-37 16-66 36c-47 32-65 38-139 45-47 5-165 9-264 9-174 1-226 9-226 35 0 15 32 45 48 45 7 0 12 7 12 15s9 24 19 34c11 11 17 22 14 25-11 11 28 56 71 81 57 34 214 86 221 74 9-14 25-11 25 4s41 37 69 37c21 0 35 56 17 68-6 3-87 6-179 7h-168l-51 43c-54 45-87 52-159 32-64-18-101-50-124-110-12-30-43-86-69-124-27-38-56-89-67-112-16-39-23-45-71-58-29-8-67-17-84-21-18-3-49-24-74-50-41-42-46-44-119-50-42-4-82-12-88-17-22-17-15-56 13-75 14-10 37-27 51-38l25-20-22-28c-30-38-23-56 39-97 54-36 94-80 202-223 166-220 219-267 304-267 33 0 44-7 82-47 59-63 100-123 143-207 41-81 71-106 134-113 26-3 49-10 52-14 3-5 27-9 53-9 69 0 87-23 101-130 6-47 19-114 30-150 10-36 28-112 40-170 15-72 29-112 43-128 43-47 140-82 174-63 11 5 88 12 171 15 191 6 218-2 296-84 31-32 56-63 56-69 0-5 10-13 23-16 22-7 177-153 177-168 0-4 35-48 77-97 49-58 88-93 107-99 45-14 117-15 148-3 24 10 35 8 74-13 37-20 62-25 115-25 64 0 69 2 91 31 13 17 39 61 58 98 34 64 36 66 73 65 41-1 77-27 77-55 0-10 12-26 28-36 33-20 71-63 72-80 0-7 21-22 48-33 56-26 231-90 243-90 19 0 49 41 49 66 0 24 3 26 31 20 61-12 132 42 180 137 20 38 21 52 16 165l-7 123 38 42c21 23 55 66 76 95 42 57 45 59 165 66 93 5 122 19 156 77 17 29 20 52 20 146 0 128-10 150-84 192-23 13-46 34-51 47s-30 34-58 48c-75 38-77 70-8 117 41 27 66 73 66 119 0 32-24 90-44 102-22 15-65 7-129-22-78-37-102-34-151 20-34 38-39 52-51 143-8 57-38 84-83 72-50-13-145-6-164 13-7 7-14 53-16 104s-8 100-13 109c-4 9-24 24-42 33-28 12-36 23-41 53-10 63-7 140 7 151 20 17 131 42 184 42 27 0 58 7 70 15s58 24 103 34c44 11 95 29 113 40 18 12 64 36 102 55 66 32 78 34 190 37 148 5 171 16 236 115 54 82 110 116 202 122 56 4 57 5 76 46 10 23 32 53 50 67 17 13 46 39 63 56 17 18 53 47 80 64 67 43 78 69 78 178 0 74 4 96 21 126 29 49 36 146 15 208-9 26-16 63-16 81s-7 53-16 77c-8 24-20 73-25 108s-19 80-32 100c-56 90-77 169-83 310-4 91-2 118 11 137 8 13 64 47 131 79 119 58 134 73 134 131 0 31-27 42-140 60-115 18-175 16-240-8zm-2098-3511c7-8 20-12 30-9 26 7 68-45 68-84 0-42 27-71 74-79 19-4 40-13 47-21 6-8 18-14 25-14 32 0 72-107 53-142-5-10-16-18-25-18-8 0-56 40-107 89-103 99-114 106-177 115-85 13-99 17-123 40-46 43-57 86-23 86 8 0 19 7 26 15 25 30 111 44 132 22zm1041-675c0-18-8-41-17-51s-16-33-16-52-7-45-16-57c-9-13-13-30-10-38 3-9 3-20 0-25-8-14-34 10-34 31 0 10-11 32-25 48-14 17-25 42-25 57 0 60 70 129 125 122 16-2 20-9 18-35z"/>
                        <path id="Ards-North-Down" d="m9875 4690c-11-4-40-14-65-21-89-25-173-77-237-147-35-37-63-72-63-79 0-24 60-81 107-101 102-44 163-140 163-257 0-45-5-60-27-87-47-55-67-88-130-214-35-70-64-140-67-165-16-136-16-141-2-136 10 4 18-5 25-26 6-18 26-61 44-97 31-60 38-68 105-103 44-23 92-40 124-44 45-5 59-12 94-48 42-43 98-65 118-45 5 5 26 10 45 10 20 0 63 12 96 26s69 27 80 28c13 2 21 11 23 27 2 13 7 29 11 34 5 6 14 32 21 58 11 42 11 49-4 60-9 7-17 29-19 52-1 22-6 43-12 47-5 4-5 15 3 30 25 50 20 71-23 99-22 14-63 34-90 44-28 10-54 23-60 30-5 6-20 17-32 24-20 10-23 20-23 74 0 110 38 227 73 227 5 0 47-37 94-82 64-64 103-92 166-123 59-29 90-51 112-81 17-22 36-39 42-37 7 3 19-10 29-28 22-43 70-237 86-345 12-86 12-86-12-106l-24-19 27 6 27 7v-63c0-55-4-67-27-91-15-15-32-28-40-28-7 0-28-14-48-31l-35-31v-107c0-107 0-107 31-137 17-16 38-43 47-60 10-18 36-55 60-84 23-28 45-64 48-78 3-15 12-39 20-54 8-16 13-28 11-28s11-16 29-36c20-20 41-34 52-32 21 4 41 58 41 116 1 27 8 49 19 60 13 13 17 29 14 55-5 44 17 83 56 99 15 7 39 23 55 37 47 43 33 139-39 260-41 69-41 92 1 106 35 12 75 38 116 77 25 23 29 34 29 81 0 30-7 74-15 97-8 24-14 48-13 54 4 16-31 67-69 101-35 31-73 118-73 167 0 15-5 30-11 34-8 5-10 44-6 130l5 124-30 37c-48 59-119 216-128 284-6 38-18 75-34 98-14 20-26 50-26 66 0 36-34 87-126 190-81 90-111 105-215 105-46 0-71-6-96-21-33-20-43-21-155-15-74 4-131 12-149 21-30 16-92 19-124 5z"/>
                        <path id="Belfast" d="m8921 4441c-61-25-116-86-124-138-6-33-17-50-57-86-28-25-70-52-93-60l-42-14-6-159c-3-107-10-166-19-180-7-12-10-29-7-38 8-21 66-46 106-46 16 0 64-16 106-37 61-28 93-37 152-41l74-5 41 39c22 22 51 59 65 84 45 78 58 87 128 95 70 7 178 54 233 100 73 61 110 172 78 233-13 25-28 35-79 50-55 17-67 26-105 76-56 72-81 73-160 4-19-16-39-27-45-25-8 2-12 28-12 67 0 60-1 63-26 65-15 2-41 11-57 19-40 21-96 19-151-3z"/>
                        <path id="Lisburn-Castlereagh" d="m8235 4130c-11-5-33-9-50-9-16-1-75-22-130-47s-131-57-169-71c-66-25-70-26-116-11-52 17-70 10-70-25 0-10-5-27-11-38-16-31 16-200 52-271 16-31 29-70 29-86 0-32 71-182 96-203 23-19 34-54 43-135 7-61 15-81 52-135 24-35 49-68 54-72 6-5 54-6 108-3 112 7 111 8 251-88 182-125 195-136 236-205 22-37 40-76 40-87 0-48 156-104 288-104 72 0 83 2 96 22 22 31 20 76-6 142-19 51-20 61-8 99 30 97 189 295 310 387 137 104 133 98 134 225 1 107 2 113 48 228 43 105 62 146 145 300 28 53 26 91-5 95-17 3-47-20-125-96-111-108-158-137-245-153-78-15-85-20-146-102-65-88-90-111-138-132-68-28-118-20-220 34-51 27-118 54-148 60-98 21-130 56-104 116 8 21 13 43 10 51-3 7 1 44 9 81s15 91 15 120c0 44-5 58-31 88l-31 35-122-1c-66 0-130-4-141-9z"/>
                        <path id="Armagh-Banbridge-Craigavon" d="m7530 3893c-69-11-68-9-130-138-72-149-76-188-30-249 33-43 38-77 15-96-16-13-150-50-209-58-47-5-66 13-66 64 0 50-18 58-94 43l-64-12-53 34c-45 28-63 34-110 34-51 0-60-4-98-37-48-44-81-48-143-18-59 28-108 26-171-9-28-16-65-32-82-36-41-9-131-79-150-116-9-17-23-64-31-105-18-95-23-105-100-186-62-64-64-68-64-120-1-29-9-69-18-88-14-30-23-35-55-38-37-3-132 22-151 39-6 5-33 9-61 9-77 0-89-18-105-158-7-64-19-102-58-185-68-143-138-217-206-217-25 0-25 0-19-67 3-41 15-87 29-115 24-48 33-138 14-138-17 0-50-39-50-59 0-37 47-78 103-91 65-15 83-31 92-78 11-61 57-186 75-207 9-11 28-42 41-69 48-100 195-216 273-216 29 0 41 7 72 45 20 25 47 48 59 51 37 9 115-24 172-72 54-47 55-47 67 7 3 15 26 43 51 64 25 20 64 62 86 92 30 40 45 52 58 48 12-3 31 7 55 30 65 61 163 77 294 47 52-11 67-1 107 73 15 27 51 77 81 111 43 49 66 65 112 82 86 31 147 37 176 19 20-14 28-14 65-1s48 12 95-1c29-8 84-15 122-15 184 0 228-2 249-10 12-5 49-33 81-63s79-64 104-77c25-12 47-27 50-31 25-38 108-129 118-129 7 0 31 17 55 39 52 47 64 54 184 97 73 26 110 34 151 33 47-2 58 1 73 20 39 48 12 111-48 111-45 0-69 55-39 89 8 9 17 33 21 53 7 37 6 39-79 121-73 70-86 87-86 114 0 38 21 53 74 53 49 0 93 41 175 166 36 55 76 103 89 109 48 21 24 50-74 86-59 22-94 62-94 107 0 33-46 108-84 137-17 13-68 39-113 58s-95 44-111 56c-21 14-45 21-78 21-26 0-72 9-103 19-31 11-69 22-84 26-35 7-116 87-139 136-14 29-16 51-10 127 8 100 7 106-38 151-17 16-30 37-30 46s-9 34-21 56c-11 22-29 77-39 122-46 203-60 239-97 256-13 6-25 10-26 10-1-1-13-3-27-6z"/>
                        <path id="Newry-Mourne-Down" d="m9440 3243c-23-20-58-61-77-90-24-37-54-67-106-100-81-54-107-94-128-200-12-56-11-69 5-114 14-38 17-67 13-117-4-57-9-70-33-90-25-22-34-24-108-19-45 3-93 8-108 12-25 7-36-1-104-66-56-55-86-94-115-151-21-42-48-83-61-92-12-8-47-18-79-22-47-5-59-11-70-31-17-32-7-48 60-93 28-19 63-53 78-74 30-45 42-121 24-155-15-27-4-47 45-81 56-37 71-69 54-109-20-49-49-62-195-86-139-23-153-29-268-111-81-56-157-66-157-19 0 7-16 26-36 42-20 15-68 60-108 99-127 125-165 135-561 137-266 2-282 1-325-19-69-33-165-126-202-197l-33-62-45 1c-25 0-80 4-122 9l-78 8-102-53c-120-61-145-82-203-171-23-36-57-76-74-88-18-13-31-31-31-44 0-11-10-31-22-44-23-25-36-88-37-183-1-59-25-137-60-193-34-56-23-115 34-177 13-14 37-52 55-85 48-90 75-115 125-115 32 0 47 6 67 28 14 15 29 37 33 50 11 36 52 49 180 57 159 9 205 24 257 86 23 27 49 49 58 49s31-15 49-34c47-48 79-59 164-54 60 3 82 8 115 31 67 44 76 65 82 196 4 102 7 116 23 119 20 4 67-34 67-53 0-20 35-45 62-45 13 0 35 11 47 24 31 32 81 56 120 56 18 0 54-12 82-26 35-17 74-27 122-31 94-7 110-18 131-91 9-33 25-71 36-85 27-34 107-59 183-58 34 0 75-4 92-9 16-5 42-12 57-15 14-3 40-17 58-31 35-30 28-51-18-56-22-2-28-9-30-36-3-29 4-41 46-83 47-47 51-49 105-49h56l99 93c63 58 141 118 213 162 133 82 165 108 223 184 117 152 153 313 136 606-8 128-12 153-34 196-45 84-38 100 69 159 33 18 76 46 96 61 20 16 41 29 47 29 5 0 15 7 22 15 11 14 14 13 26-4 8-11 34-27 59-36 52-20 113-16 215 16 40 13 107 23 173 26l108 6 29-28c26-25 30-36 30-82 0-37 4-53 13-53 33 0 87 97 87 155 0 40 18 85 35 85 6 0 20-12 32-27 11-16 32-34 46-42 24-13 29-12 47 4 11 10 22 34 26 54 3 20 12 50 20 68 8 17 14 34 14 37 0 4 22 34 49 69 28 36 60 93 77 137 26 70 28 85 28 235 1 158 1 161-28 218-37 72-45 78-114 92-52 11-61 9-151-22-72-25-110-33-151-31-76 4-77 22-1 105 34 36 61 73 61 82s6 25 13 36c23 34 42 170 28 203-12 29-12 29-85 24-69-4-74-3-107 25-50 42-86 63-109 63-25 0-175 57-248 94-76 39-127 36-182-11z"/>

                    </g>
  
                </svg>

                  <div class="regional-info">
                    <div class="map-popup" id="NI1pop">
                      <h3>Antrim & Newtownabbey</h3>
                      <div class="live-update-table">
                        <div id="antrim-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#antrimcases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
                    </div>
      
                    <div class="map-popup" id="NI2pop">
                      <h3>Ards & North Down</h3>
                      <div class="live-update-table">
                        <div id="ards-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#ardscases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI11pop">
                      <h3>Armagh, Banbridge, & Craigavon</h3>
                      <div class="live-update-table">
                        <div id="armagh-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#armaghcases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
                    </div>
      
                    <div class="map-popup" id="NI3pop">
                      <h3>Belfast</h3>
                      <div class="live-update-table">
                        <div id="belfast-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#belfastcases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
                    </div>
      
                    <div class="map-popup" id="NI4pop">
                      <h3>Causeway Coast & Glens</h3>
                      <div class="live-update-table">
                        <div id="causeway-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#causewaycases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI5pop">
                      <h3>Derry City & Strabane</h3>
                      <div class="live-update-table">
                        <div id="derry-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#derrycases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI6pop">
                      <h3>Fermanagh & Omagh</h3>
                      <div class="live-update-table">
                        <div id="fermanagh-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#fermanaghcases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI7pop">
                      <h3>Lisburn & Castlereagh</h3>
                      <div class="live-update-table">
                        <div id="lisburn-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#lisburncases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI8pop">
                      <h3>Mid & East Antrim</h3>
                      <div class="live-update-table">
                        <div id="midantrim-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#midantrimcases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>
      
                    <div class="map-popup" id="NI9pop">
                      <h3>Mid Ulster</h3>
                      <div class="live-update-table">
                        <div id="midulster-cases-live-table"></div>
                      </div>
                      <p>
                        <a href="#midulstercases" class="NI-class close-btn">
                          <button class="btn btn-info">See Graph</button>
                        </a>
                      </p>
                      <span class="close-btn"><i class="far fa-window-close"></i></span>
      
                    </div>

                    <div class="map-popup" id="NI10pop">
                        <h3>Newry, Mourne, & Down</h3>
                        <div class="live-update-table">
                            <div id="newry-cases-live-table"></div>
                        </div>
                        <p>
                          <a href="#newrycases" class="NI-class close-btn">
                            <button class="btn btn-info">See Graph</button>
                          </a>
                        </p>
                        <span class="close-btn"><i class="far fa-window-close"></i></span>
        
                    </div>

                  </div>
               
  
              </div>
  
              <div class="map-legend">
                <p>
                  <span class="gradient-text-high">
                    Highest Cases
                  </span> <i class="fas fa-long-arrow-alt-right"></i> 
                  <span class="gradient-text-low">Lowest Cases</span>
                </p>
                <div class="map-gradient"></div>
              </div>
  
  
              <p class="sources"> 
                Click on each area for the number of cases and deaths.
                <br />
                <a href="furtherInformation.php#sources">
                Sources
                </a>
              </p>
  
            </div>
          </div>

          <div class="col-lg container NI-class" id="NIlocalchart">
            <div class="chart-container">
              <h3>Northern Ireland Local Chart</h3>
              <div class="update-chart">
                <div id="NI-Local-Cases"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  NI Department of Health</a>
              </p>
            </div>
          </div>

        </div>

        <!--NI Cases & Deaths -->
        <div class="row">

          <div class="col-lg container NI-class" id="NIcases">
              <div class="chart-container">
                <h3>Northern Ireland Cases</h3>
                
                <div class="update-chart">
                  <div id="NI-Cases-Daily"></div>
                </div>
                <p class="sources"> 
                  Updated daily.
                  <br />
                  <span class="small-info">Note: The number of cases increased from June 25-26 due to a change in reporting.</span>
                  <br />
                  Source: <a href="https://coronavirus.data.gov.uk/">coronavirus.data.gov.uk</a>
                </p>
              </div>
          </div>

          <div class="col-lg container NI-class" id="NIdeaths">
              <div class="chart-container">
                <h3>Northern Ireland Deaths</h3>
                <div class="update-chart">
                  <div id="NI-Deaths-Daily"></div>
                </div>
                <p class="sources"> 
                  Updated daily.
                  <br />
                  Source: <a href="https://coronavirus.data.gov.uk/">coronavirus.data.gov.uk</a>
                </p>
              </div>
          </div>

        </div>

        
        <!-- NI Tests & Demographics-->
        <div class="row">

          <div class="col-lg container NI-class" id="NItests">
              <div class="chart-container">
                <h3>Northern Ireland Tests</h3>
                
                <div class="update-chart">
                  <div id="NI-tests-chart"></div>
                </div>

                <p class="sources"> 
                  This chart shows the number of individuals tested per day.
                  <br />
                  Updated weekly.
                  <br />
                  Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  NI Department of Health</a>
                  <br />
                  Visit the 
                  <a href="https://coronavirus.data.gov.uk/testing?areaType=nation&areaName=Northern%20Ireland">
                  Gov.uk</a> to see the total number of tests completed, including individuals tested repeatedly.
                </p>
              </div>
          </div>

          <div class="col-lg container NI-class" id="NIdemographics">
              <div class="chart-container">
                <h3>Northern Ireland Case Demographics</h3>

                <div class="update-chart">
                  <h5>Age & Gender</h5>
                  <div id="NI-demographics-chart"></div>
                  <div id="NI-demographics-gender-chart"></div>
                </div>

                <h3>Northern Ireland Death Demographics</h3>
                <div class="update-chart">
                  <h5>Age & Gender</h5>
                  <div id="NI-death-demographics-chart"></div>
                  <div id="NI-death-demographics-gender-chart"></div>
                </div>

                <p class="sources"> 
                  Updated weekly.
                  <br />
                  Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  NI Department of Health</a>
                </p>
              </div>
          </div>
        </div>

        <!-- NI Local Table & Donate-->
        <div class="row">

          <div class="col-lg container NI-class" id="NIlocaldata">
              <div class="chart-container">
                <h3>Northern Ireland Local Cases</h3>
                
                <div class="hideButton">
                  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#hideNIchart">Show Table</button>
                  <div id="hideNIchart" class="collapse cf">
                    <div class="update-chart">
                      <div id="dashboard_NI_local_div">
                        <div id="filter_NI_local_div"></div>
                        <div id="NI_local_table_div"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="sources"> 
                  Updated weekly.
                  <br />
                  Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  NI Department of Health</a>
                </p>

              </div>
          </div>

          <?php include('PHP/supportContainer.php'); ?>
        </div>

        <!--Antrim & Ards + Armagh -->
        <div class="row">
          <div class="col-lg container NI-class" id="antrimcases">
            <div class="chart-container" id="ardscases">
              <h3>Antrim & Newtownabbey - Ards & North Down</h3>
              <div class="update-chart">
                <div id="antrim-chart"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                NI Department of Health</a>
              </p>
            </div>
          </div>

            <div class="col-lg container NI-class" id="armaghcases">
              <div class="chart-container" id="lisburncases">
                <h3>Armagh, Banbridge, & Craigavon - Lisburn & Castlereagh</h3>
                <div class="update-chart">
                  <div id="armagh-chart"></div>
                </div>
                <p class="sources"> 
                  Updated weekly.
                  <br />
                  Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                  NI Department of Health</a>
                </p>
              </div>
            </div>
        </div>

        <!-- Belfast + Causeway & Derry-->
        <div class="row">
          <div class="col-lg container NI-class" id="belfastcases">
            <div class="chart-container">
              <h3>Belfast</h3>
              <div class="update-chart">
                <div id="belfast-chart"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                NI Department of Health</a>
              </p>
            </div>
          </div>
          <div class="col-lg container NI-class" id="causewaycases">
            <div class="chart-container" id="derrycases">
              <h3>Causeway Coast & Glens - Derry & Strabane</h3>
              <div class="update-chart">
                <div id="causeway-chart"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                NI Department of Health</a>
              </p>
            </div>
          </div>
        </div>


        <!--Fermanagh & Lisburn + Mid Antrim & Mid Ulster-->
        <div class="row">
          <div class="col-lg container NI-class" id="fermanaghcases">
            <div class="chart-container" id="midulstercases">
              <h3>Fermanagh & Omagh - Mid Ulster</h3>
              <div class="update-chart">
                <div id="fermanagh-chart"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                NI Department of Health</a>
              </p>
            </div>
          </div>

          <div class="col-lg container NI-class" id="midantrimcases">
            <div class="chart-container" id="newrycases">
              <h3>Mid & East Antrim - Newry, Mourne, & Down</h3>
              <div class="update-chart">
                <div id="midantrim-chart"></div>
              </div>
              <p class="sources"> 
                Updated weekly.
                <br />
                Source: <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">
                NI Department of Health</a>
              </p>
            </div>
          </div>
        </div>
        <!--  Info -->
        <div class="row">

            <div class="col-lg container NI-class" id="about">
              <div class="extra-info">
                <h3>What to Do</h3>
                <p>
                  If you are displaying any signs of coronavirus symptoms, such as:
                  <br />
                  - a high fever, <br />
                  - a dry cough, <br />
                  - or shortness of breath,
                  <br />
                  then you must follow the government guidelines to self isolate. Do not visit a hospital, GP, or pharmacy. <br />
                  Call 111 if your symptoms worsen or do not improve for 7 days. Only call 999 if you have an emergency. <br />
                </p>

                <h3>About the Data</h3>
                <p>
                  The data shown above has been collected from 
                  <a href="https://coronavirus.data.gov.uk/">coronavirus.data.gov.uk</a>, 
                  <a href="https://www.publichealth.hscni.net/publications/covid-19-surveillance-reports">Public Health Agency Northern Ireland</a>, and 
                  the Department of Health NI <a href="https://app.powerbi.com/view?r=eyJrIjoiZGYxNjYzNmUtOTlmZS00ODAxLWE1YTEtMjA0NjZhMzlmN2JmIiwidCI6IjljOWEzMGRlLWQ4ZDctNGFhNC05NjAwLTRiZTc2MjVmZjZjNSIsImMiOjh9">website</a>. 
                  <br />
                  Updates are generally released at 2pm GMT. Cases and deaths are updated daily. Local cases and tests are updated weekly.
                </p>

                <div class="NI-FAQ">
                  <h4>Frequently Asked Questions</h4>
                  <h6>Why are some charts not working?/Why is the page getting an error?</h6>
                  <p>
                    Safari users are currently experiencing an error as their cache is storing an old version of this page. 
                    While this issue is being addressed, please clear your cache or try the site on another browser (such as Chrome or Firefox).
                  </p>
                  <h6>Why is data missing from the 20th - 30th April?</h6>
                  <p>
                    The Department of Health NI website went offline after the 20th April. When the site returned on the 1st May, it did not include local data about the previous 10 days.
                    Data concerning cases, deaths, and tests have been updated on this site to fill in the missing days. 
                  </p>
                  <h6>Why do the daily deaths and cases change every day?</h6>
                  <p>
                    At present, many deaths and cases are released on the most recent day and then later added to the correct date. This most commonly occurs with the death data, 
                    as some deaths are released weeks after they happened. As a result, the daily death rate and cases are constantly changing.
                    <br />
                    This site is updated and backdated whenever new information becomes available. 
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

      <?php include("PHP/socialMedia.php"); ?>

      <!--Footer-->
      <?php include("PHP/footer.php"); ?>

      <!--Scroll button-->
      <a id="back-to-top" href="#" class="btn btn-dark btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>

      <!--Data Retrieval & Custom JS-->
      <script src="JS/responsive.js"></script>
      <script src="JS/NIScripts.js"></script>
      <script src="JS/NImap.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
