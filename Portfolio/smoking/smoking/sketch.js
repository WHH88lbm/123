var canvas;
var img;

function setup() {
 	canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    
    img = loadImage("images/icon.jpg");

   
           
}

function draw() {
    background("black");
    image(img, mouseX, mouseY, 40, 40);
   
    
}
