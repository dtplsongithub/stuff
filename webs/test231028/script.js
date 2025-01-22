var img = new Image();
img.onload = (()=>{
  setInterval(update, 1000 / FPS);
})
img.src = "/i revereb.png";
var c = document.getElementById("canvas");
var ctx = c.getContext('2d');
const FPS = 60;
var t = 0;
var cx, cy;
c.width = innerWidth;
c.height = innerHeight;
cx = c.width / 2;
cy = c.height / 2;
function update() {
  if (c.width != innerWidth || c.height != innerHeight) {
    c.width = innerWidth;
    c.height = innerHeight;
    cx = c.width / 2;
    cy = c.height / 2;
  }
  ctx.fillStyle = "#77f";
  ctx.fillRect(0, 0, c.width, c.height);
  t++
  tilesetdraw(img, Math.floor(t/10)%9, 100, 100, 3, 3, cx/2, cy/2);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial"
  ctx.fillText("the original image",cx/2*3, cx/5);
  ctx.drawImage(img, cx/2*2.75, cx/3);
}
function tilesetdraw(image,tc , tilex, tiley, mtw, mth, dx, dy) {
  // image, which tile, size x, and y of tile, maximum number of tiles on x, and y, x, y
  var sx = (tc%mtw)*tilex;
  var sy = Math.floor(tc/mth)*tiley;
  ctx.drawImage(image, sx, sy, tilex, tiley, dx, dy, tilex, tiley);
}