const request = new XMLHttpRequest();

request.open("POST", "/example/api", true);
request.onreadystatechange = function() {
  if (request.readyState != 4 || request.status != 200) return;
  console.log("Successful XHR!");
};

request.send("example=payload");