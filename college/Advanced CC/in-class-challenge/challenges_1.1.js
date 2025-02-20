let myFont;
let myPoints = [];

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}

function setup() {
  createCanvas(400, 400).parent("challenges_1.1");
  noStroke();
  rectMode(CENTER);

  createPoints();
}

function draw() {
  background(10, 20, 70);

  for (let i = 0; i < myPoints.length; i++) {
    myPoints[i].update();
    myPoints[i].display();
  }
}

function createPoints() {
  let textPoints = myFont.textToPoints("MOO", 20, 230, 140, {
    sampleFactor: 0.075,
  });

  for (let i = 0; i < textPoints.length; i++) {
    myPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
  }
}

class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;

    this.size = 10;

    this.isSquare = false;
  }

  update() {
    const d = dist(mouseX, mouseY, this.x, this.y);

    this.isSquare = d < 50;
  }

  display() {
    if (this.isSquare) {
      fill(255);
      square(this.x, this.y, this.size);
    } else {
      fill(0, 200, 150);
      circle(this.x, this.y, this.size);
    }
  }
}
