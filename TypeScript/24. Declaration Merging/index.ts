/*

Declaration Merging
Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "Declaratoin merging" or "interface extension", which is often misconstructed as "re-opening".

Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.

*/

// Original Interface
interface Car {
  brand: string;
  start(): void;
}

// Declartion merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

// usage of the extended interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started");
  },
  stop() {
    console.log("Car stopeed");
  },
};

console.log(myCar);
myCar.start();
myCar.stop();
