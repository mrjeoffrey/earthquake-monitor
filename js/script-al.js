var zipCode;
var userValue;
var historyEl = document.getElementById("cityHistoryList");
var inputEl = document.getElementById("large-input");

// cityArray grabs localStorage or if empty, creates empty array
var cityArray = JSON.parse(localStorage.getItem("cityHistory")) || [];

// getValue(); also listens for input
var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
	userValue = inputEl.value;
	historyEl.innerHTML = "";

	createHistory();
	searchHistory();
	geoCode();
});

// getValue - refactored
function getValue() {}

// getgeoCode();
function geoCode() {
	zipCode = userValue;

	var url =
		"https://maps.googleapis.com/maps/api/geocode/json?address=California?zipcode=" +
		zipCode +
		"&key=AIzaSyAv_sX-T1PMgiRLVrTjhrRAbJ-K7Plw9Nw";

	console.log(url);

	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			var city = document.getElementById("cityName");
			city.textContent = data.results[0].formatted_address;
			var results = data.results[0].geometry.location;
			console.log(results);
			var latitude = results.lat;
			var longitude = results.lng;

			console.log(latitude);
			console.log(longitude);
			searchCoordinates(longitude, latitude);
		});
}

function searchCoordinates(longitude, latitude) {
	var requestUrl =
		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&latitude=" +
		latitude +
		"&longitude=" +
		longitude +
		"&maxradiuskm=300&orderby=time&eventtype=earthquake&endtime&limit=5";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

			for (var i = 0; i < data.features.length; i++) {
				features = data.features[i];
				magnitude = features.properties.mag;
				place = features.properties.place;
				time = features.properties.time;

				myDate = new Date(time);
				console.log(
					"mag: " + magnitude + "\n location" + place + "\n myDate " + myDate
				);

				var resultMag = document.getElementById(`results${i + 1}`);

				resultMag.textContent =
					"mag: " + magnitude + "\n location" + place + "\n myDate " + myDate;
			}
		});
}

function getInfo() {
	//API filters: Earthquake, start time, end time, and limit
	var requestUrl =
		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=magnitude&eventtype=earthquake&endtime&limit=10";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data); // all the data on the API

			//    Takes API data and sorts by magnitude, largest to smallest
			const sorted = data.features.sort(
				(a, b) => b.properties.mag - a.properties.mag
			);
			console.log(sorted);

			for (var i = 0; i < data.features.length; i++) {
				features = data.features[i];
				var magnitude = features.properties.mag;
				var place = features.properties.place;
				var time = features.properties.time;
				// These variables pull the coordinates individually from a geometry point 
				var lat = features.geometry.coordinates[1];
				var long = features.geometry.coordinates[0];
				// This variable loops through the coordinates-however this does not function as coord on its own
				var coord = lat,long
					console.log(lat,long)

				// These will list the recent earthquakes in sorted order of magnitude, largest to smallest
				var day = document.getElementById(`date${i + 1}`);
				var loc = document.getElementById(`location${i + 1}`);
				var mag = document.getElementById(`mag${i + 1}`);
				// This variable pulls all ids in order 
				var displayLittleMap = document.getElementById(`severeMap${i + 1}`); 

				myDate = new Date(time);
				loc.textContent = place;
				day.textContent = myDate;
				mag.textContent = magnitude + " M";
				// The elements are called and the API url for the static map is added. 
				// The variables set for the coordinates being pulled are added here. This
				// in turn produces maps that are constantly adapting to the newly pulled coordinates
				displayLittleMap.src = `https://maps.googleapis.com/maps/api/staticmap?&center=${lat},${long}&zoom=9&size=90x62&scale=2&maptype=hybrid&markers=size:tiny|color:red|${lat},${long}&key=AIzaSyC72d4HR-Hqfy8tUtGo4nJDGGvE4ux2Brw`;

			}
		});
}

function earthQuakeByTime() {
	//API filters: Earthquake, start time, end time, and limit
	var requestUrl =
		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=time&eventtype=earthquake&endtime&limit=10";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data); // all the data on the API

			for (var i = 0; i < data.features.length; i++) {
				features = data.features[i];
				magnitude = features.properties.mag;
				// console.log(features.properties.mag);
				place = features.properties.place;
				time = features.properties.time;
				// These variables pull the coordinates individually from a geometry point 
				lat = features.geometry.coordinates[1];
				long = features.geometry.coordinates[0];
				// This variable loops through the coordinates-however this does not function as coord on its own
				coord = lat,long
				console.log(lat,long)
				
				myDate = new Date(time);

				var locationSev = document.getElementById(`sever-location${i + 1}`);
				var magSev = document.getElementById(`sever-mag${i + 1}`);
				var dateSev = document.getElementById(`sever-date${i + 1}`);
				// This variable pulls all ids in order 
				var displayLittleMap = document.getElementById(`latestMap${i + 1}`);

				locationSev.innerText = place;
				magSev.innerText = magnitude + " M";
				dateSev.innerText = myDate;
				// The elements are called and the API url for the static map is added. 
				// The variables set for the coordinates being pulled are added here. This
				// in turn produces maps that are constantly adapting to the newly pulled coordinates
				displayLittleMap.src = `https://maps.googleapis.com/maps/api/staticmap?&center=${lat},${long}&zoom=9&size=90x62&scale=2&maptype=hybrid&markers=size:tiny|color:yellow|${lat},${long}&key=AIzaSyC72d4HR-Hqfy8tUtGo4nJDGGvE4ux2Brw`;

			}
		});
}

function createHistory() {
	var initList = userValue;

	// if list is null or empty do this if
	if (initList !== null || initList !== "") {
		// if city array index equals -1, don't push to local storage to not have duplicate button.
		if (cityArray.indexOf(initList) == -1) {
			cityArray.push(initList);
			localStorage.setItem("cityHistory", JSON.stringify(cityArray));
		}
	}
}

//searchHistoryList - pull data into local storage
function searchHistory() {
	// historyEl.innerHTML = "";
	var searchList = JSON.parse(localStorage.getItem("cityHistory"));
	var ulEl = document.createElement("ul");

	for (let i = 0; i < searchList.length; i++) {
		const btnCity = searchList[i];
		var liEL = document.createElement("li");
		var btn = document.createElement("button");
		btn.textContent = btnCity;
		ulEl.appendChild(liEL);
		liEL.appendChild(btn);
	}
	historyEl.appendChild(ulEl);
}

// create event listener
historyEl.addEventListener("click", function (event) {
	event.preventDefault();
	var valueCity = event.target.textContent;
	userValue = valueCity;
	geoCode();
});

// Sets bigMap as a global variable
let bigMap;
// this function is called when the google api library is downloaded using the mapDisplay callback 
function mapDisplay() {
	// combines all map preferences under one variab;e
	var options = {
		center: { lat: 36.5935, lng: -122.612 },
		zoom: 6,
		mapTypeId: "hybrid",
	};
	// grabs map id to display the map
	bigMap = new google.maps.Map(document.getElementById("map"), options);
	// dynamically creates a script tag
	var latestUsgs = document.createElement("script");
	// assigns the google API url to that script tag, then appends the script to head
	latestUsgs.src =
		"https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
	document.getElementsByTagName("head")[0].appendChild(latestUsgs);
	// pulls magnitude property and sets a marker
	bigMap.data.setStyle((feature) => {
		const magnitude = feature.getProperty("mag");
		return {
			icon: getCircle(magnitude),
		};
	});
}
// sets the styling to the marker pinned above
function getCircle(magnitude) {
	return {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: "orange",
		fillOpacity: 0.35,
		scale: Math.pow(3, magnitude) / 2,
		strokeColor: "white",
		strokeWeight: 0.8,
	};
}
// this calls the API data from google map API and adds the geojson layer to the map
function eqfeed_callback(results) {
	bigMap.data.addGeoJson(results);
}

getInfo();
earthQuakeByTime();
searchHistory();
