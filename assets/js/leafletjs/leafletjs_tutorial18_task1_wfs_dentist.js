//define DB source
var fullURL;
var style1;
var WFSLayer;

function addwfsdentist() {
  //define the style of the marker
  style1 = {
    radius: 6,
    fillColor: "#ff6600",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5,
  };

  //define the root url
  var rootURL = "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/ows";
  //define the parameters
  var WFSparams = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typeName: "geoserver:dentist",
    maxFeatures: 2000,
    outputFormat: "text/javascript",
    format_options: "callback: getJson",
    srsName: "EPSG:4326",
  };

  //define the full url
  fullURL = rootURL + L.Util.getParamString(WFSparams);

  //get the data
  $(document).ready(function () {
    $.ajax({
      url: fullURL,
      dataType: "jsonp",
      jsonpCallback: "getJson",
    }).done(function (data) {
      WFSLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, style1);
        },
      });
      //mymap.addLayer(WFSLayer);
    });
  });
}

function toggleWFSDentist() {
  //get the button id
  var simpleMarker = document.getElementById("togglewfsdentistBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  //if mymap.hasLayer(marker) == true then remove it else add it to map
  if (mymap.hasLayer(WFSLayer)) {
    mymap.removeLayer(WFSLayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(WFSLayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the dentists practices loaded using the WFS route!";
  }
  //pan to the marker
  mymap.fitBounds(WFSLayer.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwfsdentist, 1500);
