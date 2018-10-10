let canvas, ctx;

$(function(){

    canvas = document.getElementById('c');
    if(canvas.getContext){
        ctx = canvas.getContext('2d');
        draw();
    }

    function draw() {

    }
});