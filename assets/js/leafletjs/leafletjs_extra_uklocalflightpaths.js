//define DB source
var airportflightlayer2;
var ukcoords;

function wfslayer2() {
  ukcoords = [52.1307, -3.7837];

  //declare the wms layer
  airportflightlayer2 = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:uklocalflights",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: Michael Keates",
    }
  );
}

function toggleWFSLayer2() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleMarker = document.getElementById("toggleFlightsBtn");

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
  if (mymap.hasLayer(airportflightlayer2)) {
    mymap.removeLayer(airportflightlayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(airportflightlayer2);
    //pan to the marker
    mymap.setView(ukcoords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
    "Here are all the local flight paths of the UK! The site <a href='https://openflights.org/data.html#airport' target='_blank'>here</a> provides a csv file that was then processed in QGIS. A custom CSS styling was applied in GeoServer";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(airportflightlayer2.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(wfslayer2, 500);
