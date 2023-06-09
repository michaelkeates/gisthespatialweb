//global variables
var map1;
var polygonSelect;
var select;
var geoJSONLayer;
var el;
var checkbox = document.getElementById("selectInteractionOnOff").checked;

function addselectinteraction() {
  //set styles for polygons when selected and not selected
  polygonSelect = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "red",
      width: 2,
    }),
    fill: new ol.style.Fill({
      color: "blue",
    }),
  });

  //set select interaction
  select = new ol.interaction.Select({
    layers: [geoJSONLayer],
    style: [polygonSelect],
  });

  //add select interaction to map
  select.on("select", function (e) {
    document.getElementById("displaymessage").innerHTML =
      e.target.getFeatures().getLength() +
      " selected features (last operation selected " +
      e.selected.length +
      " and deselected " +
      e.deselected.length +
      " features)";
  });
  var isCheckedWithGlobalVariable = false;
  //get checkbox id
  document.getElementById("selectInteractionOnOff").onclick = function () {
    //check if checkbox is checked enable the interaction
    if (this.checked == true) {
      // the element is checked
      isCheckedWithGlobalVariable = true;
      map1.on("pointermove", onMouseMove);
      map1.addInteraction(select);
    }
  };
}

//show name of countires on hover
function onMouseMove(browserEvent) {
  var coordinate = browserEvent.coordinate;
  var pixel = map1.getPixelFromCoordinate(coordinate);
  el = document.getElementById("name");
  el.innerHTML = "";
  map1.forEachFeatureAtPixel(pixel, function (feature) {
    el.innerHTML += feature.get("name") + "<br>";
  });
}

function toggleSelectInteraction() {
  //toggle the layer
  if (geoJSONLayer.getVisible()) {
    geoJSONLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    map1.addInteraction(select);
    geoJSONLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the country polygons with the interactions enabled!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addselectinteraction, 500);
