function setup(){
    createCanvas(640, 640);
    background('LIGHTCYAN');
    
	
    noStroke();
    fill(240, 245, 102);
    rect(120, 100, 400, 440);
    
    //eyebrow left
    strokeWeight(5);
    stroke(0, 0, 0);
    line(230, 120, 240, 150);
    line(250, 120, 250, 150);
    line(270, 120, 260, 150);
    //eyebrow right
    line(350, 120, 360, 150);
    line(370, 120, 370, 150);
    line(390, 120, 380, 150);
    
    
    //draw eyes
    strokeWeight(4);
    stroke(11, 55, 181);
    //the biggest left one
    fill(255, 243, 255);
    ellipse(260, 200, 110, 120);
    //the biggest right one
    ellipse(380, 200, 110, 120);
    
    //the medium letf one
    fill(89, 241, 255);
    ellipse(280, 200, 50, 55);
    
    //the medium right one
    ellipse(360, 200, 50, 55);
    
    //the smallest left one
    fill(11, 55, 181);
    ellipse(280, 200, 15, 20);
    
    //the smallest right one
    ellipse(360, 200, 15, 20);
    
    //draw nose
    noStroke();
    fill(255, 55, 121);
    ellipse(320, 250, 60, 60);
    
    //mouth
    fill(56, 25, 3);
    arc(320, 300, 280, 200, 0, PI);
    
    //teeth
    fill(255, 243, 255);
    rect(260, 300, 50, 50);
    rect(330, 300, 50, 50);
    
    //bubbles
    var size =40;
    var _size =50;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 170;
	var yPos = 130;
    
    var outline = color("orange");
	var w = 2;
    ellipse(170, 130, 40, 50);
	
	stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =30;
    var _size =40;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 150;
	var yPos = 200;
    
    var outline = color("orange");
	var w = 2;
    ellipse(150, 200, 30, 40);
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =30;
    var _size =40;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 150;
	var yPos = 380;
    
    var outline = color("orange");
	var w = 2;
    ellipse(150, 380, 30, 40);
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =60;
    var _size =70;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 180;
	var yPos = 450;
    
    var outline = color("orange");
	var w = 2;    
    ellipse(180, 450, 60, 70);
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =30;
    var _size =40;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 480;
	var yPos = 140;
    
    var outline = color("orange");
	var w = 2;
    ellipse(480, 140, 30, 40);
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =60;
    var _size =70;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 470;
	var yPos = 380;
    
    var outline = color("orange");
	var w = 2;
    ellipse(470, 380, 60, 70);
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    var size =30;
    var _size =30;
	var sizeChange = 5;
    var _sizeChange = 5;
	var r = 9;
	var g = 255;
	var b = 7;
	var redInc = 10;
	
	var xPos = 460;
	var yPos = 450;
    
    var outline = color("orange");
	var w = 2;
    ellipse(460, 450, 30, 30);
     
    stroke(outline);
	strokeWeight(w);
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    fill(r, g, b);
    ellipse(xPos, yPos, size, _size);
    r -= redInc;
	size -= sizeChange;
    _size -= _sizeChange;
    
    
    
    
    //neck
    fill(208, 55, 7);
    stroke(0, 0, 0);
    arc(320, 400, 80, 80, 0, PI);
    
    fill(208, 55, 7);
    //right conner
    line(340, 440, 350, 460);
    //right bottom
    line(350, 460, 330, 510);
    //letf conner
    line(300, 440, 290, 460);
    //letf bottom
    line(290, 460, 330, 510);
    
    
    
    
    
    
    
    
    
    
    
}