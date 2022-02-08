// var searchInput = document.getElementById("input")
// console.log (searchInput)
// var submitButtonEl = document.querySelector("submit-btn")
// function getValue(){
//     var inputVal = document.querySelector("input")
//     var value = inputVal.value
//     console.log(value)
// }
// getValue();

var submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", geoCode)
let value = []
function getValue(){
    var inputVal = document.querySelector("input")
    var value = inputVal.value
    console.log(value)
}

function geoCode() {
    
    // var APIKey = "AIzaSyAv_sX-T1PMgiRLVrTjhrRAbJ-K7Plw9Nw"
    // var longitude = "-119.4179324"
    // var latitude = "36.778261"
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=California?postal_code?&key=AIzaSyAv_sX-T1PMgiRLVrTjhrRAbJ-K7Plw9Nw"
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)  

            var results = data.results[0].geometry.location

            var latitude = results.lat
            var longitude = results.lng
            var city = data.results[0].address_components.types
            console.log(city)

            console.log(latitude)
            console.log(longitude)
            searchCoordinates(longitude, latitude)
            getValue()

        })
    
    }    
        geoCode();



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
                console.log("mag: " + magnitude + "\n location" + place + "myDate \n" + myDate)
            
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
            
            //  var features = data.features // the 'feature' object inside the 'data'
            
            // console.log(features[1])


            // 
            

            //  var features = data.features // the 'feature' object inside the 'data'
            
            // console.log(features[1])

            // This loop is rendering the date, location, and magnitude dynamically to the page
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


            // var longitude = data.features[i].geometry.coordinates[0]
            // var latitude = data.features[i].geometry.coordinates[1]
            // this loop is getting all the 'features' object giving us direct info and access on what specific 'key' we want (i.e place, magnitute, date, etc...)
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


