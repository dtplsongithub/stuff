let musics = [
    ["iar bați câmpii?", "fwn1391197"],
    ["electrical whisk", "xwn1388520"],
    ["canri", "xwn1385257"],
    ["PINBALL (ft2)", "xw"],
    ["PINBALL (furnace)", "fw"],
    ["wet hands", "fm"],
    ["ewhisk c64 cover", "fmn1460623"]
];
let webs = [
    ["3d", true],
    ["3d-1", true],
    ["aboutme-google-translated", true],
    ["archives", true],
    ["arduinoscreeensaverinjs", true],
    ["BASE128", true],
    ["binary-to-decimal-convertor", true],
    ["canvas", true],
    ["color", true],
    ["datebot-v10-only-for-trollbox", false],
    ["dateplayss-main-page", true],
    ["dfdb", false],
    ["ebgg", true],
    ["formee", true],
    ["game", true],
    ["glitched-HEXEc-Beta-43", true],
    ["HEXEc-2", true],
    ["HEXEc-backup", false],
    ["HEXEc-server-os", true],
    ["HEXEc-server", false],
    ["HEXEc", false],
    ["hexectodolist", true],
    ["hqgserver", false],
    ["i-am-back", true],
    ["idk-man", true],
    ["iframe", true],
    ["iframe2", true],
    ["imeatingprongles", true],
    ["kcspam", false],
    ["mathcremental-mods-recovered", true],
    ["mathcremental-mods", true],
    ["mathproblems", true],
    ["my-mario-kart-wii-stats", true],
    ["p5-thing", true],
    ["prlan", true],
    ["psdnd", true],
    ["qwertyuiop", true],
    ["radixsort", true],
    ["short", true],
    ["sorter", true],
    ["test230429", true],
    ["test230709", true],
    ["test231020", true],
    ["test231028", true],
    ["test231102", true],
    ["test231103", true],
    ["the-clicker-game", true],
    ["tileset", true],
    ["unoriginalclickergame", true],
    ["website", true]
];


// load ze musicers
for (let i = 0; i<musics.length; i++) {
    let out = `<div class="elem">`;
    out += `<div class="name">${musics[i][0]}</div>
    <div class="bgroup">`;
    let name = musics[i][0];
    let str = musics[i][1];

    if (str.charAt(0) == "x") out += `<button onclick="window.location='./music/${name}/${name}.xm'">.xm</button> `;
    else if (str.charAt(0) == "f") out += `<button onclick="window.location='./music/${name}/${name}.fur'">.fur</button> `;
    else if (str.charAt(0) == "s") out += `<button onclick="window.location='./music/${name}/${name}.sunvox'">.sunvox</button> `;

    if (str.charAt(1) == "w") out += `<button onclick="window.location='./music/${name}/${name}.wav'">.wav</button> `;
    else if (str.charAt(1) == "m") out += `<button onclick="window.location='./music/${name}/${name}.mp3'">.mp3</button> `;
    else if (str.charAt(1) == "o") out += `<button onclick="window.location='./music/${name}/${name}.ogg'">.ogg</button> `;
    else if (str.charAt(1) == "p") out += `<button onclick="window.location='./music/${name}/${name}.opus'">.opus</button> `;

    if (str.length>2)
        if (str.charAt(2) == "n") out += `<button onclick="window.location='https://www.newgrounds.com/audio/listen/${str.substring(3)}'">Newgrounds</button>`;
        else if (str.charAt(2) == "m") out += `<button onclick="window.location='https://modarchive.org/module.php?${str.substring(3)}'">The Mod Archive</button>`;
    out += `</div>
    </div><br>`;
    document.getElementById("musics").innerHTML += out;
}


// load ze musicers this aint music!! this is WebSite
websdoc = document.getElementById("webs");
for (let i = 0; i<webs.length; i++) {
    let name = webs[i][0];
    let isweb = webs[i][1];
    websdoc.innerHTML += `<div class="elem">
    <img src="./thumb/${name}.png" width=auto height=32px alt="(no preview)">
    <div class="name">${name}</div>
    <div class="bgroup"> <button onclick="window.location='./sources/${name}.zip'">get source</button>
    ${isweb?`<button onclick="window.location='./webs/${name}/index.html'">view site</button>`:``}`;
    websdoc.innerHTML += `</div>
    </div> <br>`;
}