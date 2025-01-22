const functions = {
    floor(num) {
        return Math.floor(num).toLocaleString('en-US')
    },
    
    checkOrdinalNumber(num) {
        let types = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"]
        let numberString = num.toString();
        if (num >= 20) return numberString + types[parseInt(numberString.slice(numberString.length - 1, numberString.length))]
        if (!types[parseInt(numberString)]) return numberString + "th"
        return numberString + types[parseInt(numberString)]
    },

    newMod(likes = 0, dislikes = 0, likeRatio = 20, dislikeRatio = 2.5) {
        if (this.mods.length > this.maximumMods) return alert("Maximum modifications reached!");
        if (this.cooldowns.find(c => c.name == "new modification of mathcremental")) return;
        let names = ["My " + this.checkOrdinalNumber(this.mods.length + 1), "The Complicated", "The Easy"]
        this.mods.push({
            name: names[Math.floor(Math.random() * names.length)] + " Mod",
            likes,
            dislikes,
            likeRatio,
            dislikeRatio
        })
        this.cooldowns.push({
            name: "new modification of mathcremental",
            secondsLeft: 10 * this.mods.length
        })
    },

    deleteMod(idx) {
        this.mods.splice(idx, 1)
    },

    getRandomRatio() {
        return Math.floor(Math.random() * 100)
    },

    getRatio() {
        return [this.getRandomRatio(), this.getRandomRatio()]
    }, // random function!
    
    switchTab(idx) {
        player.tabs[player.currentTabIndex].style.display = "none"
        player.tabs[idx].style.display = "block"
        player.currentTabIndex = idx
    }
}