function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noFill();
    for (i=10; i <= 390; i+=10){
        ellipse(width/2, height/2, i);
    }

}
