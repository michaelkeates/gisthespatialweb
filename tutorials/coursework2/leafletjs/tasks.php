<div class="status">
  <h1>GIS & the Spatial Web</h1>
  <h2>LeafletJS Web Mapping API</h2>
</div>
<div class="cards">
  <div class="card">
    <div class="card-content">
      <!--display resolution etc. using css-->
      <div id="issMap"></div>
    </div>
  </div>
  <div class="card">
    <div id="featureProperties"></div>
    <div id="card" class="card-info">
      <p id="displaymessage">
        Here is a basic 'slippy-map' with custom styles to change
        the look. You can pan to your current position as long as
        you are not using a adblocker by clicking the button below
        the zoom buttons. This was done by the geolet plugin that
        can be found
        <a href="https://github.com/rhlt/leaflet-geolet" target="_blank">here</a>
        Toggle any of the buttons below to display something on the
        map, click the toggle again to hide the feature! You can
        hover over the toggle to get more information! PLEASE NOTE
        if you see a marker being dropped on the map upon first
        loading, thats because the map is loading markers from the
        SSSI_19 geoJSON layer and had a brain fart. Please refresh
        the page again and it should work :S
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
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<!--==LEAFLET TOGGLES==-->
<!--==TUTORIAL 11==-->
<script src="assets/js/leafletjs/leafletjs_tutorial11_basemap.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task1_simplemarker.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task2_principalitymarker.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task3_libertymarker.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task4_stadiums.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task5_animatedbouncemarker.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task6_animateddropmarker.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task7_welshcastles.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task8_simplepolyline.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task9_polylinecardiffroutes.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial11_task10_windfarmsites.js"></script>
<!--==TUTORIAL 12==-->
<!--==load geojsons==-->
<script src="assets/geojson/dentists1.js"></script>
<script src="assets/geojson/dentists2.js"></script>
<script src="assets/geojson/councils.js"></script>
<script async src="assets/geojson/sssi_19.js"></script>
<script src="assets/geojson/secondary_schools.js"></script>

<script src="assets/js/leafletjs/leafletjs_tutorial12_task1_geojsonstadiums.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial12_task2_postgisgeojsondentists.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial12_task3_postgresgeojsondentists.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial12_task4_postgresgeojsoncouncils.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hosuaby/Leaflet.SmoothMarkerBouncing@v3.0.2/dist/bundle.js" crossorigin="anonymous"></script>

<!--<script src="http://maximeh.github.io/leaflet.bouncemarker/bouncemarker.js"></script>-->

<script src="assets/js/leafletjs/leafletjs_extra_task1_iss.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_task2_videooverlay.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_task3_weatheroverlay.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_task4_sssi_19.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_task5_secondaryschools.js"></script>
</body>
<!--END-->
<?php
include('toggles.php');
?>

</html>