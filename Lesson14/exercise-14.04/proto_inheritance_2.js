function PersonName(firstName, lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;
 } 

PersonName.prototype.fullName = function(){
    return [this.firstName, this.lastName].join(" ");
}

let pName1 = new PersonName("Gaurav", "Mehla");
let pName2 = new PersonName("Sarthak", "Sharma");

console.log( pName1.fullName() );
console.log( pName2.fullName() );