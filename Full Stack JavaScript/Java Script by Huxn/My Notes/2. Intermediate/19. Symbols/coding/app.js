// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

// To create a new symbol use Symbol()
const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);

// To make a symbol using Symbol()
const mySymbol2 = Symbol("I am a Genius");
console.log(mySymbol2);

// Compairing two symbols
// NOTE - Symbols are always unique
const symb1 = Symbol("name");
const symb2 = Symbol("name");
console.log(symb1 === symb2);

// 1st Example of Symbol
const obj = {};
obj[symb1] = "value 1";
obj[symb2] = "value 2";
console.log(obj);

// 2nd Example

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");
const huxn = {};
huxn.age = 17;
huxn["gender"] = "male";
huxn["female"] = "female";
huxn[symbol1] = "Alex";
huxn[symbol2] = "John";
console.log(huxn);
