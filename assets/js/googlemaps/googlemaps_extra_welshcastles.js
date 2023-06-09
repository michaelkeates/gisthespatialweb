var welshcastlesextended = [];

function addwelshcastlesextended() {
  //declare a new kml layer
  var kmlLayer = new google.maps.KmlLayer();

  //set the url of the kml file. disable infowindows as we will create a custom one
  var src =
    "https://ces-web2.southwales.ac.uk/students/23009273/gis/assets/kml/castlesmarkers.kml";
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map,
  });

  //create the info window
  var infoWindow = new google.maps.InfoWindow({
    // info window options
  });

  //to add the layer to the map and array
  kmlLayer.setMap(map);
  welshcastlesextended.push(kmlLayer);

  //for all the markers in the array, set to null to hide
  for (i = 0; i < welshcastlesextended.length; i++) {
    welshcastlesextended[i].setMap(null);
  }

  //add custom infowindow on markers on map click
  google.maps.event.addListener(kmlLayer, "click", function (kmlEvent) {
    //cant get description from kml as that is not supported by google maps
    var text = kmlEvent.featureData.description;
    var name = kmlEvent.featureData.name;

    // Info window content using html. added a button to use the name variable of the castle in question to search on wikipedia
    var contentString =
      '<div id="content">' +
      "<h1 style='font-size:20px;'>" +
      name +
      "</h1>" +
      '<div id="bodyContent">' +
      "<div style='float:left; width:20%;'><span style='color:grey' class='material-symbols-outlined'>fort</span></div>" +
      '<div style="float:right; width:80%; height:80%;">' +
      "<p>Click the buttion below to search for " +
      name +
      " at wikipedia!</p>" +
      "<center><p><a href='https://en.wikipedia.org/w/index.php?search=" +
      name +
      "&title=Special:Search&fulltext=Search' target='_blank' class='card-button2'><span class='material-symbols-outlined'>info</span></a></p></center>" +
      "</div>" +
      "</div>" +
      "</div>";

    // Set the info window's content and position of the marker
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(contentString);
    infoWindow.setPosition(kmlEvent.latLng);
    infoWindow.setOptions({ pixelOffset: kmlEvent.pixelOffset });
    infoWindow.open(map);
  });
}

function togglewelshcastlesextended() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are markers for castles in Wales loaded via KML! The shape file was preprocessed in QGIS and originally had polygons but they were converted to 'centroids' to create markers for this layer as well as only selecting polygons that were a 'castle'. Click on the markers to see more information as well as a link to search for the castle on wikipedia! The data set was retrieved from <a href='https://datamap.gov.wales/layers/inspire-wg:Cadw_SAM' target='_blank'>here</a>";

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < welshcastlesextended.length; i++) {
    if (welshcastlesextended[i].getMap() != null)
      welshcastlesextended[i].setMap(null);
    else welshcastlesextended[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwelshcastlesextended, 500);
