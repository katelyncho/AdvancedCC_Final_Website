let LetterGothic;
let pointArray;
let myCustomPoints = [];

function preload() {
  LetterGothic = loadFont("../../../images/LetterGothic.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.8");
  background(0);

  // displaying text 'water'
  pointArray = LetterGothic.textToPoints("water", 80, 320, 150, {
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

// make circles fall only when mouse clicked
function mousePressed() {
  for (let i = 0; i < myCustomPoints.length; i++) {
    let d = dist(mouseX, mouseY, myCustomPoints[i].x, myCustomPoints[i].y);
    if (d < 50) {
      myCustomPoints[i].falling = true;
    }
  }
}

// making points fall
class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.falling = false;
    this.fallSpeed = random(1, 3);
  }

  update() {
    if (this.falling) {
      this.y += this.fallSpeed;
    }
  }

  display() {
    fill(80, 100, 200);
    noStroke();
    circle(this.x, this.y, 5);
  }
}
