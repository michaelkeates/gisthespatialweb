//define DB source
var roadlayer;
var walescords;

function roadlayer1() {
  walescords = [52.1307, -3.7837];

  //declare the wms layer
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
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(roadlayer);
    //pan to the marker
    mymap.setView(walescords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the road layer styled using a custom SLD style that was generated using QGIS.";
  }
  //pan to the marker
  mymap.fitBounds(roadlayer.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(roadlayer1, 500);
