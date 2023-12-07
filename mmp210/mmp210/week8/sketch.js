//var notes = ["♪", "♩", "♫", "♬", "¶", "♭","♪", "∮", "♪", "♩", "♫", "♬", "¶", "♭","♪", "∮"];
var notes = ["image_05.png"];
var numNotes = 16;
var x = [];
var y = [];
var speed = [];
var noteColor;
var button;
var slider;
var img;
var input;
var r = 100, g = 100, b = 100;

function setup(){
    createCanvas(640, 480);
    img = loadImage("../images/notes01.jpg");
    
    for (var i = 0; i < numNotes; i++) {
		x[i] = random(0, width);
		speed[i] = random(1, 2);
        y[i] = random(0, height/2);
		}
    noteColor = (0);
    createP('');
    button = createButton('play');
    button.mousePressed(changeColor);
    slider = createSlider(0, 100, 40);
    input = createInput('type the name of the notes');
    input.position(20, 150);
    
}
    
    
function draw(){
    
    background("pink");
    image(img, mouseX, mouseY, 40, 40);
//notes
    for (var i = 0; i < notes.length; i++) {
        fill(noteColor);
        textSize(slider.value());
        text(notes[i], x[i], y[i]);
		if (y[i] < height) y[i] += speed[i];
		else y[i] = 0;
       if (y[i] > 315) console.log("play key")
    }
    
   
    fill(r, g, b);
    text(input.value(), 10, 20);
//piano keybord
    
    fill("white");
    var w = width/16;
    strokeWeight(2);
    for (var i = 0; i< notes.length; i++){
        
		
        // draw a random note at y[i]
        // then if [y]
        if (y[i] < height) y[i] += speed[i];
		else y[i] = 0;
       if (y[i] > 315) console.log("play key")
        if (y[i] > 315) {
            fill("gray");
        } else {
            fill("white");
        }
        rect(i*w, 315, w, 160);
        
       
        
    }
    
    fill("black");
     rect(30, 315, 15, 100);
     rect(72, 315, 15, 100);
     rect(115, 315, 15, 100);
     
     rect(190, 315, 15, 100);
     rect(235, 315, 15, 100);
     
     rect(310, 315, 15, 100);
     rect(352, 315, 15, 100);
     rect(395, 315, 15, 100);
     
     rect(470, 315, 15, 100);
     rect(512, 315, 15, 100);
     rect(555, 315, 15, 100);
     
     
     
}

function changeColor(){
    noteColor = color(random(255));
} 




