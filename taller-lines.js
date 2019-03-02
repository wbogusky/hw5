function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noFill();
    
    for (i=5; i <= width; i+=5){
        line(i, 2*i, i, -height);
    }

}
