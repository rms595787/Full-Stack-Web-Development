// JSON -> Java Script Object Notation

// NOTES
// You cannot use single quotation marks('') instead use double quotation marks("")

const person = {
  name: "Rahul Sharma",
  age: 20,
  email: "rms595787@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    idk: true,
  },
};
console.log(person);
// Operations of JSON in JS
// JSON.stringify()
// JSON.parse()

const jsonStringify = JSON.stringify(person);
console.log("After converting into json stringify\n", jsonStringify);

const jsonParse = JSON.parse(jsonStringify);
console.log(
  "After converting json stringify into json parse(means normal content of js)\n",
  jsonParse
);
