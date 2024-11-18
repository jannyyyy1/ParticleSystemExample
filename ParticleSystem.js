class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    applyGravity(g) {
        this.applyForce(g);
    }

    applyForce(force) {
        for (let p of this.particles) {
            p.applyForce(force);
        }
    }

    pLine(sp, ep) {

        strokeWeight(0.1);
        stroke(250, 200);
        let d = p5.Vector.dist(sp.position, ep.position);
        let off = map(mouseY, 0, height, 5, 300);
        if (d < off) {
            line(sp.position.x, sp.position.y, ep.position.x, ep.position.y)
        }
    }

    connectParticles(sp) {
        for (let p of this.particles) {
            this.pLine(sp, p);
        }
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            this.connectParticles(p);
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }
}