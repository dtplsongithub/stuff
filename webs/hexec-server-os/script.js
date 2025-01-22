function printwarn(){
	console.log("%c \u26a0 WARNING \u26a0 %c\n\nDoing anything with this or anything else with your clipboard may be dangerous to do and reccommended to not do anything. You may:\n\n%cLose all your data\nMake the system unusable\nBluescreen on boot%c\n\nIf the script you're trying to put here is from HEXEc team, or you're one of the HEXEc team members/moderators, you can ignore this.\nThank you for reading.", "color:yellow;font-family:Impact;font-size:100px;border: 5px yellow solid;", "font-size:20px;", "font-size:25px;text-decoration: underline;", "font-size:20px;");
};printwarn();
// im on phone again hi
var logs = "";
var log = {
  _log: function (string, type, branch) {
    if (typeof branch !== "string" || !branch) branch = "LOG";
    if (typeof type !== "string" || !type) type = "Unknown Log";
    if (typeof string !== "string") return; else {
      var time = new Date().toUTCString();
      let text = "[" + time + "] [" + type + "] [" + branch + "]: " + string;
      logs += text + "\n";
      if (p <= 100) try { document.getElementById('debugglog').innerText += (text + "\n"); } catch (e) { };
      console.log(text);
    }
  },
  log: function (log, branch) { this._log(log, "Log", branch); },
  error: function (error, branch) { this._log(error, "ERROR", branch); },
  debug: function (msg, branch) { this._log(msg, "debug", branch); }
}

//localStorage["osnotfound"]=True;
if (localStorage["osnotfound"]) {
  log._log("Operating System not found", "bios", "error");
  document.body.innerHTML = "Operating System not found";
  // document.body.style.background="black";
  document.body.style.color = "white";
  document.body.style.fontFamily = "Consolas, monospace"
  document.body.style.cursor = "none";
  localStorage.removeItem("osnotfound")
} else {
  log._log("os succsesfully started", "bios", "boot");
  document.body.style.background = "";
}
// console.log("Welcome!")
var themekey = localStorage["/themes/chosen"];
var themes = {
  "default": "Default theme",
  "coder": "For Coders",
  "green": "Greeniest",
  "dark": "Dark Mode",
  "win95": "Microsoft Windows 95"
  //"smooth": "smooth theme"
}; // themelist.json

var themeee = document.getElementById("theme");
var windowList = document.getElementById
  ('windows-lists');
var scrnsvr = document.getElementById("screensaver");
if (!themekey) { localStorage["/themes/chosen"] = "default"; themekey = "default"; } // HEY YOU DUCK IT UP BRUH
themekey = localStorage["/themes/chosen"]; //"win95";

fetch("/themes/" + themekey + ".css")
  .then((res) => {
    if (!res.ok) { localStorage["/themes/chosen"] = "default"; themekey = "default"; return window.location.reload(); }
    return res.text().then(body => {
      if (themeee) {
        themeee.innerHTML = body;
        log.debug("loaded", "theme " + themekey);
      } else { localStorage["/themes/chosen"] = "default"; themekey = "default"; return window.location.reload(); }
    }).catch(window.onerror);
  }).catch(window.onerror);
