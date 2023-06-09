<div class="status">
  <h1>GIS & the Spatial Web</h1>
  <h2>LeafletJS Map API</h2>
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
        the zoom buttons.
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

<!--==TUTORIAL 16==-->
<script src="assets/js/leafletjs/leafletjs_tutorial16_task1_ajaxdentists.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial16_task1_getjsondentists.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial16_task3_sql3.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial16_task4_php_dentist.js"></script>

<!--==TUTORIAL 17==-->
<script src="assets/js/leafletjs/leafletjs_tutorial17_task1_wms_outline.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial17_task2_wms_aonb.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial17_task3_wms_nationalparks.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial17_task4_wms_layergroup.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial17_task5_wms_roads.js"></script>

<!--==TUTORIAL 18==-->
<!--<script src="assets/js/leafletjs/leafletjs_tutorial18_task1_wfs_dentist.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial18_task3_wms_dentist.js"></script>
<script src="assets/js/leafletjs/leafletjs_tutorial18_task5_wfs_dentist.js"></script>-->

<!--==EXTRAS==-->
<script src="assets/js/leafletjs/leafletjs_extra_wms_kenyaprotectedareas.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_wms_mountains.js"></script>
<!--<script src="assets/js/leafletjs/leafletjs_extra_wms_burgerking.js"></script>-->
<script src="assets/js/leafletjs/leafletjs_extra_wms_kenya_expressway.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_wms_kenya_residentialroads.js"></script>
<!--<script src="assets/js/leafletjs/leafletjs_extra_wfs_sssi_19.js"></script>-->
<script src="assets/js/leafletjs/leafletjs_extra_airportsoftheworld.js"></script>
<script src="assets/js/leafletjs/leafletjs_extra_uklocalflightpaths.js"></script>
</body>
<!--END-->
<?php
include('toggles.php');
?>

</html>