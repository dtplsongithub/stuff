var c = 0; // clicks
var cpc = 1;  //click per click
var cps = 0; // clicks per second
var upg = {} // h 
var oldc = 0;
var tcps = 0; // c - oldc
var maxtcps = 0; // max tcps. thats it. completely self-explanatory.
document.getElementById("button").addEventListener("click", (e)=>{
  c += cpc;
})

setInterval(function(){
  tcps = c - oldc;
  oldc = c;
},1000) // update total clicks per second

setInterval(function () {
  c += cps / 10;
  if (tcps > maxtcps) maxtcps = tcps
  if (localStorage["/themes/chosen"] == "regularwhite") {
  document.getElementById("info").innerHTML = `<b>Cheese:</b> ${Math.round(c)}
  <br><b>Cheese per click: </b>${cpc}
  <br><b>Cheese per second: </b>${cps}
  <br><b>Total cheese per second: </b><span style="color: hsla(${rangecolor(tcps, maxtcps, true)}deg, 100%, ${rangecolor(tcps, maxtcps, false, 45)}%, 100%) ">${Math.round(tcps)}</span>`; // display info
  } else {
    document.getElementById("info").innerHTML = `<b>Cheese:</b> ${Math.round(c)}
    <br><b>Cheese per click: </b>${cpc}
    <br><b>Cheese per second: </b>${cps}
    <br><b>Total cheese per second: </b><span style="color: hsla(${rangecolor(tcps, maxtcps, true)}deg, 100%, ${rangecolor(tcps, maxtcps, false)}%, 100%) ">${Math.round(tcps)}</span>`; // display info
  }
}, 99);

function rangecolor(n, max, color, white){ // color: false: brightness true: color
  if (color) {
    if (n < 0) return 0;
    return 90;
  }
  if (n < 0) return 50;
  if (n > max) return 100;
  if (white == 45) {
    return 50 / max * n
  }
  if (n == 0) return 100;
  return 100- 50/max * n;
}

var update = {};

update.cpc = function () {
  if (upg.cpc[upg.cpcn].cost <= c) {
    c -= upg.cpc[upg.cpcn].cost;
    cpc = upg.cpc[upg.cpcn].upgrade;
    upg.cpcn++;
    if (upg.cpc[upg.cpcn]) {
      document.getElementById("cpcbutton").innerHTML = `${upg.cpc[upg.cpcn].name}<br>cost: ${upg.cpc[upg.cpcn].cost}`;
    } else {
      document.getElementById("cpcbutton").innerHTML = `maxed out`;
      document.getElementById("cpcbutton").onclick = "";
    }
  }
}

update.cps = function () {
  if (upg.cps[upg.cpsn].cost <= c) {
    c -= upg.cps[upg.cpsn].cost;
    cps = upg.cps[upg.cpsn].upgrade;
    upg.cpsn++;
    if (upg.cps[upg.cpsn]) {
      document.getElementById("cpsbutton").innerHTML = `${upg.cps[upg.cpsn].name}<br>cost: ${upg.cps[upg.cpsn].cost}`;
    } else {
      document.getElementById("cpsbutton").innerHTML = `maxed out`;
      document.getElementById("cpsbutton").onclick = "";
    }
  }
}


// test$15$3/ttestyt$30$4
// ttestytatuta$30$43/this is a test :) :( :D$303$4333
// conecpt of encoded upgrades because why not
function save() {
  return btoa([c.toFixed(1), cpc, cps, maxtcps.toFixed(1), upg.cpcn, upg.cpsn].join("$"));
}
function savetols() {
  localStorage.setItem("/save", save());
}
function load(enc) {
  enc = atob(enc);
  enc = enc.split("$");
  console.log(enc);
  c = parseInt(enc[0]);
  cpc = parseInt(enc[1]);
  cps = parseInt(enc[2]);
  maxtcps = parseInt(enc[3]);
  upg.cpcn = parseInt(enc[4]);
  upg.cpsn = parseInt(enc[5]);
}
function loadfromls() {
  load(localStorage.getItem("/save"));
}
var upgencoded = ""
fetch("/upgrades.txt")
  .then((data) => data.text())
  .then((body) => {
    upgencoded = body;
    update.upg();
  })

update.upg = function () {
  let upgtemp = upgencoded.split("\n");
  upg.cpcn = 0;
  upg.cpsn = 0;
  upg.cpc = [];
  upg.cps = [];
  upgtemp[0] = upgtemp[0].split("&");
  for(i in upgtemp[0]) {
    upgtemp[0][i] = upgtemp[0][i].split("$");
    upg.cpc.push({
      "name" : upgtemp[0][i][0],
      "cost" : parseInt(upgtemp[0][i][1]),
      "upgrade" : parseInt(upgtemp[0][i][2])
    })
  }
  upgtemp[1] = upgtemp[1].split("&");
  for(i in upgtemp[1]) {
    upgtemp[1][i] = upgtemp[1][i].split("$");
    upg.cps.push({
      "name" : upgtemp[1][i][0],
      "cost" : parseInt(upgtemp[1][i][1]),
      "upgrade" : parseInt(upgtemp[1][i][2])
    })
  }
  document.getElementById("cpcbutton").innerHTML = `${upg.cpc[upg.cpcn].name}<br>cost: ${upg.cpc[upg.cpcn].cost}`;
  document.getElementById("cpsbutton").innerHTML = `${upg.cps[upg.cpsn].name}<br>cost: ${upg.cps[upg.cpsn].cost}`;
}