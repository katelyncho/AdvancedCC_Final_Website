let LetterGothic;
let pointArray;
let myCustomPoints = [];

function preload() {
  LetterGothic = loadFont("../../../images/LetterGothic.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.9");
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

class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.offset = random(1, 100);
  }

  // make circle shake differently row by row
  // set shaking speed and amount
  update() {
    let shake = 5;
    let speed = 0.4;

    if (int(this.y) % 4 === 0) {
      this.x += sin(frameCount * speed + this.offset) * shake;
    } else if (int(this.y) % 4 === 1) {
      this.y += cos(frameCount * speed + this.offset) * shake;
    } else if (int(this.y) % 4 === 2) {
      this.x -= sin(frameCount * speed + this.offset) * shake;
    } else {
      this.y -= cos(frameCount * speed + this.offset) * shake;
    }
  }

  display() {
    fill(80, 100, 200);
    noStroke();
    circle(this.x, this.y, 5);
  }
}
