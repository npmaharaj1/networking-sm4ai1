"use strict";

const label = document.getElementById("label");
const video = document.getElementById("gif");

const fadeInAnim = [
  { filter: "drop-shadow(-4vw 0vh 1vh) drop-shadow(4vw 0vh 1vh) blur(1vh)", opacity: "0%" },
  { filter: "drop-shadow(0vw 0vh 0vh) drop-shadow(0vw 0vh 0vh)", opacity: "100%" }
];

setTimeout(() => {
    label.animate(fadeInAnim, 1000);
    label.removeAttribute("style");
}, 8291)
