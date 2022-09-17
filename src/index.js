import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

const listCountries = document.querySelector('.country-list');
const infoCountries = document.querySelector('.country-info');
const fieldSearch = document.querySelector('#search-box');

fieldSearch.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
  const searchName = event.target.value.trim();

  if (!searchName) {
    resetInfo();
    resetList();
    return;
  }

  fetchCountries(searchName)
    .then(countries => {
      console.log(countries);

      showMessage(countries);
      findOneCountry(countries);
      findLessTenCountries(countries);
    })
    .catch(error => console.log(error));
}

function showMessage(argsCountries) {
  if (argsCountries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
}

function findOneCountry(argsCountries) {
  if (argsCountries.length === 1) {
    resetList();
    renderInfoCountry(argsCountries);
    return;
  }
}

function findLessTenCountries(argsCountries) {
  if (argsCountries.length >= 2 && argsCountries.length <= 10) {
    resetInfo();
    renderListCountries(argsCountries);
    return;
  }
}

function renderListCountries(countriesArray) {
  const list = countriesArray
    .map(({ name: { official }, flags: { svg } }) => {
      return `<li class='item'>
        <img class='country-img' src='${svg}' width="30" height="20"/>
        <h2 class='country-name'>${official}</h2>
        </li>`;
    })
    .join('');

  listCountries.insertAdjacentHTML('beforeend', list);
}

function renderInfoCountry(countriesArray) {
  const markup = countriesArray
    .map(({ name, capital, languages, population, flags }) => {
      return `<div class='country-box'>
        <img class='country-img' src='${flags.svg}' width="50" height="40"/>
        <h3 class='country-title'>${name.official}</h3>
        </div>
        <p><b>Capital: </b>${capital}</p>
        <p><b>Population: </b>${population}</p>
        <p><b>Languages: </b>${Object.values(languages).join(', ')}</p>`;
    })
    .join('');

  infoCountries.insertAdjacentHTML('beforeend', markup);
}

function resetList() {
  listCountries.innerHTML = '';
}

function resetInfo() {
  infoCountries.innerHTML = '';
}
