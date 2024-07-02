/*
Switch Statement

syntax

switch (expression){
    case x:
        print;
        break;
    case y:
        print;
        break;
    default:
        print;
        break;
}
*/

/*

// 1st example
let x=0;
let bulb;
switch(x){
    case 0:
        bulb = "bulb is off";
        console.log(bulb);
        break;
    case 1:
        bulb = "bulb is on";
        console.log(bulb);
        break;
    default:
        bulb="no value found";
        console.log(bulb);
}

*/

// 2nd example
let day = "Saturday";

switch(day){
    case "Monday":
    console.log("Today is Monday");
    break;
    case "Tuesday":
    console.log("Today is Tuesday");
    break;
    case "Wednesday":
    console.log("Today is Wednesday");
    break;
    case "Thursday":
    console.log("Today is Thursday");
    break;
    case "Friday":
    console.log("Today is Friday");
    break;
    case "Saturday":
    console.log("Today is Saturday");
    break;
    case "Sunday":
    console.log("Today is Sunday");
    break;
    default:
    console.log("Don't know what day is today!");
    break;
}