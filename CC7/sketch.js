let stage = 1;
let snake = [];
let snakeTwo = [];
let wall;
let exit;
let cars = [];
let flowers = [];
let foods = [];

function preload() {
  
  head = loadImage("images/head.png");
  cat = loadImage("images/cat.png");
  hamster = loadImage("images/hamster.png");
  beetle = loadImage("images/beetle.png");
  snail = loadImage("images/snail.png");
  starfish = loadImage("images/starfish.png");
  goldfish = loadImage("images/goldfish.png");
  icons = loadImage("images/icons.png");
  car = loadImage("images/car.png");
  flower = loadImage("images/flower.png");
  food = loadImage("images/food.png");
  intro = loadImage("intro.PNG");
  backgroundOne = loadImage("backgroundOne.png");
  backgroundTwo = loadImage("backgroundTwo.png");
  endingOne = loadImage("endings/endingOne.PNG");
  endingTwo = loadImage("endings/endingTwo.PNG");
  endingThree = loadImage("endings/endingThree.PNG");
  endingFour = loadImage("endings/endingFour.PNG");
  endingFive = loadImage("endings/endingFive.PNG");
  endingSix = loadImage("endings/endingSix.PNG");
  endingSeven = loadImage("endings/endingSeven.PNG");
}


function setup() {
    createCanvas(640, 360);
  
    for (let i = 0; i < 3; i++) {
        cars.push(new Car(i * 120 + 60, random(2, 5)));
    }
  
    for (let j = 0; j < 3; j++) {
        flowers.push(new Flower(j * 120 + 60, random(2, 5)));
    }
    for (let k = 0; k < 3; k++) {
        foods.push(new Food(k * 120 + 60, random(2, 5)));
    }
  
  snake[0] = new Head(600, 160, 1);
  snake[1] = new Cat(420, 160, 1);
  snake[2] = new Hamster(450, 240, 1);
  snake[3] = new Beetle(350, 300, 1);
  snake[4] = new Snail(310, 190, 1);
  snake[5] = new Starfish(240, 80, 1);
  snake[6] = new Goldfish(150, 155, 1);
  
  snakeTwo[0] = new Head(600, 160, 1);
  snakeTwo[1] = new Cat(600, 160, 1);
  snakeTwo[2] = new Hamster(600, 160, 1);
  snakeTwo[3] = new Beetle(600, 160, 1);
  snakeTwo[4] = new Snail(600, 160, 1);
  snakeTwo[5] = new Starfish(600, 160, 1);
  snakeTwo[6] = new Goldfish(600, 160, 1);


  wall = new Wall(0, 0, 1);

  exit = new Exit();
  
  
}

function draw() {
  
  stageManager();

  if (keyIsDown(LEFT_ARROW)) {
    snake[0].setDirection(-1, 0);
    snakeTwo[0].setDirection(-1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    snake[0].setDirection(1, 0);
    snakeTwo[0].setDirection(1, 0);
  } else if (keyIsDown(UP_ARROW)) {
    snake[0].setDirection(0, -1);
    snakeTwo[0].setDirection(0, -1);
  } else if (keyIsDown(DOWN_ARROW)) {
    snake[0].setDirection(0, 1);
    snakeTwo[0].setDirection(0, 1);
  }
}

function stageManager() {
  if (stage === 1) {
    introduction();
  }
  else if (stage === 2) {
    stageOne();
  }
  else if (stage === 3) {
    stageTwo();
  }
}