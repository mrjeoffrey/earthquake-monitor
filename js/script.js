// function getInfo() {
// 	//API filters: Earthquake, start time, end time, and limit
// 	var requestUrl =
// 		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=magnitude&eventtype=earthquake&endtime&limit=10";
// 	fetch(requestUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data); // all the data on the API

// 			//    Takes API data and sorts by magnitude, largest to smallest
// 			const sorted = data.features.sort(
// 				(a, b) => b.properties.mag - a.properties.mag
// 			);
// 			console.log(sorted);

// 			var features = data.features; // the 'feature' object inside the 'data'

// 			console.log(features[1]);

// 			// This loop is rendering the date, location, and magnitude dynamically to the page
// 			for (var i = 0; i < data.features.length; i++) {
// 				features = data.features[i];
// 				var magnitude = features.properties.mag;
// 				var place = features.properties.place;
// 				var time = features.properties.time;

// 				// These will list the recent earthquakes in sorted order of magnitude, largest to smallest
// 				var day = document.getElementById(`date${i + 1}`);
// 				var loc = document.getElementById(`location${i + 1}`);
// 				var mag = document.getElementById(`mag${i + 1}`);

// 				myDate = new Date(time);
// 				loc.textContent = place;
// 				day.textContent = myDate;
// 				mag.textContent = magnitude + " M";
// 			}
// 		});
// }

// function earthQuakeByTime() {
// 	//API filters: Earthquake, start time, end time, and limit
// 	var requestUrl =
// 		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=time&eventtype=earthquake&endtime&limit=10";
// 	fetch(requestUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data); // all the data on the API

// 			// this loop is getting all the 'features' object giving us direct info and access on what specific 'key' we want (i.e place, magnitute, date, etc...)
// 			for (var i = 0; i < data.features.length; i++) {
// 				features = data.features[i];
// 				magnitude = features.properties.mag;
// 				place = features.properties.place;
// 				time = features.properties.time;
// 				// console.log(features.properties.mag);
// 				myDate = new Date(time);

// 				var locationSev = document.getElementById(`sever-location${i + 1}`);
// 				var magSev = document.getElementById(`sever-mag${i + 1}`);
// 				var dateSev = document.getElementById(`sever-date${i + 1}`);
// 				var picSev = document.getElementById(`severpic${i + 1}`);

// 				locationSev.innerText = place;
// 				magSev.innerText = magnitude + " M";
// 				dateSev.innerText = myDate;

// 				console.log(magnitude, place, time);

// 				var specLocation = locationSev.innerText
// 					.substring(10, locationSev.length)
// 					.trim();
// 				console.log(specLocation.split(" "));

// 			}
// 		});
// }

// function earthQuakeCoords() {
// 	var requestUrl =
// 		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=31.9833333&minlongitude=-80.79999972222222&orderby=time&eventtype=earthquake&endtime&limit=5";

// 	fetch(requestUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data); // all the data on the API

// 			for (var i = 0; i < data.features.length; i++) {
// 				features = data.features[i];
// 				coords = features.geometry.coordinates;
// 				lat = coords[0];
// 				long = coords[1];

// 				myDate = new Date(time);

// 				console.log("lat: " + lat + "long: " + long);
// 			}
// 		});
// }

// getInfo();

// earthQuakeByTime();

// earthQuakeByTime();
