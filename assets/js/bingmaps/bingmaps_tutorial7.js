var map, SearchManager;

//create a custom style for the map.
var midnightCommander = {
  version: "1.0",
  settings: {
    landColor: "#2c2c2f",
  },
  elements: {
    mapElement: {
      labelColor: "#FFFFFF",
      labelOutlineColor: "#000000",
    },
    political: {
      borderStrokeColor: "#144B53",
      borderOutlineColor: "#00000000",
    },
    point: {
      iconColor: "#0C4152",
      fillColor: "#000000",
      strokeColor: "#0C4152",
    },
    transportation: {
      strokeColor: "#157399",
      fillColor: "#000000",
    },
    highway: {
      strokeColor: "#1f2835",
      fillColor: "#746855",
    },
    controlledAccessHighway: {
      strokeColor: "#1f2835",
      fillColor: "#746855",
    },
    arterialRoad: {
      strokeColor: "#157399",
      fillColor: "#746855",
    },
    majorRoad: {
      strokeColor: "#157399",
      fillColor: "#000000",
    },
    railway: {
      strokeColor: "#146474",
      fillColor: "#2f3948",
    },
    structure: {
      fillColor: "#2c2c2f",
    },
    water: {
      fillColor: "#17263c",
    },
    area: {
      fillColor: "#263c3f",
    },
  },
};

function GetMap() {
  //close side menu
  document.getElementById("dashboard").style.width = "0";

  //load the map
  map = new Microsoft.Maps.Map("#bingMap", {
    center: new Microsoft.Maps.Location(1.6479583500580715, 37.686893032129724),
    customMapStyle: midnightCommander,
    zoom: 7,
  });

  //load the search module
  Microsoft.Maps.loadModule("Microsoft.Maps.AutoSuggest", function () {
    var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
    manager.attachAutosuggest("#searchInput", "#form", suggestionSelected);
  });

  //update box the message
  document.getElementById("displaymessage").innerHTML =
    "Here is a basic 'slippy-map' with custom styles to change the look. There is a search bar where you can search for anything. Toggle any of the buttons below to display something on the map! You can hover over the toggle to get more information!<br>This will freeze a bit but it will become responsive in a minute.";
}

function suggestionSelected(result) {
  //Remove previously selected suggestions from the map.
  map.entities.clear();

  //Show the suggestion as a pushpin and center map over it.
  var pin = new Microsoft.Maps.Pushpin(result.location);
  map.entities.push(pin);

  //Update the map view to show the suggestion.
  map.setView({ bounds: result.bestView });
}
