import { renderCharacter, renderCar, renderSoda, renderTree } from '../utils.js';
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

test('renderSoda should return a <div> with soda nutrition info', (expect) => {
    const expected = `<div class="sodas"><h2>Pepsi</h2><p>This soda has 150 calories and 41g of sugar per 355mL.</p></div>`;

    const actual = renderSoda({
        name: 'Pepsi',
        nutrition: {
            calories: 150,
            servingSize: '355mL',
            sugars: '41g',
        },
    });

    expect.equal(actual.outerHTML, expected);
});

test('renderTree should return a <div> with tree information', (expect) => {
    const expected = `<div class="trees"><h2>Douglas fir</h2><p>This incredible tree can be found in the following states: Oregon, Washington, Idaho, Utah, Nevada and has a lifespan range of 500-1000 years.</p></div>`;

    const actual = renderTree({
        name: 'Douglas fir',
        states: ['Oregon', ' Washington', ' Idaho', ' Utah', ' Nevada'],
        lifespan: '500-1000',
    });

    expect.equal(actual.outerHTML, expected);

});