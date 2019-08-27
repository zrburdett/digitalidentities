let trap = [];

function setup() {
  createCanvas(5000, 2500);
    
    let circle = new circles(width/2, height/2);
    let rectangle = new rectangles(200, 200, width-400, height-400);
    
    for (let i = -300; i < width; i+= 700) {
        for (let j = 0; j < height; j+= 701){
            trap.push(new quads(i, j));
        }
    }
    
    background(0);
    
    /*
    fill(255);
    stroke(0);
    quad(50, 50, // top left
         750, 50, // top right
         1000, 750, // bottom right
        300, 750); // bottom left
    */
    
    for (let i = 0; i < trap.length; i++) {
        trap[i].display();
    }
    
    circle.display();
    rectangle.display();
}

function draw() {
    
}

function quads(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = this.x1 + 700;
    this.y2 = this.y1;
    this.x3 = this.x1 + 950;
    this.y3 = this.y1 + 700;
    this.x4 = this.x1 + 250;
    this.y4 = this.y3;
    
    this.display = function() {
        fill(color(11, 132, 87));
        stroke(0);
        quad(this.x1, this.y1,
            this.x2, this.y2,
            this.x3, this.y3,
            this.x4, this.y4);
    }
}

function circles(centerX, centerY) {
    this.display = function() {
        fill(color(0,0,0,150));
        noStroke();
        // start from top then clockwise
        circle(centerX, centerY-800, 500);
        circle(centerX+600, centerY-600, 500);
        circle(centerX+800, centerY, 500);
        circle(centerX+600, centerY+600, 500);
        circle(centerX, centerY+800, 500);
        circle(centerX-600, centerY+600, 500);
        circle(centerX-800, centerY, 500);
        circle(centerX-600, centerY-600, 500);
        
        
        fill(color(0,0,0,100));
        // outside circles from top then clockwise
        circle(centerX, centerY-1300, 400);
        circle(centerX+925, centerY-925, 400);
        circle(centerX+1300, centerY, 400);
        circle(centerX+925, centerY+925, 400);
        circle(centerX, centerY+1300, 400);
        circle(centerX-925, centerY+925, 400);
        circle(centerX-1300, centerY, 400);
        circle(centerX-925, centerY-925, 400);
    }
}

function rectangles(x, y, w, h) {
    this.display = function() {
        noFill();
        strokeWeight(5);
        stroke(color(247,170,0));
        rect(x, y, w, h);
        rect(x+50, y+50, w-100, h-100);
        rect(x+100, y+100, w-200, h-200);
        rect(x+150, y+150, w-300, h-300);
        rect(x+200, y+200, w-400, h-400);
        
        var center = width/2;
        
        line(center-2050, y, center-2050, 2300);
        line(center-2000, y+50, center-2000, 2250);
        line(center-1950, y+100, center-1950, 2200);
        line(center-1900, y+150, center-1900, 2150);
        line(center-1850, y+200, center-1850, 2100);
        /*
        line(center-950, y, center-950, 2300);
        line(center-900, y+50, center-900, 2250);
        line(center-850, y+100, center-850, 2200);
        line(center-800, y+150, center-800, 2150);
        line(center-750, y+200, center-750, 2100);
        */
        line(center-700, y, center-700, 2300);
        line(center-650, y+50, center-650, 2250);
        line(center-600, y+100, center-600, 2200);
        line(center-550, y+150, center-550, 2150);
        line(center-500, y+200, center-500, 2100);
        
        line(center-450, y, center-450, 2300);
        line(center-400, y+50, center-400, 2250);
        line(center-350, y+100, center-350, 2200);
        line(center-300, y+150, center-300, 2150);
        line(center-250, y+200, center-250, 2100);
        
        line(center-150, y+200, center-150, 2100);
        line(center-100, y+200, center-100, 2100);
        
        line(center+150, y+200, center+150, 2100);
        line(center+100, y+200, center+100, 2100);
        
        line(center+450, y, center+450, 2300);
        line(center+400, y+50, center+400, 2250);
        line(center+350, y+100, center+350, 2200);
        line(center+300, y+150, center+300, 2150);
        line(center+250, y+200, center+250, 2100);
        
        line(center+700, y, center+700, 2300);
        line(center+650, y+50, center+650, 2250);
        line(center+600, y+100, center+600, 2200);
        line(center+550, y+150, center+550, 2150);
        line(center+500, y+200, center+500, 2100);
        /*
        line(center+950, y, center+950, 2300);
        line(center+900, y+50, center+900, 2250);
        line(center+850, y+100, center+850, 2200);
        line(center+800, y+150, center+800, 2150);
        line(center+750, y+200, center+750, 2100);
        */
        line(center+2050, y, center+2050, 2300);
        line(center+2000, y+50, center+2000, 2250);
        line(center+1950, y+100, center+1950, 2200);
        line(center+1900, y+150, center+1900, 2150);
        line(center+1850, y+200, center+1850, 2100);
    }
}