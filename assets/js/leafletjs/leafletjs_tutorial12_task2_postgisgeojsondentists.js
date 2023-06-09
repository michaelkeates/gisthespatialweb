//global variable
var dentistslayer1;

//add geojson from postgis
async function addpostgisgeojsondentists() {
  dentistslayer1 = L.geoJSON(postgisdentists, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.address1);
    },
  });
}

function togglePostGisGeoJsonDentists() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var postgisgeoJsonDentists = document.getElementById(
    "togglePostGisGeoJsonDentistsBtn"
  );

  //added check to change appearence of toggled button to change css class
  if (postgisgeoJsonDentists.classList.contains("card-button")) {
    postgisgeoJsonDentists.classList.remove("card-button");
    postgisgeoJsonDentists.classList.add("card-button-on");
  } else {
    postgisgeoJsonDentists.classList.remove("card-button-on");
    postgisgeoJsonDentists.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(dentistslayer1)) {
    mymap.removeLayer(dentistslayer1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(dentistslayer1);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all the markers for dentists that was processed using the QGIS route!";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(dentistslayer1.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpostgisgeojsondentists, 500);
