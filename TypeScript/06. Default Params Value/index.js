// Code
function greet(person) {
    if (person === void 0) { person = "Anonymous"; }
    return "Hello ".concat(person);
}
// const res = greet(); // Hello Anonymous
var res = greet("Rahul"); // Hello Rahul
console.log(res);
