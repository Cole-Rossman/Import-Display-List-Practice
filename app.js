// import functions and grab DOM elements
import { renderCharacter, renderCar } from './utils.js';
import { characters } from './starwars.js';
import { cars } from './cars.js';

const divInfo = document.getElementById('character-info');
const ulInfo = document.getElementById('cars-list');


function starWarsFunction() {
    for (const character of characters) {
        const div = renderCharacter(character);
        divInfo.append(div);
    }
}

function carFunction() {
    for (const car of cars) {
        const ul = renderCar(car);
        ulInfo.append(ul);
    }
}

carFunction();
starWarsFunction();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
