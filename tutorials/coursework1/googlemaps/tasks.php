<div class="status">
  <h1>GIS & the Spatial Web</h1>
  <h2>Introducing the Google Maps API</h2>
  <form id="form">
    <input type="search" id="searchInput" name="q" placeholder="Search...">
  </form>
</div>
<div class="cards">
  <div class="card">
    <div class="card-content">
      <!--display resolution etc. using css-->
      <div id="map"></div>
    </div>
  </div>
  <div class="card">
    <div class="card-info">
      <p id="displaymessage">Some information that will be describing the embedded maps</p>
    </div>
  </div>
</div>
</section>
</main>
<!--========= GOOGLE MAPS API ===============-->
<!--we use this javascript to change elements such as map type etc. or add buttons-->
<script src="assets/js/googlemaps/googlemaps_tutorial4.js"></script>

<!--Add function for tasks to be toggled-->
<script src="assets/js/googlemaps/googlemaps_tutorial5_simplemarker.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_principalitymarker.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_libertymarker.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_welshcastles.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_simplepolyline.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_polylinecardiffroutes.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_windfarmsites.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_simpleinfowindow.js"></script>
<script src="assets/js/googlemaps/googlemaps_tutorial5_stadiuminfowindows.js"></script>

<script src="assets/js/googlemaps/googlemaps_extra_crimes.js"></script>
<script src="assets/js/googlemaps/googlemaps_extra_walesboundaries.js"></script>
<script src="assets/js/googlemaps/googlemaps_extra_welshcastles.js"></script>

<!--Note the link below comes from the server and the 'key=etc...'' is the api key i had to generate in order to be able to use google maps on this website-->
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=KEY&libraries=places&callback=initMap" async defer></script>
<!--<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>-->
<script src="https://cdn.jsdelivr.net/npm/@google/markerclustererplus@2.1.11/src/markerclusterer.js"></script>
<!--<script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>-->

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</body>
<!--END-->
<?php
include('toggles.php');
?>

</html>