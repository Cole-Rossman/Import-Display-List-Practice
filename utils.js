export function renderCharacter(character) {
    const div = document.createElement('div');
    div.classList.add('characters');

    const h2 = document.createElement('h2');
    h2.textContent = character.name;

    const img = document.createElement('img');
    img.src = `${character.image}`;

    const p = document.createElement('p');
    p.textContent = `This character's affiliation is ${character.affiliation} and has a danger level of ${character.dangerLevel}.`;
    
    div.append(h2, img, p);
    return div;
}

export function renderCar(car) {

    const li = document.createElement('li');
    li.classList.add('cars');
    li.textContent = car;

    return li;
}

export function renderSoda(soda) {
    const div = document.createElement('div');
    div.classList.add('sodas');

    const h2 = document.createElement('h2');
    h2.textContent = soda.name;

    const p = document.createElement('p');
    p.textContent = `This soda has ${soda.nutrition.calories} calories and ${soda.nutrition.sugars} of sugar per ${soda.nutrition.servingSize}.`;

    div.append(h2, p);
    return div;
}

export function renderTree(tree) {
    const div = document.createElement('div');
    div.classList.add('trees');

    const h2 = document.createElement('h2');
    h2.textContent = tree.name;

    const p = document.createElement('p');
    p.textContent = `This incredible tree can be found in the following states: ${tree.states} and has a lifespan range of ${tree.lifespan} years.`;

    div.append(h2, p);
    return div;
}