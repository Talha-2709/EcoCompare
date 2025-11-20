document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginBox = document.querySelector(".login");
    const signupBox = document.querySelector(".signup");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    // Show Signup Form
    showSignup.addEventListener("click", function (e) {
        e.preventDefault();
        loginBox.classList.remove("active");
        signupBox.classList.add("active");
    });

    // Show Login Form
    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        signupBox.classList.remove("active");
        loginBox.classList.add("active");
    });

    // Form Validation
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Login Successful!");
        }
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Signup Successful!");
        }
    });

    // Show login form by default
    loginBox.classList.add("active");
});
