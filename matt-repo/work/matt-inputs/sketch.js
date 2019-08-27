let name, month, day;

let nInput, mInput, dInput;

let submit;

let bg = [];

function setup() {
  createCanvas(1200, 600);
    
    background(0);
    
    name = createElement('h3', 'name');
    name.position(50, 5);
    name.style('color', 'white');
    
    nInput = createInput();
    nInput.position(50, 50);
    
    name = createElement('h3', 'birth month');
    name.position(250, 5);
    name.style('color', 'white');
   
    mInput = createInput();
    mInput.position(250, 50);
    
    name = createElement('h3', 'morning person or night owl');
    name.position(450, 5);
    name.style('color', 'white');
    
    dInput = createInput();
    dInput.position(450, 50);
    
    submit = createButton('submit');
    submit.position(650, 50);
    submit.mousePressed(show);
}

function draw() {
    
}

// shows results when 'submit' is pressed
function show() {
    console.log('submit');
    
    for (let i = 25; i < width; i+=25) {
        for (let j = 25; j < height; j+=50) {
            bg.push(new grad(i, j));
        }
    }
        
    for (let i = 0; i < bg.length; i++) {
        bg[i].display();
    }
    
    if (dInput.value()=="night owl") {
        console.log('night');
        fill(0,0,0,50);
        noStroke();
        rect(0,0,width,height);
    }
    
    let circle = new circles(width/2, height/2);
    circle.display();
}

