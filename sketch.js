let system;
let systems = [];

let g; // gravity
let wind;

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.03, -0.01);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyForce(wind);
    s.applyAircraftForce(aircraft.position); // 비행기 영향받는 파티클
    s.run();
  }

  aircraft.update();
  aircraft.display();
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
  aircraft.setTarget(mPos); // 비행기 목표 위치 설정
}