// ----------------------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user hobbies...");
//     callback(["Cricket", "Reading", "Dancing"]);
//   }, 2000);
// }

// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");
// ----------------------------------------------

// Solution

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Name...");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting ${name}'s hobbies...`);
      resolve(["Cricket", "Reading", "Dancing"]);
    }, 2000);
  });
}

// NOTE
// if we simply use .then() and just pass the variable in function it automatically returns the statement 
// but if you use any other statement with it you have to return separately
getUserDataFromDB("Rahul")
  .then((data) => {
    console.log(data);  //  Logs the user name
    return getUserHobbies(data);    // returns the promise
  })
  .then((hobbies) => console.log(hobbies))
  .catch((error) => console.log(`Error: ${error}`));

// getUserDataFromDB("Rahul").then((name) => {
//   return getUserHobbies(name).then((hobbies) => {
//     console.log(`User Name: ${name}`);
//     console.log(`${name}'s Hobbies are: ${hobbies}`);
//   });
// });
console.log("End");
