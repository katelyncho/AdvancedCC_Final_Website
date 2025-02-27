let grotesk;
let sample = 0.2;
let pointArray;
let myCustomPoints = [];

function preload() {
  grotesk = loadFont("../../../images/grotesk.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.final2");
  noStroke();
  background(0);

  // text 'change' display
  pointArray = grotesk.textToPoints("change", 80, 320, 150, {
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
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.s = 6;

    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    // blinking effect
    this.timer = 0;
    this.blinkTime = random(500, 2500);
    this.on = true;

    this.shapeChangeTime = random(1000, 3000);
    this.shapeTimer = 0;
    this.isSquare = false;

    this.partnerPoint = null;
  }

  assignPartnerPoint() {
    this.partnerPoint = random(myCustomPoints);
  }

  update() {
    this.timer += deltaTime;
    if (this.timer >= this.blinkTime) {
      this.on = !this.on;
      this.timer = 0;
    }

    this.shapeTimer += deltaTime;
    if (this.shapeTimer >= this.shapeChangeTime) {
      this.isSquare = !this.isSquare;
      this.shapeTimer = 0;
    }
  }

  // drawing random circles and squares with random colorrsss
  display() {
    if (!this.on) return;
    fill(this.r, this.g, this.b);

    if (this.isSquare) {
      rectMode(CENTER);
      rect(this.x, this.y, this.s, this.s);
    } else {
      circle(this.x, this.y, this.s);
    }

    if (this.partnerPoint) {
      push();
      stroke(this.r, this.g, this.b, 100);
      line(this.x, this.y, this.partnerPoint.x, this.partnerPoint.y);
      pop();
    }
  }
}
