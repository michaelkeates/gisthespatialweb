//global variables
var api_url;
var issmarker;
var issIcon;
let firstTime = true;
var lat;
var lon;
var alt;
var vel;

async function addiss() {
  //add custom icon for marker
  issIcon = L.icon({
    iconUrl: "assets/img/international-space-station.png",
    iconSize: [50, 50],
    iconAnchor: [25, 16],
  });
  //create marker for iss
  issmarker = L.marker([0, 0], { icon: issIcon });
  //add the url for the json api
  api_url = "https://api.wheretheiss.at/v1/satellites/25544";

  //get the data from the api
  const response = await fetch(api_url);
  //convert the data to json
  const data = await response.json();
  //get the latitude and longitude as well as others from the json data
  const { latitude, longitude, altitude, velocity, } = data;

  //set the marker to the latitude and longitude
  issmarker.setLatLng([latitude, longitude]);
  if (firstTime) {
    //mymap.setView([latitude, longitude], 2);
    firstTime = false;
  }
  //add data to variables to be used in the popup
  lat = latitude.toFixed(2);
  lon = longitude.toFixed(2);
  alt = altitude.toFixed(2);
  vel = velocity.toFixed(2);

  //add popup to marker with data from api and bit of html for image and link
  issmarker.bindPopup("<h2>Here is the ISS</h2>" + "<br>" + "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_station_pictured_from_the_SpaceX_Crew_Dragon_5_(cropped).jpg/500px-The_station_pictured_from_the_SpaceX_Crew_Dragon_5_(cropped).jpg' width='100' height='128'" + "<br>" + "Latitude: " + lat + "<br>" + "Longitude: " + lon + "<br>" + "Altitude: " + alt + "<br>" + "Velocity: " + vel + "<br>" + "Coordinates retrieved from <a href='https://wheretheiss.at/w/developer' target='_blank'>here</a> using their JSON API.");
}

function toggleISS() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var issbutton = document.getElementById("toggleISSBtn");

  //added check to change appearence of toggled button to change css class
  if (issbutton.classList.contains("card-button")) {
    issbutton.classList.remove("card-button");
    issbutton.classList.add("card-button-on");
  } else {
    issbutton.classList.remove("card-button-on");
    issbutton.classList.add("card-button");
  }

  //if layer is on then remove it else add it to map
  if (mymap.hasLayer(issmarker)) {
    mymap.removeLayer(issmarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(issmarker);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the current location of the International Space station at " + lat + " " + lon + ". The coordinates has been retrieved from <a href='https://wheretheiss.at/w/developer' target='_blank'>here</a> using their JSON API.";
  }
  //pan to the marker
  mymap.flyTo([lat, lon], 4);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addiss, 500);
