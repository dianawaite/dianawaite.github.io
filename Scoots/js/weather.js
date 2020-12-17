const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.512919&lon=-86.929749&units=imperial&exclude=minutely,hourly&appid=375250a6426c22d4ea2c2d940a245bf9"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("temp").textContent =
      Math.round(jsObject.current.temp) + "°F";
    document.getElementById("humidity").textContent =
      jsObject.current.humidity + " %";
    document.getElementById("weather").textContent = jsObject.current.weather.description;

    let li = document.createElement('li');
    let temp = document.createElement('p');
    let weather = document.createElement('p');
    let humidity = document.createElement('p');

    li.append(temp);
    li.append(weather);
    li.append(humidity);

    // document.getElementById('weather-summary').appendChild(li);



/* fetch(apiURL)
  .then((response) => response.json())
  .then((threeDays) => {

    const forecast = threeDays.list.filter((x) => x.dt_txt.includes("18:00:00"));

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (i = 0; i < forecast.length; i++) {
        let li = document.createElement('li');
        let day = document.createElement('p');
        let temp = document.createElement('p');

        let date = new Date(forecast[i].dt_txt);
        day.textContent = weekdays[date.getDay()];

        temp.textContent = forecast[i].main.temp + "°F";

        li.append(day);
        li.append(icon);
        li.append(temp);

        document.getElementById('three-day-flex').appendChild(li);
    }
  }); */
});
