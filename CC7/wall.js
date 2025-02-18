class Wall {
  constructor(walls) {
    this.walls = [
      { x: 143, y: 0, w: 4, h: 150 },
      { x: 143, y: 214, w: 4, h: 147 },
      { x: 143, y: 289, w: 79, h: 4 },
      { x: 218, y: 141, w: 4, h: 150 },
      { x: 218, y: 141, w: 79, h: 4 },
      { x: 214, y: 67, w: 153, h: 4 },
      { x: 290, y: 214, w: 4, h: 146 },
      { x: 363, y: 68, w: 4, h: 228 },
      { x: 363, y: 292, w: 80, h: 4 },
      { x: 363, y: 145, w: 154, h: 4 },
      { x: 437, y: 0, w: 4, h: 75 },
      { x: 513, y: 0, w: 4, h: 148 },
      { x: 435, y: 213, w: 82, h: 4 },
      { x: 513, y: 214, w: 4, h: 146 }
    ];
  }

  draw() {
    noStroke();
    fill(68, 65, 70);
    for (let wall of this.walls) {
      rect(wall.x, wall.y, wall.w, wall.h);
    }
  }
}
