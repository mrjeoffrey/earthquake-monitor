//const quakeList = document.querySelector('data-quake-list');
const searchInput = document.getElementById('search-input');
console.log(searchInput);
const submitButton = document.querySelector('submit-btn');
console.log(submitButton);

submitButton.addEventListener('click', getInfo)
console.log(submitButton)
searchInput.addEventListener('keyup', e => {
    const value = e.target.value
    console.log(value)
})    
    


    /*features.properties.mag.includes(value) ||
    features.properties.place.includes(value) ||
    features.properties.time.includes(value)


    //console.log(value)*/


/*const loadMaps = async () => {
    try{
        const res = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=time&eventtype=earthquake&endtime&limit=10')
        quakeMaps = await res.json();
        console.log(quakeMaps);


    } catch (err){
        console.error(err);

    }
    var features = data.features
};

const displayMaps = (features) => {
    const htmlString = features
        .map((features) => {
            return 

        })

}
*/

//submitButton.addEventListener('click' getInfo);
//for (i = 0; i < )

/*fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&eventtype=earthquake&endtime&limit=10")
    .then(res => res.json())
    .then(data => {
        data.
            
    })


/*
function getInfo(){
    //API has filters of: Earthquake, start time, end time, and limit
    var requestUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&eventtype=earthquake&endtime&limit=10'
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            // console.log(data) // this will have all the data on the API
            var features = (data.features) // this is the 'feature' object inside the 'data'
            // console.log(features)

            // this loop is getting all the 'features' object giving us direct info and access on what specific 'key' we want (i.e place, magnitute, date, etc...)
            for (var i = 0; i < features.length; i++) {
                features = features[i];
                var place = (features.properties.place)
                var magnitute = (features.properties.mag)
                var myDate = new Date (features.properties.time)

                console.log('Location: ' + place)
                console.log('Magnitute: ' + magnitute)
                console.log('Date: ' + myDate)
            }
    });
}

getInfo();
*/

 // var submitButtonEl = document.getElementById("submit-btn")
// submitButtonEl.addEventListener ("click", getInfo)
var searchInput = document.querySelector("search-input")
let requestUrl = []
//var longitude = data.features[i].geometry.coordinates[0]
//var latitude = data.features[i].geometry.coordinates[1]
let latitude = []
let longitude = []
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
        latitude = data[1].latitude
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
}*/     }   