// Select the canvas element
const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
// Function to resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call the function initially
resizeCanvas();

// Call the function every time the window is resized
window.addEventListener('resize', resizeCanvas);
//create const img from image.png
const img = new Image();
img.src = 'image.png';

function doFrame(){
   // ctx.fillStyle = '#cc6600';
    ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let freeYSpace = canvas.width*9/16 - canvas.height;
ctx.drawImage(img, 0, -freeYSpace/2, canvas.width, canvas.width*9/16);
    requestAnimationFrame(doFrame);
}
requestAnimationFrame(doFrame);