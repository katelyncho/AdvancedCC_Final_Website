let LetterGothic;
let pointArray;
let myCustomPoints = [];
let time = 0;

function preload() {
  LetterGothic = loadFont("../../../images/LetterGothic.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.final3");
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
  time += 0.05;
  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update(time);
    myCustomPoints[i].display();
  }
}

// circles falling when mouse clicked
function mousePressed() {
  for (let i = 0; i < myCustomPoints.length; i++) {
    let d = dist(mouseX, mouseY, myCustomPoints[i].x, myCustomPoints[i].y);
    if (d < 50) {
      myCustomPoints[i].falling = true;
    }
  }
}

class CustomPoint {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.Y = yPos;
    this.falling = false;
    this.fallSpeed = random(1, 3);
    this.offset = random(1, 100);
  }

  // text moving and falling effects setting
  update(time) {
    let shake = 5;
    let speed = 0.4;

    if (!this.falling) {
      // wavy movement
      this.y = this.Y + sin(this.x * 0.05 + time) * 10;

      // Apply shaking effect based on row position
      if (this.y % 4 === 0) {
        this.x += sin(frameCount * speed + this.offset) * shake;
      } else if (this.y % 4 === 1) {
        this.y += cos(frameCount * speed + this.offset) * shake;
      } else if (this.y % 4 === 2) {
        this.x -= sin(frameCount * speed + this.offset) * shake;
      } else {
        this.y -= cos(frameCount * speed + this.offset) * shake;
      }
    } else {
      this.y += this.fallSpeed;
    }
  }

  display() {
    fill(80, 100, 200);
    noStroke();
    circle(this.x, this.y, 5);
  }
}
