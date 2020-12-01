const apiURLb =
  "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
  const apiIconURL = "https://openweathermap.org/img/w/"

fetch(apiURLb)
  .then((response) => response.json())
  .then((fiveDays) => {

    const forecast = fiveDays.list.filter((x) => x.dt_txt.includes("18:00:00"));

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
  "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("temp").textContent =
      Math.round(jsObject.main.temp) + "°F";
    document.getElementById("speed").textContent = jsObject.wind.speed + " mph";
    document.getElementById("humidity").textContent =
      jsObject.main.humidity + " %";
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;

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
    document.getElementById("windChill").textContent = windchill;
  });

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == "Fish Haven"));
        myTowns.forEach(town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let townEvents1 = document.createElement('p');
            let townEvents2 = document.createElement('p');
            let townEvents3 = document.createElement('p');
            let townEvents4 = document.createElement('p');

            card.className = "eventCSS";
            h2.textContent = `${town.name} Events:`;
            townEvents1.textContent = town.events[0];
            townEvents2.textContent = town.events[1];
            townEvents3.textContent = town.events[2];
            townEvents4.textContent = town.events[3];


            card.appendChild(h2);
            card.appendChild(townEvents1);
            card.appendChild(townEvents3);
            card.appendChild(townEvents3);
            card.appendChild(townEvents4);


            document.querySelector('.eventPlanner').appendChild(card);
          });
});