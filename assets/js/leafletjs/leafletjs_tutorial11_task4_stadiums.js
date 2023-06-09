//declare global variables
var marker2;
var marker3;
var cardiff;
var swansea;
var stadiumicon;

function addstadiummarkers() {
  //create a custom icon
  stadiumicon = L.icon({
    iconUrl: "assets/img/stadium.png",
    //this is cool! add a shadow to the icons! :)
    shadowUrl: "assets/img/shadow.png",

    iconSize: [48, 48], // size of the icon
    shadowSize: [50, 64], // size of the shadow
  });

  //define the coordinates of the stadiums
  cardiff = { lat: 51.478, lng: -3.182 };
  swansea = { lat: 51.642856385440574, lng: -3.9345533085794924 };

  //marker = L.marker(map_ops).bindPopup('A simple marker!');
  //create a marker and set its position as well as a popup message
  marker2 = L.marker(cardiff, { icon: stadiumicon }).bindPopup(
    //marker2 = L.marker(cardiff).bindPopup(
    "Here is the Principality Stadium!"
  );
  marker3 = L.marker(swansea, { icon: stadiumicon }).bindPopup(
    //marker3 = L.marker(swansea).bindPopup(
    "Here is the Liberty Stadium!"
  );
}

function toggleStadiumMarkers() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleStadiums = document.getElementById("toggleStadiumsBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleStadiums.classList.contains("card-button")) {
    simpleStadiums.classList.remove("card-button");
    simpleStadiums.classList.add("card-button-on");
  } else {
    simpleStadiums.classList.remove("card-button-on");
    simpleStadiums.classList.add("card-button");
  }

  //if markers 2 and 3 are visible then remove them else add them
  if (mymap.hasLayer(marker2) && mymap.hasLayer(marker3)) {
    mymap.removeLayer(marker2);
    mymap.removeLayer(marker3);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(marker2);
    mymap.addLayer(marker3);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the stadiums in Cardiff and Swansea with custom icons.......again!";
  }

  mymap.flyTo(cardiff, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addstadiummarkers, 1000);
