let c = document.getElementById("canvas");
let ctx = c.getContext('2d');
let FPS = 16;
setInterval(update, 1000 / FPS);
c.width = innerWidth;
c.height = innerHeight;
let char = [];
let fontsize=24;
function update() {
  ctx.fillStyle = "#00000033";
  ctx.fillRect(0, 0, c.width, c.height);
  if (c.width != innerWidth || c.height != innerHeight) {
    c.width = innerWidth;
    c.height = innerHeight;
  }
  ctx.font = `${fontsize}px Consolas`;
  ctx.fillStyle = "green";
  for (i in char) {
    ctx.fillText(random(0,1),char[i][0],char[i][1])
    char[i][1]+=fontsize
    if (char[i][1] > c.height) {
      char.splice(i, 1)
    }
    
  }
  char.push([random(0,Math.ceil(c.width/fontsize))*fontsize,0]);
}
function random(a, b) {
  if (a > b) {
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}