var themekey = localStorage["/themes/chosen"];
var themeee = document.getElementById("theme");
if (!localStorage["/themes/chosen"]) localStorage["/themes/chosen"] = "regulardark";
fetch("/themes/" + themekey + ".css")
  .then((res) => {
    return res.text().then(body => {
      if (themeee) themeee.innerText = body;
    })
  }) // tottaly not copy+pasted code from HEXEc