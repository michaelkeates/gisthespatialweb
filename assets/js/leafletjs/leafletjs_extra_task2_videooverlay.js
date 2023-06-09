//global variables
var videoUrls;
var errorOverlayUrl;
var latLngBounds;
let videoOverlay;
var lat;
var lon;
var alt;
var vel;

function addvideooverlay() {
  //add the url videos
  videoUrls = [
    "https://www.mapbox.com/bites/00188/patricia_nasa.webm",
    "https://www.mapbox.com/bites/00188/patricia_nasa.mp4",
  ];
  //error correction if video fails to load
  errorOverlayUrl = "https://cdn-icons-png.flaticon.com/512/110/110686.png";
  //add the lat and long bounds
  latLngBounds = L.latLngBounds([
    [32, -130],
    [13, -100],
  ]);

  //add the video overlay to the map
  videoOverlay = L.videoOverlay(videoUrls, latLngBounds, {
    opacity: 0.8,
    errorOverlayUrl: errorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true,
  });
}

function toggleVideoOverlay() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var videooverlaybutton = document.getElementById("toggleVideoOverlayBtn");

  //added check to change appearence of toggled button to change css class
  if (videooverlaybutton.classList.contains("card-button")) {
    videooverlaybutton.classList.remove("card-button");
    videooverlaybutton.classList.add("card-button-on");
  } else {
    videooverlaybutton.classList.remove("card-button-on");
    videooverlaybutton.classList.add("card-button");
  }

  //if layer is on map then remove it else add it to map
  if (mymap.hasLayer(videoOverlay)) {
    mymap.removeLayer(videoOverlay);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(videoOverlay);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Video Overlay added to map!";
  }
  //pan to the marker and zoom in
  mymap.flyTo([32, -100], 4);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addvideooverlay, 500);
