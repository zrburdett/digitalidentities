var red;
var green;
var blue;

var r;
var g;
var b;

var redVal;
var greenVal;
var blueVal;

var color1;
var color2;
var done;

var first;
var second;

function setup() {
  createCanvas(600, 600);
    
    background(0);
    
    r = createElement('h5', 'red:');
	r.position(10, 0);
	r.style('color', 'white');
	
	red = createSlider(0, 255, 0, 1);
	red.position(50, 15);
	red.style('width', '80px');
	
	g = createElement('h5', 'green:');
	g.position(10, 25);
	g.style('color', 'white');
	
	green = createSlider(0, 255, 0, 1);
	green.position(50, 40);
	green.style('width', '80px');
	
	b = createElement('h5', 'blue:');
	b.position(10, 50);
	b.style('color', 'white');
	
	blue = createSlider(0, 255, 0, 1);
	blue.position(50, 70);
	blue.style('width', '80px');
    
    color1 = createButton('First Color');
    color1.position(275, 20);
    color1.mousePressed(firstColor);
    
    color2 = createButton('Second Color');
    color2.position((color1.x+100), color1.y);
    color2.mousePressed(secondColor);
    
    done = createButton('Done!');
    done.position((color2.x+125), color2.y);
    done.mousePressed(final);
    
    //gradient();
}

function draw() {
    redVal = red.value();
	greenVal = green.value();
	blueVal = blue.value();
	
    push();
	stroke(255);
	strokeWeight(4);
    fill(redVal, greenVal, blueVal);
    rect(150, 20, 100, 100);
    pop();
}

function firstColor() {
    first = color(redVal, greenVal, blueVal);
    console.log(redVal+','+greenVal+','+blueVal);
}

function secondColor() {
    second = color(redVal, greenVal, blueVal);
    console.log(redVal+','+greenVal+','+blueVal);
}

function final() {
    gradient();
}

function gradient() {
    var from = first;
    var to = second;
    var c1 = lerpColor(from, to, .20);
    var c2 = lerpColor(from, to, .40);
    var c3 = lerpColor(from, to, .60);
    var c4 = lerpColor(from, to, .80);
    
    noStroke();
    for (var i = 0; i < 50; i++) {
        fill(from);
        circle(random(10,90), random(150, height), 10);
        fill(c1);
        circle(random(110,190), random(150, height), 10);
        fill(c2);
        circle(random(210,290), random(150, height), 10);
        fill(c3);
        circle(random(310,390), random(150, height), 10);
        fill(c4);
        circle(random(410,490), random(150, height), 10);
        fill(to);
        circle(random(510,590), random(150, height), 10);
    }
}