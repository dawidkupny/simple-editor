import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Welcome to simple editor!')


const notesInput = document.querySelector('.text--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const clearButton = document.querySelector('.clear--js');

saveButton.addEventListener("click", () => {
    localStorage.setItem('notes', notesInput.value);
});

loadButton.addEventListener("click", () => {
    document.querySelector('.text--js').innerHTML = localStorage.getItem('notes');
});

clearButton.addEventListener("click", () => {
    localStorage.removeItem('notes');
});