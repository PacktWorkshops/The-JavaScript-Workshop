var a=0;
for(var a in [0, 1]);
console.log( a ); // ==> a is now 1 (as modified by the loop)


delete a;  // clear variables


var a=0;
for( let a in [0, 1]);
console.log( a ); // ==> a is still 0 (not modified by the loop)


delete a;  // clear variables


glob=1; {glob=2; let glob=3;}  // ==> can't access lexical declaration `glob' before initialization
glob=1; {glob=2; var glob=3; } // ==> accepted syntax/