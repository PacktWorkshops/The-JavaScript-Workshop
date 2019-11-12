// storage.js
if (!window.localStorage) {
  (document.getElementById('warning').style.display = 'block');
} else {
  let firstName = localStorage.getItem('firstName');
  let lastName = localStorage.getItem('lastName');
  let inputFName = document.getElementById('first-name');
  let inputLName = document.getElementById('last-name');
  if (firstName) {
    inputFName.value = firstName;
  }
  if (lastName) {
    inputLName.value = lastName;
  }
  inputFName.addEventListener('input', event => {
    localStorage.setItem('firstName', event.target.value);
  });
  inputLName.addEventListener('input', event => {
    localStorage.setItem('lastName', event.target.value);
  });
}
