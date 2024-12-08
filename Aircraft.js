// Aircraft 클래스 정의
class Aircraft {
    constructor() {
      this.position = createVector(width / 2, height - 50);
      this.target = createVector(width / 2, height - 50);
      this.speed = 5;
    }
  
    setTarget(target) {
      this.target = target;
    }
  
    update() {
      let direction = p5.Vector.sub(this.target, this.position);
      direction.setMag(this.speed);
      this.position.add(direction);
    }
  
    display() {
      fill(255, 0, 0);
      noStroke();
      triangle(
        this.position.x, this.position.y - 10,
        this.position.x - 10, this.position.y + 10,
        this.position.x + 10, this.position.y + 10
      );
    }
  }
  