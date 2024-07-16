// Destructuring Mixture Practise
// Creating Data entry
const data = {
  user: {
    id: 123,
    name: "Rahul Sharma",
    age: 30,
    email: "rahul.sharma@example.com",
    address: {
      city: "Ghaziabad",
      country: "India",
    },
    hobbies: ["Reading", "Painting", "Football"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    id,
    name,
    age,
    email,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

// Printing data in console
console.log(`User Id: ${id}`);
console.log(`User Name: ${name}`);
console.log(`User Age: ${age}`);
console.log(`User Email: ${email}`);
console.log(`User Address: ${city}, ${country}`);
console.log(`User Hobbies: ${hobbies}`);
console.log(`Maths Scores: ${math}`);
console.log(`Science Scores: ${science}`);
console.log(`History Scores: ${history}`);
console.log(`Product1: ${product1.name} - ${product1.price}`);
console.log(`Product2: ${product2.name} - ${product2.price}`);
console.log(`Product3: ${product3.name} - ${product3.price}`);
console.log(`darkMode: ${darkMode}`);
console.log(`email: ${emailNotifications}`);
console.log(`sms: ${smsNotifications}`);
console.log(`push: ${pushNotifications}`);
console.log(`language: ${language}`);
