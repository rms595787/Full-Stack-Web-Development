// alert("Hello This is Rahul Everyone"); // We use this to generate alert on the screen

// Console

console.log("Hello Rahul"); // We use this to generate text in console of the browser
console.log(2 + 2);
console.log({ name: "Rahul" });
console.clear();
console.error("This is a big problem");
console.table({ name: "Rahul", age: 19 });

/*
            NOTES
            
console - it is a object and we have lots of methods to work with it.
alert - it is a message pop up window appear on the browser as a alert

IN JS
single line comment - //
multiple line comment - / two asteric between these forward slashes /

clg -- console.log
log -- console.log
*/

/*
        Variables
(reserved word) (variable name) (type of value)
reserved words - let, var, const

const - refers to the word constant which mean whatever value you store in it you cannot change it in future
        but we can do that is var and let keywords

*/
// Declared Variable
let x;

// Assign value
let y;
y = "Value";
console.log(y);

// Assign integer value
let name = 5;
console.log(name);

// String value
name = "Rahul";
console.log(name);

// const - refers to the word constant which mean whatever value you store in it you cannot change it in future
//         but we can do that is var and let keywords

let n = "Let Software Developer(Original Value)";
console.log(n);
n = "Let Web Developer(Updated Value)";
console.log(n);

var naam = "Var Software Developer(Original Value)";
console.log(naam);
naam = "Var Web Developer(Updated Value)";
console.log(naam);

const z = "Const Software Developer(Original Value)";
console.log(z);

/*
// Here we tried to update the constant value of variable z
z = "Var Web Developer(Updated Value)";
console.log(z);

 // It throughs this error
// Uncaught TypeError: invalid assignment to const 'z'
// It means you have assigned some different value to a constant variable which is not possible.(like value of  pi is fixed you cannot use any other value instead)

*/
