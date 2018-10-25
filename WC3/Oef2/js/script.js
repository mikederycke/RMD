var context, hCanvas, wCanvas;
var radiusInc = 0.3;


var circle = {
    centerX: 0,
    centerY: 0,
    radius: 10,
    angle: 0
}

var ball = {
    x: 0,
    y: 0,
    speed: 0.4
};


window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    initCanvas();
    context.font="28px Georgia";
    gameLoop();
}

function gameLoop() {
    drawCircle();
    window.setTimeout(gameLoop, 1000 / 60);
}

function drawCircle() {
    //Clear het Canvas
    context.fillStyle = 'yellow';
    context.strokStyle = 'blue';
    context.fillRect(0, 0, wCanvas, hCanvas);
    context.strokeRect(0, 0, wCanvas, hCanvas);
    context.fillStyle = 'black';

    // context.fillText(`Radius: ${circle.radius}`, 50, 50);
    //Bepaal punt op cirkel:
    //X = centerX + R x COS(angle)
    //Y = centerY + R x SIN(angle)
    ball.x = circle.centerX + Math.cos(circle.angle)
        * circle.radius;
    ball.y = circle.centerY + Math.sin(circle.angle)
        * circle.radius;
    //bepaal de snelheid waarmee de bal rondgaat
    circle.angle += ball.speed;
    //Vergroot de cirkels voor het swirly effect te tonen
     circle.radius += radiusInc;
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(ball.x, ball.y, 15, 0, degreesToRadians(360), false);
    context.fill();
    context.closePath();
}

function initCanvas() {
    var theCanvas = document.getElementById("myCanvas");
    if (!theCanvas || !isCanvasSupported) {
        return;
    }

    context = theCanvas.getContext('2d');
    hCanvas = theCanvas.offsetHeight;
    wCanvas = theCanvas.offsetWidth;
    circle.centerX = ball.x = wCanvas / 2;
    circle.centerY = ball.y = hCanvas / 2;
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
