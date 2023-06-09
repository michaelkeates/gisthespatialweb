//global variables
var councillayer;
var selected;

//style for the polygons
function style1(feature) {
  return {
    fillColor: "#00FFFF",
    fillOpacity: 0.2,
    color: "#00FFFF",
    weight: 2,
  };
}
//style for the polygons
function style2(feature) {
  return {
    fillColor: "#FF0000",
    fillOpacity: 0.6,
    color: "#FF0000",
    weight: 4,
  };
}
//add event handler to the polygons
function addHandler(feature, layer) {
  layer.on({
    click: highlightFeature,
  });
}
//highlight the polygon
function highlightFeature(e) {
  if (selected) {
    //contentLayer.resetStyle(selected);
    contentLayer.setStyle(selected);
  }
  e.target.setStyle(style2());
  selected = e.target;
  mymap.fitBounds(e.target.getBounds());

  //add event listener to reset the style of the polygon by right clicking
  e.target.on("contextmenu", function (e) {
    e.target.setStyle(style1());
    //below not working?
    //e.target.resetStyle(selected);
    selected = null;
  });
}
//add the polygons to the map
async function addpostgresgeojsoncouncils() {
  councillayer = L.geoJSON(welshcouncils, {
    style: style1,
    onEachFeature: addHandler,
  });
}

function togglePostGresGeoJsonCouncils() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var geojsoncouncils = document.getElementById(
    "togglePostGresGeoJsonCouncilsBtn"
  );

  //added check to change appearence of toggled button to change css class
  if (geojsoncouncils.classList.contains("card-button")) {
    geojsoncouncils.classList.remove("card-button");
    geojsoncouncils.classList.add("card-button-on");
  } else {
    geojsoncouncils.classList.remove("card-button-on");
    geojsoncouncils.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(councillayer)) {
    mymap.removeLayer(councillayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(councillayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all the markers for dentists that was processed using the direct SQL/PostGIS route!";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(councillayer.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpostgresgeojsoncouncils, 500);
