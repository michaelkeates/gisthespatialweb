var map1;
var crimelayer;

function addcrime() {
  //add markers from https://data.police.uk/api/crimes-street/all-crime?poly=52.268,0.543:52.794,0.238:52.130,0.478&date=2017-01 using json and add to map openlayers
  crimelayer = new ol.layer.Heatmap({
    title: "Crime heatmap",
    source: new ol.source.Vector({
      url: "assets/geojson/southwalescrime.json",
      format: new ol.format.GeoJSON(),
    }),
    blur: 15,
    radius: 5,
  });
  map1.addLayer(crimelayer);

}

function toggleClickEvent() {
  //lazy mode
  window.scrollTo({ top: 0, behavior: "smooth" });

  var simpleMarker = document.getElementById("toggleMapOverviewBtn");

  //added check to change appearence of toggled button to change css class
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  if (geoJSONLayer.getVisible()) {
    geoJSONLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    map1.addInteraction(select);
    geoJSONLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addclickevenent, 500);
