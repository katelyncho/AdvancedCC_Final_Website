function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  //console.log(mouseX, mouseY);
  noStroke();
  
  let r = map(mouseX, 0, width, 255, 21);
  let g = map(mouseX, 0, width, 218, 19);
  let b = map(mouseX, 0, width, 146, 34);
  
  let eyeColor = color(random(255), random(255), random(255));
  
  //   if(keyIsPressed) {
  //     fill(eyeColor);
  //     //blendMode(LIGHTEST);
  //   }
  //   else {
  //     fill(r, g, b);
  //   }
  // rect(0, 0, width, height);
  
  fill(r, g, b);
  rect(0, 0, width, height);
 
  let w = mouseX/2 + 50;
  let h = mouseY/2 + 50;
  let d = w/4;
  let f = h/3.7;
  let e = w/3;
  
  //stars
  fill(255, 218, 146);
  triangle(30, 30, 40, 30, 35, 37);
  triangle(30, 35, 40, 35, 35, 26);
  
  triangle(100, 70, 110, 70, 105, 77);
  triangle(100, 75, 110, 75, 105, 66);
  
  triangle(70, 160, 80, 160, 75, 167);
  triangle(70, 165, 80, 165, 75, 156);
  
  triangle(360, 40, 370, 40, 365, 47);
  triangle(360, 45, 370, 45, 365, 36);
  
  triangle(270, 90, 280, 90, 275, 97);
  triangle(270, 95, 280, 95, 275, 86);
  
  triangle(340, 190, 350, 190, 345, 197);
  triangle(340, 195, 350, 195, 345, 186);
  
  // //background 
  // if(keyIsPressed) {
  //     fill(eyeColor, 20);
  //     blendMode(OVERLAY);
  //   }
  //   else {
  //     clear();
  //   }
  // rect(0, 0, width, height);
  
  //tail
  push();
  noFill();
  stroke(77, 75, 82);
  strokeWeight(mouseX/4+3);
  curve(0, 400, 220, 400, 280, 280, 300, 0);
  pop();
  
  //body
  fill(77, 75, 82);
  arc(width/2, height, w, height, -180, 0);
  
  //outer ears
  fill(77, 75, 82);
  triangle(width/2 - w/3, height/2 - h/3.5, width/2 - w/4, height/2 - h/1.2, width/2, height/2)
  triangle(width/2 + w/3, height/2 - h/3.5, width/2 + w/4, height/2 - h/1.2, width/2, height/2)
  
  //inner ears
  fill(145, 109, 109);
  triangle(width/2 - w/3.5, height/2 - h/3.5, width/2 - w/4, height/2 - h/1.5, width/2 - w/20, height/2)
  triangle(width/2 + w/3.5, height/2 - h/3.5, width/2 + w/4, height/2 - h/1.5, width/2 + w/20, height/2)
  
  //face
  fill(77, 75, 82);
  ellipse(width/2, height/2, w, h);

  //eyes
    if(mouseIsPressed) {
      fill(eyeColor);
    }
    else {
      fill(95, 116, 76);
    }
    circle(width/2 - d, height/2 - f, e);
    circle(width/2 + d, height/2 - f, e);
    
  fill(0);
  circle(width/2 - d, height/2 - f, e-10);
  circle(width/2 + d, height/2 - f, e-10);
  
  fill(255);
  circle(width/2 - d+d/3, height/2 - f-3.5, e/4);
  circle(width/2 + d+d/3, height/2 - f-3.5, e/4);
  
  //nose
  fill(42, 42, 45);
  triangle(width/2 - 5, height/2 - f/1.5, width/2 + 5, height/2 - f/1.5, width/2, height/2 - 5 );
  
  //mouth
  fill(64, 44, 44);
  arc(width/2, height/2 + h/4, w/2-e, h/2, -180, 0);
  
  fill(145, 109, 109);
  arc(width/2, height/2 + h/4, w/2-e, h/6, -180, 0);
}
