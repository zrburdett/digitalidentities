function setup() {
  createCanvas(600, 600);
	
	background(0);
    
    for (var i = 0; i < 3; i++) {
        var x = random(width);
		var y = random(height);
		var r = random(100, 255);
		var g = random(100, 255);
		var b = random(100, 255);
        var deg = random(0, 360);
        
		push();
        translate(x, y);
        noStroke();
		fill(r, g, b);
        rotate(radians(deg));
		star(0, 0, 30, 60, 5);
		pop();
	}
    
	for (var i = 0; i < 10; i++) { 
		var x = random(width);
		var y = random(height);
		var r = random(100, 255);
		var g = random(100, 255);
		var b = random(100, 255);
		var size = random(10, 100);
		var deg = random(0, 360);
		
		push();
		translate(x, y);
		rotate(radians(deg));
		stroke(r, g, b);
		fill(0, 0, 0, 0);
		polygon(0, 0, size, 6);
		pop();
	}
    
    for (var i = 0; i < 3; i++) {
        var r = random(100, 255);
        var g = random(100, 255);
        var b = random(100, 255);
        
        var d = random(20, 50);
        
        var p = random(width);
        var p2 = p + d;
        var p3 = p2 + d;
        var p4 = p3 + d;
        var p5 = p - d;

        push();
        stroke(r, g, b);
        line(p, p, p2, p);
        line(p2, p, p2, p2);
        line(p2, p2, p3, p2);
        line(p3, p2, p3, p3);
        line(p3, p3, p2, p3);
        line(p2, p3, p2, p4);
        line(p2, p4, p, p4);
        line(p, p4, p, p3);
        line(p, p3, p5, p3);
        line(p5, p3, p5, p2);
        line(p5, p2, p, p2);
        line(p, p2, p, p);
        pop();
    }
}

function draw() {
	
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}