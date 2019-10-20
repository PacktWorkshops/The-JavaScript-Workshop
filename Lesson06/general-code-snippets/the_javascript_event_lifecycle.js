var handler = function(ev) {
  if (ev.target.value.length < 6) {
    ev.stopImmediatePropagation();
  }
};

var handler = function(ev) {
  ev.preventDefault();
}

var handler = function(ev) {
  ev.stopPropagation();
  ev.preventDefault();
}

var handler = function(ev) {
  if (ev.cancelable) {
    ev.preventDefault();
  }
};

