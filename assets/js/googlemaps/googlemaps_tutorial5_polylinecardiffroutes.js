var polylinecardiffroutes = [];

//declare image as variable as too lazy to type that out each time :)
const image = "assets/img/airport.png";

function addpolylinecardiffroutes() {
  //airports positions as variables
  var cardiffairportposition = new google.maps.LatLng(
    51.39865043366927,
    -3.3396875227999154
  );
  marker1 = new google.maps.Marker({
    map: map,
    icon: image,
    position: cardiffairportposition,
  });
  polylinecardiffroutes.push(marker1);
  var dublinairportposition = new google.maps.LatLng(
    53.42672289557599,
    -6.249930854179932
  );
  marker2 = new google.maps.Marker({
    map: map,
    icon: image,
    position: dublinairportposition,
  });
  polylinecardiffroutes.push(marker2);
  var edinburghairportposition = new google.maps.LatLng(
    55.9509711820238,
    -3.3614531897948097
  );
  marker3 = new google.maps.Marker({
    map: map,
    icon: image,
    position: edinburghairportposition,
  });
  polylinecardiffroutes.push(marker3);
  var leedsbradfordairportposition = new google.maps.LatLng(
    53.86839577987251,
    -1.6615097028118204
  );
  marker4 = new google.maps.Marker({
    map: map,
    icon: image,
    position: leedsbradfordairportposition,
  });
  polylinecardiffroutes.push(marker4);
  var bangorairportposition = new google.maps.LatLng(
    44.80836240540095,
    -68.81649811299242
  );
  marker5 = new google.maps.Marker({
    map: map,
    icon: image,
    position: bangorairportposition,
  });
  polylinecardiffroutes.push(marker5);
  var southamptonairportposition = new google.maps.LatLng(
    50.95165164279003,
    -1.3576905095745837
  );
  marker6 = new google.maps.Marker({
    map: map,
    icon: image,
    position: southamptonairportposition,
  });
  polylinecardiffroutes.push(marker6);
  var stansteadairportposition = new google.maps.LatLng(
    51.886157117038486,
    0.2392201596259146
  );
  marker7 = new google.maps.Marker({
    map: map,
    icon: image,
    position: stansteadairportposition,
  });
  polylinecardiffroutes.push(marker7);
  var exeterairportposition = new google.maps.LatLng(
    50.73513955921696,
    -3.415310293768144
  );
  marker8 = new google.maps.Marker({
    map: map,
    icon: image,
    position: exeterairportposition,
  });
  polylinecardiffroutes.push(marker8);
  //end of airports

  //add everything to array so we can toggle them on and off
  var cardifftodublinroute = new google.maps.MVCArray([
    cardiffairportposition,
    dublinairportposition,
  ]);
  var cardiffedinburghroute = new google.maps.MVCArray([
    cardiffairportposition,
    edinburghairportposition,
  ]);
  var cardiffleedsroute = new google.maps.MVCArray([
    cardiffairportposition,
    leedsbradfordairportposition,
  ]);
  var cardiffbangorroute = new google.maps.MVCArray([
    cardiffairportposition,
    bangorairportposition,
  ]);
  var cardiffsouthamptonroute = new google.maps.MVCArray([
    cardiffairportposition,
    southamptonairportposition,
  ]);
  var cardiffstansteadroute = new google.maps.MVCArray([
    cardiffairportposition,
    stansteadairportposition,
  ]);
  var cardiffexeterroute = new google.maps.MVCArray([
    cardiffairportposition,
    exeterairportposition,
  ]);

  //declare line to replicate flight path
  var lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
  };

  //style the different plylines
  var line1 = new google.maps.Polyline({
    path: cardifftodublinroute,
    geodesic: true,
    strokeColor: "green",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line1);
  var line2 = new google.maps.Polyline({
    path: cardiffedinburghroute,
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line2);
  var line3 = new google.maps.Polyline({
    path: cardiffleedsroute,
    geodesic: true,
    strokeColor: "purple",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line3);
  var line4 = new google.maps.Polyline({
    path: cardiffbangorroute,
    geodesic: true,
    strokeColor: "yellow",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line4);
  var line5 = new google.maps.Polyline({
    path: cardiffsouthamptonroute,
    geodesic: true,
    strokeColor: "aqua",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line5);
  var line6 = new google.maps.Polyline({
    path: cardiffstansteadroute,
    geodesic: true,
    strokeColor: "brown",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line6);
  var line7 = new google.maps.Polyline({
    path: cardiffexeterroute,
    geodesic: true,
    strokeColor: "orange",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      },
    ],
  });
  polylinecardiffroutes.push(line7);

  for (i = 0; i < polylinecardiffroutes.length; i++) {
    polylinecardiffroutes[i].setMap(null);
  }
}

function togglePolylineCardiffRoutes() {
  //move back to top of page as too lazy to scroll :)
  window.scrollTo({ top: 100, left: 100, behavior: "smooth" });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a simple polyline showing all the flight routes from Cardiff with a custom style and markers showing where the airports are!";

  //lets first move to cardiff and set zoom
  map.setCenter(new google.maps.LatLng(52.471773529068045, -3.25286326804203));
  map.setZoom(4);

  //for every gmarker in array, display if hidden else hide
  for (i = 0; i < polylinecardiffroutes.length; i++) {
    if (polylinecardiffroutes[i].getMap() != null)
      polylinecardiffroutes[i].setMap(null);
    else polylinecardiffroutes[i].setMap(map);
  }
}

//have to set a timer so that this will be rendered after initilizing of the map or it wont appear at all
setTimeout(addpolylinecardiffroutes, 500);
