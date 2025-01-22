document.getElementById("hd").innerText = `your windows version is ${navigator.oscpu} (might probably most likely work)`
function updateRegExpTest(){
  let reh = document.getElementById("textst").value;
  let h = document.getElementById("about");
  let send = ["<table><tr><th>question</th><th style='width:33%;overflow-wrap:break-word;'>value</th><th>regexp used</th></tr>"]
  send.push(`your text is:</td><td> ${reh}</td><td>none :/</td>`);
  send.push(`contains numbers? ${tfr(/\d/)}`);
  send.push(`contains the letter h? ${tfr(/h/)}`);
  send.push(`contains the letter h? (case insensitive) ${tfr(/h/i)}`);
  send.push(`contains either "red" or "apple"? ${tfr(/(red|apple)/)}`);
  send.push(`contains whitespaces? ${tfr(/\s/)}`);
  send.push(`starts with an uppercase letter? ${tfr(/^[A-Z]/)}`);
  send.push(`has a 4-digit(or higher) number? ${tfr(/\d{4,}/)}`);
  send.push(`ends with a lowercase letter? ${tfr(/[a-z]$/)}`);
  send.push(`has an "a" followed by a "b"? ${tfr(/a(?=b)/)}`);
  send.push(`contains u-0057 (W)? ${tfr(/\u0057/)}`);
  h.innerHTML = send.join("</tr><tr><td>your text ") + "</table><br> the regexp syntax is so goofy lmao" ;
}
function isnull(g){
  return g!=null
}
function tfr(rex) { // fun fact rex means king in latin :nerd:
  let reh = document.getElementById("textst").value;
  if(isnull(rex.exec(reh))){
    return `</td><td style="border:2px solid #5f5;"><b>${isnull(rex.exec(reh))}</b></td><td>${rex}</td>`;
  } else {
    return `</td><td style="border:2px solid #f55;"><b>${isnull(rex.exec(reh))}</b></td><td>${rex}</td>`;
  }
}
function* hh(){
  var x = 1;
  var y = 0;
  while(true){
    yield x+y
    x+=y
    yield x+y
    y+=x
  }
}
const iterator = hh(0)