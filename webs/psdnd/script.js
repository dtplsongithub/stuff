var c = document.getElementById("canvas")
var ctx = c.getContext("2d");
setInterval(update, 1000/60);
c.width= 480;
c.height=360;
function update(){
  ctx.fillStyle="white";
  ctx.fillRect(0, 0, c.width, c.height);
  dsevendigit.update({
    "number": ~~get("n").value,
    "color": {
      "on": get("oncolor").value,
      "off": get("onfcolor").value,
    },
    "st": get("st").value,
    "position": {
      "x": ~~get("px").value,
      "y": ~~get("py").value,
    },
    "size": {
      "x": ~~get("size x").value,
      "y": ~~get("size y").value
    },
    "margin": ~~get("margin").value,
    "sth": ~~get("segmentthickness").value,
    "version": ["1.0", "231111"]
  });
  get("b").innerText = `dsevendigit.update({
    "number": ${~~get("n").value},
    "color": {
      "on": "${get("oncolor").value}",
      "off": "${get("onfcolor").value}",
    },
    "st": "${get("st").value}",
    "position": {
      "x": ${~~get("px").value},
      "y": ${~~get("py").value},
    },
    "size": {
      "x": ${~~get("size x").value},
      "y": ${~~get("size y").value}
    },
    "margin": ${~~get("margin").value},
    "sth": ${~~get("segmentthickness").value},
    "version": ["1.0", "231111"]
  });`
}


function get(toget){
  return document.getElementById(toget);
}