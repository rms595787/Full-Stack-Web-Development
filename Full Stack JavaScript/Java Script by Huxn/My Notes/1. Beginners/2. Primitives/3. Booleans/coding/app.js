// Boolean --> True || False

console.log("Boolean Data Type");

let isTrue = true;
console.log(isTrue);

isTrue = false;
console.log(isTrue);

console.log(typeof isTrue);

console.log("Not a Number(NaN) Data Type");

let num = NaN;
console.log(num);

// If we add 'undefined' to a number which means adding a NaN value with number which results in NaN(Not a Number) value
let num2 = 10;
console.log(num2 + undefined);

/*

                Important

    Falsy values in Java Script
--> false
--> null
--> undefined
--> 0
--> -0
--> NaN
--> '', "", ``, (empty quotes)

All other values that this known to be as true values


        #    Difference between Null and undefined

--> Null is used by programmers
--> Undefined can be used by Java Script compilers
--> If you do not give value to a variable and execute it then it will result in undefined value. 

*/

console.log("Undefined and null value");

let notDefined;
console.log(notDefined);

notDefined = undefined;
console.log(notDefined);

notDefined = null;
console.log(notDefined);
