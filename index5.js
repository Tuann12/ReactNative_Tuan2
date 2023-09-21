var url = "http://localhost:8080/api/v1/users";

var tempt = new XMLHttpRequest();

tempt.open("DELETE", url + "/12", true);

tempt.onload = function () {
  var urs = JSON.parse(xhr.responseText);

  if (tempt.readyState == 4 && tempt.status == "200") {
    console.table(urs);
  } else {
    console.error(urs);
  }
};

tempt.send(null);
