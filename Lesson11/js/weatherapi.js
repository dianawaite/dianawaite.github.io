const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  const imagesrc = 'http://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
  const desc = jsObject.weather[0].description;
  document.getElementById('imagesrc').textContent = imagesrc;
  document.getElementById('icon').setAttribute('src', imagesrc);
  document.getElementById('icon').setAttribute('alt', desc);
});
