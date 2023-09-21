var url = "http://localhost:8080/api/v1/users";

var data = {};

data.firstname = "John2";

data.lastname = "Snow2";

var json = JSON.stringify(data);

var tempt = new XMLHttpRequest();

tempt.open("PUT", url + "/12", true);

tempt.setRequestHeader("Content-type", "application/json;charset=utf-8");

tempt.onload = function () {
  var urs = JSON.parse(tempt.responseText);

  if (tempt.readyState == 4 && tempt.status == "200") {
    console.table(urs);
  } else {
    console.error(urs);
  }
};

tempt.send(json);
