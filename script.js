const $ = id => document.getElementById(id);

const padBank = $('pad-bank');
const container = $('container')

let text = container.innerHTML;
const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const fileNames = ['Heater-1', 'Heater-2', 'Heater-3', 'Heater-4_1', 'Heater-6', 'Dsc_Oh', 'Kick_n_Hat', 'RP4_KICK_1', 'Cev_H2']
const link = 'https://cdn.freecodecamp.org/curriculum/drum/';
pads.forEach((p, i) => text += `<button id="${p}" class="drum-pad">${p}<audio id="${p}" class="clip" src="${link + fileNames[i] + '.mp3'}"></audio></button>`);
container.innerHTML = text;
