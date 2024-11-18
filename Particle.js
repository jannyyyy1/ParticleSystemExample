// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position = position.copy();
        this.lifespan = 255;
        this.c = color(250);
        this.w = 4;
    }

    run() {
        this.update();
        this.display();

        let p = random();
        if (p < 0.001) {
            let f = p5.Vector.random2D();
            f.mult(3);
            this.applyForce(f);
            this.c = color(255, random(100), random(100));
        }
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;

        this.acceleration.set(0, 0);
    }

    display() {
        noStroke();
        // stroke(this.c, this.lifespan);
        // strokeWeight(2);
        fill(this.c, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);
    }

    isDead() {
        return this.lifespan < 0;
    }
}

