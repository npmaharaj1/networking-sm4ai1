"use strict";

const label = document.getElementById("label");
const video = document.getElementById("video");

const fadeInAnim = [
  { filter: "drop-shadow(-4vw 0vh 1vh) drop-shadow(4vw 0vh 1vh) blur(15px)", opacity: "0%" },
  { filter: "drop-shadow(0vw 0vh 0vh) drop-shadow(0vw 0vh 0vh)", opacity: "100%" },
];

video.play();
setTimeout(() => {
  label.animate(fadeInAnim, { duration: 1000 });
  label.removeAttribute("style");
}, 8291);
