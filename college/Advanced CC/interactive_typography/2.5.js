let grotesk;
let sample = 0.2;
let pointArray;
let myCustomPoints = [];

function preload() {
  grotesk = loadFont("../../../images/grotesk.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.5");
  noStroke();
  background(0);

  //text display
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
// Create an array of CustomPoint objects from the text points

function draw() {
  background(0);

  // Assign a random partner point to each CustomPoint
  // updating and displaying the changing points
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

    // blinking effect since it is 'change'
    this.timer = 0;
    this.blinkTime = random(500, 2500);
    this.on = true;

    this.partnerPoint = null;
  }

  assignPartnerPoint() {
    this.partnerPoint = random(myCustomPoints);
  }

  update() {
    // timer for the blinking effect
    this.timer += deltaTime;
    if (this.timer >= this.blinkTime) {
      this.on = !this.on;
      this.timer = 0;
    }
  }

  display() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    // the actual blinking effect
    if (this.on) {
      fill(this.r, this.g, this.b);
    } else {
      return;
    }

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
