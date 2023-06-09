// Define DB source
var fullURLSSSI19;
var sssi19style;
var WFSsss19;

//define the style for the SSSI layer
var sssi19style = {
  fillColor: "green",
  color: "green",
  weight: 2,
  fillOpacity: 0.5,
};

//define the function to add the SSSI layer
function addwfssssi19() {
  var rootURL = "https://geoserver.michaelkeates.co.uk/geoserver/geoserver/ows";
  var WFSparams5 = {
    service: "WFS",
    version: "1.0.0",
    request: "GetFeature",
    typeName: "geoserver:sssi_19",
    maxFeatures: 50,
    outputFormat: "text/javascript",
    format_options: "callback: getJson",
    srsName: "EPSG:4326",
    geometryName: "geom",
  };

  //declare the selectedPolygon variable
  var selectedPolygon;

  //return a promise to load the data in the background or whole page gets messed up!!!!!
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: rootURL,
      dataType: "jsonp",
      jsonpCallback: "getJson",
      data: WFSparams5,
      success: function (response) {
        WFSsss19 = L.geoJSON(response, {
          style: sssi19style,
          onEachFeature: function (feature, layer) {
            layer.on("click", function (e) {
              //deselect previously selected polygon (if any)
              if (selectedPolygon) {
                selectedPolygon.setStyle({ fillColor: "green" });
              }

              //change the fill color to red for the clicked polygon
              e.target.setStyle({ fillColor: "red" });
              selectedPolygon = e.target;

              //display table with properties from geojson
              var tableContent = "<table>";
              tableContent +=
                "<tr><th>fid</th><th>sssi_name</th><th>osmm_data</th><th>type</th></tr>";
              tableContent += "<tr>";
              tableContent += "<td>" + feature.properties.fid + "</td>";
              tableContent += "<td>" + feature.properties.sssi_name + "</td>";
              tableContent += "<td>" + feature.properties.osmm_data + "</td>";
              tableContent += "<td>" + feature.properties.type + "</td>";
              tableContent += "</tr>";
              tableContent += "</table>";
              tableContent += "<br>";

              document.getElementById("featureProperties").innerHTML =
                tableContent;
            });
          },
        });
        resolve();
      },
      //if there is an error loading the data, reject the promise
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}

// Immediately invoke the addwfssssi19 function to load the layer in the background
addwfssssi19()
  .then(function () {
    console.log("Layer loaded in the background");
  })
  .catch(function (error) {
    console.error("Error loading WFS data:", error);
  });

function togglewfssssi19() {
  var simpleMarker = document.getElementById("togglewfssssi19Btn");
  var carddiv = document.getElementById("card").parentNode;
  var featureProperties = document.getElementById("featureProperties");

  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  //check if the layer is already loaded
  if (WFSsss19) {
    if (mymap.hasLayer(WFSsss19)) {
      mymap.removeLayer(WFSsss19);
      carddiv.classList.remove("class-alert");
      carddiv.classList.add("card");
      //clear the feature properties and remove the div
      featureProperties.innerHTML = "";
      featureProperties.parentNode.removeChild(featureProperties);
      document.getElementById("displaymessage").innerHTML =
        "Click on any of the toggles below to see the layers!";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      mymap.addLayer(WFSsss19);
      carddiv.classList.remove("class-alert");
      carddiv.classList.add("card");
      document.getElementById("displaymessage").innerHTML =
        "Here are the Sites of Special Interests loaded using the WFS route!";
      mymap.fitBounds(WFSsss19.getBounds());
    }
  } else {
    simpleMarker.disabled = true;
    carddiv.classList.remove("card");
    carddiv.classList.add("cardalert");
    document.getElementById("displaymessage").innerHTML =
      "Loading... Please wait while the layer is loading.";

    addwfssssi19()
      .then(function () {
        mymap.addLayer(WFSsss19);
        carddiv.classList.remove("cardalert");
        carddiv.classList.add("card");
        document.getElementById("displaymessage").innerHTML =
          "Here are the Sites of Special Interests loaded using the WFS route!";
        mymap.fitBounds(WFSsss19.getBounds());
        simpleMarker.disabled = false;
      })
      //if there is an error loading the data, reject the promise
      .catch(function (error) {
        console.error("Error loading WFS data:", error);
        simpleMarker.disabled = false;
      });
  }
}

//call the function to load WFS data when the button is clicked
//document.getElementById("togglewfssssi19Btn").addEventListener("click", togglewfssssi19);

function getJson(data) {
  return data;
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
//setTimeout(addwfssssi19, 1000);
