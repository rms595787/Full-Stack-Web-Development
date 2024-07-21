// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

const symb = Symbol("foo");
console.log(typeof symb);

const obj = {
  firstName: "Rahul",
  lastName: "Sharma",
};
obj[symb] = "tan";
console.log(obj);

for (let i in obj) {
  console.log(i);
}
