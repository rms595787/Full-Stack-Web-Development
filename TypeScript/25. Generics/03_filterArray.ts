function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

// Number Array
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
const oddNumbers = filterArray<number>(numberArray, (num) => num % 2 != 0);
console.log(`List of even number: `);
console.log(evenNumbers);
console.log(`List of odd number:`);
console.log(oddNumbers);

// String Array
const stringArr = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWords);

// Interface
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);

console.log(redFruits);
