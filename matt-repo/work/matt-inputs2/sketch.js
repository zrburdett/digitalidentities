let name, month, live, pets, org, day, type, you, piz;

let nInput, mInput, lInput, pInput, oInput, dInput, tInput, yInput, fInput;

let submit;

let winterP1 = '#2be7d9';
let winterP2 = '#2e34da';

let winterB1 = '#1ca7fc';
let winterB2 = '#166ffb';

let springY1 = '#fffb37';
let springY2 = '#ae15ff';

let springO1 = '#ffac06';
let springO2 = '#62f962';

let summerB1 = '#4ef9c6';
let summerB2 = '#ff4e4e';

let summerR1 = '#fbff52';
let summerR2 = '#0098ff';

let fallR1 = '#feb313';
let fallR2 = '#be25f4';

let fallP1 = '#ff3911';
let fallP2 = '#760cd8';


function setup() {
  createCanvas(1200, 800);
    
    background(0);
    
    name = createElement('h3', 'name');
    name.position(50, 5);
    name.style('color', 'white');
    
    nInput = createInput();
    nInput.position(50, 50);
    
    month = createElement('h3', 'birth month');
    month.position(250, 5);
    month.style('color', 'white');
   
    mInput = createInput();
    mInput.position(250, 50);
    
    live = createElement('h3', 'city, country, or suburbs');
    live.position(450, 5);
    live.style('color', 'white');
    
    lInput = createInput();
    lInput.position(450, 50);
    
    pets = createElement('h3', 'cats, dogs, both, or neither');
    pets.position(700, 5);
    pets.style('color', 'white');
    
    pInput = createInput();
    pInput.position(700, 50);
    
    type = createElement('h3', 'introvert or extrovert');
    type.position(950, 5);
    type.style('color', 'white');
    
    tInput = createInput();
    tInput.position(950, 50);
    
    org = createElement('h3', 'messy or organized');
    org.position(50, 100);
    org.style('color', 'white');
    
    oInput = createInput();
    oInput.position(50, 150);
    
    day = createElement('h3', 'morning person, night owl, or neither');
    day.position(250, 100);
    day.style('color', 'white');
    
    dInput = createInput();
    dInput.position(250, 150);
    
    you = createElement('h3', 'methodical or spontaneous');
    you.position(600, 100);
    you.style('color', 'white');
    
    yInput = createInput();
    yInput.position(600, 150);
    
    piz = createElement('h3', 'pizza');
    piz.position(850, 100);
    piz.style('color', 'white');
    
    fInput = createInput();
    fInput.position(850, 150);
    
    submit = createButton('submit');
    submit.position(50, 200);
    submit.mousePressed(show);
}

function draw() {
    
}

// shows results when 'submit' is pressed
function show() {
    console.log('submit');
    
    let season = mInput.value();
    
    if (season=="september" || season=="october" || season=="november") {
        background(hexWithAlpha('#ff3911'));
    }
    if (season=="december" || season=="january" || season=="february") {
        background(hexWithAlpha('#745cfb'));
    }
    if (season=="march" || season=="april" || season=="may") {
        background(hexWithAlpha('#ae15ff'));
    }
    if (season=="june" || season=="july" || season=="august") {
        background(hexWithAlpha('#ff4e4e'));
    }
    
    mood();
    
    let vibe = yInput.value();
    if (vibe == "methodical") {
        bgSquares((width/2), (height/2));
    } 
    if (vibe == "spontaneous") {
        bgCircles((width/2)-300, (height/2)-300);
    }
    
    shapes((width/2), (height/2));
    
    let livin = lInput.value();
    if (livin == "city") {
        squareRow((width/2), (height/2));
    }
    if (livin == "country") {
        circleRow((width/2), (height/2));
    }
    if (livin == "suburbs") {
        duoRow((width/2), (height/2));
    }
    
    weird();
}

