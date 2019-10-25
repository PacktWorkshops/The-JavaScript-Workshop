function loadHandler() {
  modelInit();
  let form = document.getElementById("todo_form");
  form.addEventListener("submit", createHandler);
  document.addEventListener("CHANGED", changedHandler);
}

function changedHandler() {
  let msg = document.getElementById("notifications");
  msg.innerHTML = "The TODO model has been updated";
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
}

function createHandler(ev) {
  ev.preventDefault();
  let title = document.getElementById("title").value,
      description = document.getElementById("description").value,
      msg = document.getElementById("notifications");
  let errors = [];
  if (title.trim() == "") {
    errors = errors.concat(["Title is not valid"]);
  }
  if (description.trim() == "") {
    errors = errors.concat(["Description is not valid"]);
  }
  if (errors.length > 0) {
    msg.innerHTML = errors.join("/n");
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
    return false;
  }
  let created_at = new Date(),
      updated_at = new Date(),
      id = created_at.getTime(),
      completed = false;
  document.dispatchEvent(new CustomEvent("CREATE", {
      detail: {id, title, description, completed, created_at, updated_at}
    }));
  return false;
}