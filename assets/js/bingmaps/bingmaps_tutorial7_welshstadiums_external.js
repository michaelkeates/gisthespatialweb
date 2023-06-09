var layer2;

function addwelshcastlesexternaljson() {
  //create layer
  layer2 = new Microsoft.Maps.Layer();

  //Load GeoJSON module.
  Microsoft.Maps.loadModule("Microsoft.Maps.GeoJson", function () {
    //Read the GeoJSON file that is hosted on the same domain.
    Microsoft.Maps.GeoJson.readFromUrl(
      "assets/geojson/welshstadiums.json",
      function (shapes) {
        // Set the color of the pushpin to red and custom icon
        shapes.forEach(function (shape) {
          shape.setOptions({ color: "red", icon: "assets/img/castle.png" });
        });

        //add shape to layer
        layer2.add(shapes);
        //Add the shape(s) to the map.
        //map.entities.push(shapes);
        map.layers.insert(layer2);
        layer2.setVisible(false);
      }
    );
  });
}

function togglewelshcastlesexternaljson() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  // Update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are the Welsh stadiums again via external GeoJSON!";

  //set the map to location and set zoom
  map.setView({
    center: new Microsoft.Maps.Location(52.0, -3.0),
    zoom: 8,
  });

  //toggle the layer
  if (layer2.getVisible(true)) {
    layer2.setVisible(false);
  } else {
    layer2.setVisible(true);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwelshcastlesexternaljson, 1000);
