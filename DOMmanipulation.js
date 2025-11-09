// DOM-manipulation
// TWO WAY TO MANIUPLAT DOMS

// const body = document.body;
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
// const showDiv = document.querySelector("div");
// console.log(showDiv.textContent); // console: show ho text is written
// console.log(showDiv.innerText); // console: print out visble text on page

const body = document.body;
const h1 = document.createElement("h1"); // create element
const strong = document.createElement("strong"); // create element
strong.textContent = "H1 si created and add text that show's on your page";
h1.append(strong); // append strong to the element h1
body.append(h1); // append the H1 to be visible

