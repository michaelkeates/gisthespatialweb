//declare the variables
var mymap, attribution, tileUrl, tiles;

//initilize the map and add attribution
mymap = L.map("issMap").setView([51.5919777, -3.3249601], 8);
attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var maptiler = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KEY', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

//have this as the default layer
maptiler.addTo(mymap);

//basic OpenStreetMap tile server url
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
});

//google street map tile server url
googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

//google satellite map tile server url
googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

satelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 20,
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  subdomains:['mt0','mt1','mt2','mt3']
});

//allow the user to select which layer they want to see
var baseLayers = {
  "Maptiler": maptiler,
  "OpenStreetMap": osm,
  "GoogleStreetMap": googleStreets,
  "GoogleSatelliteMap": googleSat,
  "OSM (Satellite)": satelite,
};

//add the layer control to the map
L.control.layers(baseLayers).addTo(mymap);
//add the geo location controlplugin to the map in the top left corner
L.geolet({ position: 'topleft' }).addTo(mymap);

