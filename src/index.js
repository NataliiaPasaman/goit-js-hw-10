import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const listCountries = document.querySelector('.country-list');
const infoCountries = document.querySelector('.country-info');
const fieldSearch = document.querySelector('#search-box');
fieldSearch.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));



function onSearchCountry(event) {
    const searchValue = event.target.value.trim();

    fetchCountries(searchValue)
    .then(countries => renderMarkup(countries))
    .catch(error => console.log(error));

    resetInput(searchValue);
}


function renderMarkup (countries) {
    const markup = countries.map(({ name, capital, languages, population, flags }) => {

        return `<li>
        <img src='${flags.svg}' width="40" height="30"/>
        <h2>${name.official}</h2>
        <p><b>Capital: </b>${capital}</p>
        <p><b>Population: </b>${population}</p>
        <p><b>Languages: </b>${(Object.values(languages)).join(', ')}</p>`
    }).join("");

    infoCountries.insertAdjacentHTML('beforeend', markup);
}

function resetInput (textInput) {
    if (textInput.length < 1) {

        return infoCountries.innerHTML = '';
    }
}



