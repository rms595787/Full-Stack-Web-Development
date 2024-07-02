/*
While Loop

syntax

while (condition){
// code to be executed
}

*/

// while loop
// let i=1;
// while(i<=5){
//     console.log("hello world",i);
//     i++;
// }

// nested while loop
i = 1;
while (i <= 2) {
  j = 1;
  console.log("hello world", i);
  while (j <= 3) {
    console.log("Hello World", j);
    j++;
  }
  i++;
}
