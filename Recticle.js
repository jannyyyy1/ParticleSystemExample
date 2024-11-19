class Recticle extends Particle {
    constructor(position) {
        super(position);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        rect(this.position.x, this.position.y, this.w*5, this.w*5)
    }
}