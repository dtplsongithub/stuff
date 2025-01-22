const FPS = 30;
const trailcount = 5;
const traildelay = 60; 
let c = document.getElementById("canvas");
let ctx = c.getContext('2d');
c.width = innerWidth;
c.height = innerHeight;

let ghost = []
let timer = 0
let counter = 0
let initdone = false


function create (){
	lines = [
	  {
	    "color":{
	      "hue":random(0,360)
	    },
	    "posx":[],
	    "posy":[],
	    "vel":[[],[],[],[]],
	  },
	  {
	    "color":{
	      "hue":random(0,360)
	    },
	    "posx":[],
	    "posy":[],
	    "vel":[[],[],[],[]]
	  }
	];
	//create
	let tempcreate,temp2create
	for (let i=0;i<2;i++) {
	  for(let j=0;j<4;j++){
	     tempcreate=random(5,14);
	  	temp2create=random(0,tempcreate);
	   lines[i].vel[j].push(tempcreate-(tempcreate-temp2create));
	   lines[i].vel[j].push(tempcreate-temp2create);
	  }
	  lines[i].posx.push(random(c.width*0,c.width*0.5));
	  lines[i].posx.push(random(c.width*0.5,c.width*1));
	  lines[i].posx.push(random(c.width*0.5,c.width*1));
	  lines[i].posx.push(random(c.width*0.5,c.width*0));
	  lines[i].posy.push(random(c.height*0,c.height*0.5));
	  lines[i].posy.push(random(c.height*0.5,c.height*1));
	  lines[i].posy.push(random(c.height*0.5,c.height*1));
	  lines[i].posy.push(random(c.height*0.5,c.height*0));
	}

	ghost.push(lines)
}

create()
setInterval(update, 1000 / FPS);

function update() {
	
  //background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, c.width, c.height);
  if (c.width != innerWidth || c.height != innerHeight) {
    c.width = innerWidth;
    c.height = innerHeight;
    ctx.fillStyle = "#000000";
  }
  for(let i=0;i<2;i++){
    // update color
    lines[i].color.hue+=0.07
    ctx.strokeStyle="hsla("+lines[i].color.hue+"deg,100%,50%,100%)";
    render(i);
  }
} 

function random(a, b) {
  if (a > b) {
    var _c = a;
    a = b;
    b = _c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function isoffscreen(v,cq){   // true for x, false for y
  if(cq){
    return v < 0 || v > c.width
  }else{
    return v < 0 || v > c.height
  }
}

function drawline(x,xx,y,yy){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(xx,yy);
  ctx.stroke();
}

function cap(cap,n){
  if (n>cap) {
    return cap
  } else{
    return n
  }
}

function render(i){ 
  // draw
    // drawline(lines[i].posx[0],lines[i].posx[1],lines[i].posy[0],lines[i].posy[1]);
    // drawline(lines[i].posx[1],lines[i].posx[2],lines[i].posy[1],lines[i].posy[2]);
    // drawline(lines[i].posx[2],lines[i].posx[3],lines[i].posy[2],lines[i].posy[3]);
    // drawline(lines[i].posx[3],lines[i].posx[0],lines[i].posy[3],lines[i].posy[0]);
		timer++
		if(initdone||(timer==traildelay)) {
			console.log(timer)
			console.log(counter)
			console.log(initdone)
			let tmp = ghost[0]
			ghost.reverse()
			ghost.push(tmp)
			ghost.reverse()
	
			if (ghost.length > trailcount) {
				ghost.pop()
			}
			timer = 0
			counter++
			if (counter==trailcount) { initdone = true }
		} 
	
		for (let j=0; j<ghost.length; j++) {
			drawline(ghost[j][i].posx[0],ghost[j][i].posx[1],ghost[j][i].posy[0],ghost[j][i].posy[1]);
	    drawline(ghost[j][i].posx[1],ghost[j][i].posx[2],ghost[j][i].posy[1],ghost[j][i].posy[2]);
	    drawline(ghost[j][i].posx[2],ghost[j][i].posx[3],ghost[j][i].posy[2],ghost[j][i].posy[3]);
	    drawline(ghost[j][i].posx[3],ghost[j][i].posx[0],ghost[j][i].posy[3],ghost[j][i].posy[0]);
		}
    for(let j=0;j<4;j++){
      ghost[0][i].posx[j]+=ghost[0][i].vel[j][0];
      ghost[0][i].posy[j]+=ghost[0][i].vel[j][1];
      let ebs = random(-0.2,0.2)
      if(isoffscreen(ghost[0][i].posx[j],true)){
        ghost[0][i].vel[j][0]=ghost[0][i].vel[j][0]*-1+ebs;
        ghost[0][i].vel[j][1]=ghost[0][i].vel[j][1]-ebs;
        ghost[0][i].posx[j]+=ghost[0][i].vel[j][0];
      }
      if(isoffscreen(ghost[0][i].posy[j],false)){
        ghost[0][i].vel[j][1]=ghost[0][i].vel[j][1]*-1+ebs;
        ghost[0][i].vel[j][0]=ghost[0][i].vel[j][0]-ebs;
        ghost[0][i].posy[j]+=ghost[0][i].vel[j][1];
      }
    }

		// drawline(lines[i].posx[0],lines[i].posx[1],lines[i].posy[0],lines[i].posy[1]);
  //   drawline(lines[i].posx[1],lines[i].posx[2],lines[i].posy[1],lines[i].posy[2]);
  //   drawline(lines[i].posx[2],lines[i].posx[3],lines[i].posy[2],lines[i].posy[3]);
  //   drawline(lines[i].posx[3],lines[i].posx[0],lines[i].posy[3],lines[i].posy[0]);
}