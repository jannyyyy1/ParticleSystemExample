class ParticleSystem {
    constructor(position) {
        this.pos = position.copy();
        this.vel = createVector(0, 2);
        this.particles = [];
    }

    move() {
        this.pos.add(this.vel);
    }

    show() {
        noStroke();
        fill(230, 50, 50);
        circle(this.pos.x, this.pos.y, 5);
    }

    addParticle() {
        this.particles.push(new Particle(this.pos));
    }

    applyGravity(g) {
        this.applyForce(g);
    }

    applyForce(force) {
        for (let p of this.particles) {
            p.applyForce(force);
        }
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }
}