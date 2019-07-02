// this calculates the route to travel across
const directionsService = new google.maps.DirectionsService;
// this paints in the map the calculated travel
const directionsDisplay = new google.maps.DirectionsRenderer;

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

let waypoints = []

markersIds = 0

theMap.addListener("click", (e) => {
    waypoints[markersIds] = {
        location: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        },
        stopover: true
    }
    
    const marker = new google.maps.Marker({
        position: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        },
        animation: google.maps.Animation.DROP,
        draggable: true,
        icon: './myStar.png',
        map: theMap,
        title: "Estoy aqui"
    });

    marker.id = markersIds

    // debugger

    marker.addListener("dragend", (e) => {
        waypoints[marker.id] = {
            location: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            },
            stopover: true
        }

        refreshRoute()
    })

    markersIds++

    refreshRoute()

    //  var sounds = [s1, s2, s3]
    // play sound()
})

function refreshRoute() {
    const directionRequest = {
        origin: 'Ronda de Atocha 1, madrid, ES',
        waypoints: waypoints,
        destination: 'Calle amor de dios 1, madrid, ES',
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
}