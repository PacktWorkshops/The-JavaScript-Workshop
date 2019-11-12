$.ajax({
  type: "POST",
  url: "/example/api",
  data: "example=payload",
  success: function() {
    console.log("Successful XHR!");
  }
});