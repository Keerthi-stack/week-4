document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Validate fields
    const isValid = validateForm();
    if (isValid) {
        alert("Form submitted successfully!");
        // You can handle the form submission here (e.g., send data to server)
    }
});

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

function validateForm() {
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format.');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
