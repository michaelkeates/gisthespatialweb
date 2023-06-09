//global veriable
var schools;
var cluster;

//function to add geojson
async function addschools() {
  //set a custom icon for each marker
  var schoolIcon = L.icon({
    iconUrl: "assets/img/marker.png",
    iconSize: [18, 32],
    iconAnchor: [32, 32],
  });

  //load geojson and add schoolIcon to each marker
  schools = L.geoJSON(secondaryschools, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: schoolIcon });
    },
  });

  //add popup to each marker
  schools.eachLayer(function (layer) {
    layer.bindPopup(
      "<b>" +
        layer.feature.properties.sch_name +
        "</b><br>" +
        layer.feature.properties.postcode +
        //add website link
        "<br><a href='" +
        layer.feature.properties.full_detai +
        "' target='_blank'>Website</a>"
    );
  });
  //add markers to cluster group
  cluster = L.markerClusterGroup();
  cluster.addLayer(schools);
  //add cluster group to map
  //mymap.addLayer(cluster);
}

function toggleSchools() {
  //lazy mode to move to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get the button id
  var schoolbutton = document.getElementById(
    "toggleSecondarySchoolsOverlayBtn"
  );

  //added check to change appearence of toggled button to change css class
  if (schoolbutton.classList.contains("card-button")) {
    schoolbutton.classList.remove("card-button");
    schoolbutton.classList.add("card-button-on");
  } else {
    schoolbutton.classList.remove("card-button-on");
    schoolbutton.classList.add("card-button");
  }

  //if layer is enabled then remove it else add it
  if (mymap.hasLayer(cluster)) {
    mymap.removeLayer(cluster);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(cluster);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all the markers for secondary schools that was processed using the direct SQL/Postgis route! Bonus all the markers are clustered using a plugin that can be found <a href='https://github.com/Leaflet/Leaflet.markercluster' target='_blank'>here</a>";
  }
  //fit the map to the bounds of the layer
  mymap.fitBounds(cluster.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addschools, 1000);