let inWayBackMachine = false;
if (document.getElementById("wm-ipp-base")){
	document.getElementById("wm-ipp-base").remove();
	inWayBackMachine=true;
}
var bootdiv = document.getElementById('boot-screen');
bootdiv.style.display = "block";
document.getElementById("scriptnotworking").remove();
document.getElementById("noscript").remove();
var desktop = document.getElementById('desktopp');
var bootp = document.getElementById('bootp-inner');
var dicon = document.getElementById('desktop-icons');
var listbar = document.getElementById('listbar');
var listbar_clock = document.getElementById("listbar_clock");
var version = "Alpha 1.4";
var fullversion = "0.00.1.4 Alpha";
var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
var tips = ["Press start", '#42 - <a href="https://www.google.com/search?client=firefox-b-1-d&q=What+is+the+answer+to+life%2C+the+universe%2C+and+everything">What\'s the meaning of life?</a>', "Release will soon come!", "Minecraft is very pog.", "Do ctrl+u for some pog suprise", "<h1>have you done your homework yet?</h1>", "This thing looks like ubuntu but a little bit different, isn't it?", "'Very Cute Dolphin' is just a remake of the Windows 93 'Not a Virus, trust me... i'm a dolphin' icon.", "We didn't forgor the markdown file!", "Chat with anyone with Socket Messenger.", "Go to the calculator and type in the first number wich isn't a baloon, a diagonal line, then the balloon. After typing this, click the button having two parallel lines. If you do, you'll get free bobux!!!", "Socket Messenger's name having Socket is a reference for socket.io, wich is actually used in the app!", "do you actually read these? \\minecraft xdd", "1 terminal isn't enough, why not add another?", "The files on the 'my files' app are visible to the admins.", "The galactic alphabet is a very Y𝙹⚍ ᓭ⍑ᔑꖎꖎ ʖᒷ ᒷᔑℸ ̣ ᒷリ ʖ|| ℸ ̣ ⍑ᒷ ᔑᒲ𝙹⊣⚍ᓭ ⎓𝙹∷ ╎ℸ ̣  ∴╎ꖎꖎ リᒷ⍊ᒷ∷ ⎓𝙹∷⊣╎⍊ᒷ ||𝙹⚍ ᔑリ↸ ||𝙹⚍∷ ᓭ╎リᓭ, !¡∷ᒷ!¡ᔑ∷ᒷ.", "The credits icon is the second version of the markdown file.", "We're in beta, so the look of the OS's default is the 'classic' one.", "This is a tip. There are a lot of them actually!", "Try comparing WaterFox and Cat Explorer!", "HEXEc is saved in wayback machine 10 times now!", "-insert tip here-", "more update and tips coming soon! Stay tuned! ", "wew beta 3.32 noice", "press esc", "@everyone take nitro https://dlscord-app.com/gift/A4JkyMkdGtaCjgB steam give nitro"];
tips.unshift("You have a chance of " + (Math.round((100 / (tips.length + 1)) * 100) / 100) + "% of getting any (unique) message.");
function getRandTip() { return tips[Math.round(Math.random() * (tips.length - 1))]; }
document.getElementById("tip").innerHTML = getRandTip() + '<br><button onclick="selectStartupOptions({keyCode:27})">Startup Options</button>'.repeat(isMobile);
document.getElementById('bootver').innerText = version;
var bootOptions = 'normal';
log._log("loading system apps", "SYSTEM", "apps");
function getKey() {
	if (!localStorage.getItem('key')) localStorage.setItem('key', prompt('Key?'));
	return localStorage.getItem('key');
}
var apps = {
	"log.": {
		"name": "Server Logs",
		"icon": "serverlogs.png",
		"exec": function(){
			// this will be soon
		}
  },/*
	"servkill": {
		"name": "Kill server",
		"icon": "nothing.png",
		exec() {
      if (!confirm("are you sure?")) return;
			let key = getKey();
			fetch('https://HEXEc-sevrer.dateplays.repl.co/serverOS/killServer?key='+key, {mode: 'no-cors'})
      .then(x => {
				msgbox("Server killed successfully", 'warning', "serverOS",[
					{
						title: 'OK',
						script: function (d) {  return win.instances[d].close(); }
					}
				]);
			}).catch(x => {
				alert('error');
				console.error(x)
			})

		}
	},*/
	"errorcodeviewer": {
		name: "Error Code Viewer",
		icon: "nothing.png",
		exec() {
			let key = getKey();
			let errCode = Number(prompt('Error code?'))
			fetch('https://HEXEc-sevrer.dateplays.repl.co/serverOS/getError?code='+escape(errCode)+'&key='+key)
      .then(async x => {
				alert('The error code message is: ' + await x.text())
			}).catch(x => {
				alert('error');
				console.error(x)
			})
		}
	}
}
log._log("loaded system apps", "bios", "apps")
// Open app
function app(file) {
	try{
  	if (file.endsWith(".hsc")) {
			try{
    		batch(localStorage[file])
			}catch{
				popup("/msgbox icons/error.png","File/App couldn't be runned","HEXEc tried to open <i>Batch Files</i> to run the file but it does not exist, or outputs an error while trying to run. Try restarting your machine or try again later.")
			}
  	} else if (file.endsWith(".dom")) {// why not .js? // beacause some are node.js files wich does same extention as .js and this .js is DOM JS so its a .dom :/ // ooh k
			try{
    		eval(localStorage[file])
			}catch{
				popup("/msgbox icons/error.png","File/App couldn't be runned","HEXEc tried to open <i>Browser JavaScript</i> to run the file but it does not exist, or outputs an error while trying to run. Try restarting your machine or try again later.")
			}
  	} else {
    	apps.notepad.exec(file);
  	}
	} catch {// ill be back after i finish reading a book (after 30 mins) bye
		popup("/msgbox icons/error.png","File/App couldn't be runned","HEXEc tried to open a following app to run the file but it does not exist. Your operation couldn't be operated. Sorry for the trouble.")
	}
}

// moved to line 237

//document.getElementById("listbar_clock").addEventListener("click", _ => { return _.preventDefault(); }); // bruh error

