//define DB source
var roadlayer;
var map_ops;

function roadlayer1() {
  map_ops = { lat: 52.51850324705378, lng: -3.400725119241102 };

  roadlayer = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:roads",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: Michael Keates",
    }
  );
}

function toggleRoadlayer() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleMarker = document.getElementById("toggleroadlayerBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  //if mymap.hasLayer(marker) == true then remove it else add it to map
  if (mymap.hasLayer(roadlayer)) {
    mymap.removeLayer(roadlayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(roadlayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
    "Here is the road layer styled using a custom SLD style that was generated using QGIS.";
  }
  //pan to the marker
  mymap.flyTo(map_ops, 12);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(roadlayer1, 500);
