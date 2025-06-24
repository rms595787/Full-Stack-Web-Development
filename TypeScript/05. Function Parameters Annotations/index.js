"use strict";
/*
Function Parameters Annotations
Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.
*/
// NOTE
// By default typeScript variable has "any" data type
// Regular Func
function addOne(num) {
    return num + 1;
}
const result = addOne(3);
console.log(result); // 4
// Arrow Func Annotations
const double = (x, y) => x * y;
const res = double(2, 10);
console.log(res); // 20
// Note
// If you provide less or more arguments in function than the requried once it will give warning
// like - double(2); // Expected 2 arguments, but got 1
// like - double(2,10,3); // Expected 2 arguments, but got 3
