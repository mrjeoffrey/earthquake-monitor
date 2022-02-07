// var submitButtonEl = document.getElementById("submit-btn")
// submitButtonEl.addEventListener ("click", getInfo)
var searchInput = document.querySelector("search-input")
let requestUrl = []
//var longitude = data.features[i].geometry.coordinates[0]
//var latitude = data.features[i].geometry.coordinates[1]

let zipCode = []
//var currentLoc = "https://ipapi.co/json"


// function getInput() {
//     var 

// function getValue() {
//     var searchInput
// }


function changeLoc(){
    var searchInput1 = searchInput.value
    console.log(searchInput1)
    var zipUrl = "https://nominatim.openstreetmap.org/search?postalcode=" + searchInput1 + "&country=USA&format=json"
    fetch(zipUrl).then(function (response) {
        return response.json()
    }).then(function (data){
        latitude = data[0].latitude
        longitude = data[0].longitude
        //city = data[0].display_name.substring(0, data[0].display_name.indexOf(","))
        clear()
    }).catch(function () {
    //     zipCode = "Search here"
    //     searchInput.value = ""
    //     searchInput.placeholder = zipCode
    
    }
    )
var submitButtonEl = document.getElementById("submit-btn")

submitButtonEl.addEventListener('click', getValue)

function getValue(){
    var inputVal = document.querySelector("input")
    var value = inputVal.value

    console.log(value)
}
// function changeVal() {
//     const longlat = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326')
//     latitude = longlat[1]
//     longiitude = longlat[0]
//     var localValue = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + latitude + "&lon=" + longitude + "&zoom="
//     fetch(localValue).then(function (response){
//         return response.json()
//     }).then(function (data) {
//         city = data.display_name.substring(data.display_name.indexOf(",") + 1)
//         city = city.substring(0, city.indexOf(","))
//         var matchData = data.display_name.match(/\b\d{5}\b/g)

//         if (matchData) {
//             zipCode = matchData[0]
//         } else {
//             zipCode = "00000"
//         }
//         searchInput.value = zipCode
//         clear()

//     })

//     console.log(changeVal)
// }


//inputVal.addEventListener("input", e => {
    //var value = e.target.value
    //console.log(value)
//})
/*let data = []
submitButtonEl.addEventListener('click', getInfo)

inputVal.addEventListener("input", e => {
    const value = e.target.value
    data.forEach(features => {
        const isVisible = features.properties.place.includes(value) 

    })
})*/


//var searchVal = document.getElementbyId ("search-input")
    //inputVal.toLowerCase();
    
//function search_bar(){
    
    //var inputVal = document.getInfo()

/*function getInfo(){
    var inputVal = document.querySelector("input")
    var value = inputVal.value
    console.log(inputVal)
}*/

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
    
earthQuakeByTime();}