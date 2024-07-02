let money = 50;
console.log(money);
console.log(typeof money);

money = "50";
console.log(money);
console.log(typeof money);
/*

// Convert String to Number

// Different ways of type conversion

// parseInt method
console.log("\nDifferent ways of type conversion");
money=parseInt(money);
console.log("\nUsing parseInt method for type conversion",money);
console.log(typeof money);

// short way of writing parseInt (+variable)
money=+money;
console.log("\nUsing short way of writing parseInt(+variable name) for type coversion",money);
console.log(typeof money);

// Number constructor
money=Number(money);
console.log("\nUsing constructor 'Number' for type conversion",money);
console.log(typeof money);

*/

// Converting String to Decimal
money  = "50.343";
money = parseFloat(money);
console.log(money);
console.log(typeof money);


/*
// Converting Number to String
money=50;
// money=money.toString();
// money=String(money);
console.log("\nUsing toString method for type conversion",money);
console.log(typeof money);
*/