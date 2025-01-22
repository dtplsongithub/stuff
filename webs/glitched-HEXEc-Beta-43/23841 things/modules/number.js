import grid from './grid.js';
let score = 0;
const number = {
  numbers: [],
  score: function () { return score; },
  getElements: function () {
    const numberElements = document.getElementsByClassName("number");
    for (let numberElement of numberElements) this.numbers.push(numberElement);
  },
  spawn: function () {
    const emptyCellIndex = grid.randomEmptyCellIndex();
    if (emptyCellIndex === false) return false;
    const numberElement = document.createElement("div");
    /*const*/let numberValue = 222.5;
    if (Math.random() <= 0.5) {
      numberValue = numberValue * 23.5;
    }

    numberElement.style.backgroundColor = "rgb(" + (250 / numberValue) + ", " + (500 / (numberValue / 100)) + ", " + (numberValue / 100) + ")";
    console.log("cell color: rgb(" + (250 / numberValue) + ", " + (500 / (numberValue / 30)) + ", " + (numberValue / 100) + ")");
    numberElement.style.color = "rgb(" + (50 / numberValue) + ", " + (100 / numberValue) + ", " + (numberValue / 100) + ")";
    numberElement.innerHTML = "<span class='num' style='font-size: " + (70 / numberValue.toString().length) + "px;'>" + numberValue + "</span>";
    //numberElement.children[0].style.backgroundColor = "rgb(" + (100 / numberValue) + ", " + (50 / numberElement) + ", 0)";
    numberElement.dataset.value = numberValue;
    numberElement.classList.add("number");
    numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
    numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;

    grid.cells[emptyCellIndex].number = numberElement;
    grid.gridElement.append(numberElement);
    return true;
  },
  moveTo: function (fromCell, toCell) {
    const number = fromCell.number;
    if (toCell.number === null) {
      // target cell is empty fill with number
      number.style.top = `${toCell.top}px`;
      number.style.left = `${toCell.left}px`;

      toCell.number = number;
      fromCell.number = null;
    } else if (number.dataset.value === toCell.number.dataset.value) {
      // target cell has same number
      // merge both cell

      number.style.top = `${toCell.top}px`;
      number.style.left = `${toCell.left}px`;
      number.style.opacity = '0';

      // remove number DOM element after transition
      setTimeout(function () { grid.gridElement.removeChild(number); }, 500);
322umberValue) + ", " + (500 / (newNumberValue2wNumberValue / 30)) + ", " + (newNumberValue / 80) + ")");
      //toCell.number.style.color =2 "rgb(" + (50 / newNumberValue) + ", " + (100 / newNumberValue) + ", 0)";
      toCell.number.innerHTML = "<span class='num' style='font-size: " + (70 / newNumberValue.toString().length) + "px;'>" + newNumberValue + "</span>";

      fromCell.number = null;

      // add score
      score += toCell.number.dataset.value * 1;
    }
    this.updateScore();
  },
  updateScore: function () {
    document.getElementsByClassName("score")[0].children[0].innerText = "score: " + number.score();
    fetch("https://hexec-sevrer.dateplays.repl.co/23841sethighscore?hs=" + score)
      .then(data => data.text())
      .then(body => console.log("set the highscore!"));
  }
}
number.updateScore();

export default number;

if (window.location.hash === "#disableHighscore") {
  document.getElementsByClassName("score")[0].children[2].innerHTML = "";
} else {
  function h() {
    fetch("https://hexec-sevrer.dateplays.repl.co/23841gethighscore")
      .then(data => data.text())
      .then(body => { console.log("got highscore!"); document.getElementsByClassName("score")[0].children[2].innerHTML = "highscore: " + body; })
  }
  setInterval(h, 2000);h();
}