let openButton = document.getElementById("open-popup-button");
let closeButton = document.getElementById("close-button");
let overlay = document.getElementById("overlay");
let popUp = document.getElementById("popUp");

let backgroundOfPopUp = document.querySelector(":not(#popUp)");
let header = document.getElementById('mainHeader');
let ifPoppedUp = false;

let clickCounterNumber = JSON.parse(localStorage.getItem('clickCounterNumber'));

openButton.addEventListener('click',() => {
popUp.style.transform = "translate(-50%, -50%) scale(1)";
overlay.style.position = "fixed";
overlay.style.left = "0";
overlay.style.top = "0";
overlay.style.right = "0";
overlay.style.bottom = "0";
overlay.style.opacity = "1";
overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
overlay.style.pointerEvents = "all";
ifPoppedUp = true;});

if(ifPoppedUp){
    popUp.closest.addEventListener(onclick,() => {
    alert('sdf')})
    }

closeButton.addEventListener('click',() => {
    popUp.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.opacity = "0";});

function clickCounter()  
{
    clickCounterNumber++;
    localStorage.setItem("clickCounterNumber", JSON.stringify(clickCounterNumber));

    let popUpBody = document.querySelector(".pop-up-body");
    let p = document.createElement("span");

    let text = document.createTextNode('You have clicked this button ' + JSON.parse(localStorage.getItem('clickCounterNumber'))+ ' times so far.');
    if(JSON.parse(localStorage.getItem('clickCounterNumber')) === 1) {
       text = document.createTextNode('You have clicked this button first time.');
    }

    p.append(text);
    popUpBody.append(p);
}    
                                  

