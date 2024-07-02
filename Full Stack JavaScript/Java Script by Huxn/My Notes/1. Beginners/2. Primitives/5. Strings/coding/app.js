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
console.log("\nPerforming Concatenation Operation");
console.log(firstName + lastName);

// Or

// Concatenation
console.log(firstName.concat(lastName));

// 2. Append
console.log("\nPerforming Concatenation Append");
// firstName += "is something else"
firstName += lastName;
console.log(firstName);

// 3. Length
console.log("\nPerforming Length Operation");
console.log(firstName);

// 4. Cases
console.log("\nPerforming Case Operation");
console.log("Lower Case",firstName.toLowerCase());
console.log("Upper Case",firstName.toUpperCase());

// 5. Slice
console.log("\nPerforming Slice Operation");
console.log(firstName.slice(0,1));
console.log(firstName.slice(0,3));
<<<<<<< HEAD
console.log(firstName.slice(0,));   // to display complete string

// Split & Join
console.log(firstName.split());
=======
console.log(firstName.slice(0,));

// 6. Split & Join
console.log("\nPerforming Split Operation");
console.log(firstName.split(""));
console.log(firstName.split(" "));

console.log("\nPerforming Join Operation");
console.log(firstName.split("").join(""));
console.log(firstName.split("").join("-"));
console.log(firstName.split(" ").join(" "));
console.log(firstName.split(" ").join(" - "));
console.log(firstName.split(" ").join(""));
console.log(firstName.split(" ").join("-"));

// 7. Includes - This is used for search/check

/*
            NOTES
includes - in includes comma(,) works as "or" operator if any of condition works it results in "true"

*/

console.log("\nPerforming Include Operation");
console.log(firstName);
console.log("Checking string consider letter R",firstName.includes("R"));
console.log("Checking string consider letter Rah",firstName.includes("Rah"));
console.log("Checking string consider letter RahS",firstName.includes("RahS"));
console.log("Checking string consider letter R, h",firstName.includes("R","h"));    // comma(,) "or" situation
console.log("Checking string consider letter R, h, w",firstName.includes("R","h","W")); //comma(,) "or" situation
console.log("Checking string consider letter W",firstName.includes("W"));

// 8. Trim - Removes spaces
console.log("\nPerforming Trim Operation");
firstName = "   Rahul   ";
console.log(firstName);
firstName = "   Rahul   Sharma  ";
console.log(firstName);
console.log(firstName.trim());

// 9. Backtick(`) as a String - used for multiline string similar as pre tag in html

/*

                NOTE
    We cannot generate 'multiline strings' using single(' ') and double(" ") strings
    The soultion is backticks(`) for multiline

*/

// let desc = " This is
// a 
//     multiline
//     string";

// let desc = ' This is
// a 
//     multiline
//     string';

console.log("\nCreating multiline string using Backticks(`)");
let desc = `This is
a 
    multiline
    string`;
console.log(desc);

desc =` ${firstName}
${lastName}`;
console.log("\nUsing Variable inside string by using($) symbol\n",desc);
>>>>>>> dcbcd6cf5beac529f1d1ba667b36c5625c7541f2
