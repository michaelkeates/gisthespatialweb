//global variables
var map1;
var vectorLayer;

function addpolygon() {
  //set styles for polygons when selected and not selected
  polygonSelect = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "red",
      width: 2,
    }),
    fill: new ol.style.Fill({
      //using rgba just to get opacity working
      color: "rgba(255, 255, 0, 0.61)",
    }),
  });

  //get geojson from a url, add events and style to each polygon to allow the user to click on them and see the name of the polygon
  fetch("assets/geojson/monmouthshirepostcodes4326.json")
    .then((response) => response.json())
    .then((data) => {
      //create a vector layer
      vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: new ol.format.GeoJSON().readFeatures(data, {
            //add a style to each polygon
            featureProjection: "EPSG:3857",
            dataProjection: "EPSG:4326",
          }),
        }),
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(0, 0, 255, 1.0)",
            width: 2,
          }),
          fill: new ol.style.Fill({
            color: "rgba(0, 0, 255, 0.1)",
          }),
        }),
      });
      //add the vector layer to the map
      map1.addLayer(vectorLayer);
      //set the vector layer to invisible
      vectorLayer.setVisible(false);
    });
  //add events so user can click on each polygon
  map1.on("singleclick", function (evt) {
    map1.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      //update box the message
      document.getElementById("displaymessage").innerHTML =
        "You clicked on the postcode unit: " + feature.get("postcodes");
      //change polygon to red
      feature.setStyle(polygonSelect);
      //change polygon back to blue after 2 seconds because im lazy and cant be bothered click on the polygon again :S
      setTimeout(function () {
        feature.setStyle(
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: "rgba(0, 0, 255, 1.0)",
              width: 2,
            }),
            fill: new ol.style.Fill({
              color: "rgba(0, 0, 255, 0.1)",
            }),
          })
        );
      }
      , 2000);
    })
  });
}

function toggleMonmouthshireLayer() {
  //toggle the layer
  if (geoMountains.getVisible()) {
    geoMountains.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    geoMountains.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the polygons representing all the postcode units in Monmouthshire loaded as a external GeoJSON file! I wasn't able to find the dataset on Blackboard or Mark's website so I sourced the dataset <a href='https://longair.net/blog/author/mark/' target='_blank'>here</a>. Its roughly similar I think :S";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpolygon, 500);
