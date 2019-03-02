function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noFill();
    
    for (i=1; i <= height/2; i+=10){
        line(width/2-i, i, width/2+i, i);
    }
    for (i=height/2; i <= height; i+=10){
        line(i-width/2, i, width/2-i+width, i);
    }
}
