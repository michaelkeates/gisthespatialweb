//global vriables
var map1;
var myStyle2;
var eqLayer;

function addearthquakes() {
  //add image to the earthquakes
  myStyle2 = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: "fraction",
      anchorYUnits: "fraction",
      src: "assets/img/EQ.png",
    }),
  });

  //add earthquakes from external kml
  eqLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: "https://openlayers.org/en/v4.6.5/examples/data/kml/2012_Earthquakes_Mag5.kml",
      format: new ol.format.KML({
        extractStyles: false,
      }),
    }),
    style: myStyle2,
  });
  map1.addLayer(eqLayer);
  eqLayer.setVisible(false);

  //pan to uk on click
  onClick("eqLayerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: uk,
      duration: 1000,
      zoom: 4,
    });
  });
}

function toggleEarthquakes() {
  //toggle the layer
  if (eqLayer.getVisible()) {
    eqLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    eqLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addearthquakes, 500);
