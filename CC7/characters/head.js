class Head {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.sheet = head;
    this.scale = scale;
    this.h = this.sheet.height;
    this.frame = 0;
    this.frames = this.sheet.width / this.h;
    this.speed = 2;
    this.dir = createVector(-1, 0);
    
    this.length = 7;
  }
  
  
  draw() {
    image(this.sheet, this.x, this.y, this.h * this.scale, this.h * this.scale,
      this.h * floor(this.frame), 0, this.h, this.h);
    
    this.frame += 0.1;
    if (this.frame >= this.frames) {
      this.frame = 0;
    }
  }

  move() {
    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
    if (this.x < 0 || this.x + this.h * this.scale > 640 || this.y < 0 || this.y + this.h * this.scale > 360) {
      this.reset();
      this.length--;
    }
  }

  setDirection(x, y) {
    this.dir.set(x, y);
  }
  
  hits(wall) {
    return (
      this.x < wall.x + wall.w &&
      this.x + this.h * this.scale > wall.x &&
      this.y < wall.y + wall.h &&
      this.y + this.h * this.scale > wall.y
    );
  }
  
    bumps(exit) {
    return (
      this.x < exit.x + exit.w &&
      this.x + this.h * this.scale > exit.x &&
      this.y < exit.y + exit.h &&
      this.y + this.h * this.scale > exit.y
    );
  }
  
    crashes(car) {
  let headLeft = this.x;
  let headRight = this.x + this.h;
  let headTop = this.y;
  let headBottom = this.y + this.h;

  let carLeft = car.x;
  let carRight = car.x + car.h;
  let carTop = car.y;
  let carBottom = car.y + car.h;

  return (
    headRight > carLeft && 
    headLeft < carRight && 
    headBottom > carTop && 
    headTop < carBottom 
  );
}
  
  collides(flower) {
  let headLeft = this.x;
  let headRight = this.x + this.h;
  let headTop = this.y;
  let headBottom = this.y + this.h;

  let flowerLeft = flower.x;
  let flowerRight = flower.x + flower.h;
  let flowerTop = flower.y;
  let flowerBottom = flower.y + flower.h;

  return (
    headRight > flowerLeft && 
    headLeft < flowerRight && 
    headBottom > flowerTop && 
    headTop < flowerBottom 
  );
}
 
  reset() {
    this.x = 600;
    this.y = 160;
  }
}