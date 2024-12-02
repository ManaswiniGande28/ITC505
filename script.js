
// Sanitize user input to prevent XSS attacks
function sanitizeInput(input) {
    // Replace characters that could be used for XSS attacks
    return input.replace(/[&<>"'\/]/g, function(match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#039;';
            case '/': return '&#x2F;';
        }
    });
}

// Form validation
function validateForm(event) {
    // Get form elements
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Sanitize inputs to prevent malicious content
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    const sanitizedConfirmPassword = sanitizeInput(confirmPassword);

    // Empty Fields Validation
    if (sanitizedFirstName === "" || sanitizedLastName === "" || sanitizedEmail === "" || sanitizedPassword === "" || sanitizedConfirmPassword === "") {
        alert("All fields must be filled out.");
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(sanitizedEmail)) {
        alert("Please enter a valid email address.");
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // Password Validation: Ensure password is at least 10 characters, includes a number, and has special characters
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{10,}$/;
    if (!passwordRegex.test(sanitizedPassword)) {
        alert("Password must be at least 10 characters long and include at least one number and one special character.");
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // Password Match Validation
    if (sanitizedPassword !== sanitizedConfirmPassword) {
        alert("Passwords do not match. Please make sure both passwords are the same.");
        event.preventDefault();  // Prevent form submission
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}

// Attach form validation to the form submit event
document.querySelector("#registration-form").addEventListener("submit", validateForm);

