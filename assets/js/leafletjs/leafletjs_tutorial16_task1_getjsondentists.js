//add geojson from postgis
var contentLayer;
var walescords;

function addgetjsondentists() {
  walescords = [52.1307, -3.7837];
  //load geojson assets/geojson/dentists2.js using ajax
  $.ajax({
    url: "assets/geojson/dentists3.js",
    dataType: "text",
  })
    .done(function (result) {
      contentLayer = L.geoJson(JSON.parse(result));
      //i rather have this disabled at first so it can be toggled....sorry!!!
      //mymap.addLayer(contentLayer);
    })
    .fail(function () {
      alert("File load FAILED");
    });
}

function togglegetJSONdentists() {
  //get the button id
  var simpleMarker = document.getElementById("getjsondentistsBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  //if mymap.hasLayer(marker) == true then remove it else add it to map
  if (mymap.hasLayer(contentLayer)) {
    mymap.removeLayer(contentLayer);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    //finally can add the contentLayer to the map :)
    mymap.addLayer(contentLayer);
    //pan to the marker
    mymap.setView(walescords, 6);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a external geojson file loaded using jQuery/AJAX!";
  }
  //pan to the marker
  mymap.fitBounds(contentLayer.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addgetjsondentists, 500);
