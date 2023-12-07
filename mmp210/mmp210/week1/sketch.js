function setup() {
    createCanvas(640, 480);
    
    background('LIGHTCYAN');
    
    fill(255, 215, 0);
    noStroke();
    ellipse(320, 220, 250, 240);
    
   stroke(184, 134, 11)
   strokeWeight(2.5);
   arc(260, 160, 80, 25, 0, HALF_PI);
   stroke(184, 134, 11)
   strokeWeight(2.5);
   arc(380, 160, 80, 25, HALF_PI, PI);
   
   fill(184, 134, 11)
   noStroke();
   ellipse(280, 205, 30, 40);
   fill(184, 134, 11)
   noStroke();
   ellipse(360, 205, 30, 40);
    
   stroke(184, 134, 11)
   arc(320, 235, 50, 25, 0, PI);
}