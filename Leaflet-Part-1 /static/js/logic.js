// Part 1: Create the Earthquake Visualization
// Create a map object.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
let myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 3
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Function to determine the size of marker based on magnitude of earthquake 
function getMarkerSize(magnitude) {
  return magnitude * 5;
}

// Function to determine color based on depth of earthquake 
function getMarkerColor(depth) {
  if (depth >= 90) {
    return "red";
  } else if (depth >= 70) {
    return "darkorange";
  } else if (depth >= 50) {
    return "orange";
  } else if (depth >= 30) {
    return "yellow"; 
  } else if (depth >= 10) {
    return "lightgreen";
  } else {
    return "green"
  }
}

// Loading geoJSON to the map 
d3.json(queryUrl).then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function(feature, coordinates) {

      // Create and style the marker
      return L.circleMarker(coordinates, {
        radius: getMarkerSize(feature.properties.mag),
        fillColor: getMarkerColor(feature.geometry.coordinates[2]),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function(feature, layer) {
      // Add popup with additional information
      let popupContent = "<h3>" + feature.properties.title + "</h3>";
      popupContent += "<p><strong>Magnitude:</strong> " + feature.properties.mag + "</p>";
      popupContent += "<p><strong>Depth:</strong> " + feature.geometry.coordinates[2] + " km</p>";

      layer.bindPopup(popupContent);
    }
  }).addTo(myMap);

// Create a legend control
let legend = L.control({ position: "bottomright" });

// Function to generate the legend content
legend.onAdd = function(map) {
  let div = L.DomUtil.create("div", "legend");

  // Add legend title
  let legendTitle = "<h4>Earthquake Depth</h4>";
  div.innerHTML = legendTitle;

  // Define the legend labels and corresponding colors
  let labels = ["<10", "10-30", "30-50", "50-70", "70-90", ">90"];
  let colors = ["green", "lightgreen", "yellow", "orange", "darkorange", "red"];

  // Loop through labels and colors to create legend items
  for (let i = 0; i < labels.length; i++) {
    div.innerHTML += `<i style="background:${colors[i]}"></i>${labels[i]}<br>`;
  }
  return div;
};
// Add legend to the map
legend.addTo(myMap);
});
