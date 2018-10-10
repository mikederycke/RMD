let canvas,ctx;
$(function(){

    canvas = document.getElementById('c');
    if(canvas.getContext){
        ctx = canvas.getContext('2d');
        draw();
    }
    function draw() {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.beginPath();

        ctx.moveTo(133, 0);
        ctx.lineTo(166, 100); //1
        ctx.lineTo(266, 100); //2
        ctx.strokeStyle = "blue";
        ctx.lineTo(185, 155); //3
        ctx.strokeStyle = "yellow";
        ctx.lineTo(215, 250); //4
        ctx.lineTo(133, 194); //5
        ctx.lineTo(50, 250); //6
        ctx.lineTo(82, 156); //7
        ctx.lineTo(0, 100); //8
        ctx.lineTo(100, 100); //9
        ctx.lineTo(133, 0); //10

        ctx.stroke();

    }
});

