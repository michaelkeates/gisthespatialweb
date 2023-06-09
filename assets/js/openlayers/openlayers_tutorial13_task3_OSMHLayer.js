//global variables
var map1;
var osmHLayer;

function addosmhlayer() {
  //add osm hot layer
  var osmHLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
      url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    }),
    setVisibe: false,
  });
  map1.addLayer(osmHLayer);
}

function toggleOSMHLayer() {
  //toggle the layer
  if (osmHLayer.getVisible()) {
    osmHLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    osmHLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the OSMH Layer!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addosmhlayer, 500);
