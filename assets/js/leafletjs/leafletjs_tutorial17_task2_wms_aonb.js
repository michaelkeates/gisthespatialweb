//define DB source
var wmsLyr_2;
var walescords;

function wmslayer2() {
  walescords = [52.1307, -3.7837];

  //declare the wms layer
  wmsLyr_2 = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:aonb xaonb",
      format: "image/png",
      transparent: true,
      attribution: "GeoServer: Michael Keates",
      style: "aonb_blue",
      transparent: true,
    }
  );
}

function toggleWMSLayer2() {
  //get the button id
  var simpleMarker = document.getElementById("toggleaonbBtn");

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
  if (mymap.hasLayer(wmsLyr_2)) {
    mymap.removeLayer(wmsLyr_2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(wmsLyr_2);
    //pan to the marker
    mymap.setView(walescords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the Wales Outline layer loaded using WMS!";
  }
  //pan to the marker
  mymap.fitBounds(wmsLyr_2.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(wmslayer2, 500);
