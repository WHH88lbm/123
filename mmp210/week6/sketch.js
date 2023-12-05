function setup(){
    createCanvas(640, 480);
    background(220);

 //B
    fill(232, 171, 232);
    textSize(100);
    text("B", 127, 180);
    
    //i
    fill(59, 171, 232);
    textSize(20);
    text("碧", 200, 107);
    noFill();
    stroke(232, 171, 232);
    strokeWeight(2);
    ellipse(210, 100, 30, 30);
    
    
    
    var size = 20;
    var _size = 50;
    var sizeChange = 5;
    var _sizeChange = 5;
    
    var xPos = 200;
    var yPos =125;
    
    var outline = color(59, 171, 232);
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
    noFill();
    stroke(232, 171, 232);
    strokeWeight(2);
    ellipse(240, 170, 30, 30);
    noStroke();
    fill(232, 171, 232);
    rect(230, 190, 15, 30);
    textSize(50);
    fill(59, 171, 232);
    text("Me", 160, 220);
    textSize(20);
    strokeWeight(1);
    fill(59, 171, 232);
    text("媚", 230, 177);
    
    
    //Li
    fill(232, 171, 232);
    noStroke();
    textSize(250);
    text("L", 100, 250);


    
}

function draw(){
    push();
    translate(width/3, height/3);
    rotate(2*PI*frameCount/90);
    strokeWeight(4);
    stroke("yellow");
    line(0, height/3, width/3, 0);
    rotate(PI/16);
    ellipse(100, 100, 40, 40);
    pop();
    
    push();
    translate(width/3, height/3);
    rotate(PI/16*frameCount/30);
    fill("green");
    ellipse(55, 55, 5, 5);
    pop();
    
    push();
    translate(width/3, height/3);
    rotate(PI/16*frameCount/30);
    stroke("white");
    fill(59, 171, 232);
    textSize(20);
    text("碧", 0, -80);
    pop();
    
    push();
    translate(width/3, height/3);
    rotate(PI/16*frameCount/40);
    stroke("white");
    fill(59, 171, 232);
    textSize(20);
    text("媚", 0, -80);
    pop();
    
    
    
    
}
















