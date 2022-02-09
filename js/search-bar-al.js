var value
var submitButtonEl = document.getElementById("submit")

submitButtonEl.addEventListener('click', getValue)

console.log(value)

function getValue(){
    var inputVal = document.querySelector("input")
    value = inputVal.value

    geoCode(value);
}
var userInput = document.getElementById("user-input")

    function geoCode(value) {
    var zipCode = value

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=California?zipcode="+ zipCode +"?&key=AIzaSyAv_sX-T1PMgiRLVrTjhrRAbJ-K7Plw9Nw"
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var results = data.results[0]
            var geometry = results.geometry
            var location = geometry.location
            var lat = location.lat
            var long = location.lng

            searchCoordinates(long, lat)

        });
}

geoCode();