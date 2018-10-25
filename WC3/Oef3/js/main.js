var theCanvas, context, hCanvas, wCanvas;
var balls = [];
var gravity = 0.5;
//elasticiteit
var bounce_factor = 0.8;
var speed = 5;
var angle = 90;

window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    initCanvas();
    theCanvas.addEventListener('click', generateBall);
    gameLoop();
}

function gameLoop() {
    drawBalls();
    window.setTimeout(gameLoop, 20);
}

function drawBalls() {
    //Canvas clearen
    context.clearRect(0, 0, wCanvas, hCanvas);

    //Loop over array van ballen
    for (var i = 0; i < balls.length; i++) {


        balls[i].velocityy += gravity;
        balls[i].y += balls[i].velocityy;

        if (balls[i].y + balls[i].radius >= hCanvas) {
            balls[i].y = hCanvas - balls[i].radius;
            balls[i].velocityy *= -bounce_factor;
            
        }

        balls[i].draw();
    }
}

function generateBall(event) {
    var ball = new Ball;
    var mouse = getMousePos(event);
    ball.x = mouse.x;
    ball.y = mouse.y;
    balls.push(ball);
    
}

function Ball() {
    this.x = 25;
    this.y = 25;
    this.radius = (Math.random() * 30) + 10;
    this.velocityx = Math.cos(degreesToRadians(90)) * speed;
    this.velocityy = Math.sin(degreesToRadians(90)) * speed;

    this.draw = function () {
        context.beginPath();
        context.fillStyle = 'black';
        context.arc(this.x, this.y, this.radius, 0, degreesToRadians(360), false);
        context.fill();
        context.closePath();
    }
}

function getMousePos(evt) {
    var rect = theCanvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function initCanvas() {
    theCanvas = document.getElementById("myCanvas");
    if (!theCanvas || !isCanvasSupported) {
        return;
    }

    context = theCanvas.getContext('2d');
    hCanvas = theCanvas.offsetHeight;
    wCanvas = theCanvas.offsetWidth;
}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
