import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const fieldSearch = document.querySelector('#search-box');
fieldSearch.addEventListener('input', onSearchCountry);

function onSearchCountry(event) {
    const fieldValue = event.currentTarget.value;

    fetchCountries(fieldValue);
}

// const url = `https://restcountries.com/v3.1/name/peru`;
// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data));

// function fetchCountries(name) {
//     const url = `https://restcountries.com/v3.1/name/${name}`;
//    return fetch(url)
//    .then(response => response.json())
//    .then(data => console.log(data));
// }


// fetchCountries(peru);

