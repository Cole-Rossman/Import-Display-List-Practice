// import functions and grab DOM elements
import { renderCharacter, renderCar, renderSoda } from './utils.js';
import { characters } from './starwars.js';
import { cars } from './cars.js';
import { sodas } from './sodas.js';

const divStarWars = document.getElementById('character-info');
const ulCars = document.getElementById('cars-list');
const divSodas = document.getElementById('soda-info');


function starWarsFunction() {
    for (const character of characters) {
        const div = renderCharacter(character);
        divStarWars.append(div);
    }
}

function carFunction() {
    for (const car of cars) {
        const ul = renderCar(car);
        ulCars.append(ul);
    }
}

function sodaFunction() {
    for (const soda of sodas) {
        const div = renderSoda(soda);
        divSodas.append(div);
    }
}

carFunction();
starWarsFunction();
sodaFunction();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
