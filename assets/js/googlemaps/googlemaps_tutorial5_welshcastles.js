var castlemarkers = [];

function addCastlemarkers() {
  //marker info for the castles
  const newportcastlepos = { lat: 51.60033, lng: -2.85897 };
  const swanseacastlepos = { lat: 51.6205190686892, lng: -3.94109058368337 };
  const blaenllynfipos = { lat: 51.8979748248019, lng: -3.24408021219199 };
  const image = "assets/img/castle.png";

  //create markers and set its position and icon.
  var mkr_newport = new google.maps.Marker({
    position: newportcastlepos,
    title: "Newport Castle",
    icon: image,
    map: map,
  });

  var mkr_swansea = new google.maps.Marker({
    position: swanseacastlepos,
    title: "Swansea Castle",
    icon: image,
    map: map,
  });

  //Castell Blaenllynfi
  var mkr_blaenllynfi = new google.maps.Marker({
    position: blaenllynfipos,
    title: "Castell Blaenllynfi",
    icon: image,
    map: map,
  });

  // To add the marker to the map, call setMap();
  mkr_newport.setMap(map);
  mkr_swansea.setMap(map);
  mkr_blaenllynfi.setMap(map);

  castlemarkers.push(mkr_newport);
  castlemarkers.push(mkr_swansea);
  castlemarkers.push(mkr_blaenllynfi);

  for (i = 0; i < castlemarkers.length; i++) {
    castlemarkers[i].setMap(null);
  }
}

function toggleCastleMarkers() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are the markers showing a few castles in Wales!";

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < castlemarkers.length; i++) {
    if (castlemarkers[i].getMap() != null) castlemarkers[i].setMap(null);
    else castlemarkers[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addCastlemarkers, 500);
