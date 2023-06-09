//define DB source
var theTable2 = "misc.dentist";
var theColumns2 = ["gid", "postcode", "address1", "address2"];
var theGeom = "geom";
var contentLayer2;

function addsql4() {
  // Convert theColumns2 array to a JSON string
  var incluStr = JSON.stringify(theColumns2);

  //OSM tiles
  //var basetiles = L.tileLayer(
  //  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //  {
  //    attribution:
  //      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //  }
  //);
  //mymap.addLayer(basetiles);
  //mymap.setView([52.417, -3.573], 7);

  //marker style
  var markerOptions = {
    radius: 4,
    fillColor: "#FF6600",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4,
  };

  $(document).ready(function () {
    $.ajax({
      url: "../../assets/php/php_sql4.php",
      data: {
        table: theTable2,
        inclu: incluStr, // Pass the JSON string to the inclu parameter
        geomy: theGeom,
      },
    }).done(function (data) {
      //needed to see what was being retrieved as getting syntax error <br or something like that :/
      console.log(data);
      contentLayer2 = L.geoJSON(JSON.parse(data), {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, markerOptions);
        },
      });
      //mymap.addLayer(contentLayer2);
    });
  });
}

function toggleSQL4() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var simpleMarker = document.getElementById("sqldentist4Btn");

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
  if (mymap.hasLayer(contentLayer2)) {
    mymap.removeLayer(contentLayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(contentLayer2);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the dentists loaded from the php_sql4 file using ajax!";
  }
  //pan to the marker
  mymap.flyTo(map_ops, 8);
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addsql4, 500);
