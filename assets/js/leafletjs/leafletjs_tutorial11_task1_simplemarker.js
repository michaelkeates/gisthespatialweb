//declare global variables
var marker;
var map_ops;

function addleafletmarker() {
  //this is centre of wales
  map_ops = { lat: 52.47106862668122, lng: -3.5705030952986556 };

  //create a marker and set its position
  marker = L.marker(map_ops).bindPopup("A simple marker!");
}

function toggleLeafletMarker() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleMarker = document.getElementById("simpleMarkerBtn");

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
  if (mymap.hasLayer(marker)) {
    mymap.removeLayer(marker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(marker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple marker!";
  }
  //pan to the marker
  mymap.flyTo(map_ops, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addleafletmarker, 500);
