let grotesk;
let sample = 0.1;
let x, y;
let firstLetter = [];
let secondLetter = [];
let speed = 0.2;
let play = false;

function preload() {
  grotesk = loadFont("../../../images/grotesk.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.4");
  noFill();
  strokeWeight(1);

  x = 130;
  y = 320;

  firstLetter = grotesk.textToPoints("??????", x, y, 100, {
    sampleFactor: sample,
  });
  secondLetter = grotesk.textToPoints("Change", x, y, 100, {
    sampleFactor: 0.0855,
  });

  print(firstLetter.length, secondLetter.length);
}

function draw() {
  background(200);
  beginShape();
  for (let i = 0; i < firstLetter.length; i++) {
    vertex(firstLetter[i].x, firstLetter[i].y);

    if (firstLetter[i].x <= secondLetter[i].x) {
      firstLetter[i].x += speed;
    }

    if (firstLetter[i].x >= secondLetter[i].x) {
      firstLetter[i].x -= speed;
    }

    if (firstLetter[i].y <= secondLetter[i].y) {
      firstLetter[i].y += speed;
    }

    if (firstLetter[i].y >= secondLetter[i].y) {
      firstLetter[i].y -= speed;
    }
  }
  endShape(CLOSE);
}
