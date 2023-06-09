var simplemarker = [];

function addsimplemarker() {
  //marker info
  //tutorial shows centre of wales but this pos is south of Sydney?
  //const map_ops = { lat: -34.397, lng: 150.644 };

  //this is centre of wales
  const map_ops = { lat: 52.47106862668122, lng: -3.5705030952986556 };

  //create a marker and set its position
  var my_mkr = new google.maps.Marker({
    position: map_ops,
    title: "A simple marker",
    map: map,
  });

  // To add the marker to the map, call setMap();
  my_mkr.setMap(map);
  simplemarker.push(my_mkr);

  for (i = 0; i < simplemarker.length; i++) {
    simplemarker[i].setMap(null);
  }
}

function toggleSimpleMarker() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a simple marker!";

  //lets first move to south of sydney??
  //map.setCenter(new google.maps.LatLng(-34.397, 150.644));

  map.setCenter(new google.maps.LatLng(52.47106862668122, -3.5705030952986556));
  //set zoom to 8
  map.setZoom(8);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < simplemarker.length; i++) {
    if (simplemarker[i].getMap() != null) simplemarker[i].setMap(null);
    else simplemarker[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimplemarker, 500);
