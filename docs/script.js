"use strict";

const background = document.body;
const gif = document.getElementById("gif");
const label = document.getElementById("label");
const message = document.getElementById("messageContainer");

function setTextTypewriterEffect(label, str, interval = 50) {
    label.innerText = "";
    let id;
    let charCount = 0;
    id = setInterval(() => {
        charCount++;
        if (charCount == str.length) {
            clearInterval(id);
        }
        label.innerText = str.substring(0, charCount);
    }, interval);
}

function transitionToHacked() {
    gif.style = "opacity: 0%";
    gif.src = "assets/bugged.gif";
    setTimeout(() => {
        gif.style = "opacity: 100%";
    }, 500);

    setTimeout(() => {
        gif.style = "opacity: 0%";
    }, 1000);

    setTimeout(() => {
        background.style.backgroundImage = "url(assets/hacked.gif)";
        background.style.backgroundRepeat = "repeat";
    }, 1500);

    setTimeout(() => {
        background.style.backgroundImage = "url(assets/note.png)";
        background.style.backgroundRepeat = "";
    }, 1850);

    setTimeout(() => {
        background.style.backgroundImage = "url(assets/hacked.gif)";
        background.style.backgroundRepeat = "repeat";
    }, 2100);

    setTimeout(() => {
        background.style.backgroundImage = "url(assets/note.png)";
        background.style.backgroundRepeat = "";
    }, 2350);

    setTimeout(() => {
        background.style.backgroundImage = "url(assets/hacked.gif)";
        background.style.backgroundRepeat = "repeat";
    }, 3000);

    setTimeout(() => {
        label.style.opacity = "0%";
        message.style = "display: fixed";
    }, 3000);
}

function opacityMax(gif) {
    gif.style.opacity = "100%";
}

function opacityMin(gif) {
    gif.style.opacity = "0%";
}

function labelInit() {
    const label = document.getElementById("label");

    const fadeInAnim = [
        { filter: "drop-shadow(-4vw 0vh 1vh) drop-shadow(4vw 0vh 1vh) blur(1vh)", opacity: "0%" },
        { filter: "drop-shadow(0vw 0vh 0vh) drop-shadow(0vw 0vh 0vh)", opacity: "100%" }
    ];

    setTimeout(() => {
        label.animate(fadeInAnim, 1000);
        label.removeAttribute("style");
    }, 8291);

    setTimeout(transitionToHacked, 15000);
}

gif.onload = labelInit;
gif.src = "assets/video.gif";
