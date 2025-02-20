let MyriadPro;
let sample = 0.2;
let pointArray;
let myCustomPoints = [];

function preload() {
  MyriadPro = loadFont("../../../images/MyriadPro.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.3");
  noStroke();
  background(0);

  // text 'nope' display
  pointArray = MyriadPro.textToPoints("nope", 130, 320, 150, {
    sampleFactor: sample,
  });

  for (let i = 0; i < pointArray.length; i++) {
    myCustomPoints.push(new CustomPoint(pointArray[i].x, pointArray[i].y));
  }

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].assignPartnerPoint();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].display();
  }
}

//the,,class of points on the text(?)
class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.s = 6;
  }
  //selecting random points
  assignPartnerPoint() {
    this.partnerPoint = random(myCustomPoints);
  }

  //only showing points around mouse
  //& when clicked, color changes
  display() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    if (d < 50) {
      fill(this.r, this.g, this.b);
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0;
      } else {
        this.r = 0;
        this.g = 255;
        this.b = 0;
      }
    } else {
      return;
    }
    //if(d>=50) return; << same thing, more clean
    //if() logic() << one line: no need {} this thing

    circle(this.x, this.y, this.s);

    // connecting points
    if (this.partnerPoint) {
      push();
      stroke(this.r, this.g, this.b, 100);
      line(this.x, this.y, this.partnerPoint.x, this.partnerPoint.y);
      pop();
    }
  }
}
