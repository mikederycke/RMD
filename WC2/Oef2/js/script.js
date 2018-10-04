$(function(){

    let canvas = document.getElementById('c');
    let ctx;
    if(canvas.getContext){
        ctx = canvas.getContext('2d');
        draw();
    }

    function draw() {
        // ctx.fillStyle = 'green';
        ctx.fillRect(50,250,150,50); //Bottom
        // ctx.fillStyle = 'blue';
        ctx.fillRect(50,50,50,250); //Verticaal
        // ctx.fillStyle = 'red';
        ctx.fillRect(50,50,150,50); //Top

        // ctx.fillStyle = 'yellow';
        ctx.fillRect(50,150,90,50); //Mid





    }
});

