const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const myTowns = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

    myTowns.forEach(town => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let motto = document.createElement("h5");
      let yearFounded = document.createElement("p");
      let currentPopulation = document.createElement("p");
      let averageRainfall = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = town.name;
      motto.textContent = town.motto;
      yearFounded.textContent = "Year Founded: " + town.yearFounded;
      currentPopulation.textContent = "Population: " + town.currentPopulation;
      averageRainfall.textContent = "Average Rainfall: " + town.averageRainfall;
      image.src = "images/" + town.photo;
      image.alt = town.name;


      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(currentPopulation);
      card.appendChild(averageRainfall);
      card.appendChild(image);
      card.setAttribute("class", "card");

      document.querySelector("div.cards").appendChild(card);
    })
  });


