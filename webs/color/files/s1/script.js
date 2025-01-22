let c = document.getElementById("canvas");
let ctx = c.getContext('2d');
let FPS = 60;
setInterval(update, 1000 / FPS);
c.width = innerWidth;
c.height = innerHeight;
let cx, cy;
cx = c.width / 2;
cy = c.height / 2;
let particle = [];
function update() {
  if (c.width != innerWidth || c.height != innerHeight) {
    c.width = innerWidth;
    c.height = innerHeight;
    cx = c.width / 2;
    cy = c.height / 2;
    particle = [];
  }
  ctx.fillStyle = "#00000088";
  ctx.fillRect(0, 0, c.width, c.height);
  for (i in particle) {
    ctx.fillStyle = `hsla(${particle[i][2]})`;
    particle[i][0] += particle[i][3];
    particle[i][1] += particle[i][4];

    let denfsa = Math.max(Math.abs(particle[i][0] - cx), Math.abs(particle[i][1] - cy)) / 500;

    let size = 3 - Math.max(Math.abs(particle[i][3]), Math.abs(particle[i][4])) * denfsa
    ctx.fillRect(particle[i][0], particle[i][1], size, size)
    if (particle[i][0] < 0 || particle[i][0] > c.width || particle[i][1] < 0 || particle[i][1] > c.height) {
      particle.splice(i, 1)
    }
  }
  let speed = 15
  let vxcreate = random(-speed, speed)
  let vycreate = random(-speed, speed)
  while (!(vxcreate != 0 && vycreate != 0)) {
    vxcreate = random(-speed, speed)
    vycreate = random(-speed, speed)
  }
  if (location.hash=="#rgb"){
    particle.push([cx + vxcreate * random(3, 10), cy + vycreate * random(3, 10), `${random(0, 360)}deg,100%, 50%, 100%`, vxcreate, vycreate])// x, y, [hsla], x velocity, y velocity
  } else {
    particle.push([cx + vxcreate * random(3, 10), cy + vycreate * random(3, 10), `${random(0, 360)}deg,100%, ${random(75, 100)}%, 100%`, vxcreate, vycreate])// x, y, [hsla], x velocity, y velocity
  }
  
}
function random(a, b) {
  if (a > b) {
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
