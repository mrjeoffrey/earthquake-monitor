// Initializes GoogleMaps API in Maps Section
function initMap() {
	var options = {
		center: { lat: 36.5935, lng: -122.612 },
		zoom: 6,
		mapTypeId: "hybrid",
	};
	map = new google.maps.Map(document.getElementById("map"), options);
}

// Fix this code for geomapping the latest earthquakes and earthquake severity
// function mapPreview() {
// 	var options = {
// 		center: { lat: 36.5935, lng: -122.612 },
// 		zoom: 6,
// 		mapTypeId: "hybrid",
// 	};
// 	map = new google.maps.Map(document.getElementById("map"), options);
// }
