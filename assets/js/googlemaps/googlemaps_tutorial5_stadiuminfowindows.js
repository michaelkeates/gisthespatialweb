var stadiumsinfowindows = [];

function addstadiumsinfowindows() {
  // declare infowindows and implement content as html and position
  var iw1 = new google.maps.InfoWindow({
    content:
      "<b>Principality Stadium</b><br>" +
      '<a href="https://en.wikipedia.org/wiki/Principality_Stadium" target="_blank">Wikipedia</a>',
    position: { lat: 51.478, lng: -3.182 },
  });
  var iw2 = new google.maps.InfoWindow({
    content:
      "<b>Liberty Stadium</b><br>" +
      '<a href="https://en.wikipedia.org/wiki/Liberty_Stadium" target="_blank">Wikipedia</a>',
    position: { lat: 51.642, lng: -3.935 },
  });

  //to add the marker to the map and array so we can toggle it on and off
  iw1.open(map);
  iw2.open(map);
  stadiumsinfowindows.push(iw1);
  stadiumsinfowindows.push(iw2);

  for (i = 0; i < stadiumsinfowindows.length; i++) {
    stadiumsinfowindows[i].setMap(null);
  }

  // Finally add Event Listeners
  google.maps.event.addListener(mkri, "click", function () {
    iw1.open(map, mkrl);
  });
  google.maps.event.addListener(mkr2, "click", function () {
    iw2.open(map, mkr2);
  });
}

function toggleStadiumsInfoWindows() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a simple demonstration of incorporating InfoWindows for the stadium markers!";

  //lets first move to cardiff
  map.setCenter(new google.maps.LatLng(52.471773529068045, -3.25286326804203));
  map.setZoom(7);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < stadiumsinfowindows.length; i++) {
    if (stadiumsinfowindows[i].getMap() != null)
      stadiumsinfowindows[i].setMap(null);
    else stadiumsinfowindows[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addstadiumsinfowindows, 500);
