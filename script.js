const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passerror");
const form = document.querySelector(".loginform");
const toggleEyeIcon = document.querySelector("#eye-icon");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Email validation
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.classList.add("error");
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
        email.classList.add("error");
        isValid = false;
    } else {
        email.classList.remove("error");
        email.classList.add("success");
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        password.classList.add("error");
        isValid = false;
    } else {
        password.classList.remove("error");
        password.classList.add("success");
    }

    // Success
    if (isValid) {
        alert("Login Successful!");

        // Reset form
        form.reset();

        email.classList.remove("success");
        password.classList.remove("success");
    }
});

// Toggle password visibility
toggleEyeIcon.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggleEyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        toggleEyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
});
