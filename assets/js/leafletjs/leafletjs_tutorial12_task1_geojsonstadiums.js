//global variables
var myGeoJson;
var contentLayer;

function addgeojsonstadiums() {
  //create geojson object
  myGeoJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-3.9346, 51.6427],
        },
        properties: {
          name: "Liberty Stadium",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-3.1825, 51.47806],
        },
        properties: {
          name: "Principality Stadium",
        },
      },
    ],
  };
  //add popup for each marker with the name of the stadium from porperties in geojson
  myGeoJson = L.geoJSON(myGeoJson, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name);
    },
  });
}

function toggleGeoJsonStadiums() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var geoJsonStadiums = document.getElementById("toggleGeoJsonStadiumsBtn");

  //added check to change appearence of toggled button to change css class
  if (geoJsonStadiums.classList.contains("card-button")) {
    geoJsonStadiums.classList.remove("card-button");
    geoJsonStadiums.classList.add("card-button-on");
  } else {
    geoJsonStadiums.classList.remove("card-button-on");
    geoJsonStadiums.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(myGeoJson)) {
    mymap.removeLayer(myGeoJson);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(myGeoJson);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the stadiums loaded using GeoJson!";
  }
  //fit map to bounds of geojson
  mymap.fitBounds(myGeoJson.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addgeojsonstadiums, 500);
