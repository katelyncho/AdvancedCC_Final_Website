let myFont;

const ourWorld = "MOO";

let pointArray;

function preload() {
  myFont = loadFont("../../../images/comicSans.ttf");
}
function setup() {
  createCanvas(380, 200).parent("1.1");
  background(0);
  noStroke();

  pointArray = myFont.textToPoints(ourWorld, 20, 150, 135, {
    sampleFactor: 0.2,
  });

  for (let i = 0; i < pointArray.length; i++) {
    let s = 6;

    // if (i < 10) {
    //   s = 10;
    // } else {
    //   s = 5;
    // }
    fill(255, 0, 0);

    circle(pointArray[i].x, pointArray[i].y, s);
  }
}

function draw() {}
