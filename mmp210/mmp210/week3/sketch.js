function setup(){
    createCanvas(640, 480);
    background(220);
    
    //B
    textSize(100);
    text("B", 130, 180);
    
    //i
    textSize(20);
    text("碧", 200, 107);
    noFill();
    ellipse(210, 100, 30, 30);
    
    
    
    var size = 20;
    var _size = 50;
    var sizeChange = 5;
    var _sizeChange = 5;
    
    var xPos = 200;
    var yPos =125;
    
    var outline = color("black");
    var w = 2;
    rect(200, 125, 20, 50);
    stroke(outline);
    strokeWeight(w);
    
    rect(xPos, yPos, size, _size);
    size -= sizeChange;
    _size -= _sizeChange;
    
    stroke(outline);
    strokeWeight(w);
    
    rect(xPos, yPos, size, _size);
    size -= sizeChange;
    _size -= _sizeChange;
    
    stroke(outline);
    strokeWeight(w);
    
    rect(xPos, yPos, size, _size);
    size -= sizeChange;
    _size -= _sizeChange;
    stroke(outline);
    strokeWeight(w);
    
    rect(xPos, yPos, size, _size);
    size -= sizeChange;
    _size -= _sizeChange;
    
    //Mei
    textSize(50);
    text("Me", 160, 220);
    textSize(20);
    text("媚", 230, 177);
    noFill();
    ellipse(240, 170, 30, 30);
    fill(0,0,0);
    rect(230, 190, 15, 30);
    
    //Li
    textSize(250);
    text("L", 100, 250);


    
}
