class Flower {
    constructor(x, speed) {
        this.x = random(width);
        this.y = 360;
        this.sheet = flower;
        this.scale = 0;
        this.h = this.sheet.height;
        this.speed = speed/1.2;
    }

    show() {
        image(this.sheet, this.x, this.y, this.h * this.scale, this.h * this.scale);
    }

    move() {
        this.y -= this.speed;
        if (this.y < -this.h * this.scale) { 
            this.x = random(width);
            this.y = height;
        }
    }
}
