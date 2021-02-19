import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const notesInput = document.querySelector('.text--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const clearButton = document.querySelector('.clear--js');
const infoOutput = document.querySelector('.info--js');

saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem('notes', notesInput.value);
    infoOutput.innerHTML = "Zapisano notatkę!";
});

loadButton.addEventListener("click", (e) => {
    e.preventDefault();
    const notes = localStorage.getItem('notes');
    document.querySelector('.text--js').innerHTML = notes;
    if(notes) {
        infoOutput.innerHTML = "Wczytano notatkę!";
    }
    else {
        infoOutput.innerHTML = "Brak zapisanej notatki!";
    }
});

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('notes');
    infoOutput.innerHTML = "Usunięto zapisaną notatkę!";
});