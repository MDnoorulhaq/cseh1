const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.style.display = 'block';
        return;
    }

    // Send data to server or store in local storage
    const userData = {
        username,
        email,
        password
    };

    // For demonstration purposes, store in local storage
    localStorage.setItem('user', JSON.stringify(userData));

    successMessage.textContent = 'Registration successful!';
    successMessage.style.display = 'block';

    // Clear form fields
    form.reset();
});