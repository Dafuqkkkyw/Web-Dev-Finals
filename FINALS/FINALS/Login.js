// Simple hash function (demo only, not secure)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
}

function login() {
    const user = document.getElementById("LoginUser").value.trim();
    const pass = document.getElementById("LoginPass").value;

    if (!user || !pass) {
        alert("Please enter both username and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const savedPassHash = users[user];
    const inputPassHash = simpleHash(pass);

    if (savedPassHash && inputPassHash === savedPassHash) {

        // ✅ Set session
        localStorage.setItem("currentUser", user);
        localStorage.setItem("isLoggedIn", "true");

        // ✅ Transfer guest cart
        const guestCart = JSON.parse(localStorage.getItem("cart_guest") || "{}");
        const userCartKey = `cart_${user}`;
        const userCart = JSON.parse(localStorage.getItem(userCartKey) || "{}");

        Object.entries(guestCart).forEach(([id, qty]) => {
            userCart[id] = (userCart[id] || 0) + qty;
        });

        localStorage.setItem(userCartKey, JSON.stringify(userCart));
        localStorage.removeItem("cart_guest");

        window.location.href = "Index.html";

    } else {
        alert("Wrong username or password.");
    }
}

// ✅ PASSWORD EYE TOGGLE
window.addEventListener("DOMContentLoaded", function() {
    const passInput = document.getElementById("LoginPass");
    const toggleBtn = document.getElementById("togglePassBtn");
    const eyeIcon = document.getElementById("eyeIcon");

    const eyeOpen = "&#128065;";
    const eyeSlash = '<svg width="28" height="22" viewBox="0 0 28 22" style="vertical-align:middle"><g><text x="0" y="18" font-size="22">&#128065;</text><line x1="2" y1="2" x2="26" y2="20" stroke="black" stroke-width="3"/></g></svg>';

    function updateEye() {
        eyeIcon.innerHTML = passInput.type === "password" ? eyeSlash : eyeOpen;
    }

    passInput.type = "password";
    updateEye();

    toggleBtn.addEventListener("click", function() {
        passInput.type = passInput.type === "password" ? "text" : "password";
        updateEye();
    });

    passInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") login();
    });
});

// ✅ LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "Login.html";
}
