import EventEmitter from "events";

// creating Instance using constructor
const customEmitter = new EventEmitter();

// Some important methods
// 1. on: listen/register for an event.
// 2. once: listen/register for an event.
// 3. emit: emit/call an event.

// this can be called many times
customEmitter.on("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

customEmitter.emit("response", "Rahul", 19);
// "response" here is our eventName - it has to be same both while creating event and calling it
customEmitter.emit("response", "Raman", 39);
customEmitter.emit("response", "Aman", 20);

// This can only be called once
console.log("\nEmitter method which can be called once");
customEmitter.once("eventResponse", (name, age) => {
  console.log(`user: ${name} age: ${age}`);
});

// see here we try to call two times but we are able to call only once
customEmitter.emit("eventResponse", "Amit", 42);
customEmitter.emit("eventResponse", "Prabhor", 23);
