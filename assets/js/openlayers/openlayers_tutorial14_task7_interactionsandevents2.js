//global variables
var map1;
var polygonSelect;
var select;
var geoJSONLayer;
var el;

function addclickevenent() {
  //set url as source
  var wmsSource = new ol.source.TileWMS({
    url: "https://ahocevar.com/geoserver/wms",
    params: {
      tiled: true,
      LAYERS: "topp:states",
    },
  });

  var wmsLayer = new ol.layer.Tile({
    source: wmsSource,
  });
  var view = new ol.View({
    center: [-11000000, 5000000],
    zoom: 4,
  });

  var isCheckedWithGlobalVariable = false;
  document.getElementById("selectClickEventOnOff").onclick = function () {
    //if checkbox is checked enable the interaction
    if (this.checked == true) {
      // the element is checked
      isCheckedWithGlobalVariable = true;
      map1.on("singleclick", function (evt) {
        document.getElementById("nodelist").innerHTML =
          "Loading... please wait...";
        var view = map1.getView();
        var viewResolution = view.getResolution();
        var myUrl = wmsSource.getGetFeatureInfoUrl(
          evt.coordinate,
          viewResolution,
          view.getProjection(),
          { INFO_FORMAT: "text/html", FEATURE_COUNT: 50 }
        );
        if (myUrl) {
          $.ajax({
            url: myUrl,
            dataType: "html",
            success: function (data) {
              $("#nodelist").html(data);
            },
          });
        }
      });
    }
  };

  //pan to usa on click
  onClick("selectClickEventOnOff", function () {
    //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
    map1.getView().animate({
      center: usa,
      duration: 1000,
    });
  });
}

function toggleClickEvent() {
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
      "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addclickevenent, 500);
