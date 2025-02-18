class Starfish {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.sheet = starfish;
    this.scale = scale;
    this.h = this.sheet.height;
    this.frame = 0;
    this.frames = this.sheet.width / this.h;
    this.isFollowingSnail = false;
  }

  
  draw() {
    image(this.sheet, this.x, this.y, this.h * this.scale, this.h * this.scale,
      this.h * floor(this.frame), 0, this.h, this.h);
    
    this.frame += 0.1;
    if (this.frame >= this.frames) {
      this.frame = 0;
    }
  }

  followSnail(snail) {
    if (this.isFollowingSnail) {
      let X = snail.x;
      let Y = snail.y;

      let lerpFactor = 0.07;
      this.x = lerp(this.x, X, lerpFactor);
      this.y = lerp(this.y, Y, lerpFactor);
    }
  }

  checkCollisionWithHead(head) {
    let distance = dist(this.x, this.y, head.x, head.y);
    if (distance < this.h * this.scale) {
      this.isFollowingSnail = true;
    }
  }
  
  reset() {
    this.x = 240;
    this.y = 80;
  }
}
