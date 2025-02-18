let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.4");
  background(0);
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });

  for (let i = 0; i < pointArray.length; i++) {
    let s = map(pointArray[i].y, 0, 380, 0.5, 15);
    let r = 0;
    let g = 0;
    let b = 0;

    if (pointArray[i].x < 200) {
      r = 255;
    } else {
      g = 255;
    }

    fill(r, g, b);

    circle(pointArray[i].x, pointArray[i].y, s);
  }
}

function draw() {}
