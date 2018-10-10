let canvas, ctx;
$(function () {

    canvas = document.getElementById('c');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        draw();
    }

    function draw() {
        ctx.strokeStyle = "#000000";
        //Volledige cirkel
        drawCircle(75, 100, 50, 0, 360, false);
        //Halve cirkel
        drawCircle(200, 100, 50, 0, 180, false);
        //Halve cirkel, getekend TEGEN wijzerszin
        drawCircle(325, 100, 50, 0, 180, true);
        //Start en eind punt van de cirkel worden aangeduid met de uren van de klok
        //Teken een cirkel die start op 9u, met wijzerszin mee tot 6u
        drawCircle(450, 100, 50, 180, 90, false);
        //Teken een cirkel die start op 12u, tegen wijzerszin mee tot 9u
        drawCircle(575, 100, 50, 270, 180, true);
    }

    console.log("0° = " + degreesToRadians(0) + " radialen");
    console.log("45° = " + degreesToRadians(45) + " radialen");
    console.log("90° = " + degreesToRadians(90) + " radialen");
    console.log("120° = " + degreesToRadians(120) + " radialen");
    console.log("150° = " + degreesToRadians(150) + " radialen");
    console.log("180° = " + degreesToRadians(180) + " radialen");
    console.log("270° = " + degreesToRadians(270) + " radialen");
    console.log("360° = " + degreesToRadians(360) + " radialen");

    function drawCircle(x, y, r, startDegrees, endDegrees, counterClockwise) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, // X/Y center point
            r, //Radius
            degreesToRadians(startDegrees), //Start Angle
            degreesToRadians(endDegrees), //End Angle
            counterClockwise); //Drawing Direction
        ctx.fillStyle = "yellow";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    function degreesToRadians(degrees) {
        // 1 PI = 180° = halve cirkel
        // 2 PI = 360° = volledige cirkel
        return (Math.PI / 180) * degrees;
    }

})
;

