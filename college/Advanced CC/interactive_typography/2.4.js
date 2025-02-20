let grotesk;
let sample = 0.1;
let speed = 0.2;
let play = false;
let textMorph;

function preload() {
  grotesk = loadFont("../../../images/grotesk.otf");
}

function setup() {
  createCanvas(600, 600).parent("2.4");
  noFill();
  strokeWeight(1);

  // text change from '??????' to 'change'
  textMorph = new TextMorph("??????", "Change", 130, 320, 100, 0.0855);
}

function draw() {
  background(200);
  textMorph.morph();
  textMorph.display();
}

class TextMorph {
  //setting first and second letter values
  constructor(startText, endText, x, y, size, sampleFactor) {
    this.x = x;
    this.y = y;
    this.firstLetter = grotesk.textToPoints(startText, x, y, size, {
      sampleFactor: sample,
    });
    this.secondLetter = grotesk.textToPoints(endText, x, y, size, {
      sampleFactor: sampleFactor,
    });
  }

  //actual morphing part
  morph() {
    for (let i = 0; i < this.firstLetter.length; i++) {
      if (i < this.secondLetter.length) {
        this.firstLetter[i].x +=
          Math.sign(this.secondLetter[i].x - this.firstLetter[i].x) * speed;
        this.firstLetter[i].y +=
          Math.sign(this.secondLetter[i].y - this.firstLetter[i].y) * speed;
      }
    }
  }

  display() {
    beginShape();
    for (let i = 0; i < this.firstLetter.length; i++) {
      vertex(this.firstLetter[i].x, this.firstLetter[i].y);
    }
    endShape(CLOSE);
  }
}
