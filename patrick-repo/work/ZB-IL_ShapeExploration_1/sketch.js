function setup() {
    createCanvas(innerWidth,innerHeight);
    console.log("InnerWidth: " + innerWidth);
    console.log("InnerHeight: " + innerHeight);
}

function draw() {
	// Draw the gradient background
    gradientBackground('#35a2f1', '#7e24ce');

    // Draw the square grid
    for(var yAxis = 0; yAxis < 4; yAxis++) {
    	for(var xAxis = 0; xAxis < 5; xAxis++) {
    		drawSquare(640+(xAxis*160), 720-(yAxis*120), 400, 135, hexWithAlpha('#ffa000', 0.5), hexWithAlpha('#f72fe8', 0.5));
    	}
    }
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