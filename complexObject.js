// let  testObj  =  {};
// console.log(typeof testObj);  //  ->  object

let  testObj  =  {
	price:  600,
	type:  "laptop"
};
console.log(` model:${testObj.type} price:${testObj.price} `);  //  ->  text

let  user1  =  {
         name:  "Calvin",
         surname:  "Hart",
         age:  66,
         email:  "CalvinMHart@teleworm.us"
};
   
let  user2  =  {
         name:  "Mateus",
         surname:  "Pinto",
         age:  21,
         email:  "MateusPinto@dayrep.com"
};

// modification

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557


// delete
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined

// array
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

//

let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

// different type of data type
let  values  =  ["Test",  7,  12.3,  false];

//nested array
let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia

// useful array
let  users  =[  
    {
            name:  "Calvin",
            surname:  "Hart",
            age:  66,
            email:  "CalvinMHart@teleworm.us"
    },
    {
            name:  "Mateus",
            surname:  "Pinto",
            age:  21,
            email:  "MateusPinto@dayrep.com"
    }
];
   
// adding new object to the array
users[2]  =  {
    name:  "Irene",
    surname:  "Purnell",
    age:  32,
    email:  "IreneHPurnell@rhyta.com"
}

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21
console.log(`Hi my name is ${users[2].name} I am ${users[2].age} years old.`);  //  ->  Irene