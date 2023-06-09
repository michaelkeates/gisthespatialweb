//globa lvariables
var map1;
var moscow = ol.proj.fromLonLat([37.6178, 55.7517]);

//add listener to button
function onClick(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}
//pan to moscow on click
onClick("geolocateuser", function () {
  //get user location
  navigator.geolocation.getCurrentPosition(function (position) {
    //save the search location lat and lng to variables
    var userLat = position.coords.latitude;
    var userLng = position.coords.longitude;
    //pan the map to the search location
    map1.getView().animate({
      center: ol.proj.fromLonLat([userLng, userLat]),
      duration: 2000,
      zoom: 15,
    });
  });
  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "We are panning to your location!";
});

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addclickevenent, 500);