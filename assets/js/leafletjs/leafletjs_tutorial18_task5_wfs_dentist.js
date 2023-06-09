//define DB source
var fullURL2;
var map_ops;
var style2;
var WFSLayer2;

function addwfsdentist2() {
  //set style for the points
  style2 = {
    radius: 6,
    fillColor: "#2c2c2c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5,
  };

  //define the root url
  var rootUR2 = "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/ows";
  //define the parameters
  var WFSparams2 = {
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
  fullURL2 = rootUR2 + L.Util.getParamString(WFSparams2);

  //get the data
  $(document).ready(function () {
    $.ajax({
      url: fullURL2,
      dataType: "jsonp",
      jsonpCallback: "getJson",
    }).done(function (data) {
      WFSLayer2 = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, style2);
        },
        //add popups to each marker
        onEachFeature: function (feature, layer) {
          popupOptions = { maxWidth: 300 };
          //create the popup content using html
          var html =
            "DENTAL PRACTICE<br>" +
            "Name: " +
            feature.properties["address1"] +
            "<br/>" +
            "Address: " +
            feature.properties["address2"] +
            "<br/>" +
            "Postcode: " +
            feature.properties["postcode"] +
            "<br/>";
          layer.bindPopup(html, popupOptions);
        },
      });
      //mymap.addLayer(WFSLayer2);
    });
  });
}

function toggleWFSDentist2() {
  //get the button id
  var simpleMarker = document.getElementById("togglewfsdentist2Btn");

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
  if (mymap.hasLayer(WFSLayer2)) {
    mymap.removeLayer(WFSLayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(WFSLayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the dentists practices loaded using the WFS route!";
  }
  //pan to the marker
  mymap.fitBounds(WFSLayer2.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwfsdentist2, 100);
