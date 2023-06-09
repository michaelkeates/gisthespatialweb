//global variables
var map1;
var marker;
var imageExtent;
var markerVectorLayer;

function addsimpleopenlayermarker() {
  //add simple marker
  marker = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.transform(birmingham, "EPSG:4326", "EPSG:3857")
    ),
  });
  vectorSource = new ol.source.Vector({
    features: [marker],
  });
  markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });
  map1.addLayer(markerVectorLayer);
  markerVectorLayer.setVisible(false);

  //pan to uk on click
  onClick("simpleMarkerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: uk,
      duration: 1000,
      zoom: 5,
    });
  });
}

function toggleSimpleOpenLayerMarker() {
  //toggle the layer
  if (markerVectorLayer.getVisible()) {
    markerVectorLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    markerVectorLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple marker!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimpleopenlayermarker, 500);
