const openButton = document.getElementById("open-popup-button");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");
const popUp = document.getElementById("popUp");

const backgroundOfPopUp = document.querySelector(":not(#popUp)");
const header = document.getElementById('mainHeader');
let ifPoppedUp = false;

// localStorage.setItem("clickCounterNumber", 0);

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
overlay.style.pointerEvents = "none";
ifPoppedUp = true;});

closeButton.addEventListener('click',() => {
    popUp.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.opacity = "0";});

function clickCounter()  
{
    clickCounterNumber++;
    localStorage.setItem("clickCounterNumber", JSON.stringify(clickCounterNumber));

    let popUpBody = document.querySelector(".pop-up-body");

    //when create information about first click addying elements to div is acceptable 
    let p = document.createElement("span");
    let text = null;
    if(JSON.parse(localStorage.getItem('clickCounterNumber')) === 1) {
       text = document.createTextNode('You have clicked this button first time.');
       
        p.append(text);
        popUpBody.append(p);
    }
    else{
    popUpBody.innerHTML = 'You have clicked this button ' + JSON.parse(localStorage.getItem('clickCounterNumber'))+ ' times so far.';
    }

}

//closing in the popup when clicked out of it's space. Header-div is being clicked upon before popup rendered so two first clicks does not count
let iterator = 0;
function closeFromBehindClick(){
    if(ifPoppedUp){
    iterator++;
        if(iterator === 2){
            popUp.style.transform = "translate(-50%, -50%) scale(0)";
            overlay.style.opacity = "0";
            iterator = 0;
        }
    }
}                             

