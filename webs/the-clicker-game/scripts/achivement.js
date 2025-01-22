setInterval(function(){
  if (clicks > 1) {
    achivement("First click")
  }
  if (clicks > 10) {
    achivement("10 Clicks")
  }
  if (clicks > 100) {
    achivement("Great start")
  }
  if (clicks > 500) {
    achivement("c l e e k s")
  }
  if (clicks > 1000) {
    achivement("TOO MANY CLICKS")
  }
  if (clicks > 10000) {
    achivement("ultimate clicker")
  }
  if (zinr == 5) {
    achivement("Taking a pause...")
  }
  if (zinr == 20) {
    achivement("BRB")
  }
  if (zinr == 300) {
    achivement("AFK")
  }
  if (zinr == 6000) {
    achivement("Did you left your game opened?")
  }
  if (cpst > 2) {
    achivement("noob")
  }
  if (cpst > 1) {
    achivement("super noob")
  }
  if (cpst > 5) {
    achivement("ok i guess")
  }
  if (cpst > 8) {
    achivement("did you just used jitterclick?")
  }
  if (cpst > 12) {
    achivement("very nice")
  }
  if (cpst > 16) {
    achivement("BROKE MY RECORD")
  }
})

var achivements_done = []

function achivement (name) {
  if (!achivements_done.includes(name)){
   document.getElementById("Achivements").innerHTML+= name + ", ";
    achivements_done[achivements_done.length] = name
  }
}