setInterval(() => {
  var hours = (new Date().getHours());
  var strhours = hours.toString();//"0".repeat(hours<10) + hours;
  var mins = (new Date().getMinutes());
  var strmins = "0".repeat(mins < 10) + mins;
  var secs = (new Date().getSeconds());
  var strsecs = "0".repeat(secs < 10) + secs;
  if (listbar_clock) listbar_clock.innerHTML = strhours + ":" + strmins; // crash fix
})

//var appsjson = "";
fetch("/apps/list.json")
  .then(data => data.text())
  .then(body => {
    log.debug("appslist loaded", "apps");
    var ee = JSON.parse(body);
    for (a = 0; a < (ee.length); a++) {
      if (ee[a]) {
        (function (ee, a) {
          fetch("/apps/" + (ee[a]))
            .then(data => data.text())
            .then(body => {
              (function (body) {
                log.debug("loaded", "file " + ee[a]);
                try {
                  eval(body);
                } catch (e) {
                  log.error(e, "file " + ee[a]);
                }
                if (p >= 100) showdesktop();
                // showdesktop(); console.log("finished " + ee[a] + ", " + a);
              })(body);
            });
        })(ee, a);
      }
    }
  });

// lets test first.
if (!localStorage["/sys/firstboot"]) {
      /*msgbox("Welcome! This is HEXEc. Go to credits.md for Credits.", "info", "Welcome!", [
        {
          title: "OK",
          script: function (d) { return win.instances[d].close(); }
        }
      ])*/
			$("#setup")[0].innerHTML="<h1>Welcome, fellow user!</h1><br>Welcome to HEXEc!<br>Please follow some steps to continue, and to start using HEXEc."
  localStorage["/sys/firstboot"] = "true";
}

var p = 0;
var booti = setInterval(() => {
  if (p >= 100) {
    try { document.getElementById('debugglog').innerText = ""; } catch (e) { };
    bootdiv.style.display = 'none';
    listbar.style.display = '';
    desktop.style.display = '';
    windowList.style.display = '';
    window.removeEventListener('keyup', null);
    if (location.hash !== "#bootmode=cmdonly") if (localStorage["/startup.js"]) try { console.log(eval(localStorage["/startup.js"])); } catch (e) { console.error(e); }
    // open apps from app store
    var isPlunginEnable = (function () {
      if (location.hash === "#bootmode=no-plugins") return false;
      if (location.hash === "#bootmode=cmdgui") return true;
      if (location.hash === "#bootmode=cmdonly") return true;
      for (i = 0; i < Object.keys(localStorage).length; i++) {
        if (localStorage.key(i).startsWith("/plugins/")) {
          let p = localStorage.key(i);
          let name = p.replace("/plugins/", "");
          (function (i, p, name) {
            try {
              //log._log(name + " has been loaded.", "system", "plugin");
              log.debug("loaded", "plugin " + name);
              eval(localStorage[p]);
            } catch (err) {
              log.error(err, "plugin " + name);
              msgbox("The Plugin " + name + " has outputted a critical error.\nPlease ask the HEXEc team to fix the following critical error:\n" + err, "error", "Plugin error", [
                {
                  title: "close",
                  script: function (d) { return win.instances[d].close(); }
                }
              ]);
            }
          })(i, p, name);
        }
      } // here
      return true;
    })();

    if (!isPlunginEnable) bootOptions = "diablePlugin";
    if (location.hash === "#bootmode=cmdonly") {
      bootdiv.style.display = 'none';
      listbar.style.display = 'none';
      desktop.style.display = '';
      windowList.style.display = 'none';
      bootOptions = 'cmd';
      apps = {
        "crash": {
          "name": "crash the os",
          "exec": function () {
            window.onerror("The Terminal Asked to run a BSOD.");
          },
          "icon": "exe file icon.png"
        }
      }
      desktop.innerHTML = '<iframe src="/terminal.html" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%"></iframe>';
    }
    if (location.hash === "#bootmode=cmdgui") {
      bootdiv.style.display = 'none';
      listbar.style.display = 'none';
      dicon.style.display = 'none';
      desktop.style.display = '';
      windowList.style.display = '';
      bootOptions = 'cmdgui';
      // funni line
      var winid = win({ title: "Terminal", inner: '<iframe src="/terminal.html" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%"></iframe>', closable: false, maximizable: true, minimizable: false, width: 500, height: 400 });
      apps["desktop"] = {
        "name": "get the desktop back",
        "exec": function () {
          dicon.style.display = '';
          listbar.style.display = '';
          bootOptions = 'normal';
          win.instances[winid].close();
          delete apps["desktop"];
          showdesktop();
        },
        "icon": "exe file icon.png"
      };
    }

    if (location.hash !== "#bootmode=cmdonly" || location.hash !== "#bootmode=cmdgui") showdesktop(); 

    location.hash = "#";

    printwarn();
    return clearInterval(booti);
  } else {
    p += Math.round(Math.random() * 2);
    bootp.style.width = p + "%";
    document.getElementById("bootp-text").innerHTML = p + "%";
  }
}, 25);

