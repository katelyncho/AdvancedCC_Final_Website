let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.2");
  background(0);
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });

  for (let i = 0; i < pointArray.length; i++) {
    let s = 6;
    let r = map(pointArray[i].x, 0, 400, 255, 0);
    let g = 0;
    let b = 0;
    let C = 0.5;

    // if (pointArray[i].x < 400) {
    //   C = C + 1;
    //   //   pointArray[i].x = pointArray[i].x + 1;
    //   r = 255 - pointArray[i].x;
    // } else {
    //   r = 255;
    // }

    fill(r, g, b);

    circle(pointArray[i].x, pointArray[i].y, s);
  }
}

function draw() {}
