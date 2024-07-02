/*
Do While Loop

Syntax
do{
code to be executed
increment;
}
while(condition);

*/

// Do while loop
let i = 1;
do {
  console.log("Hello World", i);
  i++;
} while (i <= 10);

// nested do while loop

i = 1;
do {
  console.log("Hello World", i);
  let j = 1;
  do {
    console.log("hello under world", j);
    j++;
  } while (j <= 2);
  i++;
} while (i <= 3);