function weird() {
    let lines = int(fInput.value());
    //console.log(lines);
    
    let color = dInput.value();
    
    //console.log(w);
    noFill();
    if (color == "night owl") {
        stroke(255);
    } else {
        stroke(0);
    }
    
    if (lines == 1) {
        line(width-100, 0, width, 100);
        
        line(0, height-100, 100, height);
    } else if (lines == 2) {
        line(width-100, 0, width, 100);
        line(width-125, 0, width, 125);
        
        line(0, height-100, 100, height);
        line(0, height-125, 125, height);
    } else if (lines == 3) {
        line(width-100, 0, width, 100);
        line(width-125, 0, width, 125);
        line(width-150, 0, width, 150);
        
        line(0, height-100, 100, height);
        line(0, height-125, 125, height);
        line(0, height-150, 150, height);
    } else if (lines == 4) {
        line(width-100, 0, width, 100);
        line(width-125, 0, width, 125);
        line(width-150, 0, width, 150);
        line(width-175, 0, width, 175);
        
        line(0, height-100, 100, height);
        line(0, height-125, 125, height);
        line(0, height-150, 150, height);
        line(0, height-175, 175, height);
    } else if (lines == 5) {
        line(width-100, 0, width, 100);
        line(width-125, 0, width, 125);
        line(width-150, 0, width, 150);
        line(width-175, 0, width, 175);
        line(width-200, 0, width, 200);
        
        line(0, height-100, 100, height);
        line(0, height-125, 125, height);
        line(0, height-150, 150, height);
        line(0, height-175, 175, height);
        line(0, height-200, 200, height);
    }
}

