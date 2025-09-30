import { createReadStream } from "fs";

// ---------------------*********---------------------
const stream = createReadStream("./data.txt");
// this will give us buffer result
// <Buffer 30 0a 31 0a 32 0a 33 0a 34 0a 35 0a 36 0a 37 0a 38 0a 39 0a 31 30 0a 31 31 0a 31 32 0a 31 33 0a 31 34 0a 31 35 0a 31 36 0a 31 37 0a 31 38 0a 31 39 0a ... 48840 more bytes>

stream.on("data", (data) => {
  console.log(data);
});
// ---------------------*********---------------------

// ---------------------*********---------------------
const stream2 = createReadStream("./data.txt", { highWaterMark: 900000 });
// it also gives the same result, it just increase the read and write limit
{
  /* <Buffer 30 0a 31 0a 32 0a 33 0a 34 0a 35 0a 36 0a 37 0a 38 0a 39 0a 31 30 0a 31 31 0a 31 32 0a 31 33 0a 31 34 0a 31 35 0a 31 36 0a 31 37 0a 31 38 0a 31 39 0a ... 48840 more bytes> */
}
stream2.on("data", (data) => {
  console.log(data);
});
// ---------------------*********---------------------

// ---------------------*********---------------------
// It will give us the exact result which txt file holds
const stream3 = createReadStream("./data.txt", { encoding: "utf-8" });
stream3.on("data", (data) => {
  console.log(data);
});
// ---------------------*********---------------------
