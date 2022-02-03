function getInfo(){
    //API filters: Earthquake, start time, end time, and limit
    var requestUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&&minlatitude=32.5121&maxlatitude=42.0126&minlongitude=-124.6509&maxlongitude=-114.1315&starttime=2020-01-01&orderby=time&eventtype=earthquake&endtime&limit=10'
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data) // all the data on the API
            var features = data.features // the 'feature' object inside the 'data'
            
            

            console.log(features[1])
            // this loop is getting all the 'features' object giving us direct info and access on what specific 'key' we want (i.e place, magnitute, date, etc...)
            for (var i = 0; i < data.features.length; i++){
                features = data.features[i];
                var magnitude = features.properties.mag
                var place = features.properties.place
                var time = features.properties.time
                // console.log(features.properties.mag);
                myDate = new Date (time)
                console.log('Magnitude: '+ magnitude + '\nPlace: ' + place + '\nDate: ' + myDate);
            }

                // place = (features.properties.place)
                // magnitute = (features.properties.mag)
                // myDate = new Date (features.properties.time)

                // console.log(features)
                // console.log('\nLocation: ' + place + '\nMagnitute: ' + magnitute + '\nDate: ' + myDate)
                // console.log('Location: ' + place)
                // console.log('Magnitute: ' + magnitute)
                // console.log('Date: ' + myDate)
    });
}

getInfo();