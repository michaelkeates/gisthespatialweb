//global variables
var cardiffairportmarker;
var dublinairportmarker;
var edinburghairportmarker;
var leedsbradfordairportmarker;
var bangorairportmarker;
var southamptonairportmarker;
var stansteadairportmarker;

var cardiffairportposition;
var dublinairportposition;
var edinburghairportposition;
var leedsbradfordairportposition;
var bangorairportposition;
var southamptonairportposition;
var stansteadairportposition;
var exeterairportposition;

var cardifftodublin;
var cardifftoedinburgh;
var cardifftoleedsbradford;
var cardifftobangor;
var cardifftosouthampton;
var cardifftostanstead;
var cardifftoexeter;

var polylineroutetodublin;
var polylineroutetoedinburgh;
var polylineroutetoleedsbradford;
var polylineroutetobangor;
var polylineroutetosouthampton;
var polylineroutetostanstead;
var polylineroutetoexeter;

function addpolylinecardiffroutes() {
  //create custom icon for markers
  airporticon = L.icon({
    iconUrl: "assets/img/airport.png",
    //this is cool! can add a shadow to the icons! :)
    shadowUrl: "assets/img/shadow.png",

    iconSize: [48, 48], // size of the icon
    shadowSize: [50, 64], // size of the shadow
  });

  //airports positions as variables
  cardiffairportposition = { lat: 51.39865043366927, lng: -3.3396875227999154 };
  dublinairportposition = { lat: 53.42672289557599, lng: -6.249930854179932 };
  edinburghairportposition = {
    lat: 55.9509711820238,
    lng: -3.3614531897948097,
  };
  leedsbradfordairportposition = {
    lat: 53.86839577987251,
    lng: -1.6615097028118204,
  };
  bangorairportposition = { lat: 44.80836240540095, lng: -68.81649811299242 };
  southamptonairportposition = {
    lat: 50.95165164279003,
    lng: -1.3576905095745837,
  };
  stansteadairportposition = {
    lat: 51.886157117038486,
    lng: 0.2392201596259146,
  };
  exeterairportposition = { lat: 50.73513955921696, lng: -3.415310293768144 };

  //create markers for airports
  cardiffairportmarker = L.marker(cardiffairportposition, {
    icon: airporticon,
  });
  dublinairportmarker = L.marker(dublinairportposition, { icon: airporticon });
  edinburghairportmarker = L.marker(edinburghairportposition, {
    icon: airporticon,
  });
  leedsbradfordairportmarker = L.marker(leedsbradfordairportposition, {
    icon: airporticon,
  });
  bangorairportmarker = L.marker(bangorairportposition, { icon: airporticon });
  southamptonairportmarker = L.marker(southamptonairportposition, {
    icon: airporticon,
  });
  stansteadairportmarker = L.marker(stansteadairportposition, {
    icon: airporticon,
  });
  exeterairportmarker = L.marker(exeterairportposition, { icon: airporticon });

  //point to points polylines
  cardifftodublin = [cardiffairportposition, dublinairportposition];
  cardifftoedinburgh = [cardiffairportposition, edinburghairportposition];
  cardifftoleedsbradford = [
    cardiffairportposition,
    leedsbradfordairportposition,
  ];
  cardifftobangor = [cardiffairportposition, bangorairportposition];
  cardifftosouthampton = [cardiffairportposition, southamptonairportposition];
  cardifftostanstead = [cardiffairportposition, stansteadairportposition];
  cardifftoexeter = [cardiffairportposition, exeterairportposition];

  //style polylines
  polylineroutetodublin = L.polyline(cardifftodublin, {
    color: "green",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetoedinburgh = L.polyline(cardifftoedinburgh, {
    color: "blue",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetoleedsbradford = L.polyline(cardifftoleedsbradford, {
    color: "purple",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetobangor = L.polyline(cardifftobangor, {
    color: "yellow",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetosouthampton = L.polyline(cardifftosouthampton, {
    color: "aqua",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetostanstead = L.polyline(cardifftostanstead, {
    color: "brown",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
  polylineroutetoexeter = L.polyline(cardifftoexeter, {
    color: "orange",
    opacity: 0.7,
    weight: 2,
    dashArray: "10, 10",
  });
}

function togglePolylineCardiffRoutes() {
  //lazy mode to scroll to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });

  //get button id
  var polylineCardiffRoutes = document.getElementById(
    "polylinecardiffroutesBtn"
  );

  //added check to change appearence of toggled button to change css class
  if (polylineCardiffRoutes.classList.contains("card-button")) {
    polylineCardiffRoutes.classList.remove("card-button");
    polylineCardiffRoutes.classList.add("card-button-on");
  } else {
    polylineCardiffRoutes.classList.remove("card-button-on");
    polylineCardiffRoutes.classList.add("card-button");
  }

  //if markers and polylines are on map remove them else add them
  if (
    mymap.hasLayer(cardiffairportmarker) &&
    mymap.hasLayer(dublinairportmarker) &&
    mymap.hasLayer(edinburghairportmarker) &&
    mymap.hasLayer(leedsbradfordairportmarker) &&
    mymap.hasLayer(bangorairportmarker) &&
    mymap.hasLayer(southamptonairportmarker) &&
    mymap.hasLayer(stansteadairportmarker) &&
    mymap.hasLayer(exeterairportmarker) &&
    mymap.hasLayer(polylineroutetodublin) &&
    mymap.hasLayer(polylineroutetoedinburgh) &&
    mymap.hasLayer(polylineroutetoleedsbradford) &&
    mymap.hasLayer(polylineroutetobangor) &&
    mymap.hasLayer(polylineroutetosouthampton) &&
    mymap.hasLayer(polylineroutetostanstead) &&
    mymap.hasLayer(polylineroutetoexeter)
  ) {
    mymap.removeLayer(cardiffairportmarker);
    mymap.removeLayer(dublinairportmarker);
    mymap.removeLayer(edinburghairportmarker);
    mymap.removeLayer(leedsbradfordairportmarker);
    mymap.removeLayer(bangorairportmarker);
    mymap.removeLayer(southamptonairportmarker);
    mymap.removeLayer(stansteadairportmarker);
    mymap.removeLayer(exeterairportmarker);
    mymap.removeLayer(polylineroutetodublin);
    mymap.removeLayer(polylineroutetoedinburgh);
    mymap.removeLayer(polylineroutetoleedsbradford);
    mymap.removeLayer(polylineroutetobangor);
    mymap.removeLayer(polylineroutetosouthampton);
    mymap.removeLayer(polylineroutetostanstead);
    mymap.removeLayer(polylineroutetoexeter);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Click on any of the toggles below to see the layers!";
  } else {
    mymap.addLayer(cardiffairportmarker);
    mymap.addLayer(dublinairportmarker);
    mymap.addLayer(edinburghairportmarker);
    mymap.addLayer(leedsbradfordairportmarker);
    mymap.addLayer(bangorairportmarker);
    mymap.addLayer(southamptonairportmarker);
    mymap.addLayer(stansteadairportmarker);
    mymap.addLayer(exeterairportmarker);
    mymap.addLayer(polylineroutetodublin);
    mymap.addLayer(polylineroutetoedinburgh);
    mymap.addLayer(polylineroutetoleedsbradford);
    mymap.addLayer(polylineroutetobangor);
    mymap.addLayer(polylineroutetosouthampton);
    mymap.addLayer(polylineroutetostanstead);
    mymap.addLayer(polylineroutetoexeter);
    //update box the message
    document.getElementById("displaymessage").innerHTML =
      "Here is a simple polyline showing all the flight routes from Cardiff with a custom style and markers showing where the airports are!";
  }
  //fit map to bounds of polyline
  mymap.fitBounds(polylineroutetodublin.getBounds());
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpolylinecardiffroutes, 500);
