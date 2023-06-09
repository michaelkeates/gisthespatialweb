//declare a global variables
var libertyMarker;
var swanseastadium;

function addlibertymarker() {
  //this is the principality stadium in cardiff
  swanseastadium = { lat: 51.642, lng: -3.935 };

  //create a marker and set its position as well as add pop up
  libertyMarker = L.marker(swanseastadium).bindPopup(
    "Here is the Liberty Stadium in Swansea!"
  );
}

function toggleLibertyMarker() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleLibertyMarker = document.getElementById("simpleLibertyMarkersBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleLibertyMarker.classList.contains("card-button")) {
    simpleLibertyMarker.classList.remove("card-button");
    simpleLibertyMarker.classList.add("card-button-on");
  } else {
    simpleLibertyMarker.classList.remove("card-button-on");
    simpleLibertyMarker.classList.add("card-button");
  }

  //if map has layer enabled then remove it else add it
  if (mymap.hasLayer(libertyMarker)) {
    mymap.removeLayer(libertyMarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(libertyMarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the Liberty Stadium in Swansea!";
  }
  //pan to the marker
  mymap.flyTo(swanseastadium, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addlibertymarker, 500);
