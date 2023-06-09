//global variables
var map1;
var wmsLayer;
var usa = ol.proj.fromLonLat([-95.48840194207712, 38.324391659982254]);

function addwmslayer() {
  //add wms layer
  wmsLayer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      //as of 2023-02-23 this is not working and giving a 502 error. it worked the day before :/
      url: "https://ahocevar.com/geoserver/wms",
      params: {
        LAYERS: "topp:states",
        TILED: true,
      },
      serverType: "geoserver",
    }),
    zIndex: 1,
    opacity: 0.2,
  });
  map1.addLayer(wmsLayer);
  wmsLayer.setVisible(false);
  //pan to usa on click
  onClick("wsmLayerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: usa,
      duration: 1000,
    });
  });
}

function toggleWMSLayer() {
  //toggle the layer
  if (wmsLayer.getVisible()) {
    wmsLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    wmsLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the WMS Layer!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwmslayer, 500);
