export function renderCharacter(character) {
    const div = document.createElement('div');
    div.classList.add('character');

    const h2 = document.createElement('h2');
    h2.textContent = character.name;

    const img = document.createElement('img');
    img.src = `./assets/${character.image}`;

    const p = document.createElement('p');
    p.textContent = `This character's affiliation is ${character.affiliation} and has a danger level of ${character.dangerLevel}.`;
    
    div.append(h2, img, p);
    return div;
}