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
  
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  
  fetch(requestURL)
    .then(response => {
      return response.json();
    })
    .then(jsonObject => {
      const towns = jsonObject['towns'];
  
      for (let j = 0; j < towns.length; j++) {
        const cities = ['Preston', 'Fish Haven', 'Soda Springs'];
  
        if (!cities.includes(towns[j].name)) {
          continue;
        }
  
        towns[j].motto = towns[j].motto.replace('.', '. <br />');
        let cityCard = document.createElement('div');
  
        cityCard.classList.add('city');
  
        let fill = document.createElement('div');
  
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let i = document.createElement('i');
        let ul = document.createElement('ul');
        let yearFounded = document.createElement('li');
        let population = document.createElement('li');
        let rainFall = document.createElement('li');
        let img = document.createElement('img');
  
        h2.textContent = towns[j].name;
        i.innerHTML = towns[j].motto;
        p.appendChild(i);
        yearFounded.textContent = `Year Founded: ${towns[j].yearFounded}`;
        population.textContent = `Population: ${towns[j].currentPopulation}`;
        rainFall.textContent = `Annual Rain Fall: ${towns[j].averageRainfall}`;
        ul.appendChild(yearFounded);
        ul.appendChild(population);
        ul.appendChild(rainFall);
  
        img.setAttribute('src', `images/${towns[j].photo}`);
        img.setAttribute('alt', towns[j].name);
  
        fill.appendChild(h2);
        fill.appendChild(p);
        fill.appendChild(ul);
        cityCard.appendChild(fill);
        cityCard.appendChild(img);
  
        document.getElementById('cities').appendChild(cityCard);
      }
    });
  