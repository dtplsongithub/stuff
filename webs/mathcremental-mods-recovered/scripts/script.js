const game = Vue.createApp({
    data() {
        return {
            currentTabIndex: 0,
            tabs: [
                {
                    name: "Mods",
                    classes: {},
                    subTabs: [],
                    _locked: false,
                    get locked() {
                        return this._locked
                    },
                    setLocked(lockedStatus, force = false) {
                        if (!this._locked && !force) return;
                        this._locked = lockedStatus
                    }
                }
            ],
            mods: [],
            maximumMods: 3,
            mathcrementalModsCount: 0,
            coins: 0,
            cooldowns: []
        }
    },

    computed: {
        calculateCoinsGain() {
            return Math.floor(this.mods.reduce((accumulator, currentValue) => accumulator + currentValue.likes, 0) / 2500)
        }
    },

    created() {
        setInterval(() => this.mathcrementalModsCount = this.mods.length, 50)
        setInterval(() => {
            this.mods.forEach(m => {
                m.likes += m.likeRatio / (Math.sqrt(m.dislikeRatio) * Math.log2(m.dislikes + 2))
                m.dislikes += m.dislikeRatio / (Math.sqrt(m.likeRatio) * Math.log2(m.likes + 2))
            })
            this.cooldowns.forEach((c, i) => {
                c.secondsLeft -= 1
                if (!c.secondsLeft) this.cooldowns.splice(i, 1)
            })
        }, 1000)
    },

    methods: functions
})

game.component("mathcremental-mods", {
    props: ['idx', 'name', 'likes', 'dislikes', 'likeRatio', 'dislikeRatio'],
    methods: functions,
    template: `
        <h3>{{ name }}</h3>
        <p>Likes: {{ floor(likes) }}</p>
        <p>Dislikes: {{ floor(dislikes) }}</p>
        <h5>Like ratio: {{ likeRatio }}%, dislike ratio: {{ dislikeRatio }}%</h5>
        <button class="delete" @click="deleteMod(idx)">DELETE MOD</button>
        <hr />
    `
})

game.component('game-cooldowns', {
    props: ['name', 'secondsLeft'],
    template: `<p>{{ name }}: {{ secondsLeft }}s left</p>`
})

game.component('game-tab-chooser', {
    props: ['switchTab', 'idx', 'name', 'locked', 'classes'],
    template: `<button class="tabButton" :class="classes" v-if="locked == false" @click="switchTab(idx)">{{ name }}</button>&nbsp;`
})

const player = game.mount("body")