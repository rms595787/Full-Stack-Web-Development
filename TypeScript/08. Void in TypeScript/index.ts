/*
Void in TypeScript
Void is a type that represents the "absence" of any value. It is oftern used as the return type for functions that do not return a value.
*/

// by default if you do not return anything from your function its return type would be void
function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
  // ERROR
  // return message;
}

printMessage("Hello How Are You?");
