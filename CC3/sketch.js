function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(47, 44, 57);
  noStroke();
  
  let d = day();
  let h = hour();
  let m = minute();
  let s = second();
  
  let dday = (12-month())*31+(12-day());
  let dhour = 24-hour();
  let dminute = 60-minute();
  let dsecond = 60-second();
  
  let dayX = 0;
  let hourX = 0;
  let minuiteX = 0;
  let secondX = 0;
  
  let p = 500-dday*4.310344827586207;
  let a = 116-dday;
  let b = int((a/116)*100);
  
  //time left until break 116
  let gradient = drawingContext.createLinearGradient(
  200, 135, 550, 135);
  gradient.addColorStop(0, color(202, 88, 76));
  gradient.addColorStop(1, color(132, 213, 117));
  
  drawingContext.fillStyle = gradient;
  
  //rect(50, 130, 500, 140);
  rect(50, 130, p, 140);
  
  //day 40
  fill(234, 196, 208);
  rect(100, 290, day()*15, 80);
  
  //hour
  fill(217, 141, 164);
  rect(100, 380, hour()*19.565217391304348, 60);
  
  //minute
  fill(191, 93, 111);
  rect(100, 450, minute()*7.627118644067797, 40);

  //second 450
    fill(176, 67, 87);
    rect(100, 500, second()*7.627118644067797, 20);
  
// -----------------------------text
  
  // textFont(ITALIC);
  
  fill(255);
  textSize(28);
  text("Time Left Until Break: "+dday+'day '+dhour+'h '+dminute+'m '+dsecond+'s', 50, 60);
  
  fill(255);
  textSize(28);
  text(b+'%', 490, 120);
  
  fill(255);
  textSize(15);
  text("Day", 50, 330);
  
  fill(255);
  textSize(15);
  text("Hour", 45, 410);
  
  fill(255);
  textSize(15);
  text("minute", 35, 470);
  
  fill(255);
  textSize(15);
  text("second", 35, 510);

  //console.log(dday+'day '+dhour+'h '+dminute+'m '+dsecond+'s')
}


//   while (i<dday) {
//       //time left until break
//     fill(255);
//     rect(50, 130, 500, 140);

//     //day 450
//     fill(234, 196, 208);
//     rect(100, 290, 450, 80);

//     //hour
//     fill(217, 141, 164);
//     rect(100, 380, 450, 60);

//     //minuite
//     fill(191, 93, 111);
//     rect(100, 450, 450, 40);

//     //second
//     if(secondX <= 450) {
//       fill(176, 67, 87);
//       rect(100, 500, secondX + 7.5, 20);
//     }
//     else {
//       fill(176, 67, 87);
//       rect(100, 500, secondX, 20);
//     }
//   }