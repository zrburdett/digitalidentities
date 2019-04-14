
const sketch = p => {
  

  p.setup = function() {
    // Create the canvas
    p.createCanvas(window.innerWidth, window.innerHeight)

    p.symShapes("quelf");

  }

  p.draw = function() {

  }

  p.alexMockupPlaceholder = function() {
    let color1 = p.color(174, 21, 255)
    let color2 = p.color(255, 62, 250)
    let color3 = p.color(98, 249, 98)
    let color4 = p.color(255, 255, 100)
    p.scales(25, color1, color2)
    // circGrid(25,color1,color2);
    p.noFill()
    p.stroke(255)
    p.strokeWeight(2)
    p.ellipse((p.width / 11) * 4, (p.height / 5) * 2, 700)
    p.gradCircle(800, 300, 200, color3, color4)
    p.gradCircle(100, 50, 100, color1, color2)

    p.fill(255)
    p.ellipse((p.width / 4) * 3, 250, 150)
  }

  p.gradCircle = function(x, y, r, c1, c2) {
    //const gradCircleR = 200;
    const lineW = 1
    const lines = (r * 2) / lineW

    p.noStroke()
    for (var i = 0; i <= lines; i++) {
      let inter = p.map(i, 0, r, 0, 0.8)
      let c = p.lerpColor(c1, c2, inter)
      p.fill(c)
      const s = i * lineW + lineW
      const chordLength = Math.sqrt(2 * s * r - s * s) * 2
      p.rect(i * lineW + x, r - chordLength / 2 + y, lineW, chordLength)
    }
    p.stroke(255)
    p.noFill()
    p.ellipse(x + r + 20, y + r + 20, r * 2)
  }

  p.scales = function(r, c1, c2) {
    let y = 0
    let x = 0
    let isShifted = false
    while (y < p.height + r) {
      if (isShifted) {
        x = 0
      } else {
        x = r
      }
      while (x < p.width) {
        let inter = p.map(y, 0, p.height, 0, 1)
        let c = p.lerpColor(c1, c2, inter)
        p.fill(c)
        p.stroke(p.lerpColor(c2, c1, inter))
        p.ellipse(x, y, r * 2)
        x = x + r * 2
      }
      y = y + r
      isShifted = !isShifted
    }
  }

  p.circGrid = function(r, c1, c2) {
    let y = 0

    while (y < p.height + r) {
      let x = 0
      while (x < p.width) {
        p.inter = p.map(y, 0, p.height, 0, 1)
        let c = p.lerpColor(c1, c2, p.inter)
        p.fill(c)
        p.stroke(255)
        p.ellipse(x, y, r * 2)
        x = x + r * 2
      }
      y = y + r * 2
    }
  }

  p.createGradient = function(x, y, w, h, c1, c2) {
    for (let i = x; i <= x + w; i++) {
      let inter = p.map(i, x, x + w, 0, 1)
      let c = p.lerpColor(c1, c2, inter)
      p.stroke(c)
      p.line(i, y, i, y + h)
    }
  }

  p.gradientBackground = function(from, to) {
  for(var i = 0; i < window.innerWidth; i++) {
        p.noStroke();
        p.fill(p.lerpColor(p.color(from), p.color(to), (i/window.innerHeight)));
        p.rectMode(p.CORNER);
        p.rect(i, 0, 1, window.innerHeight);
    }
  }

  p.hexWithAlpha = function(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if(alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  p.drawSquare = function(xCoord, yCoord, size, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < size; i++) {
      p.noStroke();
      p.fill(p.lerpColor(p.color(from), p.color(to), (i/size)));
      p.rectMode(p.CORNER);
      p.rect(i-(size/2), 0-(size/2), 1, size);
    }

    // Draw axis
    p.stroke(255);
    p.line(0, 0, size, 0);
    p.stroke(0);
    p.line(0, 0, 0, size);
    p.fill(0);
    p.ellipse(0, 0, 5, 5);

    p.pop();
  }

  p.drawTriangle = function(xCoord, yCoord, lengthSideA, lengthSideB, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < lengthSideA; i++) {
        p.noStroke();
        p.rectMode(p.CORNER);
        p.fill(p.lerpColor(p.color(from), p.color(to), i/lengthSideA));
        p.rect(i, 0, 1, lengthSideB-(p.map(i, 0, lengthSideA, 0, lengthSideB)));
    }

    // Draw axis
    p.stroke(255);
    p.line(0, 0, lengthSideA, 0);
    p.stroke(0);
    p.line(0, 0, 0, lengthSideB);
    p.fill(0);
    p.ellipse(0, 0, 5, 5);

    p.pop();
  }

  p.drawEqualTriangle = function(xCoord, yCoord, sideLength, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    var lengthSideB = (sideLength*p.sqrt(3))/2;
    for(var i = 0; i < lengthSideB; i++) {
        p.noStroke();
        p.rectMode(p.CENTER);
        p.fill(p.lerpColor(p.color(from), p.color(to), i/lengthSideB));
        p.rect(i, 0, 1, (p.map(i, 0, lengthSideB, sideLength, 0)));
    }

    // Draw axis
    p.stroke(255);
    p.line(0, 0, sideLength, 0);
    p.stroke(0);
    p.line(0, 0, 0, sideLength);
    p.fill(0);
    p.ellipse(0, 0, 5, 5);

    p.pop();
  }

  p.drawNewTriangle = function(xCoord, yCoord, triangleLength, triangleHeight, rotationAngle, from, to) {
    p.push();
    p.translate(xCoord, yCoord);
    p.angleMode(p.DEGREES);
    p.rotate(rotationAngle);
    for(var i = 0; i < triangleLength; i++) {
        p.noStroke();
        p.rectMode(p.CORNER);
        p.fill(p.lerpColor(p.color(from), p.color(to), i/triangleLength));
        if(i < triangleLength/2) {
            p.rect(i-triangleLength/2, 0, 1, (p.map(i, 0, triangleLength, 0, triangleHeight*2)));
        } else {
            p.rect(i-triangleLength/2, 0, 1, (p.map(i, 0, triangleLength, triangleHeight*2, 0)));
        }
    }

    // Draw axis
    p.stroke(255);
    p.line(0, 0, triangleLength, 0);
    p.stroke(0);
    p.line(0, 0, 0, triangleHeight);
    p.fill(0);
    p.ellipse(0, 0, 5, 5);

    p.pop();
  }

  p.symShapes = function(name){
    let shapeSize = new Array();
    let leftShapesArray = new Array();
    let rightShapesArray = new Array();
    let topShapesArray = new Array();
    let bottomShapesArray = new Array();

    for(var g = 0; g < 10; g++) {
      let size = Math.floor(Math.random() * 100) + 10;
      shapeSize.push(size);
    }

    var ab;
    var ac;
    var ad;
    var af;
    
    for(var i = 0; i < name.length; i++) {
      ab = window.innerWidth/2;
      ac = ab/26;
      if(name.charAt(i)==='a') {
        leftShapesArray.push(ac);
      }
      if(name.charAt(i)==='b') {
        ad=ac*2;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='c') {
        ad=ac*3;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='d') {
        ad=ac*4;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='e') {
        ad=ac*5;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='f') {
        ad=ac*6;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='g') {
        ad=ac*7;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='h') {
        ad=ac*8;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='i') {
        ad=ac*9;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='j') {
        ad=ac*10;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='k') {
        ad=ac*11;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='l') {
        ad=ac*12;
        leftShapesArray.push(ab);
      }
      if(name.charAt(i)==='m') {
        ad=ac*13;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='n') {
        ad=ac*14;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='o') {
        ad=ac*15;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='p') {
        ad=ac*16;
        leftShapesArray.push(ab);
      }
      if(name.charAt(i)==='q') {
        ad=ac*17;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='r') {
        ad=ac*18;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='s') {
        ad=ac*19;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='t') {
        ad=ac*20;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='u') {
        ad=ac*21;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='v') {
        ad=ac*22;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='w') {
        ad=ac*23;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='x') {
        ad=ac*24;
        leftShapesArray.push(ad);
      }
      if(name.charAt(i)==='y') {
        ad=ac*25;
        leftShapesArray.push(ab);
      }
      if(name.charAt(i)==='z') {
        ad=ac*26;
        leftShapesArray.push(ab);
      }
    }
    for(i=0; i<name.length; i++) {
      ab = window.innerHeight/2;
      ac = ab/26;
      if(name.charAt(i)==='a') {
        topShapesArray.push(ac);
      }
      if(name.charAt(i)==='b') {
        ad=ac*2;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='c') {
        ad=ac*3;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='d') {
        ad=ac*4;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='e') {
        ad=ac*5;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='f') {
        ad=ac*6;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='g') {
        ad=ac*7;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='h') {
        ad=ac*8;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='i') {
        ad=ac*9;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='j') {
        ad=ac*10;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='k') {
        ad=ac*11;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='l') {
        ad=ac*12;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='m') {
        ad=ac*13;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='n') {
        ad=ac*14;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='o') {
        ad=ac*15;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='p') {
        ad=ac*16;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='q') {
        ad=ac*17;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='r') {
        ad=ac*18;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='s') {
        ad=ac*19;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='t') {
        ad=ac*20;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='u') {
        ad=ac*21;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='v') {
        ad=ac*22;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='w') {
        ad=ac*23;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='x') {
        ad=ac*24;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='y') {
        ad=ac*25;
        topShapesArray.push(ad);
      }
      if(name.charAt(i)==='z') {
        ad=ac*26;
        topShapesArray.push(ad);
      }
    }
    for(let i = 0; i < name.length; i++) {
      af = window.innerWidth/2;
      ab = af/26;
      if(name.charAt(i)==='a') {
        ac=window.innerWidth-ab;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='b') {
        ad=ab*2;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='c') {
        ad=ab*3;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='d') {
        ad=ab*4;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='e') {
        ad=ab*5;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='f') {
        ad=ab*6;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='g') {
        ad=ab*7;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='h') {
        ad=ab*8;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='i') {
        ad=ab*9;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='j') {
        ad=ab*10;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='k') {
        ad=ab*11;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='l') {
        ad=ab*12;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='m') {
        ad=ab*13;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ab);
      }
      if(name.charAt(i)==='n') {
        ad=ab*14;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='o') {
        ad=ab*15;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='p') {
        ad=ab*16;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='q') {
        ad=ab*17;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='r') {
        ad=ab*18;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='s') {
        ad=ab*19;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='t') {
        ad=ab*20;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='u') {
        ad=ab*21;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='v') {
        ad=ab*22;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='w') {
        ad=ab*23;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='x') {
        ad=ab*24;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='y') {
        ad=ab*25;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
      if(name.charAt(i)==='z') {
        ad=ab*26;
        ac=window.innerWidth-ad;
        rightShapesArray.push(ac);
      }
    }
    for(i=0; i<name.length; i++) {
      ab = window.innerHeight/2;
      ac = ab/26;
      if(name.charAt(i)==='a') {
        ad=window.innerHeight-ac;
        bottomShapesArray.push(ad);
      }
      if(name.charAt(i)==='b') {
        ad=ac*2;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='c') {
        ad=ac*3;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='d') {
        ad=ac*4;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='e') {
        ad=ac*5;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='f') {
        ad=ac*6;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='g') {
        ad=ac*7;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='h') {
        ad=ac*8;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='i') {
        ad=ac*9;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='j') {
        ad=ac*10;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='k') {
        ad=ac*11;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='l') {
        ad=ac*12;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='m') {
        ad=ac*13;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='n') {
        ad=ac*14;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='o') {
        ad=ac*15;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='p') {
        ad=ac*16;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='q') {
        ad=ac*17;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='r') {
        ad=ac*18;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='s') {
        ad=ac*19;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='t') {
        ad=ac*20;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='u') {
        ad=ac*21;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='v') {
        ad=ac*22;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='w') {
        ad=ac*23;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='x') {
        ad=ac*24;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='y') {
        ad=ac*25;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
      if(name.charAt(i)==='z') {
        ad=ac*26;
        af=window.innerHeight-ad;
        bottomShapesArray.push(af);
      }
    }
    for(var b = 0; b < leftShapesArray.length; b++) {
      p.fill(0,0,0);
      p.push();
      p.polygon(leftShapesArray[b], topShapesArray[b], shapeSize[b], name.length);
      p.polygon(rightShapesArray[b], topShapesArray[b], shapeSize[b], name.length);
      p.polygon(leftShapesArray[b], bottomShapesArray[b], shapeSize[b], name.length);
      p.polygon(rightShapesArray[b], bottomShapesArray[b], shapeSize[b], name.length);
      p.pop();
    }
  }

  p.polygon = function(x, y, radius, nPoints) {
    let angle = p.TWO_PI / nPoints;
    p.fill(0);
    p.stroke(0);
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  }
}

export default sketch
