var form = document.getElementsByTagName("form")[0];
form.submit();

function formHandler(ev) {
  if (document.getElementById("password").value().length < 3) {
    alert("Password is too short");
    return false;
  }
};

document.getElementByTagName("form")[0].reset();