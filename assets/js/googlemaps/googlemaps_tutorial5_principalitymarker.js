var principalitymarker = [];

function addprincipalitymarker() {
  //marker info
  const principalitypost = { lat: 51.478, lng: -3.182 };
  //const image = "https://cdn-icons-png.flaticon.com/32/1259/1259792.png";
  const image = "assets/img/stadium.png";

  //create a marker and set its position and icon.
  var mkr_ops = new google.maps.Marker({
    position: principalitypost,
    title: "Principality Stadium",
    icon: image,
    map: map,
  });

  //to add the marker to the map, call setMap();
  mkr_ops.setMap(map);
  principalitymarker.push(mkr_ops);

  for (i = 0; i < principalitymarker.length; i++) {
    principalitymarker[i].setMap(null);
  }
}

function togglePrincipalityMarker() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is the marker showing the location of the Cardiff Principality Stadium!";

  //lets first move to cardiff
  map.setCenter(new google.maps.LatLng(51.478, -3.182));

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < principalitymarker.length; i++) {
    if (principalitymarker[i].getMap() != null)
      principalitymarker[i].setMap(null);
    else principalitymarker[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addprincipalitymarker, 500);
