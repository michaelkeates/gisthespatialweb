//define DB source
var airportlayer;
var map_ops;

function wmslayer1() {
  map_ops = { lat: 52.51850324705378, lng: -3.400725119241102 };

  airportlayer = L.tileLayer.wms(
    "https://ces-gis.southwales.ac.uk:2345/geoserver/s07/wms",
    {
      layers: "s07:airports_of_the_world",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: ces-gis",
    }
  );
}

function toggleWFSLayer1() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleMarker = document.getElementById("toggleAirportsBtn");

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
  if (mymap.hasLayer(airportlayer)) {
    mymap.removeLayer(airportlayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(airportlayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
    "Here are all the airports of the world! The site <a href='https://openflights.org/data.html#airport' target='_blank'>here</a> provides a csv file that was then processed in QGIS. Then added custom marker icons using a custom SLD style from GeoServer!";
  }
  //pan to the marker
  mymap.flyTo(map_ops, 4);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(wmslayer1, 500);