function squareRow(centerX, centerY) {
    let season = mInput.value();
    
    let scale = int(oInput.value());
    
    let pos = map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare(centerX+175, centerY+pos, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-175, centerY-pos, 50, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX+100, centerY-pos, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-100, centerY+pos, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare(centerX+175, centerY+pos, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-175, centerY-pos, 50, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX+100, centerY-pos, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-100, centerY+pos, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare(centerX+175, centerY+pos, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-175, centerY-pos, 50, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX+100, centerY-pos, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-100, centerY+pos, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare(centerX+175, centerY+pos, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-175, centerY-pos, 50, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX+100, centerY-pos, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-100, centerY+pos, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        drawSquare(centerX, centerY, 150, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
    }
}

function circleRow(centerX, centerY) {
    let season = mInput.value();
    
    let scale = int(oInput.value());
    
    let pos = map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {    
        gradCircle(centerX-175, (centerY-25)+pos, 25, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        gradCircle(centerX+125, (centerY-25)-pos, 25, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        
        gradCircle(centerX-150, (centerY-50)-pos, 50, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        gradCircle(centerX+50, (centerY-50)+pos, 50, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        gradCircle(centerX-175, (centerY-25)+pos, 25, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        gradCircle(centerX+125, (centerY-25)-pos, 25, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        
        gradCircle(centerX-150, (centerY-50)-pos, 50, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        gradCircle(centerX+50, (centerY-50)+pos, 50, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        gradCircle(centerX-175, (centerY-25)+pos, 25, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        gradCircle(centerX+125, (centerY-25)-pos, 25, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        
        gradCircle(centerX-150, (centerY-50)-pos, 50, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        gradCircle(centerX+50, (centerY-50)+pos, 50, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        gradCircle(centerX-175, (centerY-25)+pos, 25, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        gradCircle(centerX+125, (centerY-25)-pos, 25, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        
        gradCircle(centerX-150, (centerY-50)-pos, 50, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        gradCircle(centerX+50, (centerY-50)+pos, 50, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
    }
}

function duoRow(centerX, centerY) {
    let season = mInput.value();
    
    let scale = int(oInput.value());
    
    let pos = map(scale, 1, 5, 0, 200);
    
    
    if (season=="september" || season=="october" || season=="november") {    
        gradCircle(centerX-200, (centerY-25)+pos, 25, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        gradCircle(centerX+150, (centerY-25)-pos, 25, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
        
        drawSquare(centerX+100, centerY+pos, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        drawSquare(centerX-100, centerY-pos, 100, 45, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 1));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(fallR1, 1), hexWithAlpha(fallR2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        gradCircle(centerX-200, (centerY-25)+pos, 25, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        gradCircle(centerX+150, (centerY-25)-pos, 25, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
        
        drawSquare(centerX+100, centerY+pos, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        drawSquare(centerX-100, centerY-pos, 100, 45, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 1));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(winterP1, 1), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        gradCircle(centerX-200, (centerY-25)+pos, 25, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        gradCircle(centerX+150, (centerY-25)-pos, 25, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
        
        drawSquare(centerX+100, centerY+pos, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        drawSquare(centerX-100, centerY-pos, 100, 45, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 1));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(springY1, 1), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        gradCircle(centerX-200, (centerY-25)+pos, 25, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        gradCircle(centerX+150, (centerY-25)-pos, 25, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
        
        drawSquare(centerX+100, centerY+pos, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        drawSquare(centerX-100, centerY-pos, 100, 45, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 1));
        
        gradCircle(centerX-75, centerY-75, 75, hexWithAlpha(summerR1, 1), hexWithAlpha(summerB2, 0.7));
    }
}

function shapes(centerX, centerY) {
    let name = nInput.value().length;
    
    let life = lInput.value();
    
    let prox = pInput.value();
    let dist;
    if (prox == "cats") {
        dist = 100;
    } else if (prox == "dogs") {
        dist = -100;
    } else if (prox == "both" || prox == "neither") {
        dist = 0;
    }
    
    let person = int(tInput.value());
    let perSq = map(person, 1, 5, 25, 400);
    
    let perCr = map(person, 1, 5, 25, 200);
    
    let square1 = perSq;
    let square2 = perSq+100;
    let square3 = square2+100;
    
    let circle1 = perCr;
    let circle2 = perCr+50;
    let circle3 = circle2+50;
    
    stroke(255);
    noFill();
    if (name%2 == 0) {
        console.log('even');
        
        if (life == "country") {
            circle(centerX, centerY-(circle1+dist), circle1); //top
            circle(centerX+(circle1+dist), centerY, circle1); //right
            circle(centerX, centerY+(circle1+dist), circle1); //bottom
            circle(centerX-(circle1+dist), centerY, circle1); //left

            circle(centerX, centerY-(circle2+dist), circle2); //top
            circle(centerX, centerY+(circle2+dist), circle2); //bottom

            circle(centerX, centerY-(circle3+dist), circle3); //top
            circle(centerX, centerY+(circle3+dist), circle3); //bottom
            circle(centerX-(circle3+dist), centerY, circle3); //left
            circle(centerX+(circle3+dist), centerY, circle3); //right
            
            
        } else if (life == "city") {            
            rect(centerX-(square1/2), centerY-(square1+dist), square1, square1); //top
            rect(centerX+dist, centerY-(square1/2), square1, square1); //right
            rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
            rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
            
            rect(centerX-(square2/2), centerY-(square2+dist), square2, square2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3/2), centerY-(square3+dist), square3, square3); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
            
            
        } else if (life == "suburbs") {
            circle(centerX, centerY-(circle1+dist), circle1); //top
            circle(centerX+(circle1+dist), centerY, circle1); //right
            circle(centerX, centerY+(circle1+dist), circle1); //bottom
            circle(centerX-(circle1+dist), centerY, circle1); //left

            rect(centerX-(square2/2), centerY-(square2+dist), square2, square2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3/2), centerY-(square3+dist), square3, square3); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
        }
        
    } else {
        console.log('odd');
        
        let square1_2 = square1/2;
        let square2_2 = square2/2;
        let square3_2 = square3/2;
        
        if (life == "country") {
            circle(centerX, centerY-((circle1/2)+dist), circle1/2); //top
            circle(centerX+(circle1+dist), centerY, circle1); //right
            circle(centerX, centerY+(circle1+dist), circle1); //bottom
            circle(centerX-(circle1+dist), centerY, circle1); //left

            circle(centerX, centerY-((circle1-25)+dist), circle1-25); //top
            circle(centerX, centerY+(circle2+dist), circle2); //bottom

            circle(centerX, centerY-((circle1+25)+dist), (circle1+25)); //top
            circle(centerX, centerY+(circle3+dist), circle3); //bottom
            circle(centerX-(circle3+dist), centerY, circle3); //left
            circle(centerX+(circle3+dist), centerY, circle3); //right
            
        } else if (life == "city") {            
            rect(centerX-(square1_2/2), centerY-(square1_2+dist), square1_2, square1_2); //top
            rect(centerX+dist, centerY-(square1/2), square1, square1); //right
            rect(centerX-(square1/2), centerY+dist, square1, square1); //bottom
            rect(centerX-(square1+dist), centerY-(square1/2), square1, square1); //left
            
            rect(centerX-(square2_2/2), centerY-(square2_2+dist), square2_2, square2_2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3_2/2), centerY-(square3_2+dist), square3_2, square3_2); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
            
        } else if (life == "suburbs") {
            circle(centerX, centerY-((circle1/2)+dist), circle1/2); //top
            circle(centerX+(circle1+dist), centerY, circle1); //right
            circle(centerX, centerY+(circle1+dist), circle1); //bottom
            circle(centerX-(circle1+dist), centerY, circle1); //left

            rect(centerX-(square2_2/2), centerY-(square2_2+dist), square2_2, square2_2); //top
            rect(centerX-(square2/2), centerY+dist, square2, square2); //bottom
            
            rect(centerX-(square3_2/2), centerY-(square3_2+dist), square3_2, square3_2); //top
            rect(centerX+dist, centerY-(square3/2), square3, square3); //right
            rect(centerX-(square3/2), centerY+dist, square3, square3); //bottom
            rect(centerX-(square3+dist), centerY-(square3/2), square3, square3); //left
        }
    }
}

function bgSquares(centerX, centerY) {
    let season = mInput.value();
    
    let scale = int(oInput.value());
    
    let pos = map(scale, 1, 5, 0, 300);
    
    if (season=="september" || season=="october" || season=="november") {
        drawSquare(centerX-400, centerY+pos, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare(centerX-200, centerY-pos, 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        
        drawSquare(centerX+400, centerY-pos, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        drawSquare(centerX+200, centerY+pos, 600, 45, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        drawSquare(centerX, centerY, 600, 45, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {
        drawSquare(centerX-400, centerY+pos, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare(centerX-200, centerY-pos, 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        
        drawSquare(centerX+400, centerY-pos, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        drawSquare(centerX+200, centerY+pos, 600, 45, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        drawSquare(centerX, centerY, 600, 45, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {
        drawSquare(centerX-400, centerY+pos, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare(centerX-200, centerY-pos, 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        
        drawSquare(centerX+400, centerY-pos, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        drawSquare(centerX+200, centerY+pos, 600, 45, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        drawSquare(centerX, centerY, 600, 45, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {
        drawSquare(centerX-400, centerY+pos, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare(centerX-200, centerY-pos, 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        
        drawSquare(centerX+400, centerY-pos, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        drawSquare(centerX+200, centerY+pos, 600, 45, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        drawSquare(centerX, centerY, 600, 45, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
    }
}

function bgCircles(centerX, centerY) {
    let season = mInput.value();
    
    let scale = int(oInput.value());
    
    let pos = map(scale, 1, 5, 0, 300);
    
    if (season=="september" || season=="october" || season=="november") {        
        gradCircle(centerX-400, centerY+pos, 300, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        gradCircle(centerX-200, centerY-pos, 300, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        
        gradCircle(centerX+400, centerY-pos, 300, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
        gradCircle(centerX+200, centerY+pos, 300, hexWithAlpha(fallR1, 0.7), hexWithAlpha(fallR2, 0.7));
        gradCircle(centerX, centerY, 300, hexWithAlpha(fallP1, 0.7), hexWithAlpha(fallP2, 0.7));
    }
    
    if (season=="december" || season=="january" || season=="february") {        
        gradCircle(centerX-400, centerY+pos, 300, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        gradCircle(centerX-200, centerY-pos, 300, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        
        gradCircle(centerX+400, centerY-pos, 300, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
        gradCircle(centerX+200, centerY+pos, 300, hexWithAlpha(winterB1, 0.7), hexWithAlpha(winterB2, 0.7));
        gradCircle(centerX, centerY, 300, hexWithAlpha(winterP1, 0.7), hexWithAlpha(winterP2, 0.7));
    }
    
    if (season=="march" || season=="april" || season=="may") {        
        gradCircle(centerX-400, centerY+pos, 300, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        gradCircle(centerX-200, centerY-pos, 300, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        
        gradCircle(centerX+400, centerY-pos, 300, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
        gradCircle(centerX+200, centerY+pos, 300, hexWithAlpha(springO1, 0.7), hexWithAlpha(springO2, 0.7));
        gradCircle(centerX, centerY, 300, hexWithAlpha(springY1, 0.7), hexWithAlpha(springY2, 0.7));
    }
    
    if (season=="june" || season=="july" || season=="august") {        
        gradCircle(centerX-400, centerY+pos, 300, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        gradCircle(centerX-200, centerY-pos, 300, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        
        gradCircle(centerX+400, centerY-pos, 300, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
        gradCircle(centerX+200, centerY+pos, 300, hexWithAlpha(summerB1, 0.7), hexWithAlpha(summerB2, 0.7));
        gradCircle(centerX, centerY, 300, hexWithAlpha(summerR1, 0.7), hexWithAlpha(summerR2, 0.7));
    }
}

function mood() {
    let time = dInput.value();
    
    if (time == "morning person") {
        background(255);
    } 
    if (time == "night owl") {
        background(0);
    }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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

function gradCircle(x, y, r, c1, c2) {
   let lineW = 1;
   let lines = (r * 2) / lineW;

   noStroke();
   for (var i = 0; i <= lines; i++) {
     let inter = map(i, 0, r, 0, 0.8);
     let c = lerpColor(color(c1), color(c2), inter);
     fill(c);
     const s = i * lineW + lineW;
     const chordLength = Math.sqrt(2 * s * r - s * s) * 2;
     rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength);
   }
   //stroke(255);
   noFill();
   ellipse(x + r + 20, y + r + 20, r * 2);
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