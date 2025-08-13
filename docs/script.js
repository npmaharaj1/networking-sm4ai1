"use strict";

const background = document.body;
const gif = document.getElementById("gif");
const label = document.getElementById("label");
const message = document.getElementById("messageContainer");

function setTextTypewriterEffect(label, str, interval = 50) {
    let id;
    let charCount = 0;
    label.innerText = "";
    id = setInterval(() => {
        charCount++;
        if (charCount == str.length) {
            clearInterval(id);
        }
        label.innerText = str.substring(0, charCount);
    }, interval);
}

function setBackground(hacked) {
    if (hacked) {
        background.style.backgroundImage = "url(assets/hacked.gif)";
        background.style.backgroundRepeat = "repeat";
    } else {
        background.style.backgroundImage = "url(assets/note.png)";
        background.style.backgroundRepeat = "";
    }
}

function setOpacity(opacity) {
    gif.style.opacity = opacity;
}

function transitionToHacked() {
    gif.src = "assets/bugged.gif";
    setOpacity("0%");
    setTimeout(setOpacity, 500, "100%");
    setTimeout(setOpacity, 1000, "0%");
    setTimeout(setBackground, 1500, true);
    setTimeout(setBackground, 1850, false);
    setTimeout(setBackground, 2100, true);
    setTimeout(setBackground, 2350, false);

    setTimeout(() => {
        setBackground(true);
        message.style = "display: fixed";
    }, 3000);
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

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Challenge Complete, thanks for playing!";
  }
}, 1000);
