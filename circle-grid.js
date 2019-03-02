function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
    
    noStroke();
    for (x = 25; x < width; x+= 25){
        for(y = 25; y < height; y+= 25){
            ellipse(x,y, 15);
        }
    }
}
