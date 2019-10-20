var ev = new Event("click");
someNode.dispatchEvent(ev);

var event = new CustomEvent("click", {detail: 123});

var handler = function(ev) {
  var value = ev.detail;  // value is now 123
};

var event = new CustomEvent("myEvent", {detail: 42});
someContainer.addEventListener("myEvent", someEventHandler);
someNode.dispatchEvent(event);

