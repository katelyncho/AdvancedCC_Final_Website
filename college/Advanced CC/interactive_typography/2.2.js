let MyriadPro;
let sample = 0.2;
let textEffect;

function preload() {
  MyriadPro = loadFont("../../../images/MyriadPro.otf");
}

//display text 'nope'
function setup() {
  createCanvas(600, 600).parent("2.2");
  pointArray = new pointArray("nope", 130, 320, 150, sample);
}

function draw() {
  background(0);
  pointArray.display();
}

class pointArray {
  constructor(text, x, y, size, sampleFactor) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;
    this.sampleFactor = sampleFactor;
    this.points = MyriadPro.textToPoints(this.text, this.x, this.y, this.size, {
      sampleFactor: this.sampleFactor,
    });
  }

  display() {
    fill(255, 0, 0);
    noStroke();

    // points move away from the mouse
    for (let i = 0; i < this.points.length; i++) {
      let d = dist(mouseX, mouseY, this.points[i].x, this.points[i].y);
      let x = this.points[i].x;
      let y = this.points[i].y;
      //points moves to the boundary(?)
      if (d < 80) {
        let angle = (y - mouseY, x - mouseX);
        x = mouseX + cos(angle) * 80;
        y = mouseY + sin(angle) * 80;
      }

      circle(x, y, 6);
    }
  }
}
