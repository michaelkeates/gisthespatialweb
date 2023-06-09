var simpleinfowindows = [];

function addsimpleinfowindows() {
  //declare infowindows and set content and position
  var iw1 = new google.maps.InfoWindow({
    content: "Holyhead Port",
    position: { lat: 53.309, lng: -4.629 },
  });
  var iw2 = new google.maps.InfoWindow({
    content: "Fishguard Port",
    position: { lat: 52.009, lng: -4.986 },
  });
  var iw3 = new google.maps.InfoWindow({
    content: "Cardiff Port",
    position: { lat: 51.457, lng: -3.158 },
  });

  //add infowindows to map and array so we can toggle them on and off
  iw1.open(map);
  iw2.open(map);
  iw3.open(map);
  simpleinfowindows.push(iw1);
  simpleinfowindows.push(iw2);
  simpleinfowindows.push(iw3);

  for (i = 0; i < simpleinfowindows.length; i++) {
    simpleinfowindows[i].setMap(null);
  }
}

function toggleSimpleInfoWindows() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a simple demonstration of incorporating InfoWindows with a custom style via CSS!";

  //lets first move to cardiff
  map.setCenter(new google.maps.LatLng(52.471773529068045, -3.25286326804203));
  map.setZoom(7);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < simpleinfowindows.length; i++) {
    if (simpleinfowindows[i].getMap() != null)
      simpleinfowindows[i].setMap(null);
    else simpleinfowindows[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimpleinfowindows, 500);
