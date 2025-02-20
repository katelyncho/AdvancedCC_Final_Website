let LetterGothic;
let points = [];
let time = 0;

function preload() {
  LetterGothic = loadFont("../../../images/LetterGothic.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.7");
  background(0);

  //displaying text 'water'
  let textPoints = LetterGothic.textToPoints("water", 80, 320, 150, {
    sampleFactor: 0.2,
  });

  //calling class
  for (let point of textPoints) {
    points.push(new Point(point.x, point.y));
  }
}

function draw() {
  background(0);
  time += 0.05;
  for (let point of points) {
    point.update(time);
    point.display();
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //wavy animation
  update(time) {
    this.y = this.y + sin(this.x * 0.05 + time) * 10;
  }

  display() {
    fill(0, 0, 255);
    noStroke();
    circle(this.x, this.y, 6);
  }
}
