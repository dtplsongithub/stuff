var dsevendigit = {};
dsevendigit.update = ((settings) => {
  const segwidth = (settings.size.x / 100 * settings.sth);
  const n = settings.number;
  const data = ["11111001", "00110000", "01101111", "00111111", "10110110", "10011111", "11011111", "00111000", "11111111", "10111111"];
  const dataiu = data[n];
  let segcheck = 0;
  if(settings.version[1] != dsevendigit.version[1] && dsevendigit.warned == false) {
    console.warn("you are using an old version of dsevendigit.js.");
    dsevendigit.warned = true;
  }
  function performcheck(){ // to avoid copy+pasting big chunks of code
    if (dataiu[segcheck]=="1") {
      ctx.fillStyle = settings.color.on;
    } else {
      ctx.fillStyle = settings.color.off;
    }
    segcheck++;
  }
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + 0, settings.position.y + settings.margin);
  ctx.lineTo(settings.position.x + 0, settings.position.y + (settings.size.y * 0.5) - settings.margin);
  ctx.lineTo(settings.position.x + segwidth, settings.position.y + (settings.size.y * 0.5) - settings.margin - segwidth);
  ctx.lineTo(settings.position.x + segwidth, settings.position.y + segwidth + settings.margin);
  ctx.lineTo(settings.position.x + 0, settings.position.y + settings.margin);
  ctx.fill(); // up left
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + 0, settings.position.y +  settings.size.y * 0.5 +settings.margin);
  ctx.lineTo(settings.position.x + 0, settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin);
  ctx.lineTo(settings.position.x + segwidth, settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin - segwidth);
  ctx.lineTo(settings.position.x + segwidth, settings.position.y + settings.size.y * 0.5 + segwidth + settings.margin);
  ctx.lineTo(settings.position.x + 0, settings.position.y + settings.size.y * 0.5 + settings.margin);
  ctx.fill(); // down left
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.size.x, settings.position.y + settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x, settings.position.y + (settings.size.y * 0.5) - settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x - segwidth, settings.position.y + (settings.size.y * 0.5) - settings.margin - segwidth);
  ctx.lineTo(settings.position.x + settings.size.x - segwidth, settings.position.y + segwidth + settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x, settings.position.y + settings.margin);
  ctx.fill(); // up right
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.size.x , settings.position.y +  settings.size.y * 0.5 +settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x , settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x - segwidth , settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin - segwidth);
  ctx.lineTo(settings.position.x + settings.size.x - segwidth , settings.position.y + settings.size.y * 0.5 + segwidth + settings.margin);
  ctx.lineTo(settings.position.x + settings.size.x , settings.position.y + settings.size.y * 0.5 + settings.margin);
  ctx.fill(); // down right
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.margin, settings.position.y );
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y + segwidth);
  ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y + segwidth);
  ctx.lineTo(settings.position.x + settings.margin, settings.position.y );
  ctx.fill(); // up
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.margin, settings.position.y + settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y+ settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y + segwidth+ settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y + segwidth + settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.margin, settings.position.y + settings.size.y * 0.5);
  ctx.fill(); // middle 1
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.margin, settings.position.y + settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y+ settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y - segwidth+ settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y - segwidth + settings.size.y * 0.5);
  ctx.lineTo(settings.position.x + settings.margin, settings.position.y + settings.size.y * 0.5);
  ctx.fill(); // middle 2
  performcheck();
  ctx.beginPath();
  ctx.moveTo(settings.position.x + settings.margin, settings.position.y + settings.size.y);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y+ settings.size.y);
  ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y - segwidth+ settings.size.y);
  ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y - segwidth + settings.size.y);
  ctx.lineTo(settings.position.x + settings.margin, settings.position.y+ settings.size.y );
  ctx.fill(); // bottom
  if (settings.st == "hexagon") {
    segcheck = 0;
    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x , settings.position.y + settings.margin);
    ctx.lineTo(settings.position.x , settings.position.y + (settings.size.y * 0.5) - settings.margin);
    ctx.lineTo(settings.position.x - segwidth, settings.position.y + (settings.size.y * 0.5) - settings.margin - segwidth);
    ctx.lineTo(settings.position.x - segwidth, settings.position.y + segwidth + settings.margin);
    ctx.lineTo(settings.position.x , settings.position.y + settings.margin);
    ctx.fill(); // up left
    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x , settings.position.y +  settings.size.y * 0.5 +settings.margin);
    ctx.lineTo(settings.position.x , settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin);
    ctx.lineTo(settings.position.x - segwidth, settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin - segwidth);
    ctx.lineTo(settings.position.x - segwidth, settings.position.y + settings.size.y * 0.5 + segwidth + settings.margin);
    ctx.lineTo(settings.position.x , settings.position.y + settings.size.y * 0.5 + settings.margin);
    ctx.fill(); // down left
    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x + settings.size.x, settings.position.y + settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x, settings.position.y + (settings.size.y * 0.5) - settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x + segwidth, settings.position.y + (settings.size.y * 0.5) - settings.margin - segwidth);
    ctx.lineTo(settings.position.x + settings.size.x + segwidth, settings.position.y + segwidth + settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x, settings.position.y + settings.margin);
    ctx.fill(); // up right
    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x + settings.size.x , settings.position.y +  settings.size.y * 0.5 +settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x , settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x + segwidth , settings.position.y + settings.size.y * 0.5 + (settings.size.y * 0.5) - settings.margin - segwidth);
    ctx.lineTo(settings.position.x + settings.size.x + segwidth , settings.position.y + settings.size.y * 0.5 + segwidth + settings.margin);
    ctx.lineTo(settings.position.x + settings.size.x , settings.position.y + settings.size.y * 0.5 + settings.margin);
    ctx.fill(); // down right
    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x + settings.margin, settings.position.y );
    ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y);
    ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y - segwidth);
    ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y - segwidth);
    ctx.lineTo(settings.position.x + settings.margin, settings.position.y );
    ctx.fill(); // up
    performcheck();
    //middle not required its already ok
    performcheck();

    performcheck();
    ctx.beginPath();
    ctx.moveTo(settings.position.x + settings.margin, settings.position.y + settings.size.y);
    ctx.lineTo(settings.position.x + settings.size.x - settings.margin , settings.position.y+ settings.size.y);
    ctx.lineTo(settings.position.x + settings.size.x - settings.margin - segwidth, settings.position.y + segwidth+ settings.size.y);
    ctx.lineTo(settings.position.x + settings.margin + segwidth, settings.position.y + segwidth + settings.size.y);
    ctx.lineTo(settings.position.x + settings.margin, settings.position.y+ settings.size.y );
    ctx.fill(); // bottom
  }
})
dsevendigit.version = ["1.0", "231111"];
dsevendigit.warned = false;