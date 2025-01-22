pl = {
  "run": function(code) {
    code = code.split("\n");
    var returnsend = "";
    var treelevel = 0; 
    var treelevelstate = [false];
    var treelevelnowin = [false];
    for (i in code){
      console.log(code[i], treelevelstate, treelevelnowin,treelevel);
      switch (code[i][0]) {
        case "<": {
          if (code[i] == "<>") {
            log(prompt());
            break;
          }
          let temp = false;
          let send = "";
          let temp2 = "";
          for (j in code[i]) {
            if (j == 0) continue;
            if (code[i][j] == "%" && code[i][j-1] != "/") {
              temp = !temp;
              if (!temp) {
                if(pl.data[temp2]) {
                  send+=pl.data[temp2];
                } else {
                  console.error(temp2 + " is undefined")
                }
              }
              continue;
            }
            if (temp) {
              temp2+=code[i][j];
            } else {
              if(code[i][j-1] == "/" || code[i][j] != "/") send+=code[i][j];
            }
          }
          log(send);
          break;
        }
        case "@": {
          if (code[i][2] != " ") console.error("variable type and name MUST be separated by a space");
          switch (code[i][1]) {
            case "s": {
              if (code[i].indexOf(">") == -1) {
                set(code[i].substring(3, code[i].indexOf("=")), code[i].substring(code[i].indexOf("=")+1, code[i].length));
              } else {
                set(code[i].substring(3, code[i].indexOf("=")), window.prompt());
              }
              break;
            }
            case "o": {
              if (code[i].indexOf(">") == -1) {
                set(code[i].substring(3, code[i].indexOf("=")), eval(code[i].substring(code[i].indexOf("=")+1, code[i].length)));
              } else {
                set(code[i].substring(3, code[i].indexOf("=")), window.prompt());
              }
              break;
            }
            default: {
              console.error("unknown variable type: "+ code[i][1]);
            }
          }
          break;
        }
        case "?": {
          if (!treelevelstate[treelevel] == !treelevelnowin[treelevel]) treelevel++;
          let temp = false;
          let send = "";
          let temp2 = "";
          for (j in code[i]) {
            if (j < code[i].indexOf("(")) continue;
            if (j > code[i].indexOf(")")) continue;
            if (code[i][j] == "%" && code[i][j-1] != "/") {
              temp = !temp;
              if (!temp) {
                if(pl.data[temp2]) {
                  send+=`pl.data["${temp2}"]`;
                } else {
                  console.error(temp2 + " is undefined")
                }
              }
              continue;
            }
            if (temp) {
              temp2+=code[i][j];
            } else {
              if(code[i][j-1] == "/" || code[i][j] != "/") send+=code[i][j];
            }
          }
          if (!treelevelstate[treelevel] != !treelevelnowin[treelevel]) continue;
          if (eval(send)) {
            treelevelstate[treelevel]=true;
          } else {
            treelevelstate[treelevel]=false;
          }
          treelevelnowin[treelevel]=true;
          break;
        }
        case ":": {
          treelevelnowin[treelevel]=false;
          break;
        }
        case "}": {
          if (!treelevelstate[treelevel] == !treelevelnowin[treelevel]) treelevel--;
          treelevelstate.pop();
          treelevelnowin.pop();
          break;
        }
        default: {
          console.error("unknown command: " + code[i][0]);
        }
      }
    }
    function log(stuff) {
      if (!treelevelstate[treelevel] != !treelevelnowin[treelevel]) return;
      returnsend += stuff;
      returnsend += "\n";
    }
    function set(what, towhat) {
      if (!treelevelstate[treelevel] != !treelevelnowin[treelevel]) return;
      pl.data[what] = towhat;
    }
    return returnsend
  },
  "data": {}
}