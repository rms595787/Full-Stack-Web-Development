/*
In JavaScript, try and catch are keywords used to implement error handling. Error handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. The try and catch blocks work together to enable developers to catch and handle errors, preventing them from crashing the entire application.
*/

function parseJSON(jsonString) {
  try {
    console.log(JSON.parse(jsonString));
  } catch (error) {
    console.log(`An error occurred while parsing the JSON: ${error.message}`);
    return null;
  }
}

const validJSON = `{ "name": "Rahul Sharma", "age": 19 }`;
const invalidJSON = `{ "name": "Rahul Sharma", "age": 19, }`;

const result1 = parseJSON(validJSON);
const result2 = parseJSON(invalidJSON);
