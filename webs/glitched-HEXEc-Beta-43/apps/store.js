// The App store!
// Crashes the OS for no reason... idk why
apps.store = {
  "name": "App Store",
  "exec": store,
  "icon": "store.png"
}

var otherServers = {
  "duck": "https://hexec-server2.abruhuser.repl.co"
};

function store() {
  let id = win({ title: "App Store", inner: "Fetching...", width: 500, height: 400, closable: true, maximizable: true, minimizable: true })
  let storewin = win.instances[id];
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://hexec-sevrer.dateplays.repl.co/shop-apps"); // bruh on server side you need cors package and add app.use(cors());
  xhr.onload = function () {
    let json = JSON.parse(xhr.responseText);
    var sjson = {};
    var cserver = 0;
    for (i in otherServers) {
      (function (i) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", otherServers[i] + "/shop-apps");
        xhr.onload = function () {
          if (!xhr.responseText) return;
          try {
            var json = JSON.parse(xhr.responseText);
            sjson[i] = json;
          } catch (_) { return; }
          if (cserver === (Object.keys(otherServers).length - 1) || cserver > (Object.keys(otherServers).length - 1)) update();
        }

        xhr.send();
      })(i);
    }

    //let jsonkeys = Object.keys(json);
    let scrn = "mainmenu";
    let file = "";
    let server = "https://hexec-sevrer.dateplays.repl.co";
    let servername = null;
    function update() {
      if (scrn == "mainmenu") {
        storewin.inner.innerHTML = "";
        for (i in json) {
          let app = json[i];
          // hi
          (function (i) {
            let appbtn = document.createElement("button");
            appbtn.innerHTML = '<img src="https://hexec-sevrer.dateplays.repl.co/shop-getfile?file=' + app.icon + '" onerror="this.src=\'/images/icons/undefined%20file%20icon.png\'" height="32"/>&nbsp;' + app.title;
            storewin.inner.appendChild(appbtn);
            appbtn.addEventListener("click", function () {
              scrn = "app";
              file = i;
              server = "https://hexec-sevrer.dateplays.repl.co";
              servername = null;
              //console.log(i);
              update();
            }, false)
          })(i);
        }
        for (i in sjson) {
          for (j in sjson[i]) {
            let app = sjson[i][j];
            let sapp = otherServers[i];
            (function (i) {
              let appbtn = document.createElement("button");
              appbtn.innerHTML = '<img src="' + sapp + '/shop-getfile?file=' + app.icon + '" onerror="this.src=\'/images/icons/undefined%20file%20icon.png\'" height="32"/>&nbsp;' + app.title + "<br><small>from " + i + " server";
              storewin.inner.appendChild(appbtn);
              appbtn.addEventListener("click", function () {
                scrn = "app";
                file = j;
                server = sapp;
                servername = i;
                //console.log(i);
                update();
              }, false)
            })(i);
          }
        }
      } else if (scrn == "app") {
        let name = file;
        let app = json[name];
        if (servername !== null) app = sjson[servername][name]; else app = json[name];
        //console.log(app, json, jsonkeys, file);
        storewin.inner.innerHTML = '<button>Go Back</button><br><img src="' + server + '/shop-getfile?file=' + app.icon + '" onerror="this.src=\'/images/icons/undefined%20file%20icon.png\'" height="32"></img>&nbsp;' + app.title + "<br>" + app.description + "<br><button>Install</button>";
        storewin.inner.getElementsByTagName("button")[0].addEventListener("click", function () {
          scrn = "mainmenu";
          update();
        }, false);
        let instbtn = storewin.inner.getElementsByTagName("button")[1];
        instbtn.addEventListener("click", function () {
          if (bootOptions === "diablePlugin") return alert("ERROR: Could not install plugin in no plugin mode");
          // installing app...
          // process
          instbtn.removeEventListener("click", null);
          instbtn.disabled = true;
          instbtn.innerHTML = "Installing...";
          fetch(server + "/shop-getfile?file=" + app.script) // app.script is script location from app. oh ok
            .then(data => data.text())
            .then(body => {
              localStorage["/plugins/" + name] = body;
              instbtn.innerHTML = "Installed";
            });
        }, false);
      }
    }
    //update();
  }
  xhr.send();
}