/*
Async Function
Async is a special function that is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute. Async functions are marked with the async keyword.

Async
Async is a keyword use to turn function declaration to async function.


Await
The await operator is used to wait for a promise. It can only be used inside an async function within regular JavaScript code.
*/

// --------------------------------------
// Example 1
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data retrieved from the server.");
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining task can be executed here.");
  } catch (error) {
    console.log(error);
  }
}

// getUserData();

// --------------------------------------
// Example 2

function callbackHell(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed First`;
      console.log(`Inside (firstFunc) function`);
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log(`Inside (secondFunc) function`);
      resolve(processedData);
    }, 1500);
  });
}

async function processDataWithAsyncAwait() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunc(processedData1);
    console.log(
      `Final result of all funtions with async/await: ${processedData2}`
    );
  } catch (error) {
    console.log(error);
  }
}

processDataWithAsyncAwait();