window.onmessage = function (e) {
  if (e.data.event === "eval") {
    //console.log('run',e.data.data)
    try {
      top.postMessage({ resType: 'result', data: eval(e.data.data) }, "*");
    } catch (err) {
      top.postMessage({ resType: 'error', data: err }, "*")
    }
  }
}

function selectStartupOptions(e) {
  if (e.keyCode === 27) {
    window.removeEventListener('keyup', null);
    clearInterval(booti);
    document.getElementById("tip").style.display = 'none';
    p = 100;
    log._log("entering boot options menu", "system", "boot");;

    fetch("/themes/" + themekey + ".css")
      .then((res) => {
        if (!res.ok) { localStorage["/themes/chosen"] = "default"; themekey = "default"; return window.location.reload(); }
        return res.text().then(body => {
          if (themeee) {
            themeee.innerHTML = body;
            log.debug("loaded", "theme " + themekey);
          } else { localStorage["/themes/chosen"] = "default"; themekey = "default"; return window.location.reload(); }
        }).catch(window.onerror);
      }).catch(window.onerror);

    bootdiv.innerHTML = "<h1>Startup Options</h1>You are seeing this beacause you pressed the <i>Escape key</i>, or this OS has suddently <i>crashed</i>.<br><br><button onclick='location.hash=\"#\";location.reload();'>Normal Boot</button><br><button onclick='location.hash=\"#bootmode=cmdonly\";location.reload();'>CommandLine only mode</button><br><button onclick='location.hash=\"#bootmode=cmdgui\";location.reload();'>Terminal with gui</button><br><button onclick='location.hash=\"#bootmode=no-plugins\";location.reload();'>Disable Plugins</button>";
    // var menu1 = document.createElement('button');
    // menu1.innerText = "CommandLine only mode";
    // menu1.addEventListener("click", function () {
    //   location.hash = "#bootmode=cmdonly";
    //   location.reload();
    // });
    // bootdiv.appendChild(menu1);
    // bootdiv.appendChild(document.createElement('br'));
    // var menu2 = document.createElement('button');
    // menu2.innerText = "Terminal with gui";
    // menu2.addEventListener("click", function () {
    //   location.hash = "#bootmode=cmdgui";
    //   location.reload();
    // });
    // bootdiv.appendChild(menu2);
    // var menu3 = document.createElement("button");
    // menu3.innerText = "Disable Plugins";
    // menu3.addEventListener("click", function () {
    //   location.hash = "#bootmode=no-plugins";
    //   location.reload();
    // });
    // bootdiv.appendChild(menu3);
  }
}

window.addEventListener("keyup", selectStartupOptions, false);
if (localStorage["bsod"]) {
  localStorage.removeItem("bsod");
  selectStartupOptions({ keyCode: 27 });
}

function showdesktop(arg) {
  if (bootOptions === 'cmd') return;
  if (bootOptions === 'cmdgui') return;
  dicon.innerHTML = "";
  dicon.addEventListener("click", function (e) {
    if (e.target[e.target.length-1]==dicon) unselectall();
  })
  function unselectall() {
    var btns = dicon.getElementsByTagName("button")
    for (i = 0; i < btns.length; i++) { btns[i].classList.remove("selected"); };
  }

  for (i in apps) {
    (function (apps, i) {
      if (!apps[i]) return;
      if (apps[i].hide) return;
      var em = document.createElement('button');
      var icon = '/images/icons/' + encodeURIComponent((apps[i].icon ? apps[i].icon : 'exe file icon.png'));
      var errIcon = '/images/icons/' + encodeURIComponent("undefined icon file.png");
      var appName = (apps[i].name ? he.encode(apps[i].name) : i);
      if (apps[i].iconURI) icon = he.encode(apps[i].iconURI);
      em.innerHTML = '<img onerror="this.src=\'' + errIcon + '\'" src="' + icon + '" width="32" height="32" /><br>' + appName;
      em.id = "app_icon_" + i;
      em.classList.add('icons');
      log.debug("loaded " + appName, "desktop")
      if (isMobile) {
        em.addEventListener('click', function () {
          try { apps[i].exec(); } catch (err) {
            log.error(err, "app " + appName);
            msgbox(err, "error", "app error", [
              {
                title: "close",
                script: function (d) { return win.instances[d].close(); }
              }
            ]);
          }
        });
      } else {
        em.addEventListener('click', function () { unselectall(); em.classList.add("selected"); });
        em.addEventListener('dblclick', function () {
          em.classList.remove("selected");
          try { apps[i].exec(); } catch (err) {
            log.error(err, "app " + appName);
            msgbox(err, "error", "app error", [
              {
                title: "close",
                script: function (d) { return win.instances[d].close(); }
              }
            ]);
          }
        });
      }
      dicon.appendChild(em);
      return;
    })(apps, i); // ok i fixed it or not
  }
  top.postMessage({ event: 'desktopLoaded', arg }, '*');
}


