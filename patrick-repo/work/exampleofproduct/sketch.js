let name, month, day, live, pet, lead, pizza, organized;

let nInput, mInput, dInput,lInput, pInput, leaderInput, pizzaInput, oInput;

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

let seasonColor, dayColor, leadColor1, leadColor2;

let space;

nameleftTop=new Array();
nameleftBottom=new Array();
namerightTop=new Array();
namerightBottom=new Array();

let bg = [];

function setup() {
  createCanvas(1200, 800);
    
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
    
    live = createElement('h3', 'city, country, or suburb');
    live.position(50, 105);
    live.style('color', 'white');
    
    lInput = createInput();
    lInput.position(50, 150);
    
    pet = createElement('h3', 'cats or dogs');
    pet.position(250, 105);
    pet.style('color', 'white');
    
    pInput = createInput();
    pInput.position(250, 150);
	
	lead=createElement('h3', 'leader or follower');
	lead.position(450, 105);
	lead.style('color', 'white');
	
	leaderInput=createInput();
	leaderInput.position(450,150);
	
	pizza=createElement('h3', 'On a scale of 1 to 5 how much do you like pizza');
	pizza.position(50, 205);
	pizza.style('color', 'white');
	
	pizzaInput=createInput();
	pizzaInput.position(50,250);
	
	pizza=createElement('h3', 'Are you organized or messy');
	pizza.position(450, 205);
	pizza.style('color', 'white');
	
	oInput=createInput();
	oInput.position(450,250);
    
    submit = createButton('submit');
    submit.position(650, 250);
    submit.mousePressed(show);
}

function draw() {
    
}

// shows results when 'submit' is pressed
function show() {
    console.log('submit');
    
    let season = mInput.value();
    
    let moodtime = dInput.value();
    
    if (season=="september" || season=="october" || season=="november") {
        //background(hexWithAlpha('#ff3911'));
        
        seasonColor = "#DC7700";
    }
    if (season=="december" || season=="january" || season=="february") {
        //background(hexWithAlpha('#745cfb'));
        
        seasonColor = "#FFFE00";
    }
    if (season=="march" || season=="april" || season=="may") {
        //background(hexWithAlpha('#ae15ff'));
        
        seasonColor = "#EF1DE0";
    }
    if (season=="june" || season=="july" || season=="august") {
        //background(hexWithAlpha('#ff4e4e'));
        
        seasonColor = "#72F2E6";
    }
    proximity();
    scales();
	leader();
	mood();
	nameshape();
	pizzacircle();
}
function pizzacircle(){
	var pizzanumber=pizzaInput.value();
	var organized=oInput.value();
	let pizzadistance=pizzanumber*10;
	var centerwidth=width/2;
	var centerheight=height/2;
	noFill();
	stroke(255, 255, 255);
	for(var i=0; i<=pizzanumber; i++)
		{
			if(organized=="organized")
				{
				circle(centerwidth, centerheight-(i*pizzadistance), 100); //top
				circle(centerwidth-(i*pizzadistance), centerheight, 100); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), 100); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, 100); //left
				circle(centerwidth+(i*pizzadistance), centerheight+(i*pizzadistance), 100); //left-bottom
				circle(centerwidth+(i*pizzadistance), centerheight-(i*pizzadistance), 100); //left-top
				circle(centerwidth-(i*pizzadistance), centerheight+(i*pizzadistance), 100); //right-bottom
				circle(centerwidth-(i*pizzadistance), centerheight-(i*pizzadistance), 100); //right-top
				}
			else if(organized=="messy")
				{
				console.log(nameleftTop[i]);
				circle(centerwidth, centerheight-(i*pizzadistance), nameleftTop[i]); //top
				circle(centerwidth-(i*pizzadistance), centerheight, nameleftBottom[i]); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), namerightTop[i]); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, namerightBottom[i]); //left
				circle(centerwidth+(i*pizzadistance), centerheight+(i*pizzadistance), nameleftTop[i]); //left-bottom
				circle(centerwidth+(i*pizzadistance), centerheight-(i*pizzadistance), nameleftBottom[i]); //left-top
				circle(centerwidth-(i*pizzadistance), centerheight+(i*pizzadistance), namerightTop[i]); //right-bottom
				circle(centerwidth-(i*pizzadistance), centerheight-(i*pizzadistance), namerightBottom[i]); //right-top
				}
		}
}
function leader(){
	let lead=leaderInput.value();
	if(lead=="follower"){
		leadColor1="#72F2E6";
		leadColor2="#C4B6FC";
	} else if(lead=="leader"){
		leadColor1="#7200EE";
		leadColor2="#1000E3";
	}
}
function nameshape(){
	var name=nInput.value();
	var namecount=name.length;
	var nametwo;
	for (i=1; i<name.length; i++)
		{
			nametwo=nametwo+name.charAt(i);
		}
	nametwo=nametwo+name.charAt(0);
	var half;
	var heighthalf
	var fraction;
	var heightfraction;
	var fractionTimes;
	var heightfractionTimes;
	var rightside;
	var bottomside;
	for(i=0; i<name.length; i++)
		{
			if(name.charAt(i)=='a')
				{
					half=width/2;
					fraction=half/26;
					nameleftTop.push(fraction);
					rightside=width-fraction;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='a')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					namerightTop.push(heightfraction);
					bottomside=height-heightfraction;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='b')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*2;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='b')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*2;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='c')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*3;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='c')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*3;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='d')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*4;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='d')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*4
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='e')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*5;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='e')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*5;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='f')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*6;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='f')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*6;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='g')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*7;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='g')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*7;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='h')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*8;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='h')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*8;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='i')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*9;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='i')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*9;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='j')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*10;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='j')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*10;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='k')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*11;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='k')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*11;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='l')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*12;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='l')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*12;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='m')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*13;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='m')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*13;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='n')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*14;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='n')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*14;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='o')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*15;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='o')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*15;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='p')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*16;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='p')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*16;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='q')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*17;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='q')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*17;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='r')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*18;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='r')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*18;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='s')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*19;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='s')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*19;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='t')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*20;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='t')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*20;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='u')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*21;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='u')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*21;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='v')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*22;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='v')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*22;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='w')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*23;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='w')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*23;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='x')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*24;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='x')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*24;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='y')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*25;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='y')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*25;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(name.charAt(i)=='z')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*26;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(nametwo.charAt(i)=='z')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*26;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
		}
	for(var j=0; j<=nameleftTop.length; j++)
		{
			if(j%2==0)
				{
					fill(leadColor2);
				}
			else
			    {
					fill(leadColor1);
			    }
			push();
			polygon(nameleftTop[j],namerightTop[j], dayColor, namecount);
			polygon(namerightBottom[j],namerightTop[j], dayColor, namecount);
			polygon(nameleftTop[j],nameleftBottom[j], dayColor, namecount);
			polygon(namerightBottom[j],nameleftBottom[j], dayColor, namecount);
			pop();
		}
}
function mood() {
    let time = dInput.value();
    
    if (time == "morning person") {
        dayColor = 100;
    } else if (time == "night owl") {
        dayColor = 50;
    }
}

