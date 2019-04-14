const sketch = p => {
  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight)
    // let color1 = p.color(174, 21, 255)
    // let color2 = p.color(255, 62, 250)
    // createGradient(0, 0, width, height, color1, color2)
  }

  p.draw = function() {
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
}

export default sketch
