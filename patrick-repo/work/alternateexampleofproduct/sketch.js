let name, lastname, month, day, live, pet, lead, pizza, organized, intro, spontanious;

let nInput, lnIput, mInput, dInput,lInput, pInput, leaderInput, pizzaInput, oInput, iInput, sInput;

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

let seasonColor, dayColor, leadColor1, leadColor2, monthColor, monthColor2;

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
	
	lastname = createElement('h3', 'What is your last name');
    lastname.position(250, 5);
    lastname.style('color', 'white');
   
    lnInput = createInput();
    lnInput.position(250, 50);
    
    name = createElement('h3', 'what is your birth month');
    name.position(450, 5);
    name.style('color', 'white');
    
    mInput = createInput();
    mInput.position(450, 50);
    
    live = createElement('h3', 'city, country, or suburb');
    live.position(50, 105);
    live.style('color', 'white');
    
    lInput = createInput();
    lInput.position(50, 150);
    
    pizza = createElement('h3', 'On a scale of 1 to 5 how much do you like pizza');
    pizza.position(250, 105);
    pizza.style('color', 'white');
    
    pizzaInput = createInput();
    pizzaInput.position(250, 150);
	
	name=createElement('h3', 'morning person, night owl, neither');
	name.position(50, 205);
	name.style('color', 'white');
	
	dInput=createInput();
	dInput.position(50,250);
	
	pet=createElement('h3', 'cats or dogs');
	pet.position(450, 205);
	pet.style('color', 'white');
	
	pInput=createInput();
	pInput.position(450,250);
	
	pizza=createElement('h3', 'On a scale of 1 to 5 how organzed are you');
	pizza.position(50, 305);
	pizza.style('color', 'white');
	
	oInput=createInput();
	oInput.position(50,350);
	
	intro = createElement('h3', 'On a scale of 1 to 5 how much of an extrovert are you');
    intro.position(450, 305);
    intro.style('color', 'white');
   
    iInput = createInput();
    iInput.position(450, 350);
	
	spontanious = createElement('h3', 'On a scale of 1 to 5 how much of an spontanious are you');
    spontanious.position(50, 405);
    spontanious.style('color', 'white');
   
    sInput = createInput();
    sInput.position(50, 450);
    
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
        
        seasonColor = "#FEB313";
		if(season=="september")
			{
				monthColor="#FF3911";
				monthColor2="#EB2734";
			}
		else if(season=="october")
			{
				monthColor="#BE25F4";
				monthColor2="#760CD8";
			}
		else if(season=="november")
			{
				monthColor="#FF3911";
				monthColor2="#BE25F4";
			}
    }
    if (season=="december" || season=="january" || season=="february") {
        //background(hexWithAlpha('#745cfb'));
        
        seasonColor = "#2BE7D9";
		if(season=="december")
			{
				monthColor="#1CA7FC";
				monthColor2="#745CFB";
			}
		else if(season=="january")
			{
				monthColor="#166FFB";
				monthColor2="#2E34DA";
			}
		else if(season=="february")
			{
				monthColor="#1CA7FC";
				monthColor2="#166FFB";
			}
    }
    if (season=="march" || season=="april" || season=="may") {
        //background(hexWithAlpha('#ae15ff'));
        
        seasonColor = "#FFFB37";
		if(season=="march")
			{
				monthColor="#FFAC06";
				monthColor2="#FC5ACE";
			}
		else if(season=="april")
			{
				monthColor="#AE15FF";
				monthColor2="#62F962";
			}
		else if(season=="may")
			{
				monthColor="#FFAC06";
				monthColor2="#AE15FF";
			}
    }
    if (season=="june" || season=="july" || season=="august") {
        //background(hexWithAlpha('#ff4e4e'));
        
        seasonColor = "#4EF9C6";
		if(season=="june")
			{
				monthColor="#FBFF52";
				monthColor2="#FF6724";
			}
		else if(season=="july")
			{
				monthColor="#FF4E4E";
				monthColor2="#0098FF";
			}
		else if(season=="august")
			{
				monthColor="#FBFF52";
				monthColor2="#FF4E4E";
			}
    }
    proximity();
    scales();
	mood();
	nameshape();
	pizzacircle();
}
function bigSquare(){
	var cats=pInput.value();
	var introvalue=iInput.value();
	var s=sInput.value();
	var size;
	if(introvalue=="1")
		{
			size=100;
		}
	else if(introvalue=="2")
		{
			size=200;
		}
	else if(introvalue=="3")
		{
			size=300;
		}
	else if(introvalue=="4")
		{
			size=400;
		}
	else if(introvalue=="5")
		{
			size=500;
		}
	var xpoint;
	var centerwidth=width/2;
	var centerheight=height/2
	if(cats=="cats"){
		xpoint=200;
	}
	else if(cats=="dogs"){
		xpoint=400;
	}
	else if(cats=="both"){
		xpoint=300;
	}
	else if(cats=="neither"){
		xpoint=100;
	}
	var halfxapoint=xpoint/2;
	push();
	for(var i = 0; i < size; i++){
	if(s==5){
		fill(lerpColor(color(247, 47, 232,180),color(114, 0, 238,200),i/size));
		rectMode(CORNER);
	}
	else if(s==4){
		fill(lerpColor(color(196, 182, 252,160),color(16, 0, 227,180),i/size));
		rectMode(CORNER);
	}
	else if(s==3){
		fill(lerpColor(color(114, 242, 230,140),color(0, 255, 94,160),i/size));
		rectMode(CORNER);
	}
	else if(s==2){
		fill(lerpColor(color(255, 160, 0,120),color(255, 0, 0,120),i/size));
		rectMode(CORNER);
	}
	else if(s==1){
		fill(lerpColor(color(255, 254, 0,100),color(220, 119, 0,100),i/size));
		rectMode(CORNER);
	}
	}
	polygon(centerwidth-xpoint,centerheight,size,4);
	polygon(centerwidth-halfxapoint,centerheight,size,4);
	polygon(centerwidth+halfxapoint,centerheight,size,4);
	polygon(centerwidth+xpoint,centerheight,size,4);
	pop();
}
function pizzacircle(){
	var location=lInput.value();
	var pizzanumber=5;
	var messy=oInput.value();
	var day=dInput.value();
	var s=sInput.value();
	var start
	if(s=="5")
		{
			start=5;
		}
	else if(s=="4")
		{
			start=4;
		}
	else if(s=="3")
		{
			start=3;
		}
	else if(s=="2")
		{
			start=2;
		}
	else if(s=="1")
		{
			start=1;
		}
	var daycount;
	if(day=="morning person")
		{
			daycount=200;
		}
	else if(day=="night owl")
		{
			daycount=300
		}
	else if(day=="neither")
		{
			daycount=100;
		}
	let pizzadistance=pizzanumber*10;
	var points;
	var centerwidth=width/2;
	var centerheight=height/2;
	noFill();
	stroke(255, 255, 255);
	strokeWeight(5);
	var begin;
	var end;
	if(start<=pizzanumber)
		{
			begin=start;
			end=pizzanumber;
		}
	else if(pizzanumber<start)
		{
			begin=pizzanumber;
			end=start;
		}
	for(var i=begin; i<=end; i++)
		{
			if(location=="country")
				{
					if(messy=="5")
						{
				circle(centerwidth, centerheight-(i*pizzadistance), daycount); //top
				circle(centerwidth-(i*pizzadistance), centerheight, daycount); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), daycount); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, daycount); //left
						}
					else if(messy=="4")
						{
				circle(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i]); //top
				circle(centerwidth-(i*pizzadistance), centerheight, daycount); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), daycount); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, daycount); //left
						}
					else if(messy=="3")
						{
				circle(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i]); //top
				circle(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i]); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), daycount); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, daycount); //left
						}
					else if(messy=="2")
						{
				circle(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i]); //top
				circle(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i]); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i]); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, daycount); //left
						}
					else if(messy=="1")
						{
				circle(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i]); //top
				circle(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i]); //right
    			circle(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i]); //bottom
    			circle(centerwidth+(i*pizzadistance), centerheight, namerightTop[i]); //left
						}
				}
			else if(location=="city")
				{
				points=4;
					if(messy=="5")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), daycount, points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="4")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="3")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="2")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="1")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, namerightTop[i], points); //left
						}
				}
			else if(location=="suburb")
				{
				points=6;
					if(messy=="5")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), daycount, points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="4")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, daycount, points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="3")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), daycount, points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="2")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, daycount, points); //left
						}
					else if(messy=="1")
						{
				polygon(centerwidth, centerheight-(i*pizzadistance), nameleftBottom[i], points); //top
				polygon(centerwidth-(i*pizzadistance), centerheight, nameleftTop[i], points); //right
    			polygon(centerwidth, centerheight+(i*pizzadistance), namerightBottom[i], points); //bottom
    			polygon(centerwidth+(i*pizzadistance), centerheight, namerightTop[i], points); //left
						}
				}
		}
}
function nameshape(){
	var lastname=nInput.value();
	var lastnamecount=lastname.length;
	var lastnametwo;
	for (i=1; i<lastname.length; i++)
		{
			lastnametwo=lastnametwo+lastname.charAt(i);
		}
	lastnametwo=lastnametwo+lastname.charAt(0);
	var introvalue=iInput.value();
	if(introvalue=="1")
		{
			size=20;
		}
	else if(introvalue=="2")
		{
			size=40;
		}
	else if(introvalue=="3")
		{
			size=60;
		}
	else if(introvalue=="4")
		{
			size=80;
		}
	else if(introvalue=="5")
		{
			size=100;
		}
	var half;
	var heighthalf
	var fraction;
	var heightfraction;
	var fractionTimes;
	var heightfractionTimes;
	var rightside;
	var bottomside;
	for(i=0; i<lastname.length; i++)
		{
			if(lastname.charAt(i)=='a')
				{
					half=width/2;
					fraction=half/26;
					nameleftTop.push(fraction);
					rightside=width-fraction;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='a')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					namerightTop.push(heightfraction);
					bottomside=height-heightfraction;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='b')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*2;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='b')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*2;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='c')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*3;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='c')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*3;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='d')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*4;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='d')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*4
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='e')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*5;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='e')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*5;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='f')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*6;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='f')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*6;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='g')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*7;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='g')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*7;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='h')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*8;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='h')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*8;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='i')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*9;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='i')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*9;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='j')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*10;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='j')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*10;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='k')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*11;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='k')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*11;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='l')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*12;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='l')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*12;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='m')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*13;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='m')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*13;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='n')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*14;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='n')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*14;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='o')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*15;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='o')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*15;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='p')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*16;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='p')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*16;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='q')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*17;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='q')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*17;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='r')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*18;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='r')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*18;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='s')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*19;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='s')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*19;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='t')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*20;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='t')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*20;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='u')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*21;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='u')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*21;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='v')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*22;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='v')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*22;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='w')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*23;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='w')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*23;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='x')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*24;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='x')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*24;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='y')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*25;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='y')
				{
					heighthalf=height/2;
					heightfraction=heighthalf/26;
					heightfractionTimes=heightfraction*25;
					namerightTop.push(heightfractionTimes);
					bottomside=height-heightfractionTimes;
					nameleftBottom.push(bottomside);
				}
			if(lastname.charAt(i)=='z')
				{
					half=width/2;
					fraction=half/26;
					fractionTimes=fraction*26;
					nameleftTop.push(fractionTimes);
					rightside=width-fractionTimes;
					namerightBottom.push(rightside);
				}
			if(lastnametwo.charAt(i)=='z')
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
			noStroke();
			push();
			gradCircle(nameleftTop[j],namerightTop[j],size,monthColor,monthColor2);
			gradCircle(namerightBottom[j],namerightTop[j],size,monthColor,monthColor2);
			gradCircle(nameleftTop[j],nameleftBottom[j],size,monthColor,monthColor2);
			gradCircle(namerightBottom[j],nameleftBottom[j],size,monthColor,monthColor2);
			pop();
		}
}
gradCircle = function(x, y, r, c1, c2) {
  const lineW = 1;
  const lines = (r * 2) / lineW;

  noStroke();
  for (var i = 0; i <= lines; i++) {
    let inter = map(i, 0, r, 0, 0.8);
    let c = lerpColor(color(c1), color(c2), inter);
    fill(c);
    const s = i * lineW + lineW;
    const chordLength = Math.sqrt(2 * s * r - s * s) * 2;
  	push();
    rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength);
  	pop();
  }
};
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
    var name = lnInput.value();
	var namecont=name.length;
	let pizzaval=pizzaInput.value();
	let answer = pInput.value();
    var space;
    if (answer == "cats") {
        space = 100;
    } else if (answer == "dogs") {
        space = 25;
    } else if (answer == "both" || answer == "neither") {
        space = 50;
    }
	let proximity=pizzaval*10;
    console.log('scales');
	stroke(0);
    strokeWeight(1);
    fill(seasonColor);       
    push();
    for (var i = 0; i < width; i+=50) {
        for (var j = 0; j < height+100; j+=space) {
            if (j%100 == 0) {
               let k = i+50;
               polygon(k, j, proximity, namecont);
               }
               else {
                    polygon(i, j, proximity, namecont);
                }
            }
        }
        pop();
}

function polygon(x, y, r, p) {
    let angle = TWO_PI/p;
    beginShape();
    for (var i = 0; i < TWO_PI; i+=angle) {
        let sx = x + cos(i)*r;
        let sy = y + sin(i)*r;
        vertex(sx, sy);
    }
    endShape(CLOSE);
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