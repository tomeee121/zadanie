let openButton = document.getElementById("open-popup-button");
let closeButton = document.getElementById("close-button");
let overlay = document.getElementById("overlay");
let popUp = document.getElementById("popUp");


openButton.addEventListener('click',() => {
popUp.style.transform = "translate(-50%, -50%) scale(1)";
overlay.style.position = "fixed";
overlay.style.left = "0";
overlay.style.top = "0";
overlay.style.right = "0";
overlay.style.bottom = "0";
overlay.style.opacity = "1";
overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
overlay.style.pointerEvents = "none";});

                                  

