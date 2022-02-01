import { renderCharacter, renderCar } from '../utils.js';
const test = QUnit.test;

test('renderCharacter should return a <div> with character information', (expect) => {
    const expected = `<div class="characters"><h2>Darth-Vader</h2><img src="./assets/darth-vader.png"><p>This character's affiliation is Sith and has a danger level of 10.</p></div>`;

    const actual = renderCharacter({
        name: 'Darth-Vader',
        image: './assets/darth-vader.png',
        affiliation: 'Sith',
        dangerLevel: 10,
    });

    expect.equal(actual.outerHTML, expected);
});

test('renderCar should return a <li> with car string', (expect) => {
    const expected = `<li class="cars">Acura</li>`;
        
    const actual = renderCar([
        'Acura',
    ]);

    
    expect.equal(actual.outerHTML, expected);
});