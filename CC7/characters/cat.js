class Cat {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.sheet = cat;
    this.scale = scale;
    this.h = this.sheet.height;
    this.frame = 0;
    this.frames = this.sheet.width / this.h;
    this.isFollowingHead = false;
  }

  
  draw() {
    image(this.sheet, this.x, this.y, this.h * this.scale, this.h * this.scale,
      this.h * floor(this.frame), 0, this.h, this.h);
    
    this.frame += 0.1;
    if (this.frame >= this.frames) {
      this.frame = 0;
    }
  }

  followHead(head) {
    if (this.isFollowingHead) {
      let X = head.x;
      let Y = head.y;

      let lerpFactor = 0.07;
      this.x = lerp(this.x, X, lerpFactor);
      this.y = lerp(this.y, Y, lerpFactor);
    }
  }

  checkCollisionWithHead(head) {
    let distance = dist(this.x, this.y, head.x, head.y);
    if (distance < this.h * this.scale) {
      this.isFollowingHead = true;
    }
  }
  
  reset() {
    this.x = 420;
    this.y = 160;
  }

}
