let theCanvas, ctx, v;
// ----- Standard prep canvas start-----
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    initCanvas(); //Begin initialisatie na window load
}

function initCanvas() {
    theCanvas = document.getElementById("c");
    if (theCanvas.getContext) { //Controle op geldig canvas
        ctx = theCanvas.getContext('2d');
        // theCanvas.width = 1000;
        // theCanvas.height = 800;

        startTheApp();
    }
}

// ----- Standard prep canvas end-----

function startTheApp() {

    //Vraag het video HTML element op
    v = document.getElementById('v');
//Zet de grootte van het canvas gelijk aan de browser
    let cw = theCanvas.offsetWidth;
    let ch = theCanvas.offsetHeight;
    theCanvas.width = cw;
    theCanvas.height = ch;

    //Moment dat op play geduwd wordt, begin de video te renderen op het canvas
    v.addEventListener('play', function () {
        draw(this, ctx, cw, ch);
    }, false);

    //start de video
    v.play();
}

function draw(v, c, w, h) {
    //Voer dit niet uit wanneer de video gepauseerd of afgelopen is
    if (v.paused || v.ended) return false;
    //Teken het huidige frame op het canvas
    c.drawImage(v, 0, 0, w, h);
    setTimeout(draw, 20, v, c, w, h);
}
