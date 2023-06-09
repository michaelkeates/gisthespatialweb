<div class="status">
  <h1>GIS & the Spatial Web</h1>
  <h2>Open Layers Web Mapping API</h2>
</div>
<div class="cards">
  <div class="card">
    <div class="card-content">
      <!--display resolution etc. using css-->
      <div id="mapContainer" class="mapstyle1"></div>
      <div id="myScaleLineContainer" class="scalestyle1"></div>
      <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div id="featureProperties"></div>
    <div id="card" class="card-info">
      <p id="displaymessage">
        Here is a basic 'slippy-map' with custom styles to change the look.
        Toggle any of the tiles in the third party layer switcher in the top
        right as well as toggle the layers via the checkboxes in the panel.
      </p>
    </div>
  </div>
</div>
</section>
</main>
<style>
  #issMap {
    height: 580px;
    width: 100%;
    z-index: 0;
  }
</style>
<script src="assets/js/openlayers/v4.6.5-dist/ol.js"></script>
<script src="plugins/openweathermap/leaflet-openweathermap.js"></script>
<!--need the jquery plugin to make the ajax work......duh!!!-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script type="text/javascript" src="https://openlayers.org/en/latest/build/ol.js"></script>
<script src="assets/js/openlayers/v4.6.5-dist/coordinate.js"></script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL,Object.assign"></script>
<script src="assets/js/openlayers/layerswitcher/ol-layerswitcher.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial13_basemap.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial13_task1_countries.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial13_task2_WMSLayer.js"></script>

<script src="assets/js/openlayers/openlayers_tutorial13_task4_monmouthshirepostcodeslayer.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial13_task5_BNGLayer.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js"></script>

<script src="assets/js/openlayers/openlayers_tutorial14_task1_simplemarker.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial14_task2_simplemarkerpng.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial14_task3_earthquakes.js"></script>

<script src="assets/js/openlayers/openlayers_tutorial14_task6_interactionsandevents.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial14_task7_interactionsandevents2.js"></script>
<script src="assets/js/openlayers/openlayers_tutorial14_task8_animation.js"></script>

<script src="assets/js/openlayers/openlayers_extra_task1_crime.js"></script>
<script src="assets/js/openlayers/openlayers_extra_task2_geolocate.js"></script>
<script src="assets/js/openlayers/openlayers_extra_task3_mountains.js"></script>
<script src="assets/js/openlayers/openlayers_extra_task4_polygon.js"></script>
</body>
<!--END-->
<?php
include('toggles.php');
?>

</html>