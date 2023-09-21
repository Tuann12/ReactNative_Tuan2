var url = "https://jsonplaceholder.typicode.com/todos";

var tempt = new XMLHttpRequest();

tempt.open("GET", url, true);

tempt.onload = function () {
  var urs = JSON.parse(xhr.responseText);
  if (tempt.readyState == 4 && tempt.status == "200") {
    console.table(urs);
  } else {
    console.error(urs);
  }
};

tempt.send(null);
