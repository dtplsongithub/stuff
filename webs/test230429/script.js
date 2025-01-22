

var i, i_tem, j, result;


window.alert('hello');
window.alert('this script was made in blockly, dont ask why');
window.alert('sorry for only using "window.alert" but yeah');
window.alert('...');
i = Number(window.prompt('anyways please insert a number, ill convert it into the binary version.'));
i_tem = i;
j = 0;
result = '';
for (var count = 0; count < 256; count++) {
  j = (typeof j === 'number' ? j : 0) + 1;
  if (i <= Math.pow(2, j)) {
    break;
  }
}
var j_start = j - 1;
var j_inc = 1;
if (j_start > 0) {
  j_inc = -j_inc;
}
for (j = j_start; j_inc >= 0 ? j <= 0 : j >= 0; j += j_inc) {
  if (i_tem >= Math.pow(2, j)) {
    i_tem = (typeof i_tem === 'number' ? i_tem : 0) + (0 - Math.pow(2, j));
    result = String(result) + '1';
  } else {
    result = String(result) + '0';
  }
}
window.alert(result);
window.alert("so? dont you think its cool?")