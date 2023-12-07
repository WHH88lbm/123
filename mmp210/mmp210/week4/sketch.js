
    
function setup() {
	createCanvas(640, 480);
	background("black");
    stroke("white");
	strokeWeight(1);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
}

    
function draw() {
    

	strokeWeight(2);
	line(0, 0, mouseX, mouseY);
    
     if (mouseX > width / 2) {
		stroke("yellow");
	} else {
		stroke("purple");
        
	}
    
	
}
