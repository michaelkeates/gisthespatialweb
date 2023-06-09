//define DB source
var WMSBurgerking;
var walescords;

function addburgerking() {
  walescords = [52.1307, -3.7837];

  WMSBurgerking = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:burgerking",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: Michael Keates",
    }
  );
}

function toggleBurgerKing() {
  //get the button id
  var simpleMarker = document.getElementById("toggleBurgerKingBtn");

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
  if (mymap.hasLayer(WMSBurgerking)) {
    mymap.removeLayer(WMSBurgerking);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(WMSBurgerking);
    //pan to the marker
    mymap.setView(walescords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the welsh mountsins loaded using the WMS route with custom icon in a SLD style!";
  }
  //pan to the marker
  mymap.fitBounds(WMSBurgerking.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addburgerking, 500);
