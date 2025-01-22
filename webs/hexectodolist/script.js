let weneed = [
  "the windows are buggy and look bad, the bottom part extends to much",
  2,
  1,
  "error codes dont work",
  1,
  1,
  "add in the bottom-right screen something that tells you if the servers are on",
  0,
  0,
  "desktop icons are weirdly moved up and down",
  1,
  1,
  "themes are gone and we have to redo them",
  1,
  0,
  "window x and y (yes fix because they dont work)",
  0,
  1,
  "desktop icons x and y",
  0,
  0,
  "file explorer and notepad",
  2,
  2,
  "thememaker.js",
  0,
  0
];
let docu = "";
for (let i = 0; i < weneed.length; i += 3) {
  docu = "";
  if (weneed[i + 1] == 0) {
    docu = "<span class='green'><h2>";
    if (weneed[i + 2] == 0) {
      docu += "[ADD] ";
    } else if(weneed[i + 2] == 1){
      docu += "[FIX] ";
    }else{
      docu += "[FINISH] "
    };

    docu += "would be cool</h2> ";
  } else if (weneed[i + 1] == 1) {
    docu = "<span class='yellow'><h2>";
        if (weneed[i + 2] == 0) {
      docu += "[ADD] ";
    } else if(weneed[i + 2] == 1){
      docu += "[FIX] ";
    }else{
      docu += "[FINISH] "
    };
      docu+=" reccomended</h2>";
  } else if (weneed[i + 1] == 2) {
    docu = "<span class='red'><h2>";
        if (weneed[i + 2] == 0) {
      docu += "[ADD] ";
    } else if(weneed[i + 2] == 1){
      docu += "[FIX] ";
    }else{
      docu += "[FINISH] "
    };
      docu+="needed</h2>";
  }
  console.log(i);
  console.log(weneed[i]);
  console.log(docu)
  docu += weneed[i];
  docu += "</span><hr>";
  document.getElementById("ah").innerHTML += docu;
}



