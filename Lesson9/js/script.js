const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


{
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = 
["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("date").innerHTML = date;}



//notice
let d = new Date();
let dayOfWeek = d.getDay();

if (dayOfWeek == 5) {
  document.getElementById('notice').style.display = 'block';
} else {
  document.getElementById('notice').style.display = 'none';
}

WebFont.load({
    google: {
      families: ['Open Sans', 'Ubuntu'],
    },
  });
  
  function toggleMenu() {
    let menu = document.getElementById('menu-list');
    let menuToggle = document.getElementById('menu-toggle');
  
    if (!menu.classList.contains('show-menu')) {
      menu.classList.add('show-menu');
      menuToggle.innerHTML = 'Close';
      menuToggle.classList.add('active-menu');
    } else {
      menu.classList.remove('show-menu');
      menuToggle.innerHTML = '&#9776; Menu';
      menuToggle.classList.remove('active-menu');
    }
  }
  
  let _currentDate = document.getElementById('current-date');
  let _currentYear = document.getElementById('current-year');
  
  now = new Date();
  
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  let dayOfWeek = days[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getFullYear();
  let year = now.getFullYear();
  
  _currentDate.innerHTML = `${dayOfWeek}, ${day} ${month} ${year}`;
  _currentYear.innerHTML = now.getFullYear();
  
  let nav = 'home';
  
  function changeNav(navID) {
    document.getElementById(navID).classList.add('highlight');
    if (nav !== navID) {
      document.getElementById(nav).classList.remove('highlight');
      nav = navID;
    }
  }
  
  changeNav('home');
  
  let d = new Date();
  
  if (d.getDay() == 5) {
    document.getElementById('banner').classList.add('show-banner');
  }
  
  const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject["towns"];
      const southern = towns.filter(
        (town) =>
          town.name == "Preston" ||
          town.name == "Fish Haven" ||
          town.name == "Soda Springs"
      );
  
      southern.forEach((town) => {
        let eachTown = document.createElement("article");
        let townData = document.createElement("div");
        let tname = document.createElement("h2");
        let tmotto = document.createElement("h3");
        let founded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let image = document.createElement("img");
  
        eachTown.appendChild(townData);
  
        tname.innerHTML = town.name;
        townData.appendChild(tname);
  
        tmotto.innerHTML = town.motto;
        townData.appendChild(tmotto);
  
        founded.innerHTML = "Year Founded: " + town.yearFounded;
        townData.appendChild(founded);
  
        population.innerHTML = "Population: " + town.currentPopulation;
        townData.appendChild(population);
  
        rainfall.innerHTML = "Annual Rain Fall: " + town.averageRainfall;
        townData.appendChild(rainfall);
  
        image.setAttribute("src", "images/" + town.photo);
        image.setAttribute("alt", town.name + ": " + town.motto);
        eachTown.appendChild(image);
  
        document.querySelector("section.towndetails").appendChild(eachTown);
        eachTown.setAttribute("class", "townArticles");
        townData.setAttribute("class", "townSections");
      });
    });
  
  