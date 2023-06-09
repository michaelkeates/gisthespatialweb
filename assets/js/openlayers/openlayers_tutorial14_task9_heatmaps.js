var map1;
var heatlayer;

function addheatmap() {
  heatlayer = new ol.layer.Heatmap({
    title: "Earthquakes heatmap",
    source: new ol.source.Vector({
      url: "https://openlayers.org/en/v4.6.5/examples/data/kml/2012_Earthquakes_Mag5.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
    blur: 15,
    radius: 5,
  });
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
