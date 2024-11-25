class Repeller {
    constructor(aPos) {
        this.pos = aPos.copy();
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    move() {
        this.vel = createVector(1, 0);
        this.update();
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    repel(p) {
        let f = p5.Vector.sub(this.pos, p.position);
        let d = f.mag();
        d = constrain(d, 5, 50);

        let s = -1 * 50 / (d * d);
        f.setMag(s);
        return f;
    }

    show() {
        noStroke();
        fill(200, 0, 0);
        circle(this.pos.x, this.pos.y, 20);
    }
}