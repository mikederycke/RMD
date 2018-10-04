'use strict';
$(function(){ //onLoad
    
    let canvas = document.getElementById('c');
    let ctx = null;
    if (canvas.getContext) {
        //Canvas exists with getContext method
        ctx = canvas.getContext('2d');

    } else {
        // canvas does not exist
        // or getContext is not known
    }
    //Rectangles
    //Parameters (x,y,width,height)
    //Methodes tekenen onmiddelijk op het canvas
    //Tekent een gevulde rechthoek
    // ctx.fillRect(25,25,100,100);
    //Maakt een regio transparant
    //In de vorm van een rechthoek
    // ctx.clearRect(45,45,60,60);
    //Tekent de rand van een rechthoek
    // ctx.strokeRect(50,50,50,50);

    // Paths
    //Pad beginnen
    // ctx.beginPath();
    //Tekenoperaties
        //...
    //Pad afsluiten - recht lijn naar beginpunt
    // ctx.closePath();
    //Render het path op het canvas
    // ctx.stroke(); //Tekent het omsloten pad
    // ctx.fill(); //Vult het omsloten pad op

    //Driehoek - Pad beginnen
    ctx.beginPath();
    //Tekenoperaties
    ctx.moveTo(250, 25); //beweeg naar locatie
    ctx.lineTo(250, 125); //Trek lijn naar locatie
    ctx.lineTo(175, 75); //Trek lijn naar locatie
    ctx.lineTo(250, 25); //Trek lijn naar locatie
    //Render het path op het canvas - Stroke
    ctx.stroke();

    //Driehoek - Pad beginnen
    ctx.beginPath();
    //Tekenoperaties
    ctx.moveTo(350, 25); //beweeg naar locatie
    ctx.lineTo(350, 125); //Trek lijn naar locatie
    ctx.lineTo(275, 75); //Trek lijn naar locatie
    //Render het path op het canvas - Fill
    ctx.fill();
    // Indien niet omsloten,
    //     fill verbind laatste punt met beginpunt

    // Arcs
    ctx.beginPath();
    ctx.arc(100, 200, 50, 0, Math.PI * 2, true);//Gezicht
    ctx.moveTo(135, 200);
    ctx.arc(100, 200, 35, 0, Math.PI, false);//Mond (clockwise)
    ctx.moveTo(85, 187);
    ctx.arc(80, 187, 5, 0, Math.PI * 2, true);//Linker oog
    ctx.moveTo(125, 187);
    ctx.arc(120, 187, 5, 0, Math.PI * 2, true);//Rechter oog
    ctx.stroke();

    // Quadratric curves example
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();

    // // Path2d
    // // Cirkel
    // let p1 = new Path2D();
    // p1.arc(100,100,50, 0, Math.PI * 2, false);
    //
    // // Vierkant
    // var p2 = new Path2D();
    // p2.rect(200,100,100,100);
    //
    // // Ellipse
    // var p3 = new Path2D();
    // p3.ellipse(500,75,75,50,0,0,Math.PI * 2, false);
    //
    // Fill the circle
    // ctx.fillStyle = '#eee';
    // ctx.stroke(p1);
    // ctx.fill(p1);
    //
    // // Fill the square in red
    // ctx.fillStyle = 'red';
    // ctx.fill(p2);
    //
    // // Draw the ellipse in blue
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 5;
    // ctx.stroke(p3);

    ctx.font = '50px serif';
    ctx.fillText('Rich Media', 100, 400);
    ctx.strokeText('Rich Media', 100, 500);

    // Draw a rectangle with default settings
    ctx.fillRect(400, 300, 150, 150);
    ctx.save(); // Save the default state

    //Make changes to the settings
    ctx.fillStyle = '#09F';
    // Draw a rectangle with new settings
    ctx.fillRect(415, 315, 120, 120);

    ctx.save(); // Save the current state
    ctx.fillStyle = '#FFF'; // Make changes to the settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(430, 330, 90, 90); // Draw a rectangle with new settings

    ctx.restore(); // Restore previous state
    ctx.fillRect(445, 345, 60, 60); // Draw a rectangle with restored settings
    ctx.restore(); // Restore original state
    ctx.fillRect(460, 360, 30, 30); // Draw a rectangle with restored settings


});

