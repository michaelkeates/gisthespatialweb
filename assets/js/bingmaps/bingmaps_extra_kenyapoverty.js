var layer4;

function addKenyaPoverty() {
  //create layer
  layer4 = new Microsoft.Maps.Layer();

  //Load GeoJSON module.
  Microsoft.Maps.loadModule("Microsoft.Maps.GeoJson", function () {
    //Read the GeoJSON file that is hosted on the same domain.
    Microsoft.Maps.GeoJson.readFromUrl(
      "assets/geojson/ke_poverty.json",
      function (shapes) {
        //add shape to layer
        layer4.add(shapes);
        //Add the shape(s) to the map.
        map.layers.insert(layer4);
        layer4.setVisible(false);

        //add a mouseover event to the shapes
        for (var i = 0; i < shapes.length; i++) {
          var shape = shapes[i];
          if (shape instanceof Microsoft.Maps.Polygon) {
            Microsoft.Maps.Events.addHandler(shape, "mousedown", function (e) {
              //when the mouse is over the polygon, show an info window.
              //declare the name variable here, so that it has the correct
              //value of the shape that was clicked on.
              var name = e.target.metadata.LOCATION;
              var poverty = e.target.metadata.LOC_POOR_D;
              var population = e.target.metadata.LOC_PPLE_A;
              //create the info window and pass the variables to it
              var infoWindow = new Microsoft.Maps.Infobox(e.location, {
                title: name,
                description:
                  "This county has a poverty score of " +
                  poverty +
                  " and the population is " +
                  population +
                  ".",
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

function toggleKenyaPoverty() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //Update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a geoJSON layer of Kenya's poverty levels. The shape file was preprocessed in QGIS and polygons have been coloured. The darker the colour the higher the poverty level. You can click on any of the polygons to view information that has been retrieved from the geoJSON file. The data set can be found <a href='https://datasets.wri.org/dataset/poverty-data-for-kenya-1999' target='_blank'>here</a>.";

  //set the map view to the location
  map.setView({
    center: new Microsoft.Maps.Location(
      0.031650618676155345,
      37.93053552163329
    ),
    zoom: 6,
  });

  //toggle the layer on and off
  if (layer4.getVisible(true)) {
    layer4.setVisible(false);
  } else {
    layer4.setVisible(true);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addKenyaPoverty, 1000);
