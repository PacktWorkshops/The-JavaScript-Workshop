// Procedural
function toCapitalize(input) {
  let arrayOfString = input.split(' ');

  for (let i = 0; i < arrayOfString.length; i++) {
    let firstChar = arrayOfString[i].charAt(0);
    arrayOfString[i] = firstChar.toUpperCase() + arrayOfString[i].slice(1);
  }

  return arrayOfString.join(' ');
}

let string = 'Once upon a time in new york.';
console.log(toCapitalize(string));
