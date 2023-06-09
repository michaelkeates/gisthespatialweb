//define DB source
var WMSgeotiff;
var walescords;

function addgeotiff() {
  walescords = [52.1307, -3.7837];

  WMSgeotiff = L.tileLayer.wms(
    "https://ces-gis.southwales.ac.uk:2345/geoserver/s07/wms",
    {
      layers: "s07:sfdem",
      format: "image/jpeg",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: ces-gis",
    }
  );
}

function togglegeotiff() {
  //get the button id
  var simpleMarker = document.getElementById("togglegeotiffBtn");

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
  if (mymap.hasLayer(WMSgeotiff)) {
    mymap.removeLayer(WMSgeotiff);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(WMSgeotiff);
    //pan to the marker
    mymap.setView(walescords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a tiff image loaded using WMS. I wanted to upload a custom geoTiff image file but I couldn't :(!";
  }
  //pan to the marker
  //mymap.fitBounds(WMSgeotiff.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addgeotiff, 500);
