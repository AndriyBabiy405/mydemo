"use strict"

let informatons = {
    "Kyiv" : {
        "link" : 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=49c7f716574de84648b2ed680163c276',
        "id": 703448,
        "name": "Kyiv",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 30.516666,
            "lat": 50.433334
        },
    },
    "Lvov" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=49c7f716574de84648b2ed680163c276',
        "id": 702550,
        "name": "Lvov",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 24.023239,
            "lat": 49.838261
        },  
    },
    "Donetsk" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Donetsk&appid=49c7f716574de84648b2ed680163c276',
        "id": 709717,
        "name": "Donetsk",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 37.799999,
            "lat": 48.0
        },
    },
    "Kharkiv" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=49c7f716574de84648b2ed680163c276',
        "id": 706483,
        "name": "Kharkiv",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 36.25,
            "lat": 50.0
        },
    },
    "Vinnitsa" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Vinnitsia&appid=49c7f716574de84648b2ed680163c276',
        "id": 689558,
        "name": "Vinnytsia",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 28.48097,
            "lat": 49.23278
        },
    },
    "Odessa" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Odessa&appid=49c7f716574de84648b2ed680163c276',
        "id": 698740,
        "name": "Odessa",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 30.732622,
            "lat": 46.477474
        },
    },
    "Ivano-Frankivsk" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk&appid=49c7f716574de84648b2ed680163c276',
        "id": 707471,
        "name": "Ivano-Frankivsk",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 24.709721,
            "lat": 48.921501
        },
    },
    "Ternopil" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Ternopil&appid=49c7f716574de84648b2ed680163c276',
        "id": 691650,
        "name": "Ternopil",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 25.60556,
            "lat": 49.555889
        },
    },
    "Chernihiv" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Chernihiv&appid=49c7f716574de84648b2ed680163c276',
        "id": 710735,
        "name": "Chernihiv",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 31.28488,
            "lat": 51.505508
        },
    },
    "Chernivtsi" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Chernivtsi&appid=49c7f716574de84648b2ed680163c276',
        "id": 710719,
        "name": "Chernivtsi",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 25.94034,
            "lat": 48.291489
        },
    },
    "Khmelnitskyi" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Khmelnytskyi&appid=49c7f716574de84648b2ed680163c276',
        "id": 706369,
        "name": "Khmelnytskyi",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 26.996531,
            "lat": 49.421612
        },
    },
    "Zhytomyr" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Zhytomyr&appid=49c7f716574de84648b2ed680163c276',
        "id": 686967,
        "name": "Zhytomyr",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 28.676689,
            "lat": 50.26487
        },
    },
    "Dnipro" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=49c7f716574de84648b2ed680163c276',
        "id": 709930,
        "name": "Dnipro",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 34.98333,
            "lat": 48.450001
        },
    },
    "Lutsk" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Lutsk&appid=49c7f716574de84648b2ed680163c276',
        "id": 702569,
        "name": "Lutsk",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 25.34244,
            "lat": 50.759319
        },
    },
    "Mariupol" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Mariupol&appid=49c7f716574de84648b2ed680163c276',
        "id": 701822,
        "name": "Mariupol",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 37.5,
            "lat": 47.066669
        },
    },
    "Rivne" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=49c7f716574de84648b2ed680163c276',
        "id": 695365,
        "name": "Rivne",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 31.75432,
            "lat": 48.247421
        },
    },
    "Zaporizhia" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Zaporizhia&appid=49c7f716574de84648b2ed680163c276',
        "id": 687700,
        "name": "Zaporizhia",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 35.183331,
            "lat": 47.816669
        },
    },
    "Kherson" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Kherson&appid=49c7f716574de84648b2ed680163c276',
        "id": 706448,
        "name": "Kherson",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 32.617802,
            "lat": 46.655811
        },
    },
    "Kamianets-Podilskyi" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Kamianets-Podilskyi&appid=49c7f716574de84648b2ed680163c276',
        "id": 706950,
        "name": "Kamianets-Podilskyi",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 26.566668,
            "lat": 48.666668
        },
    },
    "Kryvyi-Rih" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?id=703845&appid=49c7f716574de84648b2ed680163c276',
        "id": 703845,
        "name": "Kryvyi-Rih",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 33.349998,
            "lat": 47.916668
        },
    },
    "Poltava" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Poltava&appid=49c7f716574de84648b2ed680163c276',
        "id": 696643,
        "name": "Poltava",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 34.54073,
            "lat": 49.593731
        },
    },
    "Cherkasy" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&appid=49c7f716574de84648b2ed680163c276',
        "id": 710791,
        "name": "Cherkasy",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 32.062069,
            "lat": 49.428539
        },
    },
    "Uzhgorod" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Uzhgorod&appid=49c7f716574de84648b2ed680163c276',
        "id": 690548,
        "name": "Uzhgorod",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 22.299999,
            "lat": 48.616669
        },
    },
    "Bila Tserkva" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?id=712165&appid=49c7f716574de84648b2ed680163c276',
        "id": 712165,
        "name": "Bila-Tserkva",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 30.112089,
            "lat": 49.809391
        },
    },
    "Mykolayiv" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Mykolayiv&appid=49c7f716574de84648b2ed680163c276',
        "id": 700569,
        "name": "Mykolayiv",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 31.9974,
            "lat": 46.965912
        },
    },
    "Luhansk" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Luhansk&appid=49c7f716574de84648b2ed680163c276',
        "id": 702658,
        "name": "Luhansk",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 39.317059,
            "lat": 48.567051
        },
    },
    "Kolomyia" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Kolomyia&appid=49c7f716574de84648b2ed680163c276',
        "id": 705392,
        "name": "Kolomyia",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 25.040277,
            "lat": 48.530556
        },
    },
    "Mukacheve" : {
        "link": 'http://api.openweathermap.org/data/2.5/weather?q=Mukacheve&appid=49c7f716574de84648b2ed680163c276',
        "id": 700646,
        "name": "Mukacheve",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 22.717791,
            "lat": 48.43919
        },
    },
}

