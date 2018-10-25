let image;
let ctx1, ctx2, ctx3, theCanvas1, theCanvas2, theCanvas3;

// ----- Standard prep canvas start-----
window.addEventListener("load", initCanvas, false);

function initCanvas() {
    theCanvas1 = document.getElementById("c1");
    theCanvas2 = document.getElementById("c2");
    theCanvas3 = document.getElementById("c3");
    ctx1 = theCanvas1.getContext('2d');
    ctx2 = theCanvas2.getContext('2d');
    ctx3 = theCanvas3.getContext('2d');
    console.log('loaded ctx');
        //prep image
        image = new Image();
        image.src = 'img/angular.png';
        image.addEventListener('load', startTheApp);


}

// ----- Standard prep canvas end-----
var startTheApp = () => {
    console.log('start startTheApp');
    // prepare values
    draw('original');
    draw('full');
    // draw('tile');

}

function draw(style) {
    console.log(`start draw with ${style}` );
    switch (style) {
        case 'original':
            ctx1.drawImage(image,0,0);
        case 'full':
            ctx2.drawImage(image,0,0,theCanvas2.offsetWidth, theCanvas2.offsetHeight);
        case 'tile':
            //double for loops
    }



}
