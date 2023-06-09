//global variables
var map1;
var postcodesLayer;
var uk = ol.proj.fromLonLat([-2.8600091049521366, 51.61907768645292]);

function addmonmouthshirepostcodes() {
  //add geojson layer as verctor layer
  postcodesLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: "assets/geojson/monmouthshirepostcodes4326.json",
    }),
    zIndex: 2,
    Zoom: 2,
  });
  map1.addLayer(postcodesLayer);
  postcodesLayer.setVisible(false);

  //pan to uk on click
  onClick("postcodeLayerOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: uk,
      duration: 1000,
      zoom: 9,
    });
  });
}

function toggleMonmouthshireLayer() {
  //toggle the layer
  if (postcodesLayer.getVisible()) {
    postcodesLayer.setVisible(false);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    postcodesLayer.setVisible(true);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the polygons representing all the postcode units in Monmouthshire loaded as a external GeoJSON file! I wasn't able to find the dataset on Blackboard or Mark's website so I sourced the dataset <a href='https://longair.net/blog/author/mark/' target='_blank'>here</a>. Its roughly similar I think :S";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addmonmouthshirepostcodes, 500);
