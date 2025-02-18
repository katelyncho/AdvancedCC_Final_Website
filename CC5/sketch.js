let x = 0;
let a = 0.2;

let img;

function preload(){
  img = loadImage('optical_illusion.jpg');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  // if(mouseIsPressed) {
  //     a = 2;
  //   }
  // else {
  //     a = 0.12;
  //   }
  
  x = x+a;
  if (x>50 || x< -50) {
    a = -a;
  }

  //print(x)
  image(img, 0, 0, 601, 601);
  stripe();
}

function stripe() {
  let cols = 700;
  let cellSize = 2;
  translate(-100, 0);
    for (let i = 0; i < cols; i++) {
      if (i%3 === 0) {
        fill(0, 0, 0, 0);
      }
      else {
        fill(0);
      }
      rect(i*cellSize+x, cellSize, cellSize, 600);
    }
}
  