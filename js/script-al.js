var zipCode;
var userValue;

// getValue();
var submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", getValue)

function getValue(){
    var inputEl = document.getElementById("large-input")
    userValue = inputEl.value
    console.log(userValue)

    geoCode();
}

// getgeoCode();
function geoCode() {


    zipCode = userValue

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=California?zipcode=" + zipCode + "&key=AIzaSyAv_sX-T1PMgiRLVrTjhrRAbJ-K7Plw9Nw"

    console.log(url);

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)  
            var city = document.getElementById("cityName");
            city.textContent = data.results[0].formatted_address
            var results = data.results[0].geometry.location
            console.log(results)
            var latitude = results.lat
            var longitude = results.lng

            console.log(latitude)
            console.log(longitude)
            searchCoordinates(longitude, latitude)
            
        })
    
    }    
   
function searchCoordinates(longitude, latitude){
    var requestUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&latitude="+ latitude + "&longitude=" + longitude + "&maxradiuskm=300&orderby=time&eventtype=earthquake&endtime&limit=5"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data) 

            for (var i = 0; i < data.features.length; i++) {
                features = data.features[i];
                magnitude = features.properties.mag
                place = features.properties.place
                time = features.properties.time

                myDate = new Date(time)
                console.log("mag: " + magnitude + "\n location" + place + "\n myDate " + myDate)
                
                var resultMag = document.getElementById(`results${i+1}`);

                resultMag.textContent = "mag: " + magnitude + "\n location" + place + "\n myDate " + myDate;

            }

 });
}

function getInfo(){
    //API filters: Earthquake, start time, end time, and limit
    var requestUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=magnitude&eventtype=earthquake&endtime&limit=10'
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data) // all the data on the API
            
        //    Takes API data and sorts by magnitude, largest to smallest
            const sorted = data.features.sort(
                (a, b) => b.properties.mag - a.properties.mag 
                );
                console.log(sorted);
            

            for (var i = 0; i < data.features.length; i++){
                features = data.features[i];
                var magnitude = features.properties.mag
                var place = features.properties.place
                var time = features.properties.time

                // These will list the recent earthquakes in sorted order of magnitude, largest to smallest
                var day = document.getElementById(`date${i+1}`);
                var loc = document.getElementById(`location${i+1}`);
                var mag = document.getElementById(`mag${i+1}`);

                myDate = new Date (time)
                loc.textContent = place;
                day.textContent = myDate;
                mag.textContent = magnitude;

            }

    });
}


function earthQuakeByTime(){
    //API filters: Earthquake, start time, end time, and limit
    var requestUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=time&eventtype=earthquake&endtime&limit=10'
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data) // all the data on the API

            for (var i = 0; i < data.features.length; i++) {
                features = data.features[i];
                magnitude = features.properties.mag
                place = features.properties.place
                time = features.properties.time
                // console.log(features.properties.mag);
                myDate = new Date(time)

                var locationSev = document.getElementById(`sever-location${i+1}`)
                var magSev = document.getElementById(`sever-mag${i+1}`)
                var dateSev = document.getElementById(`sever-date${i+1}`)

                locationSev.innerText = place
                magSev.innerText = magnitude
                dateSev.innerText = myDate
            }
    });
}

getInfo();
earthQuakeByTime();


