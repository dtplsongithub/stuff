const files = [
  {
    "name": "clock",
    "desc": "its a clock made in html canvas",
    "vip": false,
    "size": 2423
  },
  {
    "name": "mathproblems",
    "desc": "some math problems from 1st grade to 7th grade",
    "vip": true,
    "size": 18221
  },
  {
    "name": "my-mario-kart-wii-stats",
    "desc": "hasnt been updated in a long time",
    "vip": false,
    "size": 3740
  },
  {
    "name": "psdnd",
    "desc": "portable seven-digit number displayer",
    "vip": 2,
    "size": 2719
  },
  {
    "name": "radixsort",
    "desc": "the radix lsd sort. DONT CLICK THE 2ND BUTTON. your browser WILL freeze.",
    "vip": true,
    "size": 2564
  },
  {
    "name": "test230429",
    "desc": "",
    "vip": false,
    "size": 1137
  },
  {
    "name": "test231020",
    "desc": "",
    "vip": false,
    "size": 2422
  },
  {
    "name": "test231025",
    "desc": "",
    "vip": false,
    "size": 15802
  },
  {
    "name": "test231028",
    "desc": "",
    "vip": false,
    "size": 4154
  },
  {
    "name": "test231102",
    "desc": "",
    "vip": false,
    "size": 1025
  },
  {
    "name": "test231103",
    "desc": "",
    "vip": false,
    "size": 3932
  },
  {
    "name": "tileset",
    "desc": "one-line code thingy",
    "vip": false,
    "size": 1401
  },
  {
    "name": "unoriginalclickergame",
    "desc": "unoriginal clicker game. thats it :)",
    "vip": 2,
    "size": 12404
  }
]
let table = document.getElementById("myTable");
for (i in files) {
  let row = table.insertRow(-1);
  row.insertCell(0).innerHTML = `<a href="archives/${files[i].name}.zip">${files[i].name}</a>`;
  row.insertCell(1).innerText = files[i].desc;
  let send = "";
  let sendy = "";
  switch (files[i].vip) {
    case true: {
      send = "yes";
      sendy = "#ff7777";
      break;
    }
    case false: {
      send = "no";
      sendy = "#77ff77";
      break;
    }
    case 2: {
      send = "kinda, it has been rushed";
      sendy = "#ffff77";
      break;
    }
    default: {
      send = files[i].vip;
    }
  }
  let c2 = row.insertCell(2);
  c2.innerText = send;
  c2.style["background-color"] = sendy;
  row.insertCell(3).innerText = (files[i].size /1024).toFixed(1) + " KB";
}