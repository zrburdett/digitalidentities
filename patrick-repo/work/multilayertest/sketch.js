let input, input2, input3, input4, button, greeting, greeting2, greeting3, greeting4;
function setup(){
	createCanvas(1400,800, WEBGL);

	input = createInput();
	input.position(20, 65);

	greeting = createElement('h2', 'what is your name?');
	greeting.position(20, 5);

	input2 = createInput();
	input2.position(20, 200);

	button = createButton('submit');
	button.position((input2.x + input2.width)/3, 450);
	button.mousePressed(greet);

	greeting2 = createElement('h2', 'what month where you born in?');
	greeting2.position(20, 140);
	
	input3 = createInput();
	input3.position(20, 300);
	
	greeting3 = createElement('h2', 'What it you favorite color?');
	greeting3.position(20, 240);
	
	input4 = createInput();
	input4.position(20, 400);
	
	greeting4 = createElement('h2', 'do you prefer cats or dogs?');
	greeting4.position(20, 340);

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
		a=Math.floor(Math.random() * 601) - 600;
		nota=Math.abs(a);
		b=Math.floor(Math.random() * 301) - 300;
		notb=Math.abs(b);
		d=Math.floor(Math.random() * 4) + 1;
		e=Math.floor(Math.random()*360)+0;
		f=Math.floor(Math.random()*360)+0;
		arraya.push(a);
		arrayb.push(b);
		arrayd.push(d);
		arraye.push(e);
		arrayf.push(f);
		arraynota.push(nota);
		arraynotb.push(notb);
	}
	console.log(arraya);
	console.log(arraynota);
}
function greet(){
	var name=input.value();
	var color=input2.value();
	var animal=input4.value();
	var animalcolor=input3.value();
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
		c=Math.floor(Math.random() * 100) + 10;
		arrayc.push(c);
		console.log(c);
	}
	for(i=0; i<name.length; i++)
	{
		if(name.charAt(i)=='a')
		{
			var ab=-23;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='b')
		{
			var ab=-46;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='c')
		{
			var ab=-69;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='d')
		{
			var ab=-92;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='e')
		{
			var ab=-115;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='f')
		{
			var ab=-138;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='g')
		{
			var ab=-161;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='h')
		{
			var ab=-184;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='i')
		{
			var ab=-207;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='j')
		{
			var ab=-230;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='k')
		{
			var ab=-253;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='l')
		{
			var ab=-276;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='m')
		{
			var ab=-299;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='n')
		{
			var ab=-322;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='o')
		{
			var ab=-345;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='p')
		{
			var ab=-368;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='q')
		{
			var ab=-391;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='r')
		{
			var ab=-414;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='s')
		{
			var ab=-437;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='t')
		{
			var ab=-460;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='u')
		{
			var ab=-483;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='v')
		{
			var ab=-506;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='w')
		{
			var ab=-529;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='x')
		{
			var ab=-552;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='y')
		{
			var ab=-575;
			arraynametest.push(ab);
		}
		if(name.charAt(i)=='z')
		{
			var ab=-598;
			arraynametest.push(ab);
		}
	}
	for(i=0; i<name.length; i++)
	{
		if(name.charAt(i)=='a')
		{
			var ab=23;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='b')
		{
			var ab=46;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='c')
		{
			var ab=69;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='d')
		{
			var ab=92;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='e')
		{
			var ab=115;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='f')
		{
			var ab=138;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='g')
		{
			var ab=161;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='h')
		{
			var ab=184;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='i')
		{
			var ab=207;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='j')
		{
			var ab=230;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='k')
		{
			var ab=253;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='l')
		{
			var ab=276;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='m')
		{
			var ab=299;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='n')
		{
			var ab=322;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='o')
		{
			var ab=345;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='p')
		{
			var ab=368;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='q')
		{
			var ab=391;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='r')
		{
			var ab=414;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='s')
		{
			var ab=437;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='t')
		{
			var ab=460;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='u')
		{
			var ab=483;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='v')
		{
			var ab=506;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='w')
		{
			var ab=529;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='x')
		{
			var ab=552;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='y')
		{
			var ab=575;
			arraynotnametest.push(ab);
		}
		if(name.charAt(i)=='z')
		{
			var ab=598;
			arraynotnametest.push(ab);
		}
	}
	for(i=0; i<nametwo.length; i++)
	{
		if(nametwo.charAt(i)=='a')
		{
			var ab=-11;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='b')
		{
			var ab=-22;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='c')
		{
			var ab=-33;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='d')
		{
			var ab=-44;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='e')
		{
			var ab=-55;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='f')
		{
			var ab=-66;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='g')
		{
			var ab=-77;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='h')
		{
			var ab=-88;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='i')
		{
			var ab=-99;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='j')
		{
			var ab=-110;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='k')
		{
			var ab=-121;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='l')
		{
			var ab=-132;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='m')
		{
			var ab=-143;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='n')
		{
			var ab=-154;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='o')
		{
			var ab=-165;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='p')
		{
			var ab=-176;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='q')
		{
			var ab=-187;
			arraynametesttwo.push(ab);
		}
		if(name.charAt(i)=='r')
		{
			var ab=-198;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='s')
		{
			var ab=-209;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='t')
		{
			var ab=-220;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='u')
		{
			var ab=-231;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='v')
		{
			var ab=-242;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='w')
		{
			var ab=-253;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='x')
		{
			var ab=-264;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='y')
		{
			var ab=-275;
			arraynametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='z')
		{
			var ab=-286;
			arraynametesttwo.push(ab);
		}
	}
	for(i=0; i<nametwo.length; i++)
	{
		if(nametwo.charAt(i)=='a')
		{
			var ab=11;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='b')
		{
			var ab=22;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='c')
		{
			var ab=33;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='d')
		{
			var ab=44;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='e')
		{
			var ab=55;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='f')
		{
			var ab=66;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='g')
		{
			var ab=77;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='h')
		{
			var ab=88;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='i')
		{
			var ab=99;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='j')
		{
			var ab=110;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='k')
		{
			var ab=121;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='l')
		{
			var ab=132;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='m')
		{
			var ab=143;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='n')
		{
			var ab=154;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='o')
		{
			var ab=165;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='p')
		{
			var ab=176;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='q')
		{
			var ab=187;
			arraynotnametesttwo.push(ab);
		}
		if(name.charAt(i)=='r')
		{
			var ab=198;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='s')
		{
			var ab=209;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='t')
		{
			var ab=220;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='u')
		{
			var ab=231;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='v')
		{
			var ab=242;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='w')
		{
			var ab=253;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='x')
		{
			var ab=264;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='y')
		{
			var ab=275;
			arraynotnametesttwo.push(ab);
		}
		if(nametwo.charAt(i)=='z')
		{
			var ab=286;
			arraynotnametesttwo.push(ab);
		}
	}
	console.log(arraynametest);
	console.log(arraynametesttwo);
	if(animal=='cat'){
						push();
						ellipse(0, 0, 200, 200);
						ellipse(40, 0, 50, 50);
						ellipse(-40, 0, 50, 50);
						triangle(-50, -85, -110, -105, -90, -45);
						triangle(50, -85, 110, -105, 90, -45);
						triangle(20, 20, 0, 40, -20, 20);
						line(-70,40,-130,60);
						line(-70,40,-130,80);
						pop();
			}
	for(var b=0; b<arraynametest.length; b++)
	{
		if(color=='March'||color=='April'||color=='May')
		{
			gradientBackground('#EB3574', '#08A7FE');
		}
		else if(color=='June'||color=='July'||color=='August')
		{
			gradientBackground('#F73B2F', '#08A7FE');
		}
		else if(color=='September'||color=='October'||color=='November')
		{
			gradientBackground('#FFA000', '#08A7FE');
		}
		else if(color=='December'||color=='January'||color=='February')
		{
			gradientBackground('#72F2E6', '#00FF5E');
		}
	}
		for(var b=0; b<arraynametest.length; b++)
		{
			if(color=='March'||color=='April'||color=='May')
			{
				if(arrayd[b]==1)
				{
					fill('#EF1DE0');
				}
				else if(arrayd[b]==2)
				{
					fill('#FFA000');
				}
				else if(arrayd[b]==3)
				{
					fill('#72F2E6');
				}
				else if(arrayd[b]==4)
				{
					fill('#00FF5E');
				}
			}
			else if(color=='June'||color=='July'||color=='August')
			{
				if(arrayd[b]==1)
				{
					fill('#F72FE8');
				}
				else if(arrayd[b]==2)
				{
					fill('#FFA000');
				}
				else if(arrayd[b]==3)
				{
					fill('#FFFE00');
				}
				else if(arrayd[b]==4)
				{
					fill('#72F2E6');
				}
			}
			else if(color=='September'||color=='October'||color=='November')
			{
				if(arrayd[b]==1)
				{
					fill('#DC7700');
				}
				else if(arrayd[b]==2)
				{
					fill('#72F2E6');
				}
				else if(arrayd[b]==3)
				{
					fill('#00FF5E');
				}
				else if(arrayd[b]==4)
				{
					fill('#1000E3');
				}
			}
			else if(color=='December'||color=='January'||color=='February')
			{
				if(arrayd[b]==1)
				{
					fill('#FFFE00');
				}
				else if(arrayd[b]==2)
				{
					fill('#08A7FE');
				}
				else if(arrayd[b]==3)
				{
					fill('#1000E3');
				}
				else if(arrayd[b]==4)
				{
					fill('#7815A7');
				}
			}
			push();
			polygon(arraynametest[b], arraynametesttwo[b], arrayc[b], namecount);
			pop();
			push();
			polygon(arraynotnametest[b], arraynametesttwo[b], arrayc[b], namecount);
			pop();
			push();
			polygon(arraynametest[b], arraynotnametesttwo[b], arrayc[b], namecount);
			pop();
			push();
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
	function gradientBackground(from, to) {
		for(var i = -700; i < innerWidth; i++) {
			noStroke();
			fill(lerpColor(color(from), color(to), (i/innerHeight)));
			rectMode(CORNER);
			rect(i, -400, 1, innerHeight);
		}
	}