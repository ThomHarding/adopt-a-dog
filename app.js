import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {
    let dogList = await getDogs();
// fetch all dogs
    for (let dog of dogList) {
        let dogDiv = renderDogCard(dog);
        dogListContainer.appendChild(dogDiv);
    }
// render and append all dog cards to the container
});