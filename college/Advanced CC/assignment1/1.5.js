let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.5");
  background(0);
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });

  for (let i = 0; i < pointArray.length; i++) {
    let s = 5;
    let r = 0;
    let g = 0;
    let b = 0;

    if (i % 2 === 0) {
      r = 255;

      fill(r, g, b);

      circle(pointArray[i].x, pointArray[i].y, s);
    } else {
      r = 255;
      g = 255;
      b = 255;
      s = 5;

      fill(r, g, b);
      rectMode(CENTER);
      rect(pointArray[i].x, pointArray[i].y, s, s);
    }
  }
}

function draw() {}
