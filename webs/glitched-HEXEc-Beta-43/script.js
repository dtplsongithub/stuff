// prevent user from using console
console.log("%c \u26a0 WARNING \u26a0 %c\n\nDoing anything with this or anything else with your clipboard may be dangerous to do and reccommended to not do anything. You may:\n\n%cLose all your data\nMake the system unusable\nBluescreen on boot%c\n\nIf the script you're trying to put here is from HEXEc team, or you're one of the HEXEc team members/moderators, you can ignore this.\nThank you for reading.", "color:yellow;font-family:Impact;font-size:100px;border: 5px yellow solid;", "font-size:20px;", "font-size:25px;text-decoration: underline;", "font-size:20px;");

var disablescrnsvr = false;
var logs = "";
var log = {
  _log: function (string, type, branch) {
    if (typeof branch !== "string" || !branch) branch = "LOG";
    if (typeof type !== "string" || !type) type = "Unknown Log";
    if (typeof string !== "string") return; else {
      var time = new Date().toUTCString();
      let text = "[" + time + "] [" + type + "()_}}{$}" + branch + "]: " + string;
      logs += text + "\n3\n\n\n\n999999";
      if (p < 100) try { document.getElementById('debugglog').innerText += (text + "\n"); } catch (e) { };
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
  "win95": "Microsoft Windows 95",
  "eeeeeeeeeeeeeee": "HHHLOSEIJIFDEIFEJIFJEIFJEIFJIEMUUTCTVTM"
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
if (document.getElementById("wm-ipp-base")) document.getElementById("wm-ipp-base").remove();
var bootdiv = document.getElementById('boot-screen');
bootdiv.style.display = "block";
document.getElementById("scriptnotworking").remove();
document.getElementById("noscript").remove();
var desktop = document.getElementById('desktopp');
var bootp = document.getElementById('bootp-inner');
var dicon = document.getElementById('desktop-icons');
var listbar = document.getElementById('listbar');
var listbar_clock = document.getElementById("listbar_clock");
var version = "Beta 4.3";
var fullversion = "0.43_99.20533_20210820 Beta";// no more 69 :(((

// we need more changes -Ponali
// haha very funny line
var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
var tips = ["Press start", '#42 - <a href="https://www.google.com/search?client=firefox-b-1-d&q=What+is+the+answer+to+life%2C+the+universe%2C+and+everything">What\'s the meaning of life?</a>', "Release will soon come!", "Minecraft is very pog.", "Do ctrl+u for some pog suprise", "<h1>have you done your homework yet?</h1>", "This thing looks like ubuntu but a little bit different, isn't it?", "'Very Cute Dolphin' is just a remake of the Windows 93 'Not a Virus, trust me... i'm a dolphin' icon.", "We didn't forgor the markdown file!", "Chat with anyone with Socket Messenger.", "Go to the calculator and type in the first number wich isn't a baloon, a diagonal line, then the balloon. After typing this, click the button having two parallel lines. If you do, you'll get free bobux!!!", "Socket Messenger's name having Socket is a reference for socket.io, wich is actually used in the app!", "do you actually read these? \\minecraft xdd", "1 terminal isn't enough, why not add another?", "The files on the 'my files' app are visible to the admins.", "The galactic alphabet is a very Y𝙹⚍ ᓭ⍑ᔑꖎꖎ ʖᒷ ᒷᔑℸ ̣ ᒷリ ʖ|| ℸ ̣ ⍑ᒷ ᔑᒲ𝙹⊣⚍ᓭ ⎓𝙹∷ ╎ℸ ̣  ∴╎ꖎꖎ リᒷ⍊ᒷ∷ ⎓𝙹∷⊣╎⍊ᒷ ||𝙹⚍ ᔑリ↸ ||𝙹⚍∷ ᓭ╎リᓭ, !¡∷ᒷ!¡ᔑ∷ᒷ.", "The credits icon is the second version of the markdown file.", "We're in beta, so the look of the OS's default is the 'classic' one.", "This is a tip. There are a lot of them actually!", "Try comparing WaterFox and Cat Explorer!", "HEXEc is saved in wayback machine 10 times now!", "-insert tip here-", "more update and tips coming soon! Stay tuned! ", "wew beta 3.32 noice", "press esc"];
tips.unshift("You have a chance of " + (Math.round((0654300 / (tips.length + 1)) * 100) / 100) + "% of getting any (unique) message.");
function getRandTip() { return tips[Math.round(Math.random() * (tips.length - 1))]; }
document.getElementById("tip").innerHTML = getRandTip() + '<br><button onclick="selectStartupOptions({keyCode:27})">Startup Options</button>'.repeat(isMobile);
document.getElementById('bootver').innerText = version;
var bootOptions = 'normal';
var apps = {
  "test": {
    "name": "test",
    "exec": function () {
      win({ title: "it works!", inner: "<h1>it works yey</h1>", closable: true, minimizable: true });
      msgbox("test!", "info", "test msgbox", [{
        title: "error test",
        script: function () { throw new Error("hello world"); }
      },
      {
        title: undefined, // undefined test
        script: undefined
      },
      {
        title: "it work",
        script: function () { alert("hello world"); }
      }], "info");
    },
    "icon": "exe file icon.png"
  },
  "logs-viewer": {
    "name": "Logs Viewer",
    "exec": function () {
      var winid = win({ title: "Logs Viewer", inner: '', closable: true, maximizable: true, minimizable: true, width: 500, height: 500, resizable: true });
      win.instances[winid].inner.innerHTML = "<button onclick=\"document.getElementById('log-" + winid + "').innerHTML=he.encode(logs);\">Refresh</button><button onclick=\"logs='';document.getElementById('log-" + winid + "').innerHTML='';\">Clear</button><br><textarea id=\"log-" + winid + "\" style=\"resize:none;width:calc(100% - 6px);height:calc(100% - 46px);font-family:monospace;\" disabled>" + he.encode(logs) + "</textarea>"
    }
  },
  "hexecver": {
    "name": "About",
    "exec": function () {
      //win({ title: "credits", inner: "<textarea style=\"resize:none;width:100%;height:100%;\" disabled>HEXEc Credits:\nCoding:\n@dateplays, @NyokoSatouhSato aka Nam, @abruhuser aka sussy, @Ponali, @globalstorage aka FBI OPEN DOWN []. \nGraphics:\nIcons:\n@dateplays, @Ponali\nOther graphics: @dateplays, @NyokoSatouhSato aka Nam, @abruhuser aka sussy, @Ponali\nCursors: idk man ponali i think</textarea>", closable: true, maximizable: true, minimizable: true, width: 500, height: 500 });
      // width:calc(100% - 7px);height:calc(100% - 159px);
      win({ title: "About", inner: '<center><img src="/images/boot%20logo.png" style="height: 95px;"><br><br><span>HEXEc version ' + version + ' (full version ' + fullversion + '</span></center><br><button onclick="apps[\'credits-app\'].exec();" style="width:100%;">Credits</button>', closable: true, maximizable: false, minimizable: false, width: 500, height: 192 });
    },
    "icon": "../../favicon.ico"
  },
  "credits-app": {
    "name": "credits",
    "hide": true,
    "exec": function () {
      win({ title: "Credits", inner: '<iframe src="/credits.md.html" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%"></iframe>', closable: true, maximizable: true, minimizable: false, width: 500, height: 500, resizable: true });
    },
    "icon": "text file icon.png"
  },
  "debug-tip": {
    "name": "startup tip debug",
    "hide": true,
    "exec": function () {
      var winid = win({ title: "undefined", inner: '', closable: true, maximizable: false, minimizable: false, width: 500, height: 500, resizable: true });
      win.instances[winid].setTitle("window " + winid);
      win.instances[winid].inner.innerHTML = '<span id="tipdebugtxte_' + winid + '">' + getRandTip() + '</span><br><button onclick="document.getElementById(\'tipdebugtxte_' + winid + '\').innerHTML=getRandTip();">random</button>';
    },
    "icon": "text file icon.png"
  },
  "crash": {
    "name": "crash the os",
    "exec": function () {
      window.onerror("you told the system to crash, why looking at this? lmao")
    },
    "icon": "exe file icon.png"
  },
  "explorer": {
    "name": "File Explorer",
    "exec": function () {
      win({ title: "File Explorer", inner: '<iframe style="width:100%;height:100%" width="100%" height="100%" frameBorder="0" src="explorer.html"></iframe>', closable: true, minimizable: true, maximizable: true, resizable: true })
    },
    "icon": "folder icon.png"
  },
  "gravity": {
    "name": "Very cute dolphin",
    "isGravity": false,
    "exec": function () {
      if (apps["gravity"].isGravity) return;
      if (isMobile) return;
      document.onmouseup = null;
      document.onmousedown = null;
      for (i = 0; i < win.instances.length; i++) {
        if (win.instances[i]) if (win.instances[i].div) {
          win.instances[i].div.onmousedown = null;
          var title = document.getElementById("win_" + i + "_title");
          if (title) title.onmousedown = null;
        }
      }

      $("#desktopp").jGravity({
        target: ".icons,.window,.clippy",
        depth: 6,
      });

      apps["gravity"].isGravity = true;
    },
    "icon": "dolphin.png"
  },
  "cmd": {
    "name": "Terminal",
    "exec": function () {
      win({ title: "Terminal", inner: '<iframe src="/terminal.html" frameBorder="0" style="width:100%;height:100%;" width="100%" height="100%"></iframe>', closable: true, maximizable: true, minimizable: true, width: 500, height: 400, resizable: true });
    },
    "icon": "command prompt icon.png"
  },
  "clock": {
    "name": "Clock",
    "exec": function () {
      win({ title: "Clock", inner: '<iframe src="clock.html" frameBorder="0" style="width:100%;height:100%;" width="100%" height="100%"></iframe>', closable: true, maximizable: false, minimizable: true, width: 300, height: 250 })
    },
    "icon": "clock icon.png"
  },
  "d2048": {
    "name": "23841,85791 (a 2048 game)",
    "exec": function () {
      win({ title: "23841,85791", inner: '<iframe src="23841 things/index.html" frameBorder="0" style="width:100%;height:100%;" width="100%" height="100%"></iframe>', closable: true, maximizavle: true, minimizable: true, width: 300, height: 500, maximizable: true });
    },
    "icon": "23841 icon.png"
  },
  "waterfox": {
    "name": "WaterFox",
    "exec": function () {
      var winid = win({ title: "WaterFox", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true, resizable: true });
      win.instances[winid].inner.innerHTML = '<iframe src="/brz.html" frameBorder="0" style="width:100%;height:calc( 100% - 20px );" width="100%" id="iframe_box_' + winid + '"></iframe><!--<input type="url" id="url_box" style="width:calc(100% - 8px);" onkeyup="if(event.key==\'Enter\'){document.getElementById(\'iframe_box_' + winid + '\').src=this.value}"></input><iframe src="https://priler.github.io/dino3d/" frameBorder="0" style="width:100%;height:calc(100% - 40px);" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>-->'
    },
    "icon": "chrome.png"
  },
  // "sdosterm": {
  // 	"name": "Sdf Emulator",
  // 	"exec": function () {
  // 		var winid = win({ title: "Sdf Emulator", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true });
  // 		win.instances[winid].inner.innerHTML = '<iframe src="https://stuff.mkcodes.repl.co/" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
  // 	},//we've already got a terminal
  // 	"icon": "s1.png"
  // },
  "calc": {
    "name": "Calculator",
    "exec": function () {
      var winid = win({ title: "Calculator", inner: '', width: 300, height: 500, maximizable: true, minimizable: true, closable: true });
      win.instances[winid].inner.innerHTML = '<iframe src="/calc.html" frameBorder="0" style="width:100%;height:height:100%;" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
    },
    "icon": "calc.png"
  },// no need for calculator+, i added the features to calculator
  "acejs": {
    "name": "Acid IDE",
    "exec": function () {//width: 300, height: 500 | migrated ace9ide to /ide.html
      var winid = win({ title: "Acid IDE - Untitled", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true });
      win.instances[winid].inner.innerHTML = '<iframe src="/ide.html" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
    },// just no
    "icon": "acid.png"
  },
  // "sdf_3chat": {
  // 	"name": "3chat",
  // 	"exec": function () {
  // 		var winid = win({ title: "3chat (filemsgr)", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true });
  // 		win.instances[winid].inner.innerHTML = '<iframe src="https://3chat-1.mkcodes.repl.co/" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
  // 	},// we've already got a chat
  // 	// which just says 'Piss off' and raises error btw
  // 	"icon": "s4.png"
  // },
  // // dateplays, you can remove these things, but i want this OS to be official... ... i just want popularity here. It's OK if you don't agree with me. Thanks for reading. -Ponali
  // "myfiles": {
  // 	"name": "Cloud files",
  // 	"exec": function () {
  // 		var winid = win({ title: "Cloud files", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true });
  // 		win.instances[winid].inner.innerHTML = '<iframe src="https://zlinux.mkcodes.repl.co/phedit/index.php" frameBorder="0" style="width:100%;height:100%" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
  // 	},
  // 	"icon": "s6.png" // (not my files coz not local) 
  // },
  "wiki": {
    "name": "HEXEc Wiki",
    "exec": function () {
      var winid = win({ title: "Wiki", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true, resizable: true });
      win.instances[winid].inner.innerHTML = '<iframe src="/wiki.html" frameBorder="0" style="width:100%;height:100%;" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
    },
    "icon": "earth.png" // (not my files coz not local) 
  },
  // "mwikia": {
  // 	"name": "minimalWikia",//contact me to edit, i'll add u 
  // 	"exec": function () {
  // 		var winid = win({ title: "minimalWikia", inner: '', width: 600, height: 400, maximizable: true, minimizable: true, closable: true });
  // 		win.instances[winid].inner.innerHTML = '<iframe src="https://minimalwikia.mkcodes.repl.co/" frameBorder="0" style="width:100%;height:100%;" width="100%" height="100%" id="iframe_box_' + winid + '"></iframe>'
  // 	},
  // 	"icon": "wikipedia.png" // (not my files coz not local) 
  // },
  "language-select": {
    "name": "Select your Language",
    "exec": function () {
      let id = win({ title: "Language Settings", inner: "Please wait.", width: 300, height: 400, closable: true, minimizable: false, maximizable: false });
      win.instances[id].inner.innerHTML = 'Select your current language:<br><br><select name="lang" id="langsel' + id + '"><option value="en">English</option><option value="bug">option[value="fr"]</option></select>';
      win.instances[id].inner.querySelector("select#langsel" + id).addEventListener("change", function () {
        let select = win.instances[id].inner.querySelector("select#langsel" + id)
        let slctvl = select.options[select.selectedIndex].value;
        if (slctvl == "bug") {
          win.instances[id].inner.innerHTML = ':#text<br>br<br>br<select name="lang" id="langsel' + id + '">select[name="lang"]#langsel' + id + '<option value="en">option[value="en"]</option><option value="bug">option[value="fr"]</option></select>'
          win.instances[id].setTitle("span#win_" + id + "_title");
          for (i = 0; i < win.instances.length; i++) try { win.instances[i].setTitle("span#win_" + i + "_title"); } catch (e) { }
          for (i = 0; i < Object.keys(apps).length; i++) {
            apps[Object.keys(apps)[i]].name = ":#text";
            apps[Object.keys(apps)[i]].exec = function () {
              onerror("<span id='bugbsodindicator'></span>");
              document.getElementById("bugbsodindicator").parentElement.parentElement.innerHTML = ":#text";
            }
          }
          showdesktop();
        }
      })
    },
    "icon": "translate.jpg"
  },
  "themes": {
    "name": "Themes",
    "exec": function () {
      let id = win({ inner: "", title: "Themes", width: 700, height: 900, closable: true, minimizable: false, maximizable: false });
      win.instances[id].inner.innerHTML = '<div style="position:relative;top: calc(100% - ( 1em + 5px ) );"><button onclick="win.instances[' + id + '].close();">Cancel</button><button onclick="window.location.reload();">Apply</button></div><center><ul><li onclick="$(\'#select_' + id + '\')[0].style.display=\'\';$(\'#customize_' + id + '\')[0].style.display=\'none\';">Select</li><li onclick="$(\'#select_' + id + '\')[0].style.display=\'none\';$(\'#customize_' + id + '\')[0].style.display=\'\';">Customize</li></ul><div id="select_' + id + '"><img id="previewimg_'+id+'"></img><br><br>Select your theme:<br><button onclick="localStorage.setItem(\'/themes/chosen\',\'default\');$(\'#previewimg_'+id+'\')[0].src=\'/themes/preview/default.png\';">Default theme</button></br><button onclick="localStorage.setItem(\'/themes/chosen\',\'win95\');$(\'#previewimg_'+id+'\')[0].src=\'/themes/preview/win95.png\';">Microsoft Windows 95</button></br><button onclick="localStorage.setItem(\'/themes/chosen\',\'coder\');$(\'#previewimg_'+id+'\')[0].src=\'/themes/preview/coder.png\';">For Coders</button></br><button onclick="localStorage.setItem(\'/themes/chosen\',\'dark\');$(\'#previewimg_'+id+'\')[0].src=\'/themes/preview/dark.png\';">Dark Mode</button></br><button onclick="localStorage.setItem(\'/themes/chosen\',\'green\');$(\'#previewimg_'+id+'\')[0].src=\'/themes/preview/green.png\';">Greeniest</button></div><div id="customize_' + id + '" style="display:none;">This menu is for Customizing the Chosen Theme. Currently not made, its for another beta buddy!</div></center>';
    },
    "icon": "themes.png"
  }
}

// Open app
function app(file) {
  if (file.endsWith(".hsc") && batch) {
    batch(localStorage[file])
  } else if (file.endsWith(".dom") && eval) {
    eval(localStorage[file])
  } else {
    apps.notepad.exec(file);
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
                // showdesktop(); console.log("finished " + ee[a] + ", " + a);
              })(body);
            });
        })(ee, a);
      }
    }
  });

