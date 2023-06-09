//global variables
var mkr_ops1;
var myCentre;

function addasimpleanimatedbouncemarker() {
  //this is centre of map
  myCentre = mymap.getCenter();
  someposition = { lat: 51.617, lng: -3.903 };

  //create a marker and set its position
  mkr_ops1 = L.marker(myCentre).bindPopup("Cool!").addTo(mymap).bounce();

  //remove the marker
  mymap.removeLayer(mkr_ops1);
}

function toggleSimpleAnimatedBounceMarker() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleanimatedmarker = document.getElementById("simpleAnimatedMarkerBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleanimatedmarker.classList.contains("card-button")) {
    simpleanimatedmarker.classList.remove("card-button");
    simpleanimatedmarker.classList.add("card-button-on");
  } else {
    simpleanimatedmarker.classList.remove("card-button-on");
    simpleanimatedmarker.classList.add("card-button");
  }

  //if marker is visible, remove it else add it to map
  if (mymap.hasLayer(mkr_ops1)) {
    mymap.removeLayer(mkr_ops1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(mkr_ops1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple animated marker that I forgot to do for Google maps :S. This was done via a plugin that can be viewed " +
      " " +
      "<a href='https://github.com/maximeh/leaflet.bouncemarker'>here</a>" +
      ".";
  }

  mymap.flyTo(myCentre, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addasimpleanimatedbouncemarker, 1000);
