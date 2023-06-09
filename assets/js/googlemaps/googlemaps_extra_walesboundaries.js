var walesboundaries = [];

function addwalesboundaries() {
  //load the geojson file
  geojesonlayer1 = new google.maps.Data();
  geojesonlayer1.loadGeoJson(
    "assets/geojson/wales_boundaries.json",
  );

  //layer style
  geojesonlayer1.setStyle({
    strokeColor: "red",
    strokeWeight: 2,
    strokeOpacity: 0.2,
    fillColor: "red",
    fillOpacity: 0.1,
  });

  //add to array
  geojesonlayer1.setMap(map);
  walesboundaries.push(geojesonlayer1);

  //for all the layers in the array, hide them
  for (i = 0; i < walesboundaries.length; i++) {
    walesboundaries[i].setMap(null);
  }
}

function toggleWalesBoundaries() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  // Update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here we are displaying the Welsh Electoral Ward boundaries via GeoJSON data! The shape file was preprocessed in QGIS. Have implemented a custom style to the layer. The dataset was retrieved from <a href='https://datamap.gov.wales/layers/geonode:Wales_Ward_Boundaries_hwm' target='_blank'>here</a>";

  //lets first move to wales
  map.setCenter(
    new google.maps.LatLng(51.642856385440574, -3.9345533085794924)
  );

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < walesboundaries.length; i++) {
    if (walesboundaries[i].getMap() != null) walesboundaries[i].setMap(null);
    else walesboundaries[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwalesboundaries, 500);
