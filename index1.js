$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  beforeSend: function (tempt) {
    tempt.overrideMimeType("text/plain charset = x - user - defined");
  },
})
  .done(function (data) {
    if (console && console.log) {
      console.log("Sample of data:", data.slice(0, 100));
      console.log("Sample of data", JSON.parse(data));
    }
  })
  .fail(() => console.log("Cannot get from api"));
