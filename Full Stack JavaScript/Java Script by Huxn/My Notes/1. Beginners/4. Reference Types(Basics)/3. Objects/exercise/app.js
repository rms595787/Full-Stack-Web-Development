// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
  type: "electric",
  model: "ev2343",
  color: "pitch black",
};
console.log(typeof car);
console.log(car);
car.type = "toyota";
console.log(car);

car.wheel = "Alloy Wheels";
console.log(car);
