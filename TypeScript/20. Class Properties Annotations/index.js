"use strict";
/*

Class Properties Annotations
You can annotate class properties with a type. This allows you to define the data type of the property and ensure that it is always consistent.

*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("John", 20);
console.log(person); // Person { name: 'John', age: 20 } 
