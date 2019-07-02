function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// let cities = [
//     ["Malishevë","Malisheve","42.4822","20.7458","Kosovo","XK","XKS","Malishevë","admin","","1901597212"],
//     ["Prizren","Prizren","42.2139","20.7397","Kosovo","XK","XKS","Prizren","admin","","1901360309"],
//     ["Zubin Potok","Zubin Potok","42.9144","20.6897","Kosovo","XK","XKS","Zubin Potok","admin","","1901608808"],
//     ["Kamenicë","Kamenice","42.5781","21.5803","Kosovo","XK","XKS","Kamenicë","admin","","1901851592"],
//     ["Viti","Viti","42.3214","21.3583","Kosovo","XK","XKS","Viti","admin","","1901328795"],
//     ["Shtërpcë","Shterpce","42.2394","21.0272","Kosovo","XK","XKS","Shtërpcë","admin","","1901828239"],
//     ["Shtime","Shtime","42.4331","21.0397","Kosovo","XK","XKS","Shtime","admin","","1901598505"],
//     ["Vushtrri","Vushtrri","42.8231","20.9675","Kosovo","XK","XKS","Vushtrri","admin","","1901107642"]
// ]

// let randomCity = cities[randomInt(0, cities.length - 1)]
// let lat = +randomCity[2]
// let lng = +randomCity[3]
// console.log(randomCity[0])

let cities = {
    madrid: {lat : 40.416775, lng : -3.703790},
    barcelona:  {lat :41.390205, lng : 2.154007},
    zaragoza: {lat : 41.649693, lng : -0.887712}
}

class City {
    constructor(name, lat, lng) {
        if (lat<-90 || lat> 90) throw new RangeError("You have specified a wrong lat")
        this.name = name
        this.lat = lat
        this.lng = lng
    }
}

// calculate antipodes for Juan :) :) https://sciencing.com/calculate-antipode-6170267.html
let citiesArray = [
    new City("madrid", 40.416775, -3.703790),
    {name: "barcelona", lat :41.390205, lng : 2.154007},
    {name: "zaragoza", lat : 41.649693, lng : -0.887712}
]


const theMap = new google.maps.Map(
    document.getElementById('map'),
    {
        zoom: 4,
        center: {
            lat: cities.madrid.lat,
            lng: cities.madrid.lng
        }
    }
);

// citiesArray
// .filter(city => city.lat >= 41)
// .forEach(city => {
//     const myMarker =  new google.maps.Marker({
//         position: {
//             lat: city.lat,
//             lng: city.lng
//         },
//         icon: './myStar.png',
//         animation: google.maps.Animation.DROP,
//         draggable: true,
//         map: theMap,
//         title: city.name + " marker chulo!"
//       });

//       myMarker.addListener('click', function (e) {
//         // //   alert(city.name)
//         //   console.log(e)

//         theMap.setZoom(6);
//         theMap.panTo(myMarker.getPosition());
//       });
// })

// // Try to get a geolocation object from the web browser
// if (navigator.geolocation) {
//     // Get current position
//     // The permissions dialog will pop up
//     navigator.geolocation.getCurrentPosition(function (position) {
//       // Create an object to match Google's Lat-Lng object format
//       const myLocation = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       new google.maps.Marker({
//         position: myLocation,
//         draggable: true,
//         icon: './myStar.png',
//         map: theMap,
//         title: "Estoy aqui"
//       });

//       // User granted permission
//       // Center the map in the position we got
//     }, function () {
//       // If something goes wrong
//       console.log('Error in the geolocation service.');
//     });
//   } else {
//     // Browser says: Nah! I do not support this.
//     console.log('Browser does not support geolocation.');
//   }


allAirports
.forEach(airport => {
    const myMarker =  new google.maps.Marker({
        position: {
            lat: +airport.lat,
            lng: +airport.lon
        },
        map: theMap,
        title: airport.name
      });

      myMarker.addListener('click', function (e) {
        alert(airport.name)
        //   console.log(e)

        // theMap.setZoom(6);
        // theMap.panTo(myMarker.getPosition());
      });
})