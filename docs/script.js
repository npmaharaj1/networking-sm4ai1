hash = document.getElementById("hash");
hash.innerHTML = Math.random();

function transitionToHacked() {
    const gif = document.getElementById("gif");
    const background = document.getElementsByTagName("body")[0];
    const label = document.getElementById("label");

    gif.style = " opacity: 0%";
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
        label.style.opacity = "0%";
    }, 1500);
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

