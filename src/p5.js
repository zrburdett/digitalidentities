
const sketch = p => {
  

  p.setup = function() {
    // Create the canvas
    p.createCanvas(window.innerWidth, window.innerHeight);

    //p.gradientBackground(p.hexWithAlpha("#222222", 0.5), p.hexWithAlpha("#222222", 0.5));

    p.symShapes("richard");

    //p.circGrid(40, p.color(0), p.color(255));

    //p.gradCircle(200, 200, 50, p.color(0), p.color(255));

    //p.scales(40, p.color(0), p.color(255));

    //p.drawSquare(200, 200, 150, 45, 0, 255);

    //p.drawTriangle(200, 200, 150, 200, 0, 0, 255);

    //p.drawEqualTriangle(200, 200, 150, 0, 0, 255);

    //p.drawNewTriangle(300, 200, 400, 200, 0, 0, 255);

    //p.polygon(200, 200, 150, 6);
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
    let shapeSize = [];
    let leftShapesArray = [];
    let rightShapesArray = [];
    let topShapesArray = [];
    let bottomShapesArray = [];

    for(var g = 0; g < 10; g++) {
      let size = Math.floor(Math.random() * 100) + 10;
      shapeSize.push(size);
    }

    var halfWidth = window.innerWidth/2;
    var halfHeight = window.innerHeight/2;
    var gridWidth26 = halfWidth/26;
    var gridHeight26 = halfHeight/26;

    for(var i = 0; i < name.length; i++) {
      if(name.charAt(i)==='a') {
        leftShapesArray.push(gridWidth26);
        topShapesArray.push(gridHeight26);
        rightShapesArray.push(window.innerWidth-gridWidth26);
        bottomShapesArray.push(window.innerHeight-gridHeight26);
      }
      if(name.charAt(i)==='b') {
        leftShapesArray.push(gridWidth26*2);
        topShapesArray.push(gridHeight26*2);
        rightShapesArray.push(window.innerWidth-(gridWidth26*2));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*2));
      }
      if(name.charAt(i)==='c') {
        leftShapesArray.push(gridWidth26*3);
        topShapesArray.push(gridHeight26*3);
        rightShapesArray.push(window.innerWidth-(gridWidth26*3));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*3));
      }
      if(name.charAt(i)==='d') {
        leftShapesArray.push(gridWidth26*4);
        topShapesArray.push(gridHeight26*4);
        rightShapesArray.push(window.innerWidth-(gridWidth26*4));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*4));
      }
      if(name.charAt(i)==='e') {
        leftShapesArray.push(gridWidth26*5);
        topShapesArray.push(gridHeight26*5);
        rightShapesArray.push(window.innerWidth-(gridWidth26*5));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*5));
      }
      if(name.charAt(i)==='f') {
        leftShapesArray.push(gridWidth26*6);
        topShapesArray.push(gridHeight26*6);
        rightShapesArray.push(window.innerWidth-(gridWidth26*6));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*6));
      }
      if(name.charAt(i)==='g') {
        leftShapesArray.push(gridWidth26*7);
        topShapesArray.push(gridHeight26*7);
        rightShapesArray.push(window.innerWidth-(gridWidth26*7));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*7));
      }
      if(name.charAt(i)==='h') {
        leftShapesArray.push(gridWidth26*8);
        topShapesArray.push(gridHeight26*8);
        rightShapesArray.push(window.innerWidth-(gridWidth26*8));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*8));
      }
      if(name.charAt(i)==='i') {
        leftShapesArray.push(gridWidth26*9);
        topShapesArray.push(gridHeight26*9);
        rightShapesArray.push(window.innerWidth-(gridWidth26*9));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*9));
      }
      if(name.charAt(i)==='j') {
        leftShapesArray.push(gridWidth26*10);
        topShapesArray.push(gridHeight26*10);
        rightShapesArray.push(window.innerWidth-(gridWidth26*10));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*10));
      }
      if(name.charAt(i)==='k') {
        leftShapesArray.push(gridWidth26*11);
        topShapesArray.push(gridHeight26*11);
        rightShapesArray.push(window.innerWidth-(gridWidth26*11));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*11));
      }
      if(name.charAt(i)==='l') {
        leftShapesArray.push(gridWidth26*12);
        topShapesArray.push(gridHeight26*12);
        rightShapesArray.push(window.innerWidth-(gridWidth26*12));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*12));
      }
      if(name.charAt(i)==='m') {
        leftShapesArray.push(gridWidth26*13);
        topShapesArray.push(gridHeight26*13);
        rightShapesArray.push(window.innerWidth-(gridWidth26*13));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*13));
      }
      if(name.charAt(i)==='n') {
        leftShapesArray.push(gridWidth26*14);
        topShapesArray.push(gridHeight26*14);
        rightShapesArray.push(window.innerWidth-(gridWidth26*14));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*14));
      }
      if(name.charAt(i)==='o') {
        leftShapesArray.push(gridWidth26*15);
        topShapesArray.push(gridHeight26*15);
        rightShapesArray.push(window.innerWidth-(gridWidth26*15));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*15));
      }
      if(name.charAt(i)==='p') {
        leftShapesArray.push(gridWidth26*16);
        topShapesArray.push(gridHeight26*16);
        rightShapesArray.push(window.innerWidth-(gridWidth26*16));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*16));
      }
      if(name.charAt(i)==='q') {
        leftShapesArray.push(gridWidth26*17);
        topShapesArray.push(gridHeight26*17);
        rightShapesArray.push(window.innerWidth-(gridWidth26*17));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*17));
      }
      if(name.charAt(i)==='r') {
        leftShapesArray.push(gridWidth26*18);
        topShapesArray.push(gridHeight26*18);
        rightShapesArray.push(window.innerWidth-(gridWidth26*18));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*18));
      }
      if(name.charAt(i)==='s') {
        leftShapesArray.push(gridWidth26*19);
        topShapesArray.push(gridHeight26*19);
        rightShapesArray.push(window.innerWidth-(gridWidth26*19));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*19));
      }
      if(name.charAt(i)==='t') {
        leftShapesArray.push(gridWidth26*20);
        topShapesArray.push(gridHeight26*20);
        rightShapesArray.push(window.innerWidth-(gridWidth26*20));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*20));
      }
      if(name.charAt(i)==='u') {
        leftShapesArray.push(gridWidth26*21);
        topShapesArray.push(gridHeight26*21);
        rightShapesArray.push(window.innerWidth-(gridWidth26*21));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*21));
      }
      if(name.charAt(i)==='v') {
        leftShapesArray.push(gridWidth26*22);
        topShapesArray.push(gridHeight26*22);
        rightShapesArray.push(window.innerWidth-(gridWidth26*22));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*22));
      }
      if(name.charAt(i)==='w') {
        leftShapesArray.push(gridWidth26*23);
        topShapesArray.push(gridHeight26*23);
        rightShapesArray.push(window.innerWidth-(gridWidth26*23));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*23));
      }
      if(name.charAt(i)==='x') {
        leftShapesArray.push(gridWidth26*24);
        topShapesArray.push(gridHeight26*24);
        rightShapesArray.push(window.innerWidth-(gridWidth26*24));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*24));
      }
      if(name.charAt(i)==='y') {
        leftShapesArray.push(gridWidth26*25);
        topShapesArray.push(gridHeight26*25);
        rightShapesArray.push(window.innerWidth-(gridWidth26*25));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*25));
      }
      if(name.charAt(i)==='z') {
        leftShapesArray.push(gridWidth26*26);
        topShapesArray.push(gridHeight26*26);
        rightShapesArray.push(window.innerWidth-(gridWidth26*26));
        bottomShapesArray.push(window.innerHeight-(gridHeight26*26));
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