window.onload = function () {
    const prediction = document.querySelector(".prediction");

    if (prediction) {
        const content = document.querySelector(".prediction__container");
        const clouds = document.querySelector(".images-prediction__clouds");
        const mountains = document.querySelector(".images-prediction__mountains");
    
        const forClouds = 60;
        const forMountains = 20;

        const speed = 0.05;

        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0;
        let coordYprocent = 0;

        function t() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
        
            requestAnimationFrame(t);
        }
        t();

        prediction.addEventListener("mousemove", function (event) {
            const predicitionWidth = prediction.offsetWidth;
            const predicitionHeight = prediction.offsetHeight;

            const coordX = event.pageX - predicitionWidth / 2;
            const coordY = event.pageY - predicitionHeight / 2;
            coordXprocent = coordX / predicitionWidth * 100;
            coordYprocent = coordY / predicitionHeight * 100;
        });
    }
}

let inputw = document.querySelector(".prediction__select");

function weather() {
    let a = inputw.value;
    for (let key in informatons) {
        if (informatons[a]) {
            fetch(informatons[a].link)
            .then(function (resp) { return resp.json()})
            .then(function (data) {
                console.log(data);
                document.querySelector(".prediction-weather__info_city-name").textContent = data.name;
                document.querySelector(".prediction-weather__country").textContent = data.sys.country;
                document.querySelector(".prediction-weather__info-degrees").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
                document.querySelector(".prediction-weather__info-clouds").textContent = data.weather[0]['description'];
                document.querySelector(".prediction-weather__info-feature").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            //http://openweathermap.org/img/wn/02d@2x.png
            .catch(function () {
                // catch any errors
            });
        }
    }
}
   document.querySelector(".prediction-weather__info-button").onclick = weather;
 
