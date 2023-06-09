var libertymarker = [];

function addlibertymarker() {
  //marker info
  const libertypost = { lat: 51.642856385440574, lng: -3.9345533085794924 };
  //const image = "https://cdn-icons-png.flaticon.com/32/1259/1259792.png";
  const image = "assets/img/stadium_2.png";

  //create a marker and set its position and icon.
  var mkr_ops3 = new google.maps.Marker({
    position: libertypost,
    title: "Liberty Stadium",
    icon: image,
    map: map,
  });

  //to add the marker to the map, call setMap() and pan to position;
  mkr_ops3.setMap(map);
  libertymarker.push(mkr_ops3);

  //set everything in array to null to hide
  for (i = 0; i < libertymarker.length; i++) {
    libertymarker[i].setMap(null);
  }
}

function toggleLibertyMarker() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is the marker showing the location of the Swansea Liberty Stadium!";

  //lets first move to swansea
  map.setCenter(
    new google.maps.LatLng(51.642856385440574, -3.9345533085794924)
  );

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < libertymarker.length; i++) {
    if (libertymarker[i].getMap() != null) libertymarker[i].setMap(null);
    else libertymarker[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addlibertymarker, 500);
