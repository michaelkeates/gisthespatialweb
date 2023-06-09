//global variabes
var map1;
var bngLayer;
var imageExtent;
var uk2 = ol.proj.fromLonLat([-1.384830236635366, 52.648096474510965]);

function addbnglayer() {
  //reporject tl e;psg:27700
  proj4.defs(
    "EPSG:27700",
    "+proj=tmerc+lat_0=49+lon_0=-2+k=0.9996012717" +
      "+x_0=400000+y_0=-100000+ellps=airy" +
      "+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489" +
      "+units=m+no_defs"
  );
  imageExtent = [0, 0, 700000, 1300000];

  //add bng layer
  bngLayer = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/British_National_Grid.svg/2000px-British_National_Grid.svg.png",
      projection: "EPSG:27700",
      imageExtent: imageExtent,
    }),
  });
  map1.addLayer(bngLayer);
  bngLayer.setVisible(false);

  //pan to uk on click
  onClick("bngLayerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: uk2,
      duration: 1000,
      zoom: 5,
    });
  });
}

function toggleBNGLayer() {
  //toggle the layer
  if (bngLayer.getVisible()) {
    bngLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    bngLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the BNG Layer!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addbnglayer, 500);
