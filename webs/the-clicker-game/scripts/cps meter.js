let cps = 0
var cpst = 0
let clicks = 0
let zinr = 0

document.querySelector("button").addEventListener("click",function(){
  cps++;
  clicks++;
  console.log("click")
})
setInterval(function(){
  cpst=cps;
  console.log("button clicked " + cpst + " times");
    if (cps == 0) {
    zinr++
  }else{
    zinr = 0
  }
  cps=0
},1000)