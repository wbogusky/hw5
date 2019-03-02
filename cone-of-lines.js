function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noFill();
    
    for (i=10; i <= 390; i+=10){
        line(width/2, 10, i, 390);
    }

}
