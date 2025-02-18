let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.6");
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });
}

function draw() {
  background(0);

  for (let i = 0; i < pointArray.length; i++) {
    let s = 5;
    let r = 255;
    let g = 0;
    let b = 0;

    let Y = 10 * sin(frameCount * 0.05 + pointArray[i].x * 0.05);

    fill(r, g, b);
    circle(pointArray[i].x, pointArray[i].y + Y, s);
  }
}
