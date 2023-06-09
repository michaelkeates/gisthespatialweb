//declare global variables
var principalityMarker;
var cardiffstadium;

function addprincipalitymarker() {
  //this is the principality stadium in cardiff
  cardiffstadium = { lat: 51.481, lng: -3.179 };

  //create a marker and set its position for cardiff stadium and add pop up
  principalityMarker = L.marker(cardiffstadium).bindPopup(
    "Here is the Principality Stadium in Cardiff!"
  );
}

function togglePrincipalityMarker() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simplePrincipalityMarker = document.getElementById(
    "simplePrincipalityMarkerBtn"
  );

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simplePrincipalityMarker.classList.contains("card-button")) {
    simplePrincipalityMarker.classList.remove("card-button");
    simplePrincipalityMarker.classList.add("card-button-on");
  } else {
    simplePrincipalityMarker.classList.remove("card-button-on");
    simplePrincipalityMarker.classList.add("card-button");
  }

  //if mymap had the layer enabled then remove it else add it
  if (mymap.hasLayer(principalityMarker)) {
    mymap.removeLayer(principalityMarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(principalityMarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the Principality Stadium in Cardiff!";
  }
  //pan to the marker
  mymap.flyTo(cardiffstadium, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addprincipalitymarker, 500);
