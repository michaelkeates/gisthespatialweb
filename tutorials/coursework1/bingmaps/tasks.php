<div class="status">
  <h1>GIS & the Spatial Web</h1>
  <h2>Introducing the Bing Maps API</h2>
  <form id="form">
    <input type="search" id="searchInput" name="q" placeholder="Search...">
  </form>
</div>
<div class="cards">
  <div class="card">
    <div class="card-content">
      <!--display resolution etc. using css-->
      <div id="bingMap"></div>
    </div>
  </div>
  <div class="card">
    <div class="card-info">
      <!--update the text below using javascript to notify the user of what is going on!-->
      <p id="displaymessage">Some information that will be describing the embedded maps. This will be replaced by innerHTML in each of the javascripts</p>
    </div>
  </div>
</div>
</section>
</main>
<!--========= BING MAPS API ===============-->
<!--initiate map and add buttons/style etc-->
<script defer src="assets/js/bingmaps/bingmaps_tutorial7.js"></script>

<!--Note the link below comes from the server and the 'key=etc...'' is the api key i had to generate in order to be able to use bing maps on this website-->
<script src='https://www.bing.com/api/maps/mapcontrol?&key=KEY&callback=GetMap' async defer></script>

<!--load the data for the maps respectively-->
<script src="assets/js/bingmaps/bingmaps_tutorial7_welshstadiums_local.js"></script>
<script src="assets/js/bingmaps/bingmaps_tutorial7_welshstadiums_external.js"></script>
<script src="assets/js/bingmaps/bingmaps_tutorial7_kenyanationalparks.js"></script>
<script src="assets/js/bingmaps/bingmaps_extra_kenyapoverty.js"></script>

</body>
<!--END-->
<!--include the toggle buttons from another php page cause I'm too lazy to do multiple html pages of the same code and updating each one if something has to be changed-->
<?php
include('toggles.php');
?>

</html>