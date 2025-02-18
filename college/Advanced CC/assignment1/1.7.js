let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.7");
  //   background(0);
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });
}

function draw() {
  background(0);
  //   let d = dist(x1, y1, x2, y2);

  for (let i = 0; i < pointArray.length; i++) {
    let s = 5;
    let r = 255;
    let g = 0;
    let b = 0;

    let d = dist(mouseX, mouseY, pointArray[i].x, pointArray[i].y);

    if (d < 50) {
      s = map(d, 0, 50, 50, 5);
    } else {
      s--;
    }

    fill(r, g, b);
    circle(pointArray[i].x, pointArray[i].y, s);
  }
}
