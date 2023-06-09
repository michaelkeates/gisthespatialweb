//global veriable
var dentistslayer2;

//function to add geojson
async function addpostgresgeojsondentists() {
  var markerOptions = {
    radius: 8,
    fillColor: "#ff6600",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };

  //applu markerOptions to all points in dentistklayer2
  dentistslayer2 = L.geoJSON(postgesdentists, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, markerOptions);
    }
  });
}

function togglePostGresGeoJsonDentists() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var geoJsonDentists = document.getElementById(
    "togglePostGresGeoJsonDentistsBtn"
  );

  //added check to change appearence of toggled button to change css class
  if (geoJsonDentists.classList.contains("card-button")) {
    geoJsonDentists.classList.remove("card-button");
    geoJsonDentists.classList.add("card-button-on");
  } else {
    geoJsonDentists.classList.remove("card-button-on");
    geoJsonDentists.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(dentistslayer2)) {
    mymap.removeLayer(dentistslayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(dentistslayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all the markers for dentists that was processed using the direct SQL/PostGIS route and custom styling!";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(dentistslayer2.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpostgresgeojsondentists, 500);
