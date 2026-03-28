const $ = id => document.getElementById(id);

const padBank = $('pad-bank');
const container = $('container')

let text = container.innerHTML;
const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const fileNames = ['Heater-1', 'Heater-2', 'Heater-3', 'Heater-4_1', 'Heater-6', 'Dsc_Oh', 'Kick_n_Hat', 'RP4_KICK_1', 'Cev_H2']
const link = 'https://cdn.freecodecamp.org/curriculum/drum/';

pads.forEach((pad, i) => {
    const button = document.createElement('button');
    button.id = pad;
    button.classList.add('drum-pad');
    button.textContent = pad;

    const audio = document.createElement('audio');
    audio.id = pad;
    audio.classList.add('clip');
    audio.src = link + fileNames[i] + '.mp3';

    button.appendChild(audio);
    container.appendChild(button);
});

const buttons = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

// display audio name
const display = $('display');
const displayAudioName = id => display.textContent = fileNames[id];

// Click to play
buttons.forEach((b, i) => b.addEventListener('click', (e) => {
    audios[i].play();
    displayAudioName(i);
}));

// Press to play
const drumMachine = $('drum-machine');

document.addEventListener('keydown', (e) => {
    const index = pads.indexOf(e.key.toUpperCase());
    if (index > -1) {
        audios[index].play();
        displayAudioName(index);
    }
});




