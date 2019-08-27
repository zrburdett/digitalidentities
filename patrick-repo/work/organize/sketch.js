let input, inputtwo, inputthree, inputfour, button, buttontwo, buttonthree, buttonfour, greetingtwo, greeting, grettingthree, greetingfour;
function setup(){
	createCanvas(innerWidth,innerHeight);
	console.log(width);
	console.log(height);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);
	
  inputtwo = createInput();
  inputtwo.position(300, 65);

  buttontwo = createButton('submit');
  buttontwo.position(inputtwo.x + inputtwo.width, 65);
  buttontwo.mousePressed(backgroundshapes);

  greetingtwo = createElement('h2', 'Would you rather live in the city, country, or suburbs?');
  greetingtwo.position(300, 5);
	
  inputthree = createInput();
  inputthree.position(700, 65);

  buttonthree = createButton('submit');
  buttonthree.position(inputthree.x + inputthree.width, 65);
  buttonthree.mousePressed(drawnewbackground);

  greetingthree = createElement('h2', 'What season where you born?');
  greetingthree.position(700, 5);
	
  inputfour = createInput();
  inputfour.position(20, 200);

  buttonfour = createButton('submit');
  buttonfour.position(inputfour.x + inputfour.width, 200);
  buttonfour.mousePressed(organized);

  greetingfour = createElement('h2', 'Are you organized or are you messy?');
  greetingfour.position(20, 140);


  textAlign(CENTER);
  textSize(50);
	arraya= new Array();
	arrayb=new Array();
	arrayc=new Array();
	arrayd=new Array();
	arraye=new Array();
	arrayf=new Array();
	arraynota=new Array();
	arraynotb=new Array()
	arraynametest=new Array();
	arraynotnametest=new Array();
	arraynametesttwo=new Array();
	arraynotnametesttwo=new Array();
	for(var g=0; g<10; g++)
	{
	c=Math.floor(Math.random() * 100) + 10;
	d=Math.floor(Math.random() * 3) + 1;
	e=Math.floor(Math.random()*360)+0;
	f=Math.floor(Math.random()*360)+0;
	arrayc.push(c);
	arrayd.push(d);
	arraye.push(e);
	}
	console.log(arraya);
}
function greet(){
	var name=input.value();
	var namecount=name.length;
	var nametwo="";
	for (i=1; i<name.length; i++)
		{
			nametwo=nametwo+name.charAt(i);
		}
	nametwo=nametwo+name.charAt(0);
	console.log(nametwo);
	for(i=0; i<name.length; i++)
		{
			if(name.charAt(i)=='a')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					arraynametest.push(ac);
				}
			if(name.charAt(i)=='b')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*2;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='c')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*3;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='d')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*4;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='e')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*5;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='f')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*6;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='g')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*7;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='h')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*8;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='i')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*9;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='j')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*10;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='k')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*11;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='l')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*12;
					arraynametest.push(ab);
				}
			if(name.charAt(i)=='m')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*13;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='n')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*14;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='o')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*15;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='p')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*16;
					arraynametest.push(ab);
				}
			if(name.charAt(i)=='q')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*17;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='r')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*18;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='s')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*19;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='t')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*20;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='u')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*21;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='v')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*22;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='w')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*23;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='x')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*24;
					arraynametest.push(ad);
				}
			if(name.charAt(i)=='y')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*25;
					arraynametest.push(ab);
				}
			if(name.charAt(i)=='z')
				{
					var ab=innerWidth/2;
					var ac=ab/26;
					var ad=ac*26;
					arraynametest.push(ab);
				}
		}
	for(i=0; i<name.length; i++)
		{
			if(name.charAt(i)=='a')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					arraynametesttwo.push(ac);
				}
			if(name.charAt(i)=='b')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*2;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='c')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*3;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='d')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*4;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='e')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*5;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='f')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*6;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='g')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*7;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='h')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*8;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='i')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*9;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='j')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*10;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='k')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*11;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='l')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*12;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='m')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*13;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='n')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*14;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='o')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*15;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='p')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*16;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='q')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*17;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='r')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*18;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='s')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*19;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='t')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*20;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='u')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*21;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='v')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*22;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='w')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*23;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='x')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*24;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='y')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*25;
					arraynametesttwo.push(ad);
				}
			if(name.charAt(i)=='z')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*26;
					arraynametesttwo.push(ad);
				}
		}
	for(i=0; i<nametwo.length; i++)
		{
			if(name.charAt(i)=='a')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ac=innerWidth-ab;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='b')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*2;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='c')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*3;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='d')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*4;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='e')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*5;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='f')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*6;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='g')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*7;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='h')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*8;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='i')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*9;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='j')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*10;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='k')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*11;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='l')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*12;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='m')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*13;
					var ac=innerWidth-ad;
					arraynotnametest.push(ab);
				}
			if(name.charAt(i)=='n')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*14;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='o')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*15;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='p')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*16;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='q')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*17;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='r')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*18;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='s')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*19;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='t')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*20;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='u')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*21;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='v')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*22;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='w')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*23;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='x')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*24;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='y')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*25;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
			if(name.charAt(i)=='z')
				{
					var af=innerWidth/2
					var ab=af/26;
					var ad=ab*26;
					var ac=innerWidth-ad;
					arraynotnametest.push(ac);
				}
		}
	for(i=0; i<nametwo.length; i++)
		{
			if(name.charAt(i)=='a')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=innerHeight-ac;
					arraynotnametesttwo.push(ad);
				}
			if(name.charAt(i)=='b')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*2;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='c')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*3;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='d')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*4;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='e')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*5;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='f')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*6;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='g')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*7;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='h')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*8;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='i')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*9;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='j')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*10;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='k')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*11;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='l')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*12;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='m')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*13;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='n')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*14;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='o')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*15;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='p')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*16;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='q')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*17;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='r')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*18;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='s')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*19;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='t')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*20;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='u')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*21;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='v')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*22;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='w')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*23;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='x')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*24;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='y')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*25;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
			if(name.charAt(i)=='z')
				{
					var ab=innerHeight/2;
					var ac=ab/26;
					var ad=ac*26;
					var af=innerHeight-ad;
					arraynotnametesttwo.push(af);
				}
		}
	console.log(arraynametest);
	console.log(arraynametesttwo);
	console.log(arraynotnametest);
	console.log(arraynotnametesttwo);
	console.log(innerHeight);
	for(var b=0; b<arraynametest.length; b++)
		{
		fill(255,255,255);
		push();
			polygon(arraynametest[b], arraynametesttwo[b], arrayc[b], namecount);
			polygon(arraynotnametest[b], arraynametesttwo[b], arrayc[b], namecount);
			polygon(arraynametest[b], arraynotnametesttwo[b], arrayc[b], namecount);
			polygon(arraynotnametest[b], arraynotnametesttwo[b], arrayc[b], namecount);
			pop();
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
function drawbackground(from, to) {
		for(var i = 0; i < innerHeight; i++) {
			noStroke();
			fill(lerpColor(color(from), color(to), (i/innerHeight)));
			rectMode(CORNER);
			rect(0, i, innerWidth, innerHeight);
		}
	}
function drawnewbackground(){
	var season=inputthree.value();
	console.log(season);
	if(season=="spring"||season=="Spring")
		{
			drawbackground('#EF1DE0','#FFA000');
		}
	if(season=="summer"||season=="Summer")
		{
			drawbackground('#F72FE8','#FFA000');
		}
	if(season=="fall"||season=="Fall")
		{
			drawbackground('#DC7700','#72F2E6');
		}
	if(season=="winter"||season=="Winter")
		{
			drawbackground('#FFFE00','#08A7FE');
		}
}
function backgroundshapes(){
	var location=inputtwo.value();
	if(location=="city")
		{
			var shapes=4;
		}
	else if(location=="suburb")
		{
			var shapes=6;
		}
	else if(location=="country")
		{
			console.log(location);
			push();
			stroke(16, 0, 227,0.5);
			for(let a=0; a<=10;a++)
		{
			for(let b=0; b<=10;b++)
		{
			circle((innerWidth*(a/10)),(innerHeight*(b/10)),(innerHeight/15));
		}
		}
			pop();
		}
	if(location=="city" || location=="suburb")
		{
	push();
	stroke(16, 0, 227,0.5);
	for(let a=0; a<=10;a++)
		{
			for(let b=0; b<=10;b++)
		{
	backgroundshapescontrol((innerWidth*(a/10)),(innerHeight*(b/10)),(innerHeight/10),shapes);
	//backgroundshapescontrol((innerWidth/2),(innerHeight/2),(innerHeight/2),shapes);
	//backgroundshapescontrol((innerWidth*(3/4)),(innerHeight/2),(innerHeight/2),shapes);
		}
		}
	pop();
		}
}
function backgroundshapescontrol(x,y,radius,shapes){
	let angle=TWO_PI/shapes;
	beginShape();
	for (let c = 0; c < TWO_PI; c += angle) {
	let sx = x + cos(c) * radius;
    let sy = y + sin(c) * radius;
	vertex(sx, sy);
	}
	endShape(CLOSE);
}
function organized()
{
	var organize=inputfour.value();
	if(organize=="organized")
		{
			push();
			for(let a=0; a<=10;a++)
		{
			for(let b=0; b<=10;b++)
		{
			if(a%2==0)
				{
					if(b%2==0)
						{
			fill(0,0,0);
			circle((innerWidth*(a/10)),(innerHeight*(b/10)),(innerHeight/20));
						}
				}
		}
		pop();
		}
		}
	else if(organize=="messy")
		{
			push();
			for(let a=0; a<=10;a++)
		{
			for(let b=0; b<=10;b++)
		{
			if(a%2==0)
				{
					if(b%2==0)
						{
							var j=a-1;
							var k=b-1;
							var g=Math.floor(Math.random() * (innerWidth*(a/10))) + (innerWidth*(j/10));
							var h=Math.floor(Math.random() * (innerHeight*(b/10))) + (innerHeight*(k/10));
							var i=Math.floor(Math.random() * 10) + 3;
							fill(0,0,0);
							backgroundshapescontrol(g,h,(innerHeight/20),i)
						}
				}
		}
		}
		}
}