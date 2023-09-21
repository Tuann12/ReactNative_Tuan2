var url = "https://api.thecatapi.com/v1/images/search?limit=10";

var tempt = new XMLHttpRequest();

tempt.open("GET", url + "/1", true);

tempt.onload = function () {
  var urs = JSON.parse(tempt.responseText);

  if (tempt.readyState == 4 && tempt.status == "200") {
    console.table(urs);
  } else {
    console.error(urs);
  }
};

tempt.send(null);
