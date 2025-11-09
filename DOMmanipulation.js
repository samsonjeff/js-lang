// DOM-manipulation
// TWO WAY TO MANIUPLAT DOMS

const body = document.body;
// const div = document.createElement("div"); // created but not added yet
// div.innerHTML = "<h1>Added element</h1>"; // add element
// div.innerText = "Added text"; // add Text
// div.textContent = "follow how text styled or created! !";

// body.append(div); // to add div to the body
// body.appendChild(div); // focused to add element

// body.append("Hello World!"); // METHODS that requires STRING
// body.appendChild("Hello World!"); // METHODS tha requires NODE

// example
// body.append("Hello", document.createElement("div"));
// body.appendChild(document.createTextNode("Hello World!"));

// more example:
// const showDiv = document.querySelector("div"); // targeting all div element
// console.log(showDiv.textContent); // console: show ho text is written
// console.log(showDiv.innerText); // console: print out visble text on page

// const body = document.body;
// const h1 = document.createElement("h1");
// const strong = document.createElement("strong");
// strong.textContent = "H1 si created and add text that show's on your page";
// h1.append(strong); // append strong to the element h1
// body.append(h1); // append the H1 to be visible

// ADDING & REMOVE HTML ELEMENET
const div = document.querySelector("div");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const h1 = document.createElement("h1");
h1.textContent = "change element and add text h1 type";
// span1.remove(); // to remove element or remove variable
// div.removeChild(span2); // parent directly remove parent child variable
// div.prepend(span1); // Method that bring back to the beggining position

// HOW DATA ATTRIBUTE WORKS
let newData = (span1.dataset.newName = "result1"); //create new data on tag
span2.classList.add("new-class"); //create create new class
//create new class , but remove by false function
span2.classList.toggle("new-class", false);
span2.classList.remove("test2"); // delete class
span2.style.color = "red"; //manipulate css property
span2.style.backgroundColor = "blue"; //manipulate css property
h1.style.color = "blue"; // manipulat h1 style
span2.append(h1); // h1 is added next to span2

// HOW ATTRIBUTE WORKS
// console.log(span1.id); // simplest way to getAttribute
// console.log(span1.title); // simplest way to getAttribute
// console.log(span1.getAttribute("id")); // print out to the console
// console.log(span1.getAttribute("title"));
// console.log(span1.setAttribute("id", "newId"));
// console.log(span1.setAttribute("title", "newTitle"));
// span1.id = "simpleID"; // simplest way to change or set ID
// span1.title = "simpleTitle"; // simplest way to change or set Title
// span1.removeAttribute("id");
// span1.removeAttribute("title");

// Element Methods
// append(); //adds elements or content to the end of an element
// prepend(); //adds elements or content to the beginning of an element
// remove(); //removes an element from the DOM
// addEventListener(); // attaches an event listener to an element
// removeEventListener(); // removes an event listener from an element
// setAttribute(); //sets an attribute on an element
// getAttribute(); // gets the value of an attribute on an element
// removeAttribute(); // removes an attribute from an element

// IF ELSE EXAMPLE
// let poor = "noMoney";
// const parents = document.querySelector('#parents')
// const child = document.querySelector('#child')
// if (poor === "noMoney") {
//     if (parents.contains(child)) {
//         parents.removeChild(child);
//         console.log("Child removed!");
//     } else {
//         console.log("Child not found!");
//     }
// }