// gradient background based on birth month
function grad(x, y) {
    let season = mInput.value();
    
    this.display = function() {
        // Fall
        if (season=="september" || season=="october" || season=="november") {
            let from = color(255,160,0);
            let to = color(255,0,0);
            let a = lerpColor(from,to,0.09);
            let b = lerpColor(from,to,0.18);
            let c = lerpColor(from,to,0.27);
            let d = lerpColor(from,to,0.36);
            let e = lerpColor(from,to,0.45);
            let f = lerpColor(from,to,0.54);
            let g = lerpColor(from,to,0.63);
            let h = lerpColor(from,to,0.72);
            let i = lerpColor(from,to,0.81);
            let j = lerpColor(from,to,0.90);
            if (x<100) {
                fill(from);
            } else if (x>100 && x<200) {
                fill(a);
            } else if (x>200 && x<300) {
                fill(b);
            } else if (x>300 && x<400) {
                fill(c);
            } else if (x>400 && x<500) {
                fill(d);
            } else if (x>500 && x<600) {
                fill(e);
            } else if (x>600 && x<700) {
                fill(f);
            } else if (x>700 && x<800) {
                fill(g);
            } else if (x>800 && x<900) {
                fill(h);
            } else if (x>900 && x<1000) {
                fill(i);
            } else if (x>1000 && x<1100) {
                fill(j);
            } else if (x>1100) {
                fill(to);
            }
            
            noStroke();
            //stroke(255,0,0);
        }
        
        // Winter
        if (season=="december" || season=="january" || season=="february") {
            let from = color(196,182,252);
            let to = color(16,0,227);
            let a = lerpColor(from,to,0.09);
            let b = lerpColor(from,to,0.18);
            let c = lerpColor(from,to,0.27);
            let d = lerpColor(from,to,0.36);
            let e = lerpColor(from,to,0.45);
            let f = lerpColor(from,to,0.54);
            let g = lerpColor(from,to,0.63);
            let h = lerpColor(from,to,0.72);
            let i = lerpColor(from,to,0.81);
            let j = lerpColor(from,to,0.90);
            if (x<100) {
                fill(from);
            } else if (x>100 && x<200) {
                fill(a);
            } else if (x>200 && x<300) {
                fill(b);
            } else if (x>300 && x<400) {
                fill(c);
            } else if (x>400 && x<500) {
                fill(d);
            } else if (x>500 && x<600) {
                fill(e);
            } else if (x>600 && x<700) {
                fill(f);
            } else if (x>700 && x<800) {
                fill(g);
            } else if (x>800 && x<900) {
                fill(h);
            } else if (x>900 && x<1000) {
                fill(i);
            } else if (x>1000 && x<1100) {
                fill(j);
            } else if (x>1100) {
                fill(to);
            }
            
            noStroke();
            //stroke(0,0,255);
        }
        
        // Spring
        if (season=="march" || season=="april" || season=="may") {
            let from = color(114,242,230);
            let to = color(0,255,94);
            let a = lerpColor(from,to,0.09);
            let b = lerpColor(from,to,0.18);
            let c = lerpColor(from,to,0.27);
            let d = lerpColor(from,to,0.36);
            let e = lerpColor(from,to,0.45);
            let f = lerpColor(from,to,0.54);
            let g = lerpColor(from,to,0.63);
            let h = lerpColor(from,to,0.72);
            let i = lerpColor(from,to,0.81);
            let j = lerpColor(from,to,0.90);
            if (x<100) {
                fill(from);
            } else if (x>100 && x<200) {
                fill(a);
            } else if (x>200 && x<300) {
                fill(b);
            } else if (x>300 && x<400) {
                fill(c);
            } else if (x>400 && x<500) {
                fill(d);
            } else if (x>500 && x<600) {
                fill(e);
            } else if (x>600 && x<700) {
                fill(f);
            } else if (x>700 && x<800) {
                fill(g);
            } else if (x>800 && x<900) {
                fill(h);
            } else if (x>900 && x<1000) {
                fill(i);
            } else if (x>1000 && x<1100) {
                fill(j);
            } else if (x>1100) {
                fill(to);
            }
            
            noStroke();
            //stroke(0,255,0);
        }
        
        // Summer
        if (season=="june" || season=="july" || season=="august") {
            let from = color(255,254,0);
            let to = color(220,119,0);
            let a = lerpColor(from,to,0.09);
            let b = lerpColor(from,to,0.18);
            let c = lerpColor(from,to,0.27);
            let d = lerpColor(from,to,0.36);
            let e = lerpColor(from,to,0.45);
            let f = lerpColor(from,to,0.54);
            let g = lerpColor(from,to,0.63);
            let h = lerpColor(from,to,0.72);
            let i = lerpColor(from,to,0.81);
            let j = lerpColor(from,to,0.90);
            if (x<100) {
                fill(from);
            } else if (x>100 && x<200) {
                fill(a);
            } else if (x>200 && x<300) {
                fill(b);
            } else if (x>300 && x<400) {
                fill(c);
            } else if (x>400 && x<500) {
                fill(d);
            } else if (x>500 && x<600) {
                fill(e);
            } else if (x>600 && x<700) {
                fill(f);
            } else if (x>700 && x<800) {
                fill(g);
            } else if (x>800 && x<900) {
                fill(h);
            } else if (x>900 && x<1000) {
                fill(i);
            } else if (x>1000 && x<1100) {
                fill(j);
            } else if (x>1100) {
                fill(to);
            }
            
            noStroke();
            //stroke(255,165,0);
        }
        
        circle(x, y, 30);
    }
}

// kalidoscope circles from the center
function circles(centerX, centerY) {
    let dist = nInput.value().length*20;
    let dia = dist-50;
    
    let far = dist+75;
    let cross = dia+50;
    
    console.log(dist);
    
    this.display = function() {
        fill(color(0,0,0,150));
        noStroke();
        // start from top then clockwise
        circle(centerX, centerY-dist, 50);
        circle(centerX+dia, centerY-dia, 50);
        circle(centerX+dist, centerY, 50);
        circle(centerX+dia, centerY+dia, 50);
        circle(centerX, centerY+dist, 50);
        circle(centerX-dia, centerY+dia, 50);
        circle(centerX-dist, centerY, 50);
        circle(centerX-dia, centerY-dia, 50);
        
        
        fill(color(0,0,0,100));
        // outside circles from top then clockwise
        circle(centerX, centerY-far, 40);
        circle(centerX+cross, centerY-cross, 40);
        circle(centerX+far, centerY, 40);
        circle(centerX+cross, centerY+cross, 40);
        circle(centerX, centerY+far, 40);
        circle(centerX-cross, centerY+cross, 40);
        circle(centerX-far, centerY, 40);
        circle(centerX-cross, centerY-cross, 40);
    }
}