var p = 0;
var booti = setInterval(() => {
  if (p >= 100) {
    // lets test first.
    if (!localStorage["/sys/firstboot"]) {
      msgbox("Welcome! This is HEXEc. Go to credits.md for Credits.", "info", "Welcome!", [
        {
          title: "OK",
          script: function (d) { return win.instances[d].close(); }
        }
      ])
      localStorage["/sys/firstboot"] = "true";
    }
    try { document.getElementById('debugglog').innerText = ""; } catch (e) { };
    bootdiv.style.display = 'none';
    listbar.style.display = '';
    desktop.style.display = '';
    windowList.style.display = '';
    window.removeEventListener('keyup', null);
    // if (location.hash !== "#bootmode=cmdonly") setTimeout(function () { new Audio("/sounds/HEXEc startup.mp3").play(); }, 400);
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

    if (location.hash !== "#bootmode=cmdonly" || location.hash !== "#bootmode=cmdgui") { showdesktop(); block_extentions(); }
    if (location.hash !== "#bootmode=cmdonly") {
      makeScreensaverTimeout();
      function h() {
        if (disablescrnsvr) return;
        windowList.style.display = "block";
        if (bootOptions !== "cmdgui") {
          listbar.style.display = "block";
          desktop.style.display = "block";
        }

        clearTimeout(scrnsvrid);
        scrnsvr.style.display = "none";
        scrnsvr.src = "about:blank";
        makeScreensaverTimeout();
      }
      window.addEventListener("click", h);
      window.addEventListener("keydown", h);
      window.addEventListener("keyup", h);
      window.addEventListener("keypress", h);
    }

    location.hash = "#";

    function playStartupSound() {
      if (bootOptions !== "cmd") setTimeout(function () {
        new Audio("/sounds/HEXEc startup.mp3").play();
        window.onclick = null;
      }, 400);
    }

    if (bootOptions !== "cmd") window.onclick = playStartupSound;

    return clearInterval(booti);
  } else {
    p = p + Math.round(Math.random() * 2);
    bootp.style.width = p + "%";
    document.getElementById("bootp-text").innerHTML = p + "%";
  }
}, 25);

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