var popupHeight = 0;
function popup(icon, title, content, intime) {
  if (!intime) intime = 5000;
  if (typeof intime !== 'number') intime = 5000;
  let elem = document.createElement("div");
  if (icon != '') {
    elem.innerHTML = '<img src="' + icon + '" height="32px" width="32px"></img><b>' + title + '</b><br>' + content;
  } else {
    elem.innerHTML = '<b>' + title + '</b><br>' + content;
  }
  elem.classList = "popup";
  elem.style.transition = "opacity 2s ease-in-out";
  elem.style.right = "0px";

  var i;
  var h;
  i = setTimeout(function () {
    elem.style.opacity = 0.5;
    h = setTimeout(function () { 
      popupHeight = popupHeight - elem.offsetHeight;
      elem.remove(); 
    }, 2000);
  }, intime);

  elem.addEventListener('mouseover', function () {
    clearTimeout(h);
    clearTimeout(i);
    elem.style.transition = "";
    elem.style.opacity = 1;
  });

  elem.addEventListener('mouseout', function () {
    elem.style.transition = "opacity 2s ease-in-out";
    i = setTimeout(function () {
      elem.style.opacity = 0.5;
      h = setTimeout(function () { 
        popupHeight = popupHeight - elem.offsetHeight;
        elem.remove(); 
      }, 2000);
    }, intime);
  });

  windowList.appendChild(elem);
  elem.style.top = popupHeight + "px";
  popupHeight = popupHeight + elem.offsetHeight;
}

