// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// here we created an object which will work as existing object for other newly objects which will be created with the help of this object
let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const rahul = Object.create(person); // object has been created
console.log(rahul);

// now we will pass the values in newly created object
rahul.firstName = "Rahul";
rahul.lastName = "Sharma";
rahul.greet(); // here we are using method from existing object which is used to create this object

// another way to pass values in existing object through newly created object
let john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

console.log(john);
john.greet();
