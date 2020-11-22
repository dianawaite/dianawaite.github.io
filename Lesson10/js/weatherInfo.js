const apiURLb =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
  const apiIconURL = "https://openweathermap.org/img/w/"

fetch(apiURLb)
  .then((response) => response.json())
  .then((fiveDays) => {
    console.log(fiveDays);

    const forecast = fiveDays.list.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(forecast);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (i = 0; i < forecast.length; i++) {
        let li = document.createElement('li');
        let day = document.createElement('p');
        let icon = document.createElement('img');
        let temp = document.createElement('p');

        let date = new Date(forecast[i].dt_txt);
        day.textContent = weekdays[date.getDay()];

        icon.src = apiIconURL + forecast[i].weather[0].icon + ".png";
        icon.alt = forecast[i].weather[0].description;

        temp.textContent = forecast[i].main.temp + "°F";

        li.append(day);
        li.append(icon);
        li.append(temp);

        document.getElementById('five-day-flex').appendChild(li);
    }
  });

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("temp").textContent =
      Math.round(jsObject.main.temp) + "°F";
    document.getElementById("speed").textContent = jsObject.wind.speed + " mph";
    document.getElementById("humidity").textContent =
      jsObject.main.humidity + " %";
    // document.getElementById('weather').textContent = jsObject.weather[1].main;
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;
    // document.getElementById('imagesrc').textContent = imagesrc;
    // document.getElementById('icon').setAttribute('src', imagesrc);
    // document.getElementById('icon').setAttribute('alt', desc);
    // });

    // (function windChill() {
    //     let t = parseFloat(document.getElementById('current-temp').textContent);
    //     let s = parseFloat(document.getElementById('speed').textContent);
    //     if (t<= 50 && s>3){
    //         windChill = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow)))
    //         output = Math.round(f);
    //     }
    //     else {
    //         wind-chill = "N/A";
    //     }
    let windchill;
    if (temp <= 50.0 && speed > 3.0) {
      //Calculate windchill:
      windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temp * Math.pow(windspeed, 0.16);

      //Calculate Decimal Place
      let digits = 2;
      let multiplier = Math.pow(10, digits);
      windchill = Math.round(windchill * multiplier) / multiplier + "°F";
    } else {
      windchill = "N/A";
    }
    document.getElementById("windChill").textContent = windchill + "°F";
  });
