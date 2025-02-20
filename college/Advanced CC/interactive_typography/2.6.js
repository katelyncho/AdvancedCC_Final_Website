let grotesk;
let pointArray;
let myCustomPoints = [];

function preload() {
  grotesk = loadFont("../../../images/grotesk.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.6");
  background(0);
  //display text 'change'
  pointArray = grotesk.textToPoints("change", 80, 320, 150, {
    sampleFactor: 0.2,
  });

  for (let i = 0; i < pointArray.length; i++) {
    myCustomPoints.push(new CustomPoint(pointArray[i].x, pointArray[i].y));
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
    //random color assigned
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);

    this.x = xPos;
    this.y = yPos;

    this.size = 5;

    this.timer = 0;
    this.blinkTime = random(0.5, 2.5);
    this.on = true;
  }

  update() {
    //update for random points flicking
    this.timer += deltaTime / 500;
    if (this.timer >= this.blinkTime) {
      this.on = !this.on;
      this.timer = 0;
    }
  }

  display() {
    //flicking colors change when mouse clicked
    if (this.on) {
      if (mouseIsPressed) {
        this.r = 0;
      } else {
        this.r = random(0, 255);
      }
      fill(this.r, this.g, this.b);
      circle(this.x, this.y, this.size);
    }
  }
}
