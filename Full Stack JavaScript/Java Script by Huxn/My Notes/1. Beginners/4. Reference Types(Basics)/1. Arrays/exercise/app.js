// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["Arijit Singh", "Jubin Nautiyal", "Guru Randhwa"];
console.log(favSingers[0]);

const favNumbers = [1, 2, 3, 4];
const mixedArr = ["string", "one", "two", favSingers, favNumbers];
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3][0]);
console.log(mixedArr[3][1]);
console.log(mixedArr[3][2]);
console.log(mixedArr[4][0]);
console.log(mixedArr[4][1]);
console.log(mixedArr[4][2]);
console.log(mixedArr[4][3]);
