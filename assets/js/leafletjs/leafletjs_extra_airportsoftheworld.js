//define DB source
var airportlayer;
var airportmarkercluster;
var mymap;

function addairportsoftheworld() {
  //define the style of the marker
  var airportIcon = L.icon({
    iconUrl: "assets/img/airport2.png",
    iconSize: [38, 38],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  //define url for geoserver
  var rootURL5 = "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/ows";
  //define the parameters
  var airportParams = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typeName: "geoserver:airports_of_the_world",
    //maxFeatures: 50,
    outputFormat: "text/javascript",
    format_options: "callback: getJson",
    srsName: "EPSG:4326",
  };

  //define the full url
  fullURL = rootURL5 + L.Util.getParamString(airportParams);

  //get the data
  $(document).ready(function () {
    $.ajax({
      url: fullURL,
      dataType: "jsonp",
      jsonpCallback: "getJson",
      //using done to ensure the data is loaded before we try to use it
    }).done(function (data) {
      //create marker as layer
      airportlayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, { icon: airportIcon });
        },
        //create popup on each marker
        onEachFeature: function (feature, layer) {
          //set to false to start with
          var popupGenerated = false;
          layer.on("click", function (e) {
            //check if popup has not been generated or we get a whole load of 429 errors which is too many API requests :S
            if (!popupGenerated) {
              //set to true so we dont keep generating requests
              popupGenerated = true;
              popupOptions = { maxWidth: 300 };
              //field_2 is airport name from the geojson on geoserver
              var airportName = feature.properties["field_2"];
              //url for the wikipedia api
              var wikiAPIURL =
                "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=200&titles=" +
                airportName +
                "&origin=*";
              $.getJSON(wikiAPIURL, function (data) {
                //set a flag to check if image is found
                var imageFound = false;
                //try to get image from all available pages, still dont know why some arports dont have images :/
                //use object array length to get number of pages
                for (var i = 0; i < Object.keys(data.query.pages).length; i++) {
                  if (
                    data.query.pages[Object.keys(data.query.pages)[i]].thumbnail
                  ) {
                    imgSrc =
                      data.query.pages[Object.keys(data.query.pages)[i]]
                        .thumbnail.source;
                        //set to true so that airport popup has a image from wiki!
                    imageFound = true;
                    break;
                  }
                }
                //if no image is found, use the placeholder image
                if (!imageFound) {
                  imgSrc =
                    "https://via.placeholder.com/300x300.png?text=No+Image+Found";
                }
                //create the popup html
                var html =
                  "<h2>Airport</h2>" +
                  "<br>" +
                  "<img src='" +
                  imgSrc +
                  "' width='100' height='128'>" +
                  "<br>" +
                  "Name: " +
                  airportName +
                  "<br>" +
                  "Country: " +
                  feature.properties["field_4"] +
                  "<br>" +
                  "Code: " +
                  feature.properties["field_5"] +
                  "<br>" +
                  "Click the link <a href='https://en.wikipedia.org/wiki/" +
                  airportName.replace(/\s/g, "_") +
                  "' target='_blank'>here</a> to see the Wikipedia page for the airport.";
                layer.bindPopup(html, popupOptions);
                layer.openPopup();
              });
            }
          });
        },
      });
      //add markers to declared cluster group using plugin
      airportmarkercluster = L.markerClusterGroup();
      airportmarkercluster.addLayer(airportlayer);
      //mymap.addLayer(airportlayer);
    });
  });
}

function toggleAirportsoftheWorld() {
  //get the button id
  var simpleMarker = document.getElementById("toggleAirportsBtn");

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
  if (mymap.hasLayer(airportmarkercluster)) {
    mymap.removeLayer(airportmarkercluster);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    //lazy mode to move to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    mymap.addLayer(airportmarkercluster);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are all the airports of the world! The site <a href='https://openflights.org/data.html#airport' target='_blank'>here</a> provides a csv file that was preprocessed in QGIS. Then added custom marker icons as well as implemented popups which fetches a image and link from wikipedia depending on the airport. Finally also added the layer to a marker cluster group for better performance again using a plugin that can be <a href='https://github.com/Leaflet/Leaflet.markercluster' target='_blank'>here</a>!";
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addairportsoftheworld, 5000);
