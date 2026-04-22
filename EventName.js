// 1. DOCUMENT/WINDOW EVENTS
// Runs when the HTML is ready
document.addEventListener("DOMContentLoaded", () => {
    console.log("HTML is fully loaded!");
});

// Runs when the user scrolls
window.addEventListener("scroll", () => {
    console.log("You are scrolling the page");
});


// 2. MOUSE EVENTS
const body = document.body;
const button = document.createElement("button");
button.innerText = "Click Me";
button.className = "bg-blue-500 text-white p-2 rounded"; // Tailwind classes
body.appendChild(button);

// Triggered on a single click
button.addEventListener("click", () => {
    alert("Button was clicked!");
});

// Triggered when mouse enters the button area (Hover)
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "red";
});

// Triggered when mouse leaves the button area
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = ""; 
});


// 3. KEYBOARD EVENTS
// 'e' stands for the event object, which tells us WHICH key was pressed
window.addEventListener("keydown", (e) => {
    console.log("You pressed the key: " + e.key);
});


// 4. FORM/INPUT EVENTS
const input = document.createElement("input");
input.placeholder = "Type something...";
input.className = "border p-2 m-4";
body.appendChild(input);

// 'input' fires every time you type a letter
input.addEventListener("input", (e) => {
    console.log("Current input value: " + e.target.value);
});

// 'focus' fires when you click inside the box
input.addEventListener("focus", () => {
    input.style.borderColor = "blue";
});

// 'blur' fires when you click away from the box
input.addEventListener("blur", () => {
    input.style.borderColor = "gray";
});


// 5. CLIPBOARD EVENTS
window.addEventListener("copy", () => {
    alert("You just copied something!");
});