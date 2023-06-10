//global variables
var videoUrls;
var errorOverlayUrl;
var latLngBounds;
let temp;

function addtempoverlay() {
  //get the lates weather data from openweathermap api
  temp = L.tileLayer(
    "https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=KEY",
    {
      maxZoom: 20,
    }
  );
}

function toggleTemperatureOverlay() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var tempbutton = document.getElementById("toggleTemperatureOverlayBtn");

  //added check to change appearence of toggled button to change css class
  if (tempbutton.classList.contains("card-button")) {
    tempbutton.classList.remove("card-button");
    tempbutton.classList.add("card-button-on");
  } else {
    tempbutton.classList.remove("card-button-on");
    tempbutton.classList.add("card-button");
  }

  //if layer is on map remove it else add it
  if (mymap.hasLayer(temp)) {
    mymap.removeLayer(temp);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(temp);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Temperature Overlay added to map sourced from the Open Weather Map using a API Key! Can view the website <a href='https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=51.5833&lon=-2.9848&zoom=5' target='_blank'>here</a>";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addtempoverlay, 500);
