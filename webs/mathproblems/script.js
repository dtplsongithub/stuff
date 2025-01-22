var list, listweb;
try {
  fetch("./list.txt")
    .then((head) => head.text())
    .then((body) => {
      list = body;
      fetch("./list2.txt")
      .then((head) => head.text())
      .then((body) => {
        listweb = body;
        go();
      });
    });
} catch (e) {
  document.getElementById("errhandling").innerText = e
}
function go() {
  const listsplit = list.split("\n");
  const listwebsplit = listweb.split("\n");
  let send = "<div style='display: none;'>"
  if (listsplit.length != listwebsplit.length) throw("list.txt and list2.txt have inconsistent number of newline characters :proglet:")
  for (i in listsplit) {
    if (listsplit[i].startsWith(">")) {
      send += `</div><div id="clasa"><span class="title">${listsplit[i].substring(1,listsplit[i].length)}</span><br>`
    } else {
      send += `<a href="${listwebsplit[i]}">${listsplit[i]}</a><br>`
    }
  }
  document.getElementById("listhtmlweb").innerHTML = send
}