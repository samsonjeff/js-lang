let  country  =  "Malawi";
let  continent  =  "Africa";
   
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

// A method is a special kind of function that belongs to an object. Objects are complex data types, which can consist of many values (stored in properties) and methods. If you want to call the method of an object, you write the name of the method after a dot. Does this remind you of something? This is exactly the notation you use when calling console.log. The console object has many other methods besides the log method, such as time and timeEnd (which can be used to measure time).

console.time("FetchTimer");

setTimeout(() => {
    console.timeLog("FetchTimer", "Halfway there...");
}, 500);

setTimeout(() => {
    console.timeEnd("FetchTimer");
}, 1000);



