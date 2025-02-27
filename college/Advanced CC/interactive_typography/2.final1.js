let MyriadPro;
let sample = 0.2;
let myCustomPoints = [];

function preload() {
  MyriadPro = loadFont("../../../images/MyriadPro.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.final1");
  noStroke();
  background(0);

  // text 'nope' display
  let pointArray = MyriadPro.textToPoints("nope", 130, 320, 150, {
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

  // displaying the points
  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }

  // drawing connection between lines
  for (let i = 0; i < myCustomPoints.length; i++) {
    let p1 = myCustomPoints[i];
    let p2 = p1.partnerPoint;

    if (p2) {
      stroke(p1.color.levels[0], p1.color.levels[1], p1.color.levels[2], 150);
      line(p1.x, p1.y, p2.x, p2.y);
    }
  }
}

class CustomPoint {
  constructor(xPos, yPos) {
    this.originalX = xPos;
    this.originalY = yPos;
    this.x = xPos;
    this.y = yPos;
    this.s = 6;
    this.color = color(0, 255, 0);
  }

  assignPartnerPoint() {
    this.partnerPoint = random(myCustomPoints);
  }

  update() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    // moving away and back the circles
    if (d < 50) {
      let angle = atan2(this.y - mouseY, this.x - mouseX);
      let moveDist = 80;
      this.x = this.originalX + cos(angle) * moveDist;
      this.y = this.originalY + sin(angle) * moveDist;
    } else {
      this.x = lerp(this.x, this.originalX, 0.1);
      this.y = lerp(this.y, this.originalY, 0.1);
    }

    // Change color when mouse is pressed
    if (mouseIsPressed) {
      this.color = color(255, 0, 0);
    } else {
      this.color = color(0, 255, 0);
    }
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.s);
  }
}
