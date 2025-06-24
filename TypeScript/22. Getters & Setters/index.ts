/*

Getters & Setters
Getters and Setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

*/

class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}
const myInstance = new MyClass();
// console.log(`Current Value: ${myInstance._myProperty}`); // Person Property '_myProperty' is private and only accessible within class 'MyClass'.
console.log(`Current Value: ${myInstance.myProperty}`);

myInstance.myProperty = 10;
console.log(`Updated Current Value: ${myInstance.myProperty}`);
