// Example how hoisting works

var weight;
var height = 180;

console.log(height);
console.log(weight);

var weight = 20;
console.log(weight);
console.log(height);

// this is not included only the example code above
var BMI = weight / (height * height);
console.log(BMI);
