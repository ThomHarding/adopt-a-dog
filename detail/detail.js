import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async() => {
// on load
// get the id from URL
    const data = new URLSearchParams(window.location.search);
    let id = data.get('id');
// use the id to fetch the dog
    let dog = await getDog(id);
// render and append this dog's details to the container
    let dogDetailEl = renderDogDetail(dog);
    dogDetailContainer.append(dogDetailEl);
});