const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const myTowns = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

    myTowns.forEach(town => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let motto = document.createElement("p");
      let yearFounded = document.createElement("p");
      let currentPopulation = document.createElement("p");
      let averageRainfall = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = myTowns.name;
      motto.textContent = myTowns.motto;
      yearFounded.textContent = "Year Founded: " + myTowns.yearFounded;
      currentPopulation.textContent = "Population: " + myTowns.currentPopulation;
      averageRainfall.textContent = "Average Rainfall: " + myTowns.averageRainfall;
      image.setAttribute("src", myTowns.imageurl);
      image.setAttribute("alt", (myTowns.name));


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


