const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just like you", singer: "NF", duration: 2.33 },
  { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold Sholder", singer: "Central Cee", duration: 5.23 },
];

// Here we are ignoring objects which we don't want to print by giving space after commas
// ex -
const [, , , { singer: s }] = songs;
console.log(s);

const [, , { duration: d }] = songs;
console.log(d);
