var wmsLyr_1;
var map_ops;

function wmsopenlayer1() {
  map_ops = { lat: 52.51850324705378, lng: -3.400725119241102 };

  wmsLyr_1 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://ces-gis.southwales.ac.uk:2345/geoserver/s07/wms",
      params: {
        'LAYERS': "s07:outline xoutline",
        'FORMAT': "image/png",
        'TRANSPARENT': true
      },
      serverType: 'geoserver'
    }),
    opacity: 1.0,
    attribution: "GeoServer: ces-gis"
  });
}

function togglewmsopenlayer1() {
  //get the button id
  var simpleMarker = document.getElementById("togglewmsopenlayer1Btn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  //if mymap.getLayers().getArray().includes(marker) == true then remove it else add it to map
  if (mymap.getLayers().getArray().includes(wmsLyr_1)) {
    mymap.removeLayer(wmsLyr_1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(wmsLyr_1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the Wales Outline layer loaded using WMS!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(wmsopenlayer1, 500);
