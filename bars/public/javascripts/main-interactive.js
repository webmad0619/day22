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

document.querySelector("#loadPins").onclick = function () {
    axios
        .get("http://localhost:3000/allBarsInJSON")
        .then(JSONPayload => {
            JSONPayload.data.forEach(bar => {
                const marker = new google.maps.Marker({
                    position: {
                        lng: bar.location.coordinates[0],
                        lat: bar.location.coordinates[1],
                    },
                    animation: google.maps.Animation.DROP,
                    draggable: true,
                    // icon: './myStar.png',
                    map: theMap,
                    title: bar.name
                });
            })
        })

}

document.querySelector("#allBars").onchange = function (e) {
    axios
        .get("http://localhost:3000/getBarInfo/" + e.target.value)
        .then(bar => {
            bar = bar.data.selectedBar;

            const marker = new google.maps.Marker({
                position: {
                    lng: bar.location.coordinates[0],
                    lat: bar.location.coordinates[1],
                },
                animation: google.maps.Animation.DROP,
                draggable: true,
                // icon: './myStar.png',
                map: theMap,
                title: bar.name
            });
        })

}