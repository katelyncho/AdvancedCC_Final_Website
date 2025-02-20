let MyriadPro;
let sample = 0.2;

function preload() {
  MyriadPro = loadFont("../../../images/MyriadPro.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.2");
  fill(180);
  noStroke();
}

function draw() {
  background(0);

  let pointArray = MyriadPro.textToPoints("nope", 130, 320, 150, {
    sampleFactor: sample,
  });

  for (let i = 0; i < pointArray.length; i++) {
    let r = 255;
    let g = 0;
    let b = 0;
    let s = 6;
    let d = dist(mouseX, mouseY, pointArray[i].x, pointArray[i].y);

    if (d < 50) {
    }

    let X = mouseX;
    let Y = mouseY;

    fill(r, g, b);
    circle(pointArray[i].x - X, pointArray[i].y - Y, s);
  }
}
