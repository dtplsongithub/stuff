var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
const FPS = 20;
var x = 0;
setInterval(()=>{
// clearing the screen
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle="white"
  ctx.strokeStyle="white"
  ctx.lineWidth=2
// circle
  ctx.beginPath();
  ctx.arc(64, 35, 16, 0, 2 * Math.PI);
  ctx.fill(); 
// pattern
  for (let i = 0; i<4;i++ ){
    line(0, 45+i*15, 128, 45+i*15)
  }
  for (let i = 0; i<9; i++) {
    line((i*15)+x, 45, ((i*15)+x)*2-64, 96)
  }
  for (let i = 0; i<5; i++) {
    ctx.fillRect(Math.random()*128, Math.random()*45, 2, 2)
  }
  x %= 15
  x++
},1000/FPS)

function line(x0, y0, x1, y1) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}