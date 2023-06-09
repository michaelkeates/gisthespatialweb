var layer;

function addwelshcastlesinternaljson() {
  //create a layer
  layer = new Microsoft.Maps.Layer();

  //simple Geojson for a polygon
  var localgeojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [-3.182, 51.478],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [-3.9345533085794924, 51.642856385440574],
          type: "Point",
        },
      },
    ],
  };

  //load GeoJSON module
  Microsoft.Maps.loadModule("Microsoft.Maps.GeoJson", function () {
    //parse GeoJson to a Bing Map shape(s)
    var shape1 = Microsoft.Maps.GeoJson.read(localgeojson, {});
    //add shape to layer
    layer.add(shape1);
  });
  layer.setVisible(false);
  //add layer to map
  map.layers.insert(layer);
}

function togglewelshcastlesinternaljson() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  // Update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are the Welsh stadiums again via local GeoJSON!";

  //set the map to location and set zoom
  map.setView({
    center: new Microsoft.Maps.Location(52.0, -3.0),
    zoom: 8,
  });

  //toggle the layer
  if (layer.getVisible(true)) {
    layer.setVisible(false);
  } else {
    layer.setVisible(true);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwelshcastlesinternaljson, 1000);