function win(content) {
  // fix the wininnerbug
  if (content.inner.startsWith("<br>")) content.inner = content.inner.replace(/\<br\>/, "");

  // normal stuff
  if (bootOptions === 'cmd') {
    if (!win.instances[0]) win.instances[0] = { // create fake window
      title: "", div: document.createElement("div"), inner: document.createElement("div"), // fake div lol
      top: 0, left: 0, width: 0, height: 0, draggable: true, closed: false,
      minimized: false, maximized: false, resizable: false, setTitle: function () { }, close: function () { }, maximize: function () { },
      unmaximize: function () { }, minimize: function () { }, restore: function () { }, active: function () { }, inactive: function () { }
    };
    return 0;
  };

  if (win.instances.length >= 1000 || win.instances > 1000) {
    for (winid in win.instances) {
      try {
        win.instances[winid].div.remove();
        delete win.instances[winid];
      } catch (e) {
        delete win.instances[winid];
      }
    }

    win.instances[0] = { // create fake window
      title: "", div: document.createElement("div"), inner: document.createElement("div"), // fake div lol
      top: 0, left: 0, width: 0, height: 0, draggable: true, closed: false,
      minimized: false, maximized: false, resizable: false, setTitle: function () { }, close: function () { }, maximize: function () { },
      unmaximize: function () { }, minimize: function () { }, restore: function () { }, active: function () { }, inactive: function () { }
    };

    bootOptions = "cmd"; // because window will not open in CommandLine only mode
    window.onerror("Too Many windows");
    return 0;
  }

  win.firstZIndexView++;
  var title = content.title;
  var html = content.inner;
  var id = win.instances.length;
  var width = content.width;
  var height = content.height;
  if (!width) width = 300;
  if (!height) height = 200;
  log.debug("window id " + id + " appended", "Window");
  var elem = document.createElement("div");
  elem.classList.add('window');
  elem.id = "win_" + id;
  var mh = "calc(100% - 19px)";
  //if (height === 200) mh = "calc(100% - 22px)"; else mh = "100%";
  //elem.classList.add(elem.id);
  if (isMobile) {
		elem.style.top=elem.style.left="0px";
		elem.style.width="100vw";
		elem.style.height="100vh";
		if(!win.maximizable){
    	elem.style.top = ((window.innerHeight - height) / 2) + "px";
    	elem.style.left = ((window.innerWidth - width) / 2) + "px";
		}
  } else {
    elem.style.top = Math.round(Math.random() * (window.innerHeight - height)) + "px";
    elem.style.left = Math.round(Math.random() * (window.innerWidth - width)) + "px";
  }
  elem.style.width = width + "px";
  elem.style.height = height + "px";
  elem.style.zIndex = win.firstZIndexView;
  elem.innerHTML = '<div id="win_' + id + '_title" class="wintitle">' + he.encode(title) + ('<div onclick="win.instances[' + id + '].close();" id="win_' + id + '_closebtn" class="wintitlebtn winclosebtn">&#x1F5D9;</div>').repeat((content.closable) + 0) + ('<div onclick="win.instances[' + id + '].maximize();" id="win_' + id + '_maximizebtn" class="wintitlebtn winmaximizebtn">&#x1F5D6;</div>').repeat((content.maximizable) + 0) + ('<div onclick="win.instances[' + id + '].minimize();" id="win_' + id + '_minimizebtn" class="wintitlebtn winminimizebtn">&#x1F5D5;</div>').repeat((content.minimizable) + 0) + '</div><div id="win_' + id + '_inner" style="width:100%;height:' + mh + ';" class="wininner">' + html + '</div>';
  windowList.appendChild(elem);

  if (isMobile) {
    if (!content.maximizable) { dragElement(id); resizeElement(id); }
  } else { dragElement(id); resizeElement(id); }

  win.instances.push(
    {
      title: title,
      div: elem,
      inner: document.getElementById("win_" + id + "_inner"),
      top: parseInt(elem.style.top.replace(/px/g, ""), 10),
      left: parseInt(elem.style.left.replace(/px/g, ""), 10),
      width: width,
      height: height,
      draggable: true,
      closed: false,
      minimized: false,
      maximized: false,
      resizable: content.resizable,
      setTitle: function (newTitle) {
        title = newTitle;
        win.instances[id].title = newTitle;
        var tmpelem = document.getElementById('win_' + id + '_title');
        if (tmpelem) tmpelem.innerHTML = he.encode(newTitle) + ('<div onclick="win.instances[' + id + '].close();" id="win_' + id + '_closebtn" class="wintitlebtn winclosebtn">&#x1F5D9;</div>').repeat((content.closable) + 0) + ('<div onclick="win.instances[' + id + '].maximize();" id="win_' + id + '_maximizebtn" class="wintitlebtn winmaximizebtn">&#x1F5D6;</div>').repeat((content.maximizable) + 0) + ('<div onclick="win.instances[' + id + '].minimize();" id="win_' + id + '_minimizebtn" class="wintitlebtn winminimizebtn">&#x1F5D5;</div>').repeat((content.minimizable) + 0);
      },
      close: function () {
        var close = true;
        if (win.instances[id].closeScript) if (typeof win.instances[id].closeScript === 'function') close = win.instances[id].closeScript();
        if (close) {
          win.instances[id].div.classList.add("closing");
          win.instances[id].div.innerHTML += ""/* resets window to apply close animation*/;
          setTimeout(() => { win.instances[id].div.remove(); delete win.instances[id]; }, 100);
          console.log("window " + id + " closed.");
          win.instances[id].closed = true;
        }
      },
      maximize: function () {
        win.instances[id].div.style.top = "0px";
        win.instances[id].div.style.left = "0px";
        win.instances[id].div.style.width = "calc( 100vw - ( 5px + 5px ) )"; // Viewport Width.
        win.instances[id].div.style.height = "calc( 100vh - ( 16px + 5px + 5px + 5px ) )";  // Viewport Height.
        win.instances[id].draggable = false;
        document.getElementById("win_" + id + "_maximizebtn").innerHTML = "&#x1F5D7;";
        document.getElementById("win_" + id + "_maximizebtn").onclick = function () { win.instances[id].unmaximize(); };
        document.getElementById("win_" + id + "_maximizebtn").id = "win_" + id + "_unmaximizebtn";
        win.instances[id].maximized = true;
        win.instances[id].active();
      },
      unmaximize: function () {
        if (isMobile) return;
        win.instances[id].div.style.top = win.instances[id].top + "px";
        win.instances[id].div.style.left = win.instances[id].left + "px";
        win.instances[id].div.style.width = win.instances[id].width + "px";
        win.instances[id].div.style.height = win.instances[id].height + "px";
        win.instances[id].draggable = true;
        document.getElementById("win_" + id + "_unmaximizebtn").innerHTML = "&#x1F5D6;";
        document.getElementById("win_" + id + "_unmaximizebtn").onclick = function () { win.instances[id].maximize(); };
        document.getElementById("win_" + id + "_unmaximizebtn").id = "win_" + id + "_maximizebtn";
        win.instances[id].maximized = false;
        win.instances[id].active();
      },
      minimize: function () {
        if (bootOptions === 'cmdgui') return;
        win.instances[id].div.classList.add("minimizing");
        setTimeout(() => {
          win.instances[id].div.style.display = "none";
          listbar.innerHTML += '<div onclick="win.instances[' + id + '].restore()" class="minimizewin" id="win_' + id + '_obj">' + title + '</div>';
          win.instances[id].div.classList.remove("minimizing");
        }, 100);
        win.instances[id].minimized = true;
      },
      restore: function () {
        win.instances[id].div.style.display = "block";
        document.getElementById("win_" + id + "_obj").remove();
        win.instances[id].minimized = false;
        win.instances[id].active();
      },
      active: function () {
        for (i = 0; i < win.instances.length; i++) { if (win.instances[i]) { if (win.instances[i].inactive) { win.instances[i].inactive(); } } };
        win.instances[id].div.classList.add("active")
        win.firstZIndexView++;
        win.instances[id].div.style.zIndex = win.firstZIndexView;
        listbar.style.zIndex = win.firstZIndexView + 1;
        scrnsvr.style.zIndex = win.firstZIndexView + 2;
      },
      inactive: function () {
        win.instances[id].div.classList.remove("active");
      }
    }
  );
  win.instances[id].active();
  if (isMobile && content.maximizable) win.instances[id].maximize();
  win.instances[id].div.addEventListener("mousedown", win.instances[id].active);
  return id;
}

