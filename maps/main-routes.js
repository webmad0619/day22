function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let cities = {
    madrid: { lat: 40.416775, lng: -3.703790 },
    barcelona: { lat: 41.390205, lng: 2.154007 },
    zaragoza: { lat: 41.649693, lng: -0.887712 }
}

const theMap = new google.maps.Map(
    document.getElementById('map'),
    {
        zoom: 18,
        center: {
            lat: cities.madrid.lat,
            lng: cities.madrid.lng
        }
    }
);

// this calculates the route to travel across
const directionsService = new google.maps.DirectionsService;
// this paints in the map the calculated travel
const directionsDisplay = new google.maps.DirectionsRenderer;

var waypoints = []

waypoints.push({
    location: 'Monasterio de Poblet, 17, zaragoza, ES',
    stopover: true
})

waypoints.push({
    location: 'Calle Callao, Fuenlabrada, ES',
    stopover: true
})

// here you are preparing the request to the directions service of google maps
// const directionRequest = {
//     origin: { lat: 41.3977381, lng: 2.190471916 },
//     // destination: 'Cádiz, ES',
//     destination: 'Calle amor de dios 12, madrid, ES',
//     // destination: {lat : 41.649693, lng : -0.887712},
//     travelMode: 'DRIVING'
// };
const directionRequest = {
    origin: { lat: 41.3977381, lng: 2.190471916 },
    waypoints: waypoints,
    destination: 'Calle amor de dios 12, madrid, ES',
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
};

// here you pass the direction request to the directions service
directionsService.route(
    directionRequest,
    function (response, status) {
        if (status === 'OK') {
            // everything is ok
            // here the directions displayer service "paints" the calculated
            // route in the map
            directionsDisplay.setDirections(response);

        } else {
            // something went wrong
            window.alert('Directions request failed due to ' + status);
        }
    }
);

// asociation between the map and the directions displayer service
directionsDisplay.setMap(theMap);