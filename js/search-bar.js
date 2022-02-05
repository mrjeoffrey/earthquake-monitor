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

          