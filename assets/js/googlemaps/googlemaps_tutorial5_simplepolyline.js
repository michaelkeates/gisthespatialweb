var simplepolyline = [];

function addsimplepolyline() {
  //declare coordinates as path to variable
  var my_path = [
    { lat: 51.48, lng: -3.18 },
    { lat: 51.62, lng: -3.94 },
    { lat: 52.41, lng: -4.08 },
    { lat: 53.04, lng: -2.99 },
  ];
  //declare polyline and set path, stroke color, opacity and weight
  var plotline = new google.maps.Polyline({
    path: my_path,
    strokeColor: "#0000FF",
    strokeOpacity: 0.7,
    strokeWeight: 12,
  });

  //to add the marker to the map, call setMap();
  plotline.setMap(map);
  simplepolyline.push(plotline);

  for (i = 0; i < simplepolyline.length; i++) {
    simplepolyline[i].setMap(null);
  }
}

function toggleSimplePolyline() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a simple polyline!";

  //lets first move to cardiff
  map.setCenter(new google.maps.LatLng(52.471773529068045, -3.25286326804203));
  map.setZoom(7);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < simplepolyline.length; i++) {
    if (simplepolyline[i].getMap() != null) simplepolyline[i].setMap(null);
    else simplepolyline[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimplepolyline, 500);