function proximity() {
    let answer = pInput.value();
    
    if (answer == "cats") {
        space = 100;
    } else if (answer == "dogs") {
        space = 25;
    } else if (answer == "both" || answer == "neither") {
        space = 50;
    }
}

function scales() {
    var shapes = lInput.value();
    let point;
    console.log('scales');
    
    stroke(0);
    fill(seasonColor);
    if (shapes == 'city') {
        point = 4;        
        push();
        for (var i = 0; i < width; i+=50) {
            for (var j = 0; j < height+100; j+=space) {
                if (j%100 == 0) {
                    let k = i+50;
                    polygon(k, j, 50, point);
                }
                else {
                    polygon(i, j, 50, point);
                }
            }
        }
        pop();
    }  
    else if (shapes == 'suburb') {
        point = 6;
        
        push();
        for (var i = 0; i < width; i+=50) {
            for (var j = 0; j < height+100; j+=space){
                if (j%100 == 0) {
                    let k = i+50;
                    polygon(k, j, 50, point);
                }
                else {
                    polygon(i, j, 50, point);
                }
            }
        }
        pop();
    } 
    else if (shapes == 'country') {
        push();
        console.log('country');
        for (var i = 0; i < width; i+=100) {
            for (var j = 0; j < height+100; j+=space) {
                if (j%100 == 0) {
                    circle(i+dayColor, j, 50);
                } else {
                    circle(i, j, 50);
                }
            }
        }
        pop();
    }
}

function polygon(x, y, r, p) {
    let angle = TWO_PI/p;
    beginShape();
    for (var i = 0; i < TWO_PI; i+=angle) {
        let sx = x + cos(i)*r;
        let sy = y + sin(i)*r;
        vertex(sx, sy);
    }
    endShape();
}

function circleGrid(x, y) {
    stroke(255);
    noFill();
    circle(x, y, 50);
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