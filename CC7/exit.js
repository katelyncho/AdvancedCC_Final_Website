class Exit {
  constructor(exits) {
    this.exits = [{ x: 0, y: 150, w: 8, h: 50}];         
  }
  
  draw() {
   noStroke();
    fill(68, 65, 70);
    for (let exit of this.exits) {
      rect(exit.x, exit.y, exit.w, exit.h);
    }
  }
}