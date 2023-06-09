//global variables
var map1;
var myStyle;
var marker;
var imageExtent;
var markerVectorLayerPNG;

function addsimpleopenlayermarkerpng() {
  //add simple marker with custom image
  myStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1.0],
      anchorXUnits: "fraction",
      anchorYUnits: "fraction",
      src: "assets/img/marker.png",
    }),
  });
  marker = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.transform(birmingham, "EPSG:4326", "EPSG:3857")
    ),
    name: "Birmingham",
    population: 2607437,
  });
  vectorSource = new ol.source.Vector({
    features: [marker],
  });
  markerVectorLayerPNG = new ol.layer.Vector({
    source: vectorSource,
    style: myStyle,
  });
  map1.addLayer(markerVectorLayerPNG);
  markerVectorLayerPNG.setVisible(false);

  //pan to uk on click
  onClick("simplePNGMarkerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: uk,
      duration: 1000,
      zoom: 5,
    });
  });
}

function toggleSimpleOpenLayerMarkerPNG() {
  //toggle the layer
  if (markerVectorLayerPNG.getVisible()) {
    markerVectorLayerPNG.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    markerVectorLayerPNG.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple marker with a custom png for the icon!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimpleopenlayermarkerpng, 500);
