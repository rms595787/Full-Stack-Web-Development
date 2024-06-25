/*
                    Strings
    In JS there are three ways of storing a string
    1. Single Quotes ('')
    2. Double Quotes ("")
    3. Backticks (``) - Template Literals
*/

let firstName = 'Rahul ';
let lastName = 'Sharma';

// Different ways of Concatenating Strings

// 1. Concatenation
console.log(firstName + lastName);

// 2. Concatenation
console.log(firstName.concat(lastName));

// 3. Append

// firstName += "is something else"
firstName += lastName;
console.log(firstName);