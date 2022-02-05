var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrqpTU7aizz1RbDZX_zsdJT8eZ06RA0U&callback=mapDisplay&v=weekly&region=US';
script.async = true;

window.initMap = function() {

};

document.head.appendChild(script);
      

let bigMap;

function mapDisplay() {
  bigMap = new google.maps.Map(document.getElementById("bigMap"), {
    zoom: 7,
    center: new google.maps.LatLng(36.7783, -119.4179),
    mapTypeId: "terrain",
  });


  var latestUsgs = document.createElement("script");


  latestUsgs.src = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp";
  document.getElementsByTagName("head")[0].appendChild(latestUsgs);
}


const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: bigMap,
    });
  }
};
