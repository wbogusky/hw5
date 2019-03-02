function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
	noFill();
    
    for (i = width / 6; i < width; i += width / 6) {
        for (s = 5; s < 30; s += 5) {
            rect(i - s, height / 2 - s, 2 * s, 2 * s);
        }
    }
}
