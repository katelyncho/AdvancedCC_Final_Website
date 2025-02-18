function introduction() {
  image(intro, 0, 0);
  noLoop();
}
  
  function keyPressed() {
    if (key == ' '){
      stage = 2;
      loop();
      }
  }