const url = "https://jsonplaceholder.typicode.com/todos/1";

(function () {
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
  })
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      alert("error");
    });
})();
