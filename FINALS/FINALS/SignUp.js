// Simple hash function (demo only, not secure)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
}

window.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signupForm");
    const passInput = document.getElementById("SignupPass");
    const confirmInput = document.getElementById("SignupConfirm");

    const togglePassBtn = document.getElementById("toggleSignupPassBtn");
    const toggleConfirmBtn = document.getElementById("toggleSignupConfirmBtn");

    const eyeIcon = document.getElementById("signupEyeIcon");
    const confirmEyeIcon = document.getElementById("signupConfirmEyeIcon");

    const eyeOpen = "&#128065;"; // visible
    const eyeSlash = `
      <svg width="28" height="22" viewBox="0 0 28 22" style="vertical-align:middle">
        <g>
          <text x="0" y="18" font-size="22">&#128065;</text>
          <line x1="2" y1="2" x2="26" y2="20" stroke="black" stroke-width="3"/>
        </g>
      </svg>
    `;

    function updateEyeIcon(input, icon) {
        icon.innerHTML = input.type === "password" ? eyeSlash : eyeOpen;
    }

    // Initial state
    updateEyeIcon(passInput, eyeIcon);
    updateEyeIcon(confirmInput, confirmEyeIcon);

    // Toggle main password
    togglePassBtn.addEventListener("click", () => {
        passInput.type = passInput.type === "password" ? "text" : "password";
        updateEyeIcon(passInput, eyeIcon);
    });

    // Toggle confirm password
    toggleConfirmBtn.addEventListener("click", () => {
        confirmInput.type = confirmInput.type === "password" ? "text" : "password";
        updateEyeIcon(confirmInput, confirmEyeIcon);
    });

    // Submit form
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("SignupUser").value.trim();
        const password = passInput.value.trim();
        const confirmPassword = confirmInput.value.trim();

        // Validation
        if (!username || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            alert("Password must be at least 6 characters, include a number and an uppercase letter.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // ✅ Load all users
        let users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[username]) {
            alert("Username already exists. Please choose another.");
            return;
        }

        // Ask user to confirm password creation
        const confirmCreation = confirm("Are you sure you want to use this password?");
        if (!confirmCreation) {
            alert("Sign-up cancelled. You can change your password and try again.");
            return;
        }


        // ✅ Save new user
        users[username] = simpleHash(password);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign up successfully! Redirecting to login page...");
        window.location.href = "Login.html";
    });

});
