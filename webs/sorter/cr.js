//define everything
var canvas, context;
canvas = document.getElementById("h");
context = canvas.getContext("2d");

// do the thing
var listn = [];
var nrln = 0;
while(listn.length!=100){
nrln = Math.round(Math.random()*100)+1;
  console.log(nrln);
  if(!listn.includes(nrln)){
    listn[listn.length] = nrln;
    console.log("added")
  }
}
console.log(listn);

// render script
context.fillStyle = "#eee";
context.fillRect(0, 0, canvas.width, canvas.height);
function render(){
  for(var i=0; i<listn.length; i++){
    context.fillStyle = "#000900";
    context.fillRect(i*(canvas.width/listn.length) , canvas.height-(listn[i]*(canvas.height/101)), (canvas.width/listn.length),listn[i]*(canvas.height/101)); // nwm now it works 
  } 
}
render();
function sort(){
var low = 0;
  var done = 0;
  var low_i = 0;
  while(done !== listn.length){
    low = 999;
    for(var i=done; i<listn.length; i++){
      if (listn[i]<low){
        low = listn[i];
        low_i = i;
      }
    }
    // move
    listn[low_i]=0
    for(var j=low_i;j!==0;j--) {
      console.log(listn[j] + " is now " + listn[j-1] + " item "+ j)
      listn[j]=listn[j-1];
    }
    listn[done]=low
    done++;
    
}
  render();
}