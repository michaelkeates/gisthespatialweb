//define DB source
var kenyaresidentialroads;
var kenyacoords;

function addKenyaresidentialroads() {
  kenyacoords = { lat: 0.0236, lng: 37.9062 };

  kenyaresidentialroads = L.tileLayer.wms(
    "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/wms",
    {
      layers: "geoserver:kenya_roads_residential",
      format: "image/png",
      transparent: true,
      opacity: 1.0,
      attribution: "GeoServer: Michael Keates",
    }
  );
}

function toggleKenyaresidentialroads() {
  //get the button id
  var simpleMarker = document.getElementById("toggleKenyaresidentialroadsBtn");

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
  if (mymap.hasLayer(kenyaresidentialroads)) {
    mymap.removeLayer(kenyaresidentialroads);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(kenyaresidentialroads);
    //pan to the marker
    mymap.setView(kenyacoords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a road layer styled using a custom SLD style that was generated using QGIS. The data set can be found <a href='https://www.data.gouv.fr/en/datasets/osm2igeo-kenya/' target='_blank'>here</a>.";
  }
  //pan to the marker
  mymap.fitBounds(kenyaresidentialroads.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addKenyaresidentialroads, 500);
