let x = 675
let y = 302.5
let dot = document.getElementById("dot")


setInterval(() => {
  dot.style.left = x + "px"
  dot.style.bottom = y + "px"
}, 1)

setInterval(() => {
  document.onkeydown = (e) => {
    switch (e.key) {
      case "W":
      case "w":
        y += 5
        break;
      
      case "A":
      case "a":
        x -= 5
        break;

      case "S":
      case "s":
        y -= 5
        break;

      case "D":
      case "d":
        x += 5
    }
  }
}, 5)