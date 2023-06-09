//global variables
var area1;
var area2;
var group;

function addwindfarmsites() {
  //lets create some polygons
  area1 = L.polygon([
    [51.86, -3.95],
    [51.93, -3.85],
    [52.01, -3.72],
    [51.96, -3.65],
    [51.87, -3.6],
    [51.86, -3.76],
    [51.84, -3.91],
    [51.86, -3.95],
  ]);
  area2 = L.polygon([
    [53.1, -3.9],
    [52.81, -3.59],
    [52.75, -3.82],
    [52.83, -4.05],
    [53.1, -3.9],
  ]);

  //add to a group so that we can fitbounds over two areas
  group = L.featureGroup([area1, area2]);
}

function toggleWindFarmSites() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simplePolygon = document.getElementById("simplePolygonBtn");

  //added check to change appearence of toggled button to change css class
  if (simplePolygon.classList.contains("card-button")) {
    simplePolygon.classList.remove("card-button");
    simplePolygon.classList.add("card-button-on");
  } else {
    simplePolygon.classList.remove("card-button-on");
    simplePolygon.classList.add("card-button");
  }

  //if group is on map remove it else add it
  if (mymap.hasLayer(group)) {
    mymap.removeLayer(group);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(group);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are simple polygons showing the two fictitious sites for wind farms!";
  }
  //fit the map to the bounds of the group
  mymap.fitBounds(group.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwindfarmsites, 500);
