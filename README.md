Leaflet Challenge

Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I was tasked with developing a way to visualize USGS data that would allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

Part I: Create the Earthquake Visualization 

1. Visited this link: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php to retrieve json file of the earthquakes from the past 7 days. 

2. Imported and visualized the data by doing the following:

-- Using Leaflet, created a map that plots all the earthquakes from the dataset based on their longitude and latitude.

-- Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.

** Hint: The depth of the earth can be found as the third coordinate for each earthquake.

-- Included popups that provide additional information about the earthquake when its associated marker is clicked.

-- Created a legend that will provide context for the map data.

Screenshot of map: 

![Alt text](<Screenshot 2023-06-18 at 11.41.16 PM.png>)


