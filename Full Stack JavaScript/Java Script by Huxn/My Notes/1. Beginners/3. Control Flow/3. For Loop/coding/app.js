/*

For Loop
Dry -> Don't repeat yourself

syntax

for(intitalExpression; condition; incrementExpression){
code
}

*/

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}

// nested for loop
for (let i = 1; i < 6; i++) {
  console.log("i", i);
  for (let j = 1; j < 3; j++) {
    console.log("j", j);
  }
}
