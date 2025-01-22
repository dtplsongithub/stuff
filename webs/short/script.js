setInterval(function(){
  let d = new Date;
  let y = d.getFullYear().toString();
  y = [`${y.charAt(0)}${y.charAt(1)}`,`${y.charAt(2)}${y.charAt(3)}`]
  y[0] = String.fromCharCode(~~y[0]+0xc0);
  y[1] = String.fromCharCode(~~y[1]+0xc0);
  let l = d.getMonth().toString(12)
  let z = d.getDate().toString(32)
  let h = d.getHours().toString(24)
  let m = String.fromCharCode(d.getMinutes()+0xc0);
  let s = String.fromCharCode(d.getSeconds()+0xc0);
  document.getElementById("date").innerText = `${y[0]}${y[1]}${l}${z}${h}${m}${s}
  THE DATE IN ONLY 7 CHARACTERS, ISNT THAT JUST AMAZING?????`
}, 66)