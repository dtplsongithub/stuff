window.batch = function(data){
	let commands = data.split("\n");
	for(i=0;i<commands.length;i++){
		let cmd = commands[i];
		if(apps[cmd.replace(/app\ /,"")] && cmd.startsWith("app ")){
			apps[cmd.replace(/app\ /,"")].exec();
		} else if (cmd=="exit") {
			return undefined;
		} else {
			msgbox("error","Batch File Error",[{script:function(id){win.instances[id].close();},title:"OK"}],"The command '"+cmd+"' is not valid nor an app.<br>Line "+i)
		}
	}
}