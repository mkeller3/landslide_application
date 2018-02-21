var map = L.map('map').setView([39.801786, -99.316406], 5);

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(map);

var wmsLayer = L.tileLayer.wms('http://18.221.74.167:8080/geoserver/ows?', {
		layers: 'postgresql:counties',
		transparent: true,
    format: 'image/png'
	});

var baseMaps = {
    "Streets": streets
};

var overlayMaps = {
    "Counties": wmsLayer
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
