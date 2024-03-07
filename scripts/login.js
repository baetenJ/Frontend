window.onload = function() {
    const form = document.querySelector("#loginForm");
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        login(username, password);
    });
};

async function login(username, password) {
    const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        // Store token in localStorage
        localStorage.setItem("token", data.token);
        
        // Redirect to index.html
        window.location.href = "/index.html";
    } else {
        document.querySelector("#errorMsg").innerHTML = data.error;
    }
}