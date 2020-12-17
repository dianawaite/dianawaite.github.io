// let jsonData = require("js/scoots.json"); 
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const pricesjs = request.response; // get the string from the response
  const prices = JSON.parse(prices.js); // convert it to an object

}

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
const prices = jsonObject['prices'];

prices.forEach(rentalType => {
    let card = document.createElement("section");
    let rentalType = document.createElement("h2");
    let maxPersons = document.createElement("p");
    let reserveHalf = document.createElement("p");
    let reserveFull = document.createElement("p");
    let walkinHalf = document.createElement("p");
    let walkinFull = document.createElement("p");

rentalType.textContent = prices.rentalType;
maxPersons.textContent = prices.maxPersons;
reserveHalf.textContent = prices.reserveHalf;
reserveFull.textContent = prices.reserveFull;
walkinHalf.textContent = prices.walkinHalf;
walkinFull.textContent = prices.walkinFull;

card.appendChild(rentalType);
card.appendChild(maxPersons);
card.appendChild(reserveHalf);
card.appendChild(reserveFull);
card.appendChild(walkinHalf);
card.appendChild(walkinFull);

document.querySelector("div.cards").appendChild(card);
})
}) ;