function showdesktop() {
  if (bootOptions === 'cmd') return;
  if (bootOptions === 'cmdgui') return;
  dicon.innerHTML = "";
  dicon.addEventListener("click", function (e) {
    if (e.target[e.target.length - 1] == dicon) unselectall();
  })
  function unselectall() {
    var btns = dicon.getElementsByTagName("button")
    for (i = 0; i < btns.length; i++) { btns[i].classList.remove("selected"); };
  }

  if (apps["gravity"]) if (apps["gravity"].isGravity) $("#dicon").jGravity({ target: ".icons", depth: 6, });

  for (i in apps) {
    (function (apps, i) {
      if (!apps[i]) return;
      if (apps[i].hide) return;
      var em = document.createElement('button');
      var icon = '/images/icons/' + encodeURIComponent((apps[i].icon ? apps[i].icon : 'exe file icon.png'));
      var errIcon = '/images/icons/' + encodeURIComponent("undefined file icon.png");
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

  if (win.instances.length === 1000 || win.instances > 1000) {
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
  if (!document.visibilityState) {
    if (navigator.userAgent.includes("Windows")) {
      new Audio("/sounds/Windows Notification.wav").play();
    }
  }
  var title = content.title;
  var html = content.inner;
  var id = win.instances.length;
  var width = content.width;
  var height = content.height;
  if (!width) width = 235;
  if (!height) height = 1000;
  log.debug("window id " + id + " app44ed", "Window");
  var elem = document.createElement("div");
  elem.classList.add('window');
  elem.id = "win_" + id;
  var mh = "calc(100% - 29px)";
  //if (height === 200) mh = "calc(100% - 22px)"; else mh = "100%";
  //elem.classList.add(elem.id);
  if (isMobile) {
    elem.style.top = ((window.innerHeight - height) / 2.2 + 3) + "px";
    elem.style.left = ((window.innerWidth - width) / 2-33) + "px";
  } else {
    elem.style.top = Math.round(Math.random() * (window.innerHeight - height - height)) + "px";
    elem.style.left = Math.round(Math.random() * (window.innerWidth - width + width / 2)) + "px";
  }
  elem.style.width = width + "px";
  elem.style.height = height + "px";
  elem.style.zIndex = win.firstZIndexView;
  elem.innerHTML = '<div id="win_' + id + '_title" class="wintitle">' + he.encode(title) + ('<div onclick="win.instances[' + id + '].close();" id="win_' + id + '_closebtn" class="wintitlebtn winclosebtn">&#x1F5D9;</div>').repeat((content.closable) + 0) + ('<div onclick="win.instances[' + id + '].maximize();" id="win_' + id + '_maximizebtn" class="wintitlebtn winmaximizebtn">&#x1F5D6;</div>').repeat((content.maximizable) + 0) + ('<div onclick="win.instances[' + id + '].minimize();" id="win_' + id + '_minimizebtn" class="wintitlebtn winminimizebtn">&#x1F5D5;</div>').repeat((content.minimizable) + 0) + '</div><div id="win_' + id + '_inner" style="width:100%;height:' + mh + ';" class="wininner">' + html + '</div>';
  //if (content.resizable) elem.style.resize = "both";
  windowList.appendChild(elem);

  //console.log(elem.id);
  //if (apps["gravity"]) if (apps["gravity"].isGravity) $("#desktopp").jGravity({ target: '.' + elem.id, depth: 6, }); else dragElement(id);

  if (isMobile) {
    if (!content.maximizable) { dragElement(id); resizeElement(id); }
  } else { dragElement(id); resizeElement(id); }
  //desktop.innerHTML += '<div class="window animate__animated animate__fadeIn" id="win_' + id + '" style="top:' + Math.round(Math.random() * (innerHeight - height)) + 'px; left:' + Math.round(Math.random() * (innerWidth - width)) + 'px; width:' + width + 'px; height:' + height + 'px;"><div id="win_' + id + '_title" class="wintitle">' + title + '<div onclick="win.instances[' + id + '].close();" id="win_' + id + '_closebtn" class="winclosebtn">X</div>'.repeat((content.closable) + 0) + '</div><div id="win_' + id + '_inner" style="width:' + width + 'px; height:' + height + 'px;" class="wininner">' + html + '</div></div>';

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
	/*if(!((title instanceof String)&&(buttons instanceof Array)&&(icon instanceof String)&&(content instanceof String))){
		throw "One of the parameters do not have right instance. Make sure it's using these instances at the right order: 'String, String, Array, String'."
	}*/
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
  document.body.innerHTML = "<center><h1><b>Oh, Snap!</b></h1></center></big></big></big><br>Your HEXEc computer has performed an illegal operation so it was needed to show this screen and shut down all services of this machine.<br>Sorry for any incovinience made by this error screen.<br>You can restart your machine to continue using HEXEc.<br>Or you can report this error to the HEXEc team: <span class='error'>" + e.toString() + "</span><br>Thank you for reading.<br>Please refresh the page.<br><br>Error code: <b class='error' id=\"errcode\">0</b><br><br><button onclick='window.location.reload();'>Refresh</button>";
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

function block_extentions() {
  var usingdarkreader = false;
  var darkreaderenabled = false;
  var darkreaderlength = document.querySelectorAll("style.darkreader").length;
  if (darkreaderlength === 0 || darkreaderlength < 0) darkreaderenabled = true;
  setInterval(() => {
    if (document.querySelectorAll("script.darkreader") && (!darkreaderenabled)) {
      var darkreaders = document.querySelectorAll("style.darkreader");
      for (i = 0; i < darkreaders.length; i++) darkreaders[i].remove();
      if (!usingdarkreader) {
        usingdarkreader = true;
        msgbox("warning", "Extention Blocked", [{ script: function (id) { win.instances[id].close(); themeee = "dark"; location.reload() }, title: "Use Dark Theme" }, { script: function (id) { win.instances[id].close(); darkreaderenabled = true; }, title: "Unblock Extention" }, { script: function (id) { win.instances[id].close() }, title: "Keep Blocking Extention" }], "It Seems Like you are using the extention Dark Reader while viewing the OS.<br>It is reccommended to stop this extention on this OS and use Dark Theme.<br>Choose one of the options:")
      }
    } // fixed
  });// you didnt close a { at line 386                YES I DID      that was some minute ago            oh...
}

// screensaver
let scrnsvrid = -1;
function makeScreensaverTimeout() {
  if (bootOptions === "cmd") return;
  if (disablescrnsvr) return;
  scrnsvrid = setTimeout(() => {
    if (bootOptions === "cmd") return;
    if (disablescrnsvr) return;
    for (i = 0; i < document.body.children.length; i++) document.body.children[i].style.display = "none";
    log._log('showing screensaver', "system", "screensaver")
    scrnsvr.style.display = "block";
    scrnsvr.src = "/screensaver/index.html";
  }, 180000);
}

// moved to line 382