//global variables
var marker;
var latlngs;
var polyline;

function addsimplepolyline() {
  //create a simple polyline with coords
  latlngs = [
    [51.48, -3.18],
    [51.62, -3.94],
    [52.41, -4.08],
    [53.04, -2.99],
  ];
  //style the polyline
  polyline = L.polyline(latlngs, { color: "blue", opacity: 0.7, weight: 12 });
}

function toggleSimplePolyline() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simplePolyline = document.getElementById("simplePolylineBtn");

  //added check to change appearence of toggled button to change css class
  if (simplePolyline.classList.contains("card-button")) {
    simplePolyline.classList.remove("card-button");
    simplePolyline.classList.add("card-button-on");
  } else {
    simplePolyline.classList.remove("card-button-on");
    simplePolyline.classList.add("card-button");
  }

  //if polyline is on map remove it else add it
  if (mymap.hasLayer(polyline)) {
    mymap.removeLayer(polyline);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(polyline);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple polyline!";
  }
  //pan to the polyline
  mymap.fitBounds(polyline.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsimplepolyline, 500);
