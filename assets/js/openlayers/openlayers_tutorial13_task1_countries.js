//global variables
var map1;
var geoJSONLayer;

function addcountries() {
  //add geojson layer as verctor layer
  geoJSONLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: "https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson",
    }),
  });
  map1.addLayer(geoJSONLayer);
  geoJSONLayer.setVisible(false);
}

function toggleCountries() {
  //toggle the layer
  if (geoJSONLayer.getVisible()) {
    geoJSONLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    geoJSONLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the country borders!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addcountries, 500);
