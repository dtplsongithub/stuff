// CREATE


var x, text, list;
list=[];

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

// random new integer
function random_new_integer() {
  while (!(list.indexOf(x) + 1 == 0)) {
    x = mathRandomInt(1, 1024);
  }
  return x;
}

// letter # of "" but it starts counting at the end
function letterofreverse(x, text) {
  return text.charAt(((text.length - x) - 1));
}
function createnewlist(){
list=[];
for (var count = 0; count < 1024; count++) {
  list.push( random_new_integer());
}
  console.log("list created succsesfully");

console.log(list);
}
  createnewlist();




// CANVAS AND UPDATING


c = document.getElementById("canvas");
ctx = c.getContext("2d");
const FPS = 60;

// no setInterval(update, 1000/FPS);
var ustatus, ustage
function update (ninstant,oka,statt) {
  console.log("update")
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, c.width , c.height);
if(ninstant){
  console.log("ninstant update with values "+ustatus+" "+ustage)
  if(ustatus <1026){
    ustatus=ustatus+1;
  } else {
    ustage++;
    ustatus=0;
  }
  if(ustage == 5){
    console.log("cleared interval")
    clearInterval(updating);
  } 
}
  for (j = 1; j <= 1024; j++) {
    if (ninstant&&j==statt){
      ctx.strokeStyle = "#f00";
    } else {
      ctx.strokeStyle = "#fff";
    }
    drawline(j,j);
  }
  if(ninstant){
    onesortusingdigit(ustage,ustatus);
  }
}
update(false, null, null);
function draw (y){
  return 768-list[y]/(4/3);
}
function drawline (x,y){
  ctx.beginPath();
  ctx.lineTo(x,768);
  ctx.lineTo(x,draw(y));
  ctx.lineWidth = 1;
  ctx.closePath();
  ctx.stroke();
}



  // SORTING



var a0=[];
var b1=[];
var c2=[];
var d3=[];
var e4=[];
var f5=[];
var g6=[];
var h7=[];
var i8=[];
var j9=[];
var valux=0;
function sortLSD(){
  instantsortusingdigit(1);
  update(false, null, null);
  instantsortusingdigit(2);
  update(false, null, null);
  instantsortusingdigit(3);
  update(false, null, null);
  instantsortusingdigit(4);
  update(false, null, null);
  console.log("lsd sort succsesful");
}
function vsortLSD() {
ustatus=0
  ustage=1
  var updating = setInterval(update(true,null,null), 1000/FPS);
}
/* function sortMSD(){
  sortusingdigit(4);
  sortusingdigit(3);
  sortusingdigit(2);
  sortusingdigit(1);
} */ // no msd because no
function onesortusingdigit(digit,stage){
  if (stage<1){
  a0=[];
  b1=[];
  c2=[];
  d3=[];
  e4=[];
  f5=[];
  g6=[];
  h7=[];
  i8=[];
  j9=[];
  } else if (stage<1025){
valux=getnumber((list[stage]?list[stage]:0),digit); //ponali helped me here thanks :D
    if (valux==0) {
      a0.push(list[stage]);
    }else if(valux==1){
      b1.push(list[stage]);
    }else if(valux==2){
      c2.push(list[stage]);
    }else if(valux==3){
      d3.push(list[stage]);
    }else if(valux==4){
      e4.push(list[stage]);
    }else if(valux==5){
      f5.push(list[stage]);
    }else if(valux==6){
      g6.push(list[stage]);
    }else if(valux==7){
      h7.push(list[stage]);
    }else if(valux==8){
      i8.push(list[stage]);
    }else if(valux==9){
      j9.push(list[stage]);
    }else{
      console.warn("expected number instead got something else");
    }
  }else if (stage == 1026) {
    list = [].concat(a0,b1,c2,d3,e4,f5,g6,h7,i8,j9);
console.log("concat succsesful");
  console.log("noninstantSortUsingDigit "+digit+" succsesful") 
  } else {
    console.log("end")
  }
}
function instantsortusingdigit(digit){
  a0=[];
  b1=[];
  c2=[];
  d3=[];
  e4=[];
  f5=[];
  g6=[];
  h7=[];
  i8=[];
  j9=[];
  
  for (k = 1; k <= 1024; k++) {
valux=getnumber((list[k]?list[k]:0),digit); //ponali helped me here thanks :D
    if (valux==0) {
      a0.push(list[k]);
    }else if(valux==1){
      b1.push(list[k]);
    }else if(valux==2){
      c2.push(list[k]);
    }else if(valux==3){
      d3.push(list[k]);
    }else if(valux==4){
      e4.push(list[k]);
    }else if(valux==5){
      f5.push(list[k]);
    }else if(valux==6){
      g6.push(list[k]);
    }else if(valux==7){
      h7.push(list[k]);
    }else if(valux==8){
      i8.push(list[k]);
    }else if(valux==9){
      j9.push(list[k]);
    }else{
      console.warn("expected number instead got something else");
    }
  }
  list = [].concat(a0,b1,c2,d3,e4,f5,g6,h7,i8,j9);
console.log("concat succsesful");
  console.log("sortUsingDigit"+digit+" succsesful")
}
function getnumber(dignr,n){ 
return Number(dignr.toString().charAt(reverse(dignr,n)));  
}
function reverse(digtt, n){
  return digtt.toString().length-n;
}
