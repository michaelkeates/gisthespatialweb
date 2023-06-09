var windfarmspolygon = [];

function addwindfarmspolygon() {
  //lets create some polygons
  var area1 = [
    { lat: 51.86, lng: -3.95 },
    { lat: 51.93, lng: -3.85 },
    { lat: 52.01, lng: -3.72 },
    { lat: 51.96, lng: -3.65 },
    { lat: 51.87, lng: -3.6 },
    { lat: 51.86, lng: -3.76 },
    { lat: 51.84, lng: -3.91 },
    { lat: 51.86, lng: -3.95 },
  ];
  var area2 = [
    { lat: 53.1, lng: -3.9 },
    { lat: 52.81, lng: -3.59 },
    { lat: 52.75, lng: -3.82 },
    { lat: 52.83, lng: -4.05 },
    { lat: 53.1, lng: -3.9 },
  ];
  //lets style the polygons
  var polygon1 = new google.maps.Polygon({
    paths: area1,
    strokeColor: "orange",
    strokeOpacity: 0.7,
    strokeWeight: 2,
    fillColor: "orange",
    fillOpacity: 0.35,
  });
  var polygon2 = new google.maps.Polygon({
    paths: area2,
    strokeColor: "red",
    strokeOpacity: 0.7,
    strokeWeight: 2,
    fillColor: "red",
    fillOpacity: 0.35,
  });

  //to polygons to map and array so we can toggle it on and off
  polygon1.setMap(map);
  polygon2.setMap(map);
  windfarmspolygon.push(polygon1);
  windfarmspolygon.push(polygon2);

  for (i = 0; i < windfarmspolygon.length; i++) {
    windfarmspolygon[i].setMap(null);
  }
}

function toggleWindFarmsPolygon() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are simple polygons showing the two fictitious sites for wind farms!";

  //lets first move to cardiff
  map.setCenter(new google.maps.LatLng(52.471773529068045, -3.25286326804203));
  map.setZoom(7);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < windfarmspolygon.length; i++) {
    if (windfarmspolygon[i].getMap() != null) windfarmspolygon[i].setMap(null);
    else windfarmspolygon[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwindfarmspolygon, 500);
