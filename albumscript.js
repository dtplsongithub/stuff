let t = {
    "ChipMix2": { 
        "tracks":[
            "IO",
            "//.;",
            "p",
            "pata",
            "jxv:",
            "/p @give apple [fix]"
        ],
        "releasedate": "2026 June 19",
        "type": [
            "xm","fur","fur","fur","fur","xm"
        ]
    },
    "-28rx": { 
        "tracks":[
            "--12",
            "4112f676b5_6bff0b",
            "6fa7fbd7acf09c11c1_fin6u5"
        ],
        "releasedate": "2026 June 19",
        "type":[
            "sunvox","vcv","vcv"
        ]
    }
}
let name = document.getElementById("title").innerHTML
let tracks=t[name].tracks
let type=t[name].type
let releasedate= t[name].releasedate
for (let i = 0; i<tracks.length; i++) {
    document.getElementById("tracks").innerHTML += `<div class="elem">${i+1}. ${tracks[i]}    <div class="bgroup"><button onclick="window.location='./${i+1}. d - ${tracks[i].replaceAll("/","／").replaceAll(":","")}.${type[i]}'"> .${type[i]}</button> <button onclick="window.location='./${i+1}. d - ${tracks[i].replaceAll("/","／").replaceAll(":","")}.wav'">.wav</button></div></div><br>`;
        //／ is differernt!!
}
document.getElementById("tracks").innerHTML += `<hr>Released ${releasedate} <br><a href='../../index.html'>Go back</a>`;