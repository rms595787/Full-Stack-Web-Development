// Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a function is called, and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.

// 1st Example
function countTo5(count = false) {
  if (count === true) {
    for (i = 1; i <= 5; i++) {
      console.log(`count ${i}`);
    }
  }
}
countTo5();
countTo5(true);

// 2nd Example
function ratings(rate = 0) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate <= 5) {
    console.log(`Low Ratings :(`);
  }
}
ratings();
ratings(5);
