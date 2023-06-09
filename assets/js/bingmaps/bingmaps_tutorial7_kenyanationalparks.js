var layer3;

function addKenyaProtectedAreas() {
  //create layer
  layer3 = new Microsoft.Maps.Layer();

  //Load GeoJSON module.
  Microsoft.Maps.loadModule("Microsoft.Maps.GeoJson", function () {
    //Read the GeoJSON file that is hosted on the same domain.
    Microsoft.Maps.GeoJson.readFromUrl(
      "assets/geojson/ke_nationalparks.json",
      function (shapes) {
        //add shape to layer
        layer3.add(shapes);
        //add the shape(s) to the map.
        map.layers.insert(layer3);
        layer3.setVisible(false);

        //add a mouse down event handler to the shapes
        for (var i = 0; i < shapes.length; i++) {
          var shape = shapes[i];
          if (shape instanceof Microsoft.Maps.Polygon) {
            Microsoft.Maps.Events.addHandler(shape, "mousedown", function (e) {
              //when user has clicked on the polygon, show an info window.
              //we can retrieve information from the geojson file using the metadata property
              //and display that in the info window
              var name = e.target.metadata.AREANAME;
              var area = e.target.metadata.AREA_SQKM1;
              var type = e.target.metadata.DESIGNATE;

              // create infowindow and pass variables to it
              var infoWindow = new Microsoft.Maps.Infobox(e.location, {
                title: name,
                description:
                  "This " + type + " has a square area of " + area + "",
              });
              //set the map to display the infowindow
              infoWindow.setMap(map);
            });
          }
        }
      }
    );
  });
}

function toggleKenyaProtectedAreas() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
  "Here is a geoJSON layer of Kenya's national parks and protected areas. The shape file was preprocessed in QGIS and generated random colours for each of the polygons. Clicking on each polygon displays a infoWindow with information about the polygon which is retrieved from the geoJSON file. The dataset used can be found <a href='https://datasets.wri.org/dataset/protected-areas-in-kenya' target='_blank'>here</a>.";

  //set the map view to the location
  map.setView({
    center: new Microsoft.Maps.Location(
      0.031650618676155345,
      37.93053552163329
    ),
    zoom: 6,
  });

  //toggle the layer on and off
  if (layer3.getVisible(true)) {
    layer3.setVisible(false);
  } else {
    layer3.setVisible(true);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addKenyaProtectedAreas, 1000);
