// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

// creating factory function that generates different type of vehicles

function vehicles(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year,
    info: function () {
      return `
Type of vehicle: ${this.type}
Brand of vehicle: ${this.brand}
Model of vehicle: ${this.model}
Year of vehicle: ${this.year}
`;
    },
  };
}

const vehicle1 = vehicles("Car", "Toyota", "Camry", 2020);
const vehicle2 = vehicles("Motorcycle", "Honda", "CBR500R", 2019);

console.log(vehicle1.info());
// Type of vehicle: Car
// Brand of vehicle: Toyota
// Model of vehicle: Camry
// Year of vehicle: 2020

console.log(vehicle2.info());
// Type of vehicle: Motorcycle
// Brand of vehicle: Honda
// Model of vehicle: CBR500R
// Year of vehicle: 2019
