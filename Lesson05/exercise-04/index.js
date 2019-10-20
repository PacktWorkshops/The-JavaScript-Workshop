function isValidAge(age, gender) {
  if (age < 18 || gender === "female" && age > 35 || gender !== "female" && age > 30) {
    return false;
  }
  return true;
}
console.log( isValidAge(17, "female") );
// =>   false
console.log( isValidAge(34, "male") );
// =>   false
console.log( isValidAge(34, "female") );
// =>    true