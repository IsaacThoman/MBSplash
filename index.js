// Select the canvas element
const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
// Function to resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
let myId = Math.random();

// Call the function initially
resizeCanvas();

// Call the function every time the window is resized
window.addEventListener('resize', resizeCanvas);
//create const img from image.png
const img = new Image();
img.src = 'image.png';
let lastChangeTime = 0;

function doFrame(){
   // ctx.fillStyle = '#cc6600';
    if(myId>0){
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let freeYSpace = canvas.width*9/16 - canvas.height;
        ctx.drawImage(img, 0, -freeYSpace/2, canvas.width, canvas.width*9/16);
    }
    else{
        ctx.fillStyle = '#cc6600';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    let currentTimeUTC = Math.round(new Date().getTime()/1000);
    if(currentTimeUTC%(60) == 0 && currentTimeUTC != lastChangeTime){
      //  myId = Math.random();

        setTimeout(function() {
            location.reload();
        }, 1200);

        lastChangeTime = currentTimeUTC;
    }

    requestAnimationFrame(doFrame);
}
requestAnimationFrame(doFrame);