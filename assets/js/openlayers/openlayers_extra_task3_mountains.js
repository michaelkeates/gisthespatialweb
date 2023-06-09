//global variables
var map1;
var uk = ol.proj.fromLonLat([-2.8600091049521366, 51.61907768645292]);

function addmountains() {
  //add custom icons to markers
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1.0],
      anchorXUnits: "fraction",
      anchorYUnits: "fraction",
      src: "assets/img/619010.png",
    }),
  });
  //add geojson layer as verctor layer
  geoMountains = new ol.layer.Vector({
    source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: "assets/geojson/mountains.js",
    }),
    zIndex: 2,
    Zoom: 2,
  });
  //give markers custom png from iconStyle
  geoMountains.setStyle(iconStyle);

  map1.addLayer(geoMountains);
  geoMountains.setVisible(false);

  //pan to uk on click
  onClick("mountainsOnOff", function () {
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
setTimeout(addmountains, 500);
