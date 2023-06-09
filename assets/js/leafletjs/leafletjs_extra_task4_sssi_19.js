//global veriable
var sss19layer;

//function to add geojson
function addsssi19() {
  var polygonStyle = {
    color: "#ff6600", //orange
    weight: 2,
    opacity: 1,
    fillOpacity: 0.2,
  };

  //add second style for the polygons
  var polygonStyle2 = {
    color: "#ff0000", //orange
    weight: 4,
    opacity: 1,
    fillOpacity: 0.6,
  };

  //create new geojson layer and add popup to each polygon
  sss19layer = L.geoJSON(sssilayer, {
    onEachFeature: function (feature, layer) {
      //add bindup to the polygon with html
      layer.bindPopup(
        "<h3>Name: " +
          feature.properties.sssi_name +
          "</h3>" +
          "<p>Date: " +
          feature.properties.osmm_date +
          "</p>" +
          "<p>Type: " +
          feature.properties.type +
          "</p>"
      );
    },
  });

  //if user clicks on each feature of polygon then highlight it, if user right clicks then reset the style
  sss19layer.on("click", function (e) {
    if (selected) {
      sss19layer.resetStyle(selected);
    }
    e.layer.setStyle(polygonStyle2);
    selected = e.layer;
    //mymap.fitBounds(e.layer.getBounds());

    //add event listener to reset the style of the polygon by right clicking
    e.layer.on("contextmenu", function (e) {
      e.layer.resetStyle(selected);
      selected = null;
    });
  });

  //add the style to the layer
  sss19layer.setStyle(polygonStyle)
}

function toggleSSSI19() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var issa19 = document.getElementById("toggleSSSIOverlayBtn");

  //added check to change appearence of toggled button to change css class
  if (issa19.classList.contains("card-button")) {
    issa19.classList.remove("card-button");
    issa19.classList.add("card-button-on");
  } else {
    issa19.classList.remove("card-button-on");
    issa19.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(sss19layer)) {
    mymap.removeLayer(sss19layer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(sss19layer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all Sites of Special Scientific Interest (SSSI) in Wales that was processed using the direct SQL/PostGIS route, styled and with a popup!";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(sss19layer.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsssi19, 1000);
