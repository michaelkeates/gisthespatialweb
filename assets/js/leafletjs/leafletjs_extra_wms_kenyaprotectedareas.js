//define DB source
var keprotectedareas;
var kenyacoords;

function wmskenyaprotectedareas() {
  kenyacoords = { lat: 0.0236, lng: 37.9062 };
  
  keprotectedareas = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:ke_protected-areas",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: Michael Keates",
    }
  );
}

function togglewmskenyaprotectedareas() {
  //get the button id
  var simpleMarker = document.getElementById("togglewmskenyaprotectedareasBtn");

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
  if (mymap.hasLayer(keprotectedareas)) {
    mymap.removeLayer(keprotectedareas);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(keprotectedareas);
    //pan to the marker
    mymap.setView(kenyacoords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the Wales Outline layer loaded using WMS!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(wmskenyaprotectedareas, 500);
