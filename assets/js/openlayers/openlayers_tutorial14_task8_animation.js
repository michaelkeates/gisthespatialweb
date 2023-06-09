//globa lvariables
var map1;
var moscow = ol.proj.fromLonLat([37.6178, 55.7517]);

//add listener to button
function onClick(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}
//pan to moscow on click
onClick("pan-to-moscow", function () {
  //needed to add map1.getView() to animate instead of tutorial view.animate as variable was not defined
  map1.getView().animate({
    center: moscow,
    duration: 2000,
  });
  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "We are panning to Moscow!";
});

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addclickevenent, 500);
