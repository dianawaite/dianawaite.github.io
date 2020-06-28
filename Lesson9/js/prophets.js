const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bDate = document.createElement('p');
            let bPlace = document.createElement('p');
            let image = document.createElement('img');

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                bDate.textContent = 'Birthdate: ' + prophets[i].birthdate;
                bPlace.textContent = 'Birthplace: ' + prophets[i].birthplace;
                image.setAttribute('src', prophets[i].imageurl);
                image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

                    card.appendChild(h2);
                    card.appendChild(bDate);
                    card.appendChild(bPlace);
                    card.appendChild(image);

                        document.querySelector('div.cards').appendChild(card);
        }
    });
