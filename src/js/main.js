const openButton = document.getElementById('open-popup-button');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const noneBackground = document.querySelector(".none-background");

openButton.addEventListener('click',() => document.body.innerHTML = "");

openButton.addEventListener('click',() => noneBackground.classList.add('active'));

