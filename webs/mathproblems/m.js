var link = window.location.href.split("/")
link.splice(0,4);
link = link[0];

const qna = givequestion(link)
document.getElementById("question").innerHTML = qna.question

function givequestion(linkgq) {
  linkgq.split("");
  if (linkgq[1]=="d") {
    switch (linkgq[3]) {
      case "a": {
        var x = randomint(1, 10**linkgq[0]-1);
        var y = randomint(1, 10**linkgq[0]-x);
        return {
          "question": `${x} + ${y} = `,
          "answer": x+y,
        }
      }
      case "s": {
        var x = randomint(10**linkgq[0]/2, 10**linkgq[0]-1);
        var y = randomint(1, x);
        return {
          "question": `${x} - ${y} = `,
          "answer": x-y,
        }
      }
      case "c": {
        var x = randomint(0, 10**linkgq[0]);
        var y = randomint(0, 10**linkgq[0]);
        if(x>y) {
          return {
            "question": `${x} and ${y}`,
            "answer": `>`,
          }
        } else if (x==y){
          return {
            "question": `${x} and ${y}`,
            "answer": `=`,
          }
        }else {
          return {
            "question": `${x} and ${y}`,
            "answer": `<`,
          }
        }
      }
      case "m": {
        var x, y
        x = randomint(0, 10**linkgq[0]);
        y = randomint(0, 10**linkgq[0]);
        return {
          "question": `${x} x ${y} = `,
          "answer": x*y,
        }
      }
      case "d": {
        var x, res
        x = randomint(2, 10**linkgq[0]);
        res = x * randomint(1, 10**linkgq[0]);
        return {
          "question": `${res} : ${x} = `,
          "answer": res/x
        }
      }
    }
  } else {
    switch(link){
      case "ex": {
        if (Math.random()<0.2){
        var x = randomint(11, 20)
        } else {
          var x = randomint(2,10)
        }
        if (x > 10) {
          return {
            "question": `${x}<sup>2</sup> = `,
            "answer": x**2
          }
        }
        var listofmaxexpon = [10, 5, 3, 4, 3, 3, 2, 2, 5, 2]
        var y = randomint(0,listofmaxexpon[x-2]);
        return {
          "question": `${x}<sup>${y}</sup> = `,
          "answer": x**y
        }
      }
      case "crex": {
        let send = ""
        let termeni = randomint(1,4);
        let baza = randomint(2,5);
        let exponent = [];
        for (let i = 0; i<(termeni); i++){
          exponent.push(randomint(-10,10));
        }
        let xyz = 0
        for (i in exponent) {
          xyz += exponent[i];
        }
        exponent.push(randomint(2, 4)- xyz);
        let xyzy = 0
        for (i in exponent) {
          xyzy += exponent[i];
        }
        xyz = xyzy
        for (i in exponent) {
          xyzy -= exponent[i];
          if (i == 0) {
            send += `${baza}<sup>${exponent[i]}</sup>`
          } else if (exponent[i] < 0) {
            send += ` : ${baza}<sup>${-exponent[i]}</sup>`
          } else {
            send += ` * ${baza}<sup>${exponent[i]}</sup>`
          }
        }
        send += " = ";
        return {
          "question": send,
          "answer": baza**xyz, 
        }
      }
      case "sqrt": {
        var x = randomint(2, 25)
        return {
          "question": `\u221a<overline>${x**2}</overline> = `,
          "answer": x
        }
      }
      case "sqrta": {
        var x = randomint(2, 15)
        while (Math.sqrt(x) % 1 == 0 ) {
          x = randomint(2, 15)
        }
        return {
          "question": `\u221a<overline>${x}</overline> = (precision: down to the hundreds (ex: 1.62))`,
          "answer": Math.sqrt(x).toFixed(2)
        }
      }
      default: {
        console.error("where the hell am i \n           -m.js")
      }
    }
  }
}

function verifyanswer() {
  if(link.split("")[3] == "c" || link == "sqrta"){
    if(document.getElementById("answer").value == qna.answer){
      if(confirm("Correct! Restart?")){
        location.reload()
      } else {
        window.location = "/index.html"
      }
    } else {
      alert(`Wrong! It's ${qna.answer}`);
      location.reload()
    }
  } else {
    if(~~document.getElementById("answer").value == qna.answer){
      if(confirm("Correct! Restart?")){
        location.reload()
      } else {
        window.location = "/index.html"
      }
    } else {
      alert("Wrong! It's " + qna.answer);
      location.reload()
    }
  }
}

function randomint(a,b) {if(a>b){var c=a;a=b;b=c;}return Math.floor(Math.random()*(b-a+1)+a);} // compact code B)