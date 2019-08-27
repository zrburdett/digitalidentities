var curve1;
var curve2;
var curve3;


var x1 = 550;
var x2 = 50;
var x3 = 50;
var x4 = 50;

var y1 = 50;
var y2 = 50;
var y3 = 50;
var y4 = 550;


let weird;

function setup() {
  createCanvas(600, 600);
    
    //background(0);
    
    curve1 = createSlider(50, 550, 0, 1);
    curve1.position(10,10);
    curve1.style('color','white');
    
    curve2 = createSlider(50, 550, 0, 1);
    curve2.position(10,40);
    curve2.style('color','white');
	/*
	curve3 = createSlider(50, 550, 0, 1);
    curve3.position(10,70);
    curve3.style('color','white');
	*/
	
	weird = new Curve();
    
    /*
    var x1 = (width-50);
    var x2 = curve1.value();
    var x3 = 50;
    var x4 = 50;
    
    var y1 = 50;
    var y2 = curve1.value();
    var y3 = 50;
    var y4 = (height-50);
    
    noFill();
    stroke(255,255,255);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    fill(255);
    var steps = 20;
    for (var i = 0; i <= steps; i++) {
        let t = i/steps;
        let x = bezierPoint(x1, x2, x3, x4, t);
        let y = bezierPoint(y1, y2, y3, y4, t);
        circle(x, y, 10);
    }
    */
}

function draw() {
	background(0);
	
	/*
    var x1 = (width-50);
    var x2 = curve1.value();
    var x3 = 50;
    var x4 = 50;
    
    var y1 = 50;
    var y2 = curve1.value();
    var y3 = 50;
    var y4 = (height-50);
    
    noFill();
    stroke(255,255,255);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    fill(255);
    var steps = 20;
    for (var i = 0; i <= steps; i++) {
        let t = i/steps;
        let x = bezierPoint(x1, x2, x3, x4, t);
        let y = bezierPoint(y1, y2, y3, y4, t);
        circle(x, y, 10);
    }
	
	
	noFill();
    stroke(255,255,255);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    fill(255);
    var steps = 20;
    for (var i = 0; i <= steps; i++) {
        let t = i/steps;
        let x = bezierPoint(x1, x2, x3, x4, t);
        let y = bezierPoint(y1, y2, y3, y4, t);
        circle(x, y, 10);
	}
	*/
	
	weird.update();
	weird.display();
}

/*
function mousePressed() {
	x2 += 50;
	y2 += 50;
	redraw();
}
*/

class Curve {
	constructor() {
		this.x1 = (width-50);
		this.x2 = 50;
		this.x3 = 50;
		this.x4 = 50;
		
		this.y1 = 50;
		this.y2 = 50;
		this.y3 = 50;
		this.y4 = (height-50);
	}
	
	update() {
		this.x2 = curve1.value();
		this.y2 = curve1.value();
		
		this.x3 = curve2.value();
		this.y3 = curve2.value();
		/*
		this.x4 = curve3.value();
		this.y4 = curve3.value();
		*/
	}
	
	display() {
		noFill();
		stroke(255,255,255);
		bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
		fill(255);
		/*
		var steps = 20;
		for (var i = 0; i <= steps; i++) {
			let t = i/steps;
			let x = bezierPoint(this.x1, this.x2, this.x3, this.x4, t);
			let y = bezierPoint(this.y1, this.y2, this.y3, this.y4, t);
			circle(this.x, this.y, 10);
		}
		*/
	}
	
}