var map, infoWindow;

//render the embedded map. default location by lat and lng
function initMap() {
  //close side menu
  document.getElementById("dashboard").style.width = "0";

  map = new google.maps.Map(document.getElementById("map"), {
    //this is treforest coordinates
    center: { lat: 51.5919777, lng: -3.3249601 },
    //higher the number the closer the map is rendered
    zoom: 7,
    //display default map type which is hybrid
    //there are road map, hybrid, terrain and satellite
    keyboardShortcuts: false,
    //we can change the styles of how the map is displayed
    styles: [
      { elementType: "geometry", stylers: [{ color: "#2c2c2f" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#c1c1c1" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#c1c1c1" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#c1c1c1" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#c1c1c1" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
  //create the info window
  infoWindow = new google.maps.InfoWindow();

  // event listener to remove the info window when the map is clicked
  google.maps.event.addListenerOnce(map, "idle", function () {
    jQuery(".gm-style-iw").prev("div").remove();
  });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a basic 'slippy-map' with custom styles to change the look. There is a search bar where you can search for anything, or you can pan to your current position as long as you are not using a adblocker. Toggle any of the buttons below to display something on the map, click the toggle again to hide the feature! You can hover over the toggle to get more information!";

  //render pan to current location button
  const locationButton = document.createElement("button");
  locationButton.innerHTML =
    '<span class="material-symbols-outlined">near_me</span>';
  locationButton.classList.add("custom-map-control-button");

  //create the search box and link it to the UI element.
  var input = document.getElementById("searchInput");
  var searchBox = new google.maps.places.SearchBox(input);

  //bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  //listen for the event fired when the user selects a prediction and retrieve
  //more details for that place.
  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    //if there are no places, return
    if (places.length == 0) {
      return;
    }

    //clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    //for each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      //save the search location lat and lng to variables
      crimeLat = place.geometry.location.lat();
      crimeLng = place.geometry.location.lng();

      //create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    //pan the map to the search location
    map.fitBounds(bounds);
    //add the crime markers to the map from other javascript file
    addcrimemarkers();
  });

  //display pan button
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
  locationButton.addEventListener("click", () => {
    //try HTML5 geolocation by trying to get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            //fetch the current coordinates
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          //success. pan the map to the location of the user by setCenter using pos const
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      //browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

//display error messages if any issues with displaying map arise
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