win.instances = [];
win.firstZIndexView = 0;

function msgbox(content, icon, title, buttons) {
  if (bootOptions === 'cmd') return;
  if (!icon) icon = "info";
  if (!content) content = "none";
  if (!Array.isArray(buttons)) buttons = [];
  for (i = 0; i < buttons.length; i++) {
    if (!buttons[i].script) buttons[i].script = function () { return; };
    if (!buttons[i].title) buttons[i].title = "none";
  }
  if (icon == "info") {
    icon = "<img width='64' height='64' src='/msgbox%20icons/info.png'></img>"
    if (!title) title = "Information" // i do these titles in case there is no custom title, or when the "custom title" does not work     ah well ok
  } else if (icon == "question") {
    icon = "<img width='64' height='64' src='/msgbox%20icons/question.png'></img>";
    if (!title) title = "Question"
  } else if (icon == "warning") {
    icon = "<img width='64' height='64' src='/msgbox%20icons/warning.png'></img>";
    if (!title) title = "Alert!"
  } else if (icon == "error") {
    icon = "<img width='64' height='64' src='/msgbox%20icons/error.png'></img>";
    if (!title) title = "Oops!"
  } else if (icon == "none") {
    icon = "";
    if (!title) title = "Dialog"
  } else {
    throw new Error('Icon invalid.');
  }
  var id = win({ title: title, inner: ('<center><h1>' + icon + '</h1></center><p>' + content + '</p>' + ('<button></button>'.repeat(buttons.length))), closable: true });
  for (i = 0; i < buttons.length; i++) {
    (function (id, i) {
      win.instances[id].inner.getElementsByTagName("button")[i].innerText = buttons[i].title;
      win.instances[id].inner.getElementsByTagName("button")[i].addEventListener("click", function () {
        try {
          buttons[i].script(id);
        } catch (err) {
          msgbox(err, "error", "script error", [
            {
              title: "close",
              script: function (d) { return win.instances[d].close(); }
            }
          ]);
        }
      }, false);
    })(id, i);
  }
  return id;
}

function dragElement(id) {
  if (win.instances[id]) { win.instances[id].active(); }
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var elmnt = document.getElementById("win_" + id);
  if (document.getElementById("win_" + id + "_title")) {
    document.getElementById("win_" + id + "_title").onmousedown = dragMouseDown;
  } else throw new Error('No Titlebar bruh');

  function dragMouseDown(e) {
    if (!win.instances[id].draggable) return;
    e = e || window.event;
    if (!isMobile) e.preventDefault();
    if (e.clientY === 10 || e.clientY < 10) return e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!win.instances[id].draggable) return;
    e = e || window.event;
    if (!isMobile) e.preventDefault();
    if (e.clientY === 10 || e.clientY < 10) return e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function resizeElement(id) {
  var element = null;
  var startX, startY, startWidth, startHeight;

  var p = document.getElementById("win_" + id);

  var right = document.createElement("div");
  right.className = "resizer-right";
  p.appendChild(right);
  right.addEventListener("mousedown", initDrag, false);
  right.parentPopup = p;

  var bottom = document.createElement("div");
  bottom.className = "resizer-bottom";
  p.appendChild(bottom);
  bottom.addEventListener("mousedown", initDrag, false);
  bottom.parentPopup = p;

  var both = document.createElement("div");
  both.className = "resizer-both";
  p.appendChild(both);
  both.addEventListener("mousedown", initDrag, false);
  both.parentPopup = p;


  function initDrag(e) {
    if (!win.instances[id].resizable) return;

    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDrag, false);
    document.documentElement.addEventListener("mouseup", stopDrag, false);
  }

  function doDrag(e) {
    element.style.width = startWidth + e.clientX - startX + "px";
    element.style.height = startHeight + e.clientY - startY + "px";
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }
}

