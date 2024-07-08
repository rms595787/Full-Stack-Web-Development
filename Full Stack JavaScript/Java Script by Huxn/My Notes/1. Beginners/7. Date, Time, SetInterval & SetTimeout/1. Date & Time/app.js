// Date & Time

// In JavaScript, you can work with dates using the built-in Date object. The Date object allows you to create, manipulate, and format dates and times.

// Creating a Date Object:
// -> You can create a new Date object by calling the Date constructor with or without arguments. If no arguments are provided, it will create a Date object representing the current date and time.

// --------------------------------------
const currentDate = new Date(); //  here we are creating a constructor useing 'new' keyword
console.log(currentDate);

// Create a Date object for a specific date and time
// year, month, day, hours, minutes, seconds, milliseconds
const currentDate2 = new Date(2024, 7, 8, 12, 24, 12, 0);
console.log(currentDate2);
// ------------------------------------

// ------------------------------------

// Getting Different Parts of the Date:
// You can extract various parts of a Date object, such as the year, month, day, hours, minutes, seconds, etc.

// Different things to acess in date using various methods
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log("year:", year);
console.log("month:", month);
console.log("day:", day);
console.log("hours:", hours);
console.log("minutes:", minutes);
console.log("minutes:", minutes);
console.log("minutes:", minutes);
console.log("seconds:", seconds);
console.log("milliseconds:", milliseconds);
// ------------------------------------

// ------------------------------------
// Formatting Dates:
// You can format dates to display them in a more readable format using various methods.
// Different methods to convert date to string
console.log("\nConverting date to strings");
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
// ------------------------------------

// ------------------------------------
// Working with Time:
// You can perform operations on dates, such as adding or subtracting time.
// Incremeting & Decrementing Date
date.setDate(date.getDate() + 1);
console.log(date);
date.setDate(date.getDate() - 2);
console.log(date);
