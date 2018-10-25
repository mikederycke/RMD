var context, hCanvas, wCanvas;

var ball = {
    x: 25,
    y: 25,
    radius: 25,
    speed: 5
};


window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    //Initialize everything
    initCanvas();
    //Start the gameloop
    gameLoop();
}

function gameLoop() {
    //Draw a circle
    drawCircle();
    //Timeout makes sure that the gameloop is repeated
    //For 60 FPS we divide the second (1000ms) by 60
    window.setTimeout(gameLoop, 1000 / 60);
}

function drawCircle() {
    //draw the circle
    //Zolang onderstaande waar is, bewegen we naar rechts
    if (ball.y < 0 || ball.y == ball.radius) {
        ball.y = ball.radius;
        ball.x += ball.speed;
    }
    // //Zolang onderstaande waar is, bewegen we naar onder
    if (ball.x + ball.radius >= wCanvas) {
        ball.x = wCanvas - ball.radius;
        ball.y += ball.speed;
    }
    // //Zolang onderstaande waar is, bewegen we naar links
    if (ball.y + ball.radius >= hCanvas) {
        ball.y = hCanvas - ball.radius;
        ball.x -= ball.speed;
    }

    // //Zolang onderstaande waar is, bewegen we naar boven
    if (ball.x < 0 || ball.x == ball.radius) {
        ball.y -= ball.speed;
        ball.x = ball.radius;
    }

    //draw the ball
    // Gele achtergrond
    context.fillStyle = 'yellow';
    context.strokeStyle = 'blue';
    context.fillRect(0, 0, wCanvas, hCanvas);
    context.strokeRect(0, 0, wCanvas, hCanvas);

    context.beginPath();
    context.fillStyle = 'black';
    context.arc(ball.x, ball.y, ball.radius, 0, degreesToRadians(360), false);
    context.fill();
    context.closePath();
}

function initCanvas() {
    var theCanvas = document.getElementById("myCanvas");
    if (theCanvas.getContext) {
        context = theCanvas.getContext('2d');
        //Set initial height and width of the canvas
        hCanvas = theCanvas.offsetHeight;
        wCanvas = theCanvas.offsetWidth;
    }else{
        return
    }


}

function degreesToRadians(degrees) {
    return (Math.PI / 180) * degrees;
}