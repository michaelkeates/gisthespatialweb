//decalre coords for birmingham
var birmingham = [-1.81185, 52.44314];
myStyle2 = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 0.5],
    anchorXUnits: "fraction",
    anchorYUnits: "fraction",
    src: "../../assets/img/EQ.png",
  }),
});

//create map and center to birmingham
map1 = new ol.Map({
  view: new ol.View({
    center: ol.proj.transform(birmingham, "EPSG:4326", "EPSG:3857"),
    zoom: 4,
  }),
  //add layers to map for the third party plugin
  layers: [
    new ol.layer.Group({
      title: "Tiles",
      layers: [
        new ol.layer.Tile({
          title: "OSM (Satellite)",
          source: new ol.source.OSM({
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          }),
          startActive: true,
        }),
        new ol.layer.Tile({
          title: "Bing Roads",
          source: new ol.source.BingMaps({
            //api key from the last gis coursework
            key: "KEY",
            imagerySet: "Road",
          }),
          visible: false,
        }),
        new ol.layer.Tile({
          title: "OSM Humanitarian",
          source: new ol.source.OSM({
            url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
          }),
          visible: false,
        }),
        new ol.layer.Tile({
          title: "OSM",
          visible: false,
          source: new ol.source.OSM(),
        }),
        //maptiler layer
        (maptiler = new ol.layer.Tile({
          title: "Maptiler",
          source: new ol.source.XYZ({
            url: "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KEY",
          }),
          visible: false,
        })),
      ],
    }),
    new ol.layer.Group({
      title: "Layers",
      layers: [
        //create heatmap layer showing earthquakes from 2012 using kml data
        (heatlayer = new ol.layer.Heatmap({
          title: "Earthquakes heatmap",
          source: new ol.source.Vector({
            url: "https://openlayers.org/en/v4.6.5/examples/data/kml/2012_Earthquakes_Mag5.kml",
            format: new ol.format.KML({
              extractStyles: false,
            }),
          }),
          visible: false,
          blur: 15,
          radius: 5,
        })),
        //create heatmap layer showing crime data in uk from 2019 using geojson data
        (crimelayer = new ol.layer.Heatmap({
          title: "Crime heatmap",
          source: new ol.source.Vector({
            url: "assets/geojson/southwalescrime.json",
            format: new ol.format.GeoJSON(),
          }),
          visible: false,
          blur: 15,
          radius: 5,
        })),
        //add rain from open weather map
        (rainlayer = new ol.layer.Tile({
          title: "Rain",
          source: new ol.source.XYZ({
            url: "https://tile.openweathermap.org/map/rain/{z}/{x}/{y}.png?appid=KEY",
          }),
          visible: false,
        })),
      ],
    }),
  ],
  target: "mapContainer",
});

//add controls to map like fullscreen
map1.addControl(new ol.control.FullScreen());
//add mouse position to map
map1.addControl(new ol.control.MousePosition());
//add overview map to map
map1.addControl(
  new ol.control.OverviewMap({
    collapsed: true,
    //layers: [osmLayer],
  })
);
map1.addControl(
  new ol.control.ScaleLine({
    target: document.getElementById("myScaleLineContainer"),
    units: "imperial",
  })
);

//add layer switcher to map
var layerSwitcher = new ol.control.LayerSwitcher({
  tipLabel: "Légende", // Optional label for button
  groupSelectStyle: "group", // Can be 'children' [default], 'group' or 'none'
});
map1.addControl(layerSwitcher);

//add eventlisteners to checkboxes to show and hide layers
document
  .getElementById("bordersLayerOnOff")
  .addEventListener("change", function () {
    geoJSONLayer.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the country borders!";
  });

document
  .getElementById("wsmLayerOnOff")
  .addEventListener("change", function () {
    wmsLayer.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the WMS Layer!";
  });

document
  .getElementById("postcodeLayerOnOff")
  .addEventListener("change", function () {
    postcodesLayer.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the polygons representing all the postcode units in Monmouthshire loaded as a external GeoJSON file! I wasn't able to find the dataset on Blackboard or Mark's website so I sourced the dataset <a href='https://longair.net/blog/author/mark/' target='_blank'>here</a>. Its roughly similar I think :S";
  });

document
  .getElementById("bngLayerOnOff")
  .addEventListener("change", function () {
    bngLayer.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is the BNG Layer!";
  });

document
  .getElementById("simpleMarkerOnOff")
  .addEventListener("change", function () {
    markerVectorLayer.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple marker!";
  });

document
  .getElementById("simplePNGMarkerOnOff")
  .addEventListener("change", function () {
    markerVectorLayerPNG.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple marker with a custom png for the icon!";
  });

document.getElementById("eqLayerOnOff").addEventListener("change", function () {
  eqLayer.setVisible(this.checked);
  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
});

document
  .getElementById("selectInteractionOnOff")
  .addEventListener("change", function () {
    geoJSONLayer.setVisible(this.checked);
    select.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
  });

document
  .getElementById("selectClickEventOnOff")
  .addEventListener("change", function () {
    wmsLayer.setVisible(this.checked);
    select.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the earthquakes with a custom icon loaded from OpenLayers example KML!";
  });

document
  .getElementById("mountainsOnOff")
  .addEventListener("change", function () {
    geoMountains.setVisible(this.checked);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the mountains generated from the direct SQL/PostGIS route!";
  });

  document
  .getElementById("polygonOnOff")
  .addEventListener("change", function () {
    vectorLayer.setVisible(this.checked);
    //fit the map to the extent of the vector layer
    map1.getView().fit(vectorLayer.getSource().getExtent(), map1.getSize());
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here are the mountains generated from the direct SQL/PostGIS route!";
  });
