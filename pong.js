// this version has a computer player

var puck = {
    x: 200,
    y: 200,
    vx: -1,
    vy: 2,
    size: 10,

    maxV: 2, // I added these variables so that I could create an incrementing range of random puck directions
    minV: 1,
}

var leftY = 200;
var rightY = 200;
var playerWidth = 10;
var playerHeight = 50;
var playerSpeed = 5;

var scoreLeft = 0; // these variables correspond to the text based scores on each side
var scoreRight = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(87, 117, 69);

    text(scoreLeft, 100, 50); //scores
    text(scoreRight, 300, 50);

    noFill();
    rect(0, height / 4, width, height - height / 4);

    stroke(255);
    line(width / 2, 0, width / 2, height); // center line
    noFill();
    rect(0, height / 4, width, height / 2);
    rect(width / 4, height / 4, width / 2, height / 4);
    rect(width / 4, height / 2, width / 2, height / 4);

    rectMode(CENTER);
    noStroke();
    fill(238, 255, 53);
    rect(puck.x, puck.y, puck.size, puck.size); // puck

    rectMode(CORNER);
    fill(255);
    rect(0, leftY, playerWidth, playerHeight); // computer paddle
    rect(width - playerWidth, rightY, playerWidth, playerHeight); // player paddle

    puck.x += puck.vx;
    puck.y += puck.vy;

    if (puck.y >= height || puck.y <= 0) {
        puck.vy = -puck.vy; // puck bounces off the top and bottom
    }

    if (puck.x < 0) {
        puck.x = width / 2; // reset puck position
        puck.y = height / 2;

        puck.vx = random(puck.minV, puck.maxV); // choose new direction
        puck.vy = random(-puck.maxV, puck.maxV);

        puck.maxV += 0.3; // increment max and min velocities
        puck.minV += 0.3;

        scoreLeft++; // increase score marker
    }

    if (puck.x > width) {
        puck.x = width / 2;
        puck.y = height / 2;

        puck.vx = -random(puck.minV, puck.maxV);
        puck.vy = random(-puck.maxV, puck.maxV);

        puck.maxV += 0.3;
        puck.minV += 0.3;

        scoreRight++;
    }

    if (puck.x < playerWidth) {
        if (puck.y > leftY && puck.y < leftY + playerHeight) {
            puck.vx = -puck.vx; // bounce puck off paddle=
        }
    }

    if (puck.x > width - playerWidth) {
        if (puck.y > rightY && puck.y < rightY + playerHeight) {
            puck.vx = -puck.vx
        }
    }

    if (keyIsDown(UP_ARROW)) {
        rightY -= playerSpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        rightY += playerSpeed;
    }

    if (leftY + playerHeight - 5 > puck.y) { // computer player follows the puck height but is limited by playerSpeed
        leftY -= playerSpeed;
    }

    if (leftY + 5 < puck.y) {
        leftY += playerSpeed;
    }

    //     if (keyIsDown(87)) {
    //         leftY -= playerSpeed;
    //     }

    //     if (keyIsDown(83)) {
    //         leftY += playerSpeed;
    //     }

    if (leftY <= 0) {
        leftY = 0;
    }

    if (leftY >= height - playerHeight) {
        leftY = height - playerHeight;
    }

    if (rightY <= 0) {
        rightY = 0;
    }

    if (rightY >= height - playerHeight) {
        rightY = height - playerHeight;
    }
}
