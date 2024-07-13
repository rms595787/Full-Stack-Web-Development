// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!
// 3. Create a function which will take unlimited amount of parameters & log all of that params to the console.

function sum(...values) {
  let sum_ = 0;
  for (let i = 0; i < values.length; i++) {
    sum_ = sum_ + values[i];
  }
  return sum_;
}
console.log("The sum of all the value is:", sum(4, 3, 6, 2, 6));

function unlimited(...values) {
  return values;
}
console.log(unlimited("Rahul", "Sharma", 19));