function ConvertStringToHex(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  return "\\u" + arr.join("\\u");
}

var nobsoderrcode = false;
// to report errors and yes i copied pasted this, ngl xd
window.onerror = function (e) { //  ConvertStringToHex(e.toString()).toString().replace(/\\u/g,".")
  localStorage["bsod"] = "true";
	let errtitle = "Oh, Snap!";
	if(Math.random()<=0.05){
		errtitle = "Dang 😭"
	}
	if(Math.random()<=0.001){
		errtitle = "this should be a joke isn't it"
	}
	if(Math.random()<=0.0001){
		errtitle = "011010010110011000100000011110010110111101110101001000000110000101110010011001010010000001100100011000010111010001100101011100000110110001100001011110010111001100101100001000000111000001101100011001010110000101110011011001010010000001110011011010110110100101110000001000000111010001101000011010010111001100101100001000000110100100100000011001000110000101110010011001010010000001111001011011110111010100101110000010100110100101100110001000000111100101101111011101010010000001100001011100100110010101101110001001110111010000101100001000000111001001100101011000010110010000100000011101000110100001100101001000000110110001100001011100110111010000100000011011000110100101101110011001010010111000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010000010100000101000001010011100110110010001100110001000000111001001101111011000110110101101110011"
	}
  document.body.innerHTML = "<center><h1><b>"+errtitle+"</b></h1></center></big></big></big><br>Your HEXEc computer has performed an illegal operation so it was needed to show this screen and shut down all services of this machine.<br>Sorry for any incovinience made by this error screen.<br>You can restart your machine to continue using HEXEc.<br>Or you can report this error to the HEXEc team: <span class='error'>" + e.toString() + "</span><br>Thank you for reading.<br>Please refresh the page.<br><br>Error code: <b class='error' id=\"errcode\">0</b><br><br><button onclick='window.location.reload();'>Refresh</button>";
  document.body.style = "font-family: Ubuntu, sans-serif;background-color:blue;color:white;";
  log._log(e, "BSOD", "ERROR");
  if (!nobsoderrcode) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hexec-sevrer.dateplays.repl.co/store-error?err=" + encodeURIComponent(e.toString()))
    xhr.onload = function () {
      var text = xhr.responseText;
      var errcode = "0".repeat(4 - text.length) + text;
      var btag = document.getElementById("errcode");
      if (btag) btag.innerText = errcode;
    }
    xhr.send();
  }
}

// function block_extentions() {
//   var usingdarkreader = false;
//   var darkreaderenabled = false;
//   var darkreaderlength = document.querySelectorAll("style.darkreader").length;
//   if (darkreaderlength === 0 || darkreaderlength < 0) darkreaderenabled = true;
//   setInterval(() => {
//     if (document.querySelectorAll("script.darkreader") && (!darkreaderenabled)) {
//       var darkreaders = document.querySelectorAll("style.darkreader");
//       for (i = 0; i < darkreaders.length; i++) darkreaders[i].remove();
//       if (!usingdarkreader) {
//         usingdarkreader = true;
//         msgbox("It Seems Like you are using the extention Dark Reader while viewing the OS.<br>It is reccommended to stop this extention on this OS and use Dark Theme.<br>Choose one of the options:","warning", "Extention Blocked", [{ script: function (id) { win.instances[id].close(); localStorage["/themes/chosen/"] = "dark"; location.reload() }, title: "Use Dark Theme" }, { script: function (id) { win.instances[id].close(); darkreaderenabled = true; }, title: "Unblock Extention" }, { script: function (id) { win.instances[id].close() }, title: "Keep Blocking Extention" }])
//       }
//     } // fixed
//   });
// }

/*
// make sure the server is working if else bsod;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://hexec-sevrer.dateplays.repl.co/', true);

xhr.timeout = Number(localStorage['server-timeout']) || 8000;

xhr.onload = function () {
	if (xhr.status !== 200) {
		window.onerror(`${res.status}:0x003f`)
	}
};

xhr.ontimeout = function (e) {
  window.onerror("2:0x002f")
};
xhr.onerror = function(e) {
	window.onerror("1:0x002f");
}


xhr.send(null);
// script autoloader
for (var item in localStorage) {
  if (item.startsWith('$startup-')) {
    eval(localStorage[item]);
  }
}


// multiple keypress
var keymap = [];
for(i=0;i<256;i++){
	keymap[i]=false;
}
onkeydown = onkeyup = function(e){
    keymap[e.keyCode] = (e.type == 'keydown');
    keyPressEvents();
}
function keyPressEvents(){
	// wake up task manager on Control + Space
	if(keymap[17]&&keymap[32]){
		apps.taskmgr.exec()
	}
}

*/