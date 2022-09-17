import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const listCountries = document.querySelector('.country-list');
const fieldSearch = document.querySelector('#search-box');
fieldSearch.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
    const fieldValue = event.target.value;

    fetchCountries(fieldValue)
    .then(countries => renderMarkup(countries));
}


function renderMarkup (countries) {
    const markup = countries.map(({ name, capital, languages, population, flags }) => {

        return `<li>
        <img src='${flags.svg}' width="40" height="40"/>
        <h2>${name.common}</h2>
        <p><b>Capital: </b>${capital}</p>
        <p><b>Population: </b>${population}</p>
        <p><b>Languages: </b>${(Object.values(languages)).join(', ')}</p>`
    }).join("");

    listCountries.insertAdjacentHTML('beforeend', markup);
}





