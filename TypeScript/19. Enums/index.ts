/*

Enums
Enum is a way to define a set of "named constants". Enums allow you to define a collection of related values that can be used interchangeably in your code.

For Example: Let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "stormy". You could define an enum like this:

// First way to assign enum

enum WeatherConditions{
    Sunny,
    Cloudy, 
    Rainy, 
    Snowy,
    Stormy,
}

// Second way to assign enum

enum WeatherConditions{
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy",
    Stormy = "stormy",
}

In this example, WeatherConditions is the name of the enum, and each of the values (e.g. Sunny, Cloudy, etc.) is assigned an automatic numerical value starting from 0.


// Usage
const currentWeather = WeatherConditions.Sunny;
console.log(`The current Weather is ${currentWeather}`);

// Output: The current weather is Sunny
*/

// First way of assingning enum ( It works based on indexing starts with 0 )
enum WeatherConditions {
  sunny,
  cloudy,
  rainy,
  snowy,
}

console.log("\nFirst way of assigning enum");
console.log(WeatherConditions.sunny); // 0
console.log(WeatherConditions[2]); // rainy

// Second way of assingning enum ( It works as variables )
enum weatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

console.log("\nSecond way of assigning enum");
console.log(weatherConditions.Snowy);
