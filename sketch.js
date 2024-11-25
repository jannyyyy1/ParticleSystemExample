let system;
let systems = [];

let g; // gravity
let wind;

let repel;

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.03, -0.01);
  repel = new Repeller(createVector(0, height/2));
}

function draw() {
  background(51);
  repel.show();
  repel.move();

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    // s.applyForce(wind);
    s.applyRepeller(repel);
    s.run();
  }
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
}

function keyPressed() {
  if (key == " ") {
    repel.pos.x = 0;
  }
}