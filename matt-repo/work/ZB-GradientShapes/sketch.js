function setup() {
    createCanvas(innerWidth,innerHeight);
    console.log("InnerWidth: " + innerWidth);
    console.log("InnerHeight: " + innerHeight);
}

function draw() {
	// Draw the gradient background
    gradientBackground('#35a2f1', '#7e24ce');

    drawTriangle(innerWidth/4, innerHeight/4, 200, 200, 0, hexWithAlpha('#ffa000', 1), hexWithAlpha('#f72fe8', 1));

    drawSquare(innerWidth/2, innerHeight/4, 200, 0, hexWithAlpha('#ffa000', 1), hexWithAlpha('#f72fe8', 1));

    drawNewTriangle((innerWidth/4)*3, innerHeight/4, 400, 200, 0, hexWithAlpha('#ffa000', 1), hexWithAlpha('#f72fe8', 1));

    drawEqualTriangle(innerWidth/2, (innerHeight/4)*3, 200, 0, hexWithAlpha('#ffa000', 1), hexWithAlpha('#f72fe8', 1));
}

function gradientBackground(from, to) {
	for(var i = 0; i < innerWidth; i++) {
        noStroke();
        fill(lerpColor(color(from), color(to), (i/innerHeight)));
        rectMode(CORNER);
        rect(i, 0, 1, innerHeight);
    }
}

function drawSquare(xCoord, yCoord, size, rotationAngle, from, to) {
	push();
	translate(xCoord, yCoord);
	angleMode(DEGREES);
	rotate(rotationAngle);
	for(var i = 0; i < size; i++) {
        noStroke();
        fill(lerpColor(color(from), color(to), (i/size)));
        rectMode(CORNER);
        rect(i-(size/2), 0-(size/2), 1, size);
    }

    // Draw axis
    stroke(255);
    line(0, 0, size, 0);
    stroke(0);
    line(0, 0, 0, size);
    fill(0);
    ellipse(0, 0, 5, 5);

	pop();
}

function drawTriangle(xCoord, yCoord, lengthSideA, lengthSideB, rotationAngle, from, to) {
    push();
    translate(xCoord, yCoord);
    angleMode(DEGREES);
    rotate(rotationAngle);
    for(var i = 0; i < lengthSideA; i++) {
        noStroke();
        rectMode(CORNER);
        fill(lerpColor(color(from), color(to), i/lengthSideA));
        rect(i, 0, 1, lengthSideB-(map(i, 0, lengthSideA, 0, lengthSideB)));
    }

    // Draw axis
    stroke(255);
    line(0, 0, lengthSideA, 0);
    stroke(0);
    line(0, 0, 0, lengthSideB);
    fill(0);
    ellipse(0, 0, 5, 5);

    pop();
}

function drawEqualTriangle(xCoord, yCoord, sideLength, rotationAngle, from, to) {
    push();
    translate(xCoord, yCoord);
    angleMode(DEGREES);
    rotate(rotationAngle);
    var lengthSideB = (sideLength*sqrt(3))/2;
    for(var i = 0; i < lengthSideB; i++) {
        noStroke();
        rectMode(CENTER);
        fill(lerpColor(color(from), color(to), i/lengthSideB));
        rect(i, 0, 1, (map(i, 0, lengthSideB, sideLength, 0)));
    }

    // Draw axis
    stroke(255);
    line(0, 0, sideLength, 0);
    stroke(0);
    line(0, 0, 0, sideLength);
    fill(0);
    ellipse(0, 0, 5, 5);

    pop();
}

function drawNewTriangle(xCoord, yCoord, triangleLength, triangleHeight, rotationAngle, from, to) {
    push();
    translate(xCoord, yCoord);
    angleMode(DEGREES);
    rotate(rotationAngle);
    for(var i = 0; i < triangleLength; i++) {
        noStroke();
        rectMode(CORNER);
        fill(lerpColor(color(from), color(to), i/triangleLength));
        if(i < triangleLength/2) {
            rect(i-triangleLength/2, 0, 1, (map(i, 0, triangleLength, 0, triangleHeight*2)));
        } else {
            rect(i-triangleLength/2, 0, 1, (map(i, 0, triangleLength, triangleHeight*2, 0)));
        }
    }

    // Draw axis
    stroke(255);
    line(0, 0, triangleLength, 0);
    stroke(0);
    line(0, 0, 0, triangleHeight);
    fill(0);
    ellipse(0, 0, 5, 5);

    pop();
}

function hexWithAlpha(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if(alpha) {
		return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	} else {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}