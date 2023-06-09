var crimemarkers = [];
var lattest = 52.629729;
var lngtest = -1.131592;

// Get the current date
var currentDate = new Date();
// Get the current year and month
var currentYear = 2022;
var currentMonth = 11;

// declare link to image as
const image = "assets/img/police.png";

function addcrimemarkers() {
  //getJSON to get the data from the API
  $.getJSON(
    "https://data.police.uk/api/crimes-street/all-crime?lat=" +
      crimeLat +
      "&lng=" +
      crimeLng +
      //"&date=2022-10",
      "&date=" +
      currentYear +
      "-" +
      //need to go back a month as crime data are released a month behind
      (currentMonth),

    function (data) {
      // Clear out the old markers.
      crimemarkers.forEach(function (crimemarkers) {
        crimemarkers.setMap(null);
      });
      crimemarkers = [];

      //loop through the data and add markers
      $.each(data, function (key, val) {
        var myLatlng = new google.maps.LatLng(
          val.location.latitude,
          val.location.longitude
        );
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: val.location.street.name,
          icon: image,
        });
        //create an info window for the markers
        var iw = new google.maps.InfoWindow({
          content:
            '<div id="content">Category: ' +
            val.category +
            '</div><br><div id="content">Location: ' +
            val.location.street.name +
            '</div><br><div id="content">Year/Month: ' +
            val.month +
            '</div><br><div id="content">Outcome: ' +
            val.outcome +
            "</div>",
        });

        //set a listener for when the user clicks on a marker
        google.maps.event.addListener(marker, "click", function () {
          iw.open(map, marker);
        });

        //to add the marker to the map, call setMap();
        marker.setMap(map);
        crimemarkers.push(marker);
      });
      //create a new marker clusterer object
      new MarkerClusterer(map, crimemarkers, { ignoreHidden: true });
      //hide the markers
      for (var it in crimemarkers) {
        crimemarkers[it].setVisible(false);
      }
      //display the markers
      markerCluster.repaint();
    }
  );
}

function toggleCrimeMarkers() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "<font color='red'>Error!</font> Please search for a location in the UK using the search bar and then click the toggle again!";

  //try catch an error if the user has not searched for a location
  try {
    if (crimeLat && crimeLng != null) {
      document.getElementById("displaymessage").innerHTML =
        "This feature showcases generating markers in a loop on the fly using JSON and getting its data from the Police UK Website as well as implementng 'clustering' to combine the markers to improve performance. Also can get the latest data which at this time is the year " +
        currentYear +
        " and the month " +
        (currentMonth - 1) +
        ". You can visit the Police UK website for more information <a href='https://data.police.uk/docs/' target='_blank'>here</a>. No shape file was needed or used for this layer, only needed to retrieve the data from the Police UK API! Also can click on each marker and a InfoWindow will appear showing data such as crime type that was retrieved.<br><br>You searched for: " +
        crimeLat +
        ", " +
        crimeLng;
    }
  } catch (error) {
    ("<font color='red'>Error HTTP 429 (Too Many Requests)</font> Please search for a more specific location in the UK using the search bar and then click the toggle again! This is a API limit.");
  }

  //set all crime markers to be visible
  for (var it in crimemarkers) {
    crimemarkers[it].setVisible(true);
  }
  //lets zoom out a bit so we can see all the markers
  map.setZoom(8);
  markerCluster.repaint();
}

function hideClusters() {
  //for every gmarker in array, display if hidden else hide
  for (var it in crimemarkers) {
    crimemarkers[it].setVisible(false);
  }
  map.setZoom(7);
  markerCluster.repaint();
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addcrimemarkers, 500);
