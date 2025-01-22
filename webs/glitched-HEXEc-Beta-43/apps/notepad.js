apps.notepad = {
	"name": "Notepad",
	"exec": note,
	"icon": "text file icon.png"
}
function note(file) {
	let saved = false;
	let name = "Unsaved Document";
	let id = win({ title: "Notepad", inner: "Please wait...", width: 500, height: 400, closable: true, minimizable: true, maximizable: true });
	let notewin = win.instances[id];
	notewin.inner.innerHTML = '<textarea style="width:calc( 100% - 5px );height: calc(100% - 48px);"></textarea><button onclick="apps.notepad.exec()">New</button><button>Save</button>';
	if(file){
		saved=true
		let content = localStorage[file];
		name=file.slice(1,name.length);
		notewin.inner.getElementsByTagName("textarea").value=content;
	}
	notewin.setTitle("Notepad - "+name);
	notewin.closeScript = function () {
		return confirm("Are you sure to close Notepad? You will Lose unsaved data.");
	};
	let clippyagent = {};
	if (clippy) {
		clippy.load("Clippy", function (agent) {
			console.log(agent)
			agent.show();
			console.log(agent)
			// agent.Play("Greeting");
			clippyagent = agent;
			notewin.closeScript = (async function () {
				agent.Play("GetAttention")
				agent.speak("Are you sure you want to exit Notepad? Unsaved changes will be lost!<br><button>Yep...</button><button>No, thanks!</button>")
				return false;
			})
		})
	}
	notewin.inner.getElementsByTagName("button")[0].addEventListener("click", apps.notepad.exec, false);
	notewin.inner.getElementsByTagName("button")[1].addEventListener("click", function () {
		if (!saved) {
			let fn = prompt("Enter File Name");
			name = fn;
			notewin.setTitle("Notepad - " + fn);
			localStorage["/" + fn] = notewin.inner.getElementsByTagName("textarea")[0].value;
			delete notewin.closeScript;
			if(clippy/*&&clippyagent*/){
				notewin.closeScript=function(){
					clippyagent.hide();
				}
			}
		} else {
			localStorage["/" + name] = notewin.inner.getElementsByTagName("textarea")[0].value
		}
	}, false);
}