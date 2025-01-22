function load(){
  fetch("/int.js")
    .then(data => data.text())
    .then(body => {
      eval(body)
    })
};load();
var pl = {}