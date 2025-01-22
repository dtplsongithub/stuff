function DJS_BASE128ENC(input) {
  let send = "";
  let sendtemp = []
  for (i in input){
    send += input.charCodeAt(i).toString(2).padStart(8, "0");
  }
  send = send.match(/.{1,7}/g);
  send[send.length-1] = send[send.length-1].padEnd(7, "0");
  send.forEach((ie) => {
    sendtemp.push(" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁ"[parseInt(ie, 2)])
  })
  return sendtemp.join("");
}