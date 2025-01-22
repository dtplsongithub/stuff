// version

var version = "Alpha v1.1";
document.getElementById("version").innerText = version


// show score

setInterval(function(){
  document.getElementById("clicks").innerText = "Clicks in total: " + clicks;
  document.getElementById("cps").innerText = "Clicks per second: " + cpst;
})