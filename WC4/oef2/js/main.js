var urlEl, xEl, yEl, wEl, hEl, image;
var context;
var x = 0, y  =0, w = 0, h = 0;
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
  initCanvas();
  urlEl = document.getElementById('imageUrl');
  xEl = document.getElementById('x');
  yEl = document.getElementById('y');
  wEl = document.getElementById('w');
  hEl = document.getElementById('h');
  
  document.getElementById('submit').addEventListener('click', showImage);
}

function initCanvas() {
  var theCanvas = document.getElementById("myCanvas");
  if(!theCanvas || !isCanvasSupported) {
    return;
  }
  
  context = theCanvas.getContext('2d');
}

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function showImage() {
  var url = urlEl.value;
  x = xEl.value;
  y = yEl.value;
  w = wEl.value;
  h = hEl.value;
  
  if(url == "" || x == "" || y == "" || w == "" || h == "") {
    alert('vul alle velden in');
  } else {
    image = new Image();
    image.src = url;
    image.addEventListener('load', drawImage);
  }
}

function drawImage() {
  context.clearRect(0,0,500,500);
  context.drawImage(image, x, y, w, h, 0 ,0, w, h)
}