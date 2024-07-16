////////////////////////////////////////////////
// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

// syntax of forEach loop
// color.forEach(calllbackfn:(value:String,index:Number,array:string[]) => logic);

// ----------------------------
const color = ["teal", "red", "blue", "orange"];
// color.forEach((color) => {
//   console.log(color);
// });
function col(c) {
  console.log(c);
}
color.forEach(col);
// Note
// Here forEach is automatically passing the array color in the function
// ----------------------------

// ----------------------------
const words = "rahul";

// It makes the first letter in upper case
console.log(words[0].toUpperCase());

// It prints string from the selected index value
// It include start value and exclude end value
console.log(words.substring(1));
console.log(words.substring(1, words.length));
console.log(words.substring(1, words.length - 1));

// 2nd Example
const words2 = [
  "hello",
  "hi",
  "bye",
  "cricket",
  "football",
  "birds",
  "animals",
];
const capWords = words2.forEach((word, index, array) => {
  array[index] =
    word[0].toUpperCase() +
    word.substring(1, word.length - 1) +
    word[word.length - 1].toUpperCase();
});
console.log(words2);
// ----------------------------
