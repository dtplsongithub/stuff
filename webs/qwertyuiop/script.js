function convert(data, name) {
  return `${name}
${textReplace(data.pal.join(","), "#", "")}
${data.palf}
${data.palc ? 1 : 0}
${data.palcreverse ? 1 : 0}
${data.palssa}
${data.vCx}
${data.vCy}
${e(data.palTemMap)}
6
${data.Mx.value}
${data.Mx.freq * 40}
${+data.Mx.interl}
${data.My.value}
${data.My.freq * 40}
0`;
}
function e(input) {
  for (i in "!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:") {
    input = textReplace(input, "!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"[i], i + ",");
  }
  input = input.split("\n");
  for (i in input) {
    input[i] = input[i].substring(input[i].length - 1, 0);
  }
  return input.join("\n") + "\n-ptmend";
}
function textReplace(haystack, needle, replacement) {
  needle = needle.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
    .replace(/\x08/g, '\\x08');
  return haystack.replace(new RegExp(needle, 'g'), replacement);
}
document.body.innerText = (convert({
  "pal": [
    "#99beff", "#80aeff", "#6ba1ff", "#478bff", "#3881ff", "#1a6eff", "#2e7bff", "#478bff", "#669eff", "#75a8ff", "#8ab5ff"],
  "palf": 3, // switch elements every n frames
  "palc": true, // switch elements?
  "palcreverse": false, //switch elements but in REVERSE
  "palssa": 0, // dont switch the nth elements of pal
  "vCx": 0,
  "vCy": 0,
  "Mx": {
    "interl": true,
    "value": 3,
    "freq": 0.15,
    "temp": 0,
    "time": 0,
    "offset": -17, // can also function as Cx
  },
  "My": {
    "value": 0,
    "freq": 0.2,
    "temp": 0,
    "time": 0,
    "offset": -17, // can also function as Cy
  },
  "scale": {
    "x": 2,
    "y": 2,
  },
  "palTemMap": `!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@
!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@
!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@
!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!
______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!
______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!
______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
))))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******((((((******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%^^^^^^%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$%%%%%%$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######$$$$$$######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@######@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!@@@@@@!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######
@@@@@@######$$$$$$%%%%%%^^^^^^&&&&&&******(((((())))))______!!!!!!______))))))((((((******&&&&&&^^^^^^%%%%%%$$$$$$######`
}
  , "diamond"))