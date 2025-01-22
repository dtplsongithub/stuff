var f = "";
function oninputtt(which) {
  let K;
  f = document.getElementById("f").value.split("\n");
  if (which != null) {
    K = parseInt(which)-1;
  } else {
    K = Math.floor(Math.random()*(f.length));
  }
  document.getElementById("h").innerText = `${K+1}.  ${f[K]}`;
  f.splice(K, 1);
  f = f.join("\n");
  document.getElementById("f").value=f
}