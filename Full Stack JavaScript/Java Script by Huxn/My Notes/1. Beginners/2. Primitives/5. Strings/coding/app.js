/*
                    Strings
    In JS there are three ways of storing a string
    1. Single Quotes ('')
    2. Double Quotes ("")
    3. Backticks (``) - Template Literals
*/

let firstName = 'Rahul ';
let lastName = 'Sharma';

// Different Strings Operations

// 1. Concatenation
console.log("Performing Concatenation Operation");
console.log(firstName + lastName);

// Or

// Concatenation
console.log(firstName.concat(lastName));

// 2. Append
console.log("Performing Concatenation Append");
// firstName += "is something else"
firstName += lastName;
console.log(firstName);

// 3. Length
console.log("Performing Length Operation");
console.log(firstName);

// 4. Cases
console.log("Performing Case Operation");
console.log("Lower Case",firstName.toLowerCase());
console.log("Upper Case",firstName.toUpperCase());

// 5. Slice
console.log(firstName.slice(0,1));
console.log(firstName.slice(0,3));
console.log(firstName.slice(0,));   // to display complete string

// Split & Join
console.log(firstName.split());