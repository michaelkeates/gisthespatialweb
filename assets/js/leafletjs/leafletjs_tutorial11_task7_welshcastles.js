//globale variables
var newportcastle;
var swanseacastle;
var blaenllynficastle;
var newportcastlepos;
var swanseacastlepos;
var blaenllynfipos;
var stadiumicon;

function addwelshcastles() {
  //create a custom icon
  castleicon = L.icon({
    iconUrl: "assets/img/castle.png",
    //this is cool! can add a shadow to the icons! :)
    shadowUrl: "assets/img/shadow.png",

    iconSize: [48, 48], // size of the icon
    shadowSize: [50, 64], // size of the shadow
  });

  //positions for the castles
  newportcastlepos = { lat: 51.60033, lng: -2.85897 };
  swanseacastlepos = { lat: 51.6205190686892, lng: -3.94109058368337 };
  blaenllynfipos = { lat: 51.8979748248019, lng: -3.24408021219199 };

  //create a marker and set its position and a popup message
  newportcastle = L.marker(newportcastlepos, { icon: castleicon }).bindPopup(
    //marker2 = L.marker(cardiff).bindPopup(
    "Here is the Newport Castle!"
  );
  swanseacastle = L.marker(swanseacastlepos, { icon: castleicon }).bindPopup(
    //marker3 = L.marker(swansea).bindPopup(
    "Here is the Swansea Castle!"
  );
  blaenllynficastle = L.marker(blaenllynfipos, { icon: castleicon }).bindPopup(
    //marker3 = L.marker(swansea).bindPopup(
    "Here is the Blaenllynfi Castle!"
  );
}

function toggleWelshCastles() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleCastles = document.getElementById("toggleCastlesBtn");

  //added check to change appearence of toggled button to change css class
  if (simpleCastles.classList.contains("card-button")) {
    simpleCastles.classList.remove("card-button");
    simpleCastles.classList.add("card-button-on");
  } else {
    simpleCastles.classList.remove("card-button-on");
    simpleCastles.classList.add("card-button");
  }

  //if the castles are on the map then remove them else add them
  if (
    mymap.hasLayer(newportcastle) &&
    mymap.hasLayer(swanseacastle) &&
    mymap.hasLayer(blaenllynficastle)
  ) {
    mymap.removeLayer(newportcastle);
    mymap.removeLayer(swanseacastle);
    mymap.removeLayer(blaenllynficastle);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(newportcastle);
    mymap.addLayer(swanseacastle);
    mymap.addLayer(blaenllynficastle);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are a few castles in Wales with custom icons.......again!";
  }
  //pan to the marker
  mymap.flyTo(newportcastlepos, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addwelshcastles, 1000);
