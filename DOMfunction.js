document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Define the function (The blueprint)
    function createUserButton(userName, btnColor) {
        const body = document.body;

        const div = document.createElement("div");
        div.innerHTML = `<h1 class='text-4xl'>Hello ${userName}!</h1>`;

        const btn = document.createElement("button");
        // We use the btnColor variable here to make it reusable!
        btn.className = `${btnColor} text-white rounded p-4 m-2`;

        btn.appendChild(div);
        body.appendChild(btn);
    }

    // 2. Reuse it! (Call it as many times as you want)
    createUserButton("Alice", "bg-blue-500");
    createUserButton("Bob", "bg-green-500");
    createUserButton("Charlie", "bg-red-500");
});


const users = ["Alice", "Bob", "Charlie", "David"];

users.forEach(name => {
    createUserButton(name, "bg-indigo-600");
});