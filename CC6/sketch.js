const sentence1 = 'Musical';
const sentence2 = 'Apocalypse';
const sentence3 = 'Pop';
const sentence4 = 'Music Box';
const sentence5 = 'Vocaloid';
const sentence6 = 'No Lyrics';

let a = 1;

let w = 10;
let h = 10;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
  textSize(10);

}

function draw() {
  background(220);
  noFill();
  stroke(0)
  strokeWeight(4);
  
  translate(width/2, height/2);
  
  beginShape()
  stroke(178, 29, 29);
  for(var i = 0; i < 360; i++) {
    var r6Min = map(sin(frameCount *1.5), -1, 1, 250, 200);
    var r6Max = map(sin(frameCount * 1.5), -1, 1, 200, 250);

    
    var r6 = map(sin(i * 10), -1, 1, r6Min, r6Max);
    
    var r = r6;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, width, height, 49, 270);
  pop();
  
  beginShape()
  stroke(31, 108, 190);
  strokeWeight(3);
  for(var i = 0; i < 360; i++) {
    var r5Min = map(sin(frameCount * 2), -1, 1, 150, 190);
    var r5Max = map(sin(frameCount * 2), -1, 1, 190, 150);
    
    var r5 = map(sin(i * 20), -1, 1, r5Min, r5Max);
    
    var r = r5;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, 390, 390, 156, 49);
  pop();
  
  beginShape()
  stroke(134, 14, 23);
  strokeWeight(2);
  for(var i = 0; i < 360; i++) {
    var r4Min = map(sin(frameCount * 3), -1, 1, 140, 100);
    var r4Max = map(sin(frameCount * 3), -1, 1, 100, 140);
    
    var r4 = map(sin(i * 30), -1, 1, r4Min, r4Max);
    
    var r = r4;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, 290, 290, 207, 156);
  pop();
  
  beginShape()
  stroke(27, 54, 152);
  for(var i = 0; i < 360; i++) {
    var r3Min = map(sin(frameCount * 4), -1, 1, 60, 90);
    var r3Max = map(sin(frameCount * 4), -1, 1, 90, 60);
    
    var r3 = map(sin(i * 40), -1, 1, r3Min, r3Max);
    
    var r = r3;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, 190, 190, 247, 207);
  pop();
  
  beginShape()
  stroke(18, 15, 83);
  strokeWeight(1.5);
  for(var i = 0; i < 360; i++) {
    var r2Min = map(sin(frameCount * 5), -1, 1, 50, 30);
    var r2Max = map(sin(frameCount * 5), -1, 1, 30, 50);
    
    var r2 = map(sin(i * 50), -1, 1, r2Min, r2Max);
    
    var r = r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, 110, 110, 263, 247);
  pop();
  
  beginShape()
  stroke(78, 8, 33);
  strokeWeight(0.7);
  for(var i = 0; i < 360; i++) {
    var r1Min = map(sin(frameCount * 6), -1, 1, 10, 20);
    var r1Max = map(sin(frameCount * 6), -1, 1, 20, 10);
    
    var r1 = map(sin(i * 60), -1, 1, r1Min, r1Max);
    
    var r = r1;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE)
  
  push();
  noStroke();
  fill(220, 245);
  arc(0, 0, 50, 50, 270, 263);
  pop();
  
  push();
  textSize(20);
  strokeWeight(1.2);
  stroke(200, 0, 0, 50);
  text('red = lyrics', -290, 260);
  stroke(0, 0, 200, 50);
  text('blue = no lyrics', -290, 290);
  pop();
  
  if (mouseIsPressed) {
    mouse();
  }

}

function mouse() {
  //----------------text-----------------------//
  //circle(0, 0, a * 30);
  
  let arclength = 0;
  
  for (let i = 0; i < sentence1.length; i++) {
    textSize(35);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(178, 29, 29, 100);
    textAlign(CENTER);

    rotate(195);
    text(sentence1.charAt(i), 225, h);
    pop();
    
    arclength += w / 2;
  }
  
  for (let i = 0; i < sentence2.length; i++) {
    textSize(30);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(31, 108, 190, 100);
    textAlign(CENTER);

    rotate(235);
    text(sentence2.charAt(i), 175, h);
    pop();
    
    arclength += w / 2;
  }
  
  for (let i = 0; i < sentence3.length; i++) {
    textSize(30);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(134, 14, 23, 100);
    textAlign(CENTER);

    rotate(305);
    text(sentence3.charAt(i), 125, h);
    pop();
    
    arclength += w / 2;
  }
  
  for (let i = 0; i < sentence4.length; i++) {
    textSize(27);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(27, 54, 152, 100);
    textAlign(CENTER);

    rotate(60);
    text(sentence4.charAt(i), 75, h);
    pop();
    
    arclength += w / 0.7;
  }
  
  for (let i = 0; i < sentence5.length; i++) {
    textSize(20);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(18, 15, 83, 100);
    textAlign(CENTER);

    rotate(30);
    text(sentence5.charAt(i), 40, h);
    pop();
    
    arclength += w / 0.5;
  }
  
  for (let i = 0; i < sentence6.length; i++) {
    textSize(10);
    arclength += w / 2;

    let theta = arclength/a;

    push();
    translate(a * cos(theta), a * sin(theta));
    rotate(theta);
    fill(78, 8, 33, 100);
    textAlign(CENTER);

    rotate(70);
    text(sentence6.charAt(i), 15, h);
    pop();
    
    arclength += w / 0.5;
  }
}