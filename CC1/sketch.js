//functions
let T;
let C = 0.5;

function setup() {
  createCanvas(400, 400);

  T = new Teabag();
  angleMode(DEGREES);
}

function draw() {
  //background(110, 80, 69);
  noStroke();
  
  let gradient = drawingContext.createLinearGradient(
  350, 0, 100, 400);
  gradient.addColorStop(0, color(138, 106, 84));
  gradient.addColorStop(1, color(68, 49, 43));
  
  drawingContext.fillStyle = gradient;
  
  rect(0, 0, width, height);
  
  //string_back
  push();
  noFill();
  strokeWeight(6);
  stroke(206, 108, 134);
  curve(120, 0, 110, 96, 75, 0, 120, 0);
  pop();
  
  //main triangle
  push();
  fill(176, 205, 226);
  
   push();
  fill(122, 165, 200);
  translate(80, 105);
  rotate(-60);
  ellipse(0, 0, 25, 50);
  pop();
  
  push();
  translate(90, 90);
  rotate(-30);
  ellipse(0, 0, 25, 50);
  pop();
  
  push();
  translate(110, 90);
  rotate(10);
  ellipse(0, 0, 25, 50);
  pop();

  push();
  fill(122, 165, 200);
  beginShape();
  vertex(100, 100);
  vertex(80, 150);
  vertex(60, 240);
  vertex(90, 310);
  vertex(120, 370);
  vertex(220, 290);
  vertex(320, 200);
  endShape();
  pop();
  
  beginShape();
  vertex(100, 100);
  vertex(80, 170);
  vertex(68, 240);
  vertex(80, 300);
  vertex(115, 340);
  vertex(200, 290);
  vertex(320, 200);
  vertex(300, 180);
  vertex(210, 140);
  vertex(170, 120);
  endShape();
  
  //dark bag
  push();
  strokeWeight(0);
  stroke(122, 165, 200);
  fill(122, 165, 200);
  curve(200, 26, 100, 100, 60, 240, 100, 300);
  curve(100, 26, 60, 240, 120, 370, 300, 200);
  curve(-800, 300, 120, 370, 320, 200, 80, 50);
  pop();  
  
  //light bag
  push();
  strokeWeight(0);
  stroke(176, 205, 226);
  curve(200, 26, 100, 100, 68, 240, 100, 300);
  curve(100, 26, 68, 240, 115, 340, 250, 340);
  curve(10, 100, 115, 340, 320, 200, 50, -100);
  curve(300, 400, 320, 200, 210, 140, 100, 100);
  curve(300, 300, 210, 140, 100, 100, 100, 200);
  pop();
  
  //frog
  //main green
  push();
  fill(152, 191, 125);
  
  push();
  translate(175, 240);
  rotate(-33);
  ellipse(0,0, 130, 97);
  pop();

  circle(115, 235, 50);
  circle(185, 185, 50);
  pop();
  
  //texture
  
  //dark texture
  push();
  noFill();
  strokeWeight(3)
  stroke(122, 165, 200);
  curve(100, 100, 105, 310, 160, 360, 200, 400);
  pop();
  
  push();
  noFill();
  strokeWeight(3)
  stroke(122, 165, 200);
  curve(100, 100, 125, 320, 190, 350, 200, 400);
  pop();
  
  push();
  noFill();
  strokeWeight(3)
  stroke(122, 165, 200);
  curve(0, 200, 80, 310, 115, 325, 0, 320);
  pop();
  
  push();
  noFill();
  strokeWeight(3)
  stroke(122, 165, 200);
  curve(0, 250, 90, 325, 140, 335, 140, 320);
  pop();
  
  push();
  fill(122, 165, 200);
  translate(100, 123);
  ellipse(0, 0, 10, 40);
  pop();
  

  //light texture
  push();
  noFill();
  strokeWeight(3)
  stroke(176, 205, 226);
  curve(120, 300, 90, 300, 120, 350, 170, 340);
  pop();
  
  push();
  fill(176, 205, 226);
  translate(103, 120);
  rotate(-5);
  ellipse(0, 0, 5, 40);
  pop();
  
  //yellow texture
  push();
  blendMode(OVERLAY);
  noFill();
  strokeWeight(4);
  stroke(253, 197, 23, 190);
  curve(100, 170, 150, 130, 163, 114, 160, 100);
  curve(100, 180, 160, 140, 175, 117, 180, 100);
  curve(100, 190, 170, 150, 187, 124, 190, 100);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 170);
  translate(170, 120);
  rotate(-63);
  ellipse(0, 0, 10, 70);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 160);
  translate(90, 80);
  rotate(-40);
  ellipse(0, 0, 14, 30);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 160);
  translate(90, 92);
  rotate(-40);
  ellipse(0, 0, 10, 12);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 160);
  translate(118, 80);
  rotate(-10);
  ellipse(0, 0, 10, 22);
  pop();
  
  blendMode(OVERLAY);
  fill(253, 197, 23, 100);
  translate(120, 140);
  rotate(-23);
  ellipse(0, 0, 15, 40);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 100);
  translate(105, 150);
  rotate(-15);
  ellipse(0, 0, 10, 20);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 160);
  translate(260, 167);
  rotate(-70);
  ellipse(0, 0, 20, 50);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 100);
  translate(65, 250);
  rotate(-5);
  ellipse(0, 0, 2, 60);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 100);
  translate(80, 330);
  rotate(-23);
  ellipse(0, 0, 5, 60);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 100);
  ellipse(103, 292, 6, 6);
  ellipse(110, 285, 7, 7);
  ellipse(120, 300, 6, 5);
  ellipse(100, 304, 5, 5);
  ellipse(82, 304, 6, 6);
  ellipse(240, 182, 8, 8);
  ellipse(270, 190, 8, 8);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(253, 197, 23, 150);
  ellipse(235, 175, 6, 6);
  ellipse(260, 180, 7, 7);
  pop();
  
  
  //silver texture
  push();
  blendMode(OVERLAY);
  noFill();
  strokeWeight(4);
  stroke(241, 243, 248, 190);
  curve(100, 130, 145, 115, 185, 150, 200, 200);
  curve(90, 130, 150, 108, 195, 140, 230, 200);
  pop();
  
  push();
  blendMode(OVERLAY);
  noFill();
  strokeWeight(4);
  stroke(241, 243, 248, 190);
  curve(200, 210, 260, 250, 290, 200, 250, 200);
  pop();
  
  push();
  blendMode(OVERLAY);
  noFill();
  strokeWeight(4);
  stroke(241, 243, 248, 190);
  curve(200, 210, 265, 260, 300, 200, 250, 200);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 140);
  translate(115, 74);
  rotate(-40);
  ellipse(0, 0, 10, 15);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 140);
  translate(80, 74);
  rotate(-40);
  ellipse(0, 0, 15, 10);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 120);
  translate(130, 140);
  rotate(-30);
  ellipse(0, 0, 10, 30);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 180);
  translate(230, 170);
  rotate(-60);
  ellipse(0, 0, 20, 30);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 100);
  translate(250, 180);
  rotate(-60);
  ellipse(0, 0, 15, 20);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 100);
  translate(65, 250);
  rotate(-5);
  ellipse(0, 0, 5, 60);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 100);
  translate(68, 280);
  rotate(-5);
  ellipse(0, 0, 10, 20);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 100);
  translate(73, 300);
  ellipse(0, 0, 10, 10);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 100);
  ellipse(100, 290, 5, 5);
  ellipse(110, 280, 5, 5);
  ellipse(110, 295, 6, 5);
  ellipse(255, 168, 5, 5);
  pop();
  
  push();
  blendMode(OVERLAY);
  fill(241, 243, 248, 140);
  ellipse(275, 170, 5, 5);
  ellipse(250, 160, 7, 7);
  pop();
  
  //frog_lightgreen
  push();
  fill(187, 213, 162);
  translate(120, 240);
  rotate(-40);
  ellipse(0, 0, 50, 20);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(130, 240);
  rotate(-40);
  ellipse(0, 0, 60, 20);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(144, 265);
  rotate(-40);
  ellipse(0, 0, 50, 15);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(144, 265);
  rotate(-40);
  ellipse(0, 0, 50, 15);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(145, 272);
  rotate(-40);
  ellipse(0, 0, 40, 15);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(152, 278);
  rotate(-40);
  ellipse(0, 0, 40, 15);
  pop();

  push();
  fill(187, 213, 162);
  translate(142, 284);
  rotate(-156);
  ellipse(0, 0, 40, 15);
  pop();
  
  push();
  fill(187, 213, 162);
  translate(182, 278);
  rotate(-35);
  ellipse(0, 0, 40, 15);
  pop();
  
  push();
  translate(219, 220);
  fill(187, 213, 162);
  rotate(-40);
  ellipse(0, 0, 35, 20);
  pop();
  
  push();
  fill(187, 213, 162);
  ellipse(222, 210, 20, 20);
  pop();
  
  push();
  translate(190, 170);
  fill(187, 213, 162);
  rotate(0);
  ellipse(0, 0, 30, 20);
  pop();
  
  //frog_bodycolor
  push();
  fill(152, 191, 125);
  translate(140, 220);
  rotate(-44);
  ellipse(0, 0, 35, 15);
  pop();
  
  push();
  fill(152, 191, 125);
  ellipse(102, 250, 6, 6);
  ellipse(110, 252, 5, 5);
  pop();
  
   //frog_blue
  push();
  fill(168, 200, 191);
  translate(150, 220);
  rotate(-44);
  ellipse(0, 0, 20, 15);
  pop();
  
  push();
  fill(168, 200, 191);
  translate(140, 230);
  rotate(-44);
  ellipse(0, 0, 10, 6);
  pop();
  
  push();
  fill(168, 200, 191);
  translate(140, 278);
  rotate(-40);
  ellipse(0, 0, 30, 15);
  pop();
  
  push();
  fill(168, 200, 191);
  translate(140, 270);
  rotate(-40);
  ellipse(0, 0, 20, 20);
  pop();
  
  //eyes_white
  push();
  fill(255);

  push();
  translate(110, 232);
  rotate(-55);
  arc(0, 0, 30, 35, 0, 180);
  pop();
  
  push();
  translate(183, 175);
  rotate(-15);
  arc(0, 0, 30, 35, 0, 180);
  pop();
  pop();
  
  //eyes_pupil
  push();
  fill(54, 58, 51);
  
  push();
  translate(110, 232);
  rotate(-55);
  arc(0, 0, 20, 25, 0, 180);
  pop();
  
  push();
  translate(183, 175);
  rotate(-15);
  arc(0, 0, 20, 25, 0, 180);
  pop();
  
  //mouth
  push();
  noFill();
  strokeWeight(3);
  stroke(54, 58, 51);
  
  translate(175, 240);
  rotate(-40);
  curve(-40, -45, -40, 10, 40, 10, 40, -45);
  // curve(10, 170, 150, 270, 210, 225, 120, 150);
  pop();
  
  //string_front
  push();
  noFill();
  strokeWeight(6);
  stroke(177, 76, 100);
  curve(80, 100, 85, 125, 126, 98, 140, 10);
  pop();
  
  push();
  noFill();
  strokeWeight(6);
  stroke(206, 108, 134);
  curve(80, 100, 85, 122, 124, 96, 140, 10);
  curve(120, 0, 85, 122, 60, 0, 120, 0);
  pop();
  
  T.display();
  T.update();
}

//light
  class Teabag {
    constructor(){
      this.r = 80;
    }
      display() {
        push();
        blendMode(SCREEN);
        fill(242, 192, 84, this.r);
        triangle(260, -100, 130, 400, 1000, 400);
        pop();
    }
      update() {
        //this.r = this.r+1;
        this.r = this.r + C;
        
        if(this.r > 150 || this.r < 79){
          C = -C;
        }
    }
  }

  // fill(242, 192, 84, 90);
  // triangle(260, -100, 130, 400, 1000, 400);

  //clipping mask

  // push();
  // clip(mask);
  // blendMode(MULTIPLY);
  // strokeWeight(0);
  // stroke(122, 165, 200);
  // fill(122, 165, 200);
  // curve(200, 26, 100, 100, 68, 240, 100, 300);
  // curve(100, 26, 68, 240, 115, 340, 250, 340);
  // curve(10, 100, 115, 340, 318, 250, 200, 0);
  // //122, 165, 200
  // pop();

