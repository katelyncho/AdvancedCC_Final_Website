function stageOne() {
    image(backgroundOne, 0, 0);
    wall.draw();
    image(icons, 0, 0)
    exit.draw();
    noStroke();
    fill(68, 65, 70);
    rect(635, 160, 5, 50);
  

    snake[0].move();
    snake[0].draw();

    snake[1].checkCollisionWithHead(snake[0]); 
    snake[1].followHead(snake[0]);
    snake[1].draw();

    snake[2].checkCollisionWithHead(snake[0]); 
    snake[2].followCat(snake[1]);
    snake[2].draw();

    snake[3].checkCollisionWithHead(snake[0]); 
    snake[3].followHamster(snake[2]);
    snake[3].draw();

    snake[4].checkCollisionWithHead(snake[0]); 
    snake[4].followBeetle(snake[3]);
    snake[4].draw();

    snake[5].checkCollisionWithHead(snake[0]); 
    snake[5].followSnail(snake[4]);
    snake[5].draw();

    snake[6].checkCollisionWithHead(snake[0]); 
    snake[6].followStarfish(snake[5]);
    snake[6].draw();
  

    for (let wallSegment of wall.walls) {
    if (snake[0].hits(wallSegment)) {
      snake[0].reset();
      break;
      }
    }
      
    for (let exitSegment of exit.exits) {
      if (snake[0].bumps(exitSegment)) {
          stage = 3;
          break;
      }
    }
  
}