import { getDogByName, getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const dogInput = document.getElementById('dog-name-input');
const nameInputButton = document.getElementById('dog-name-button');
const clearButton = document.getElementById('dog-clear-button');
const errorDiv = document.getElementById('error-message');

nameInputButton.addEventListener('click', async() => {
    let dog = await getDogByName(dogInput.value);
    if (!(dog === undefined)) {
        dogListContainer.innerHTML = '';
        let dogDiv = renderDogCard(dog);
        dogListContainer.appendChild(dogDiv);
    } else {
        errorDiv.classList.remove('hidden');
    }
});

window.addEventListener('load', async() => {
    await loadAllDogs();
// render and append all dog cards to the container
});

clearButton.addEventListener('click', async() => {
    dogListContainer.innerHTML = '';
    await loadAllDogs();
});

async function loadAllDogs() {
    errorDiv.classList.add('hidden');
    dogListContainer.innerHTML = '';
    let dogList = await getDogs();
    // fetch all dogs
    for (let dog of dogList) {
        let dogDiv = renderDogCard(dog);
        dogListContainer.appendChild(dogDiv);
    }
}
