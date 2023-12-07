function setup() { 
   createCanvas(640, 480);
    
    noStroke();
}
function draw() {
    background(255, 255, 242);
    
    var windowWidth = width/2; // window width
    var windowHeight = height; // window height
    var x = 10, y = 10;
    
    for ( var i = 0; x < 2; i++) {
       for (var h = 0; y < 1; h++) {
           drawWindow(x + 150 * i, y + 150 * h, windowWidth, windowHeight);
       }
    }
}

 function drawWindow(x, y, windowWidth, windowHeight){
           
           fill(14, 4, 46);
           rect(x, y, windowWidth/2, windowHeight/2);
 
 

           
           noStroke();
           rect(x, y, windowWidth/4, windowHeight/4);
           rect(x, y+windowHeight/4, windowWidth/4, windowHeight/4);
           rect(x+windowWidth/4, y, windowWidth/4, windowHeight/4);
           rect(x+windowWidth/4, y+windowHeight/4, windowWidth/4, windowHeight/4);
 

           fill(92, 37, 105);
           noStroke();
          rect(x-windowWidth/4-windowWidth/3, y, windowWidth/12, windowHeight/4);
          rect(x-windowWidth/4-windowWidth/3, y+windowHeight/4, windowWidth/12, windowHeight/4);
           rect(x+windowWidth/4+windowWidth/4+windowWidth/4-windowWidth/3, y, windowWidth/12, windowHeight/4);
           rect(x+windowWidth/4+windowWidth/4+windowWidth/4-windowWidth/3,y+windowHeight/4, windowWidth/12, windowHeight/4);
           
           //the smallest rect
           fill(14, 9, 67);
           rect(x-windowWidth/4-windowWidth/3, y, windowWidth/12, windowHeight/16 );
           rect(x+windowWidth/4+windowWidth/4+windowWidth/4-windowWidth/3, y, windowWidth/12, windowHeight/16);
           
            fill(14, 9, 67);
           rect(x, y, windowWidth/4, windowHeight/16);
           
           fill(0);
           rect(x+windowWidth/4, y, windowWidth/6, windowHeight/16);
           
           fill(92, 37, 105);
           arc(x, windowHeight/3.2, windowWidth/2.1, windowHeight/4+windowHeight/2.5, 0, HALF_PI);
           
           stroke(255, 212, 193);
           strokeWeight(4);
           line(x+windowWidth/4, y, x+windowWidth/4, y+windowHeight/2);
           line(x, windowHeight/2, x+windowWidth/2, windowHeight/2);
           
 }
           
           
           
           
           
           
           
   