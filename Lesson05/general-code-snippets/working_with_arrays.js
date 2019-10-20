var myArray = [1, 2, 3];
var myEmptyArray = [];
myValue = myArray[3];
var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);
var arr = new Array(3);
console.log( arr );
// =>   (3) [empty x3]

for (var i in myArray) {
  console.log(myArray[i]);
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray [i]);
}

var arr = [1, "b", true];
arr.indexOf("b");
// =>   1

var searchedValue= "b";
if ( arr.indexOf(searchedValue)>-1 ) {
  console.log( "match found" );
}

var obj = {name: "bob"};
var arr = ["a", 99, obj];
console.log( arr.indexOf(obj) );
// =>   2
console.log( arr.indexOf({name: "bob"}) );
// =>   -1

