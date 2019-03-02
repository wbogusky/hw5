function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    for (i=10; i <= 390; i+=10){
        line(10, i, 390, i);
    }

}
