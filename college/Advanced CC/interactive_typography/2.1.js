let MyriadPro;
let sample = 0.2;
let points = [];

function preload() {
  MyriadPro = loadFont("../../../images/MyriadPro.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.1");
  noStroke();

  //displaying text 'nope'
  let pointArray = MyriadPro.textToPoints("nope", 130, 320, 150, {
    sampleFactor: sample,
  });

  // Create an array of Point objects
  for (let point of pointArray) {
    points.push(new Point(point.x, point.y));
  }
}

function draw() {
  background(0);

  for (let point of points) {
    point.update(mouseX, mouseY);
    point.display();
  }
}

class Point {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
    this.x = x;
    this.y = y;
  }

  // points spreading when in mouse area d < 70
  // points coming back when outside the area
  update(mouseX, mouseY) {
    let d = dist(mouseX, mouseY, this.X, this.Y);

    if (d < 50) {
      let spread = map(d, 0, 600, 600, 0);
      this.x = this.X + (this.X - mouseX) * (spread / 100);
      this.y = this.Y + (this.Y - mouseY) * (spread / 100);
    } else {
      this.x = lerp(this.x, this.X, 0.1);
      this.y = lerp(this.y, this.Y, 0.1);
    }
  }

  display() {
    fill(255, 0, 0);
    circle(this.x, this.y, 6);
  }
}
