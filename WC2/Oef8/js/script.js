let canvas,ctx;
$(function(){

    canvas = document.getElementById('c');
    if(canvas.getContext){
        ctx = canvas.getContext('2d');
        draw();
    }
    function draw() {
        generateStar(183, 50, true);
        generateStar(452, 50, false);
        generateStar(721, 50, true);
    }

    function generateStar(x, y, fill) {
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(x, y);

        ctx.lineTo((x + 33), (y + 100)); //1
        ctx.lineTo((x + 133), (y + 100)); //2
        ctx.lineTo((x + 52), (y + 155)); //3
        ctx.lineTo((x + 82), (y + 250)); //4
        ctx.lineTo(x, (y + 194)); //5
        ctx.lineTo((x - 82), (y + 250)); //6
        ctx.lineTo((x - 52), (y + 155)); //7
        ctx.lineTo((x - 133), (y + 100)); //8
        ctx.lineTo((x - 33), (y + 100)); //9
        ctx.lineTo(x, y); //10

        if (fill == true) ctx.fill();
        else ctx.stroke();

        ctx.closePath();

    }
    function drawCircle() {
        //Bepaal random positie
        //rekening houden met canvas.width en canvas.height
        let x = 50;
        let y = 60;
        let r = Math.random() * 50;
        ctx.beginPath();
        ctx.arc(x, y, // X/Y center point
            r, //Radius
            0, //Start Angle
            Math.PI *2, //End Angle
            counterClockwise); //Drawing Direction
        ctx.fillStyle = randomColor();
        ctx.fill();
        ctx.stroke();
    }
    function randomColor(){
        //Door de student in te vullen
        return '#000000';
    }

});

