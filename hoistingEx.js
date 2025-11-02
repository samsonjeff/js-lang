// Example how hoisting works

var weight;
var height = 180;

console.log(height); // -> 180
console.log(weight); // -> undefined

weight = 20;
console.log(weight); // -> 20
console.log(height); // -> 180

// this is not included only the example code above
var BMI = weight / (height * height);
console.log(BMI);
