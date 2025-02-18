function stageTwo() {
  let flower;
  let car;
  let food;
  
  image(backgroundTwo, 0, 0);
  exit.draw();
  noStroke();
  fill(68, 65, 70);
  rect(636, 160, 10, 50);
  
   if (cars.length === 0) {
        for (let i = 0; i < 3; i++) {
            cars.push(new Car(i * 120 + 60, random(2, 5)));
        }
    }
  if (flowers.length === 0) {
        for (let j = 0; j < 3; j++) {
            flowers.push(new Flower(j * 120 + 60, random(2, 5)));
        }
    }
  if (foods.length === 0) {
        for (let k = 0; k < 3; k++) {
            foods.push(new Food(k * 120 + 60, random(2, 5)));
        }
    }

    for (let car of cars) {
      car.show();
      car.move();
      
      if (snakeTwo[0].crashes(car)) {
        snakeTwo[0].reset();
        snakeTwo[0].length--;
        }
        break; 
    }
  
    for (let flower of flowers) {
        flower.show();
        flower.move();

        if (snakeTwo[0].crashes(flower)) {
          snakeTwo[0].reset();
          snakeTwo[0].length--;
          }
          break; 
      }
  
    for (let food of foods) {
        food.show();
        food.move();

        if (snakeTwo[0].crashes(food)) {
          snakeTwo[0].reset();
          snakeTwo[0].length--;
          }
          break; 
      }
  
  snakeTwo[0].move();
  snakeTwo[0].draw();
  
  if (snakeTwo[0].length < 1) {
    snakeTwo.push();
  }

  if (snakeTwo[0].length == 7) {    
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();

    snakeTwo[2].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[2].followCat(snakeTwo[1]);
    snakeTwo[2].draw();

    snakeTwo[3].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[3].followHamster(snakeTwo[2]);
    snakeTwo[3].draw();

    snakeTwo[4].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[4].followBeetle(snakeTwo[3]);
    snakeTwo[4].draw();

    snakeTwo[5].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[5].followSnail(snakeTwo[4]);
    snakeTwo[5].draw();

    snakeTwo[6].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[6].followStarfish(snakeTwo[5]);
    snakeTwo[6].draw();
}
  if (snakeTwo[0].length == 6) {
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();

    snakeTwo[2].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[2].followCat(snakeTwo[1]);
    snakeTwo[2].draw();

    snakeTwo[3].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[3].followHamster(snakeTwo[2]);
    snakeTwo[3].draw();

    snakeTwo[4].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[4].followBeetle(snakeTwo[3]);
    snakeTwo[4].draw();

    snakeTwo[5].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[5].followSnail(snakeTwo[4]);
    snakeTwo[5].draw();
  }
  
  if (snakeTwo[0].length == 5) {
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();

    snakeTwo[2].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[2].followCat(snakeTwo[1]);
    snakeTwo[2].draw();

    snakeTwo[3].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[3].followHamster(snakeTwo[2]);
    snakeTwo[3].draw();

    snakeTwo[4].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[4].followBeetle(snakeTwo[3]);
    snakeTwo[4].draw();
  }
  
  if (snakeTwo[0].length == 4) {
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();

    snakeTwo[2].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[2].followCat(snakeTwo[1]);
    snakeTwo[2].draw();

    snakeTwo[3].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[3].followHamster(snakeTwo[2]);
    snakeTwo[3].draw();
  }
  
  if (snakeTwo[0].length == 3) {
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();

    snakeTwo[2].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[2].followCat(snakeTwo[1]);
    snakeTwo[2].draw();
  }
  
  if (snakeTwo[0].length == 2) {
    snakeTwo[1].checkCollisionWithHead(snakeTwo[0]); 
    snakeTwo[1].followHead(snakeTwo[0]);
    snakeTwo[1].draw();
  }
  
  

  if (snakeTwo[0] > width || snakeTwo[0] < 0) {
    if (snakeTwo.length > 1) {
      snakeTwo.pop();
      }
    }
  
  else if (snakeTwo[0] > height || snakeTwo[0] < 0) {
    if (snakeTwo.length > 1) {
      snakeTwo.pop();
      }
  }
  
  
  
  for (let exitSegment of exit.exits) {
    if (snakeTwo[0].bumps(exitSegment)) {
      if (snakeTwo[0].length == 7) {
        image(endingOne, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length == 6) {
        image(endingTwo, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length == 5) {
        image(endingThree, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length == 4) {
        image(endingFour, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length == 3) {
        image(endingFive, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length == 2) {
        image(endingSix, 0, 0);
        noLoop();
        return;
      }
      if (snakeTwo[0].length <= 1) {
        image(endingSeven, 0, 0);
        noLoop();
        return;
      }
      
    }
}

}