document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.btnlogin-popup');
    const loginForm = document.querySelector('.form-box.login');
    const registrationForm = document.querySelector('.form-box.registration');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const closeIcon = document.querySelector('.icon-close');

    function showLoginForm() {
        loginForm.classList.add('active');
        registrationForm.classList.remove('active');
    }

    function showRegistrationForm() {
        registrationForm.classList.add('active');
        loginForm.classList.remove('active');
    }

    loginBtn.addEventListener('click', showLoginForm);
    loginLink.addEventListener('click', showLoginForm);
    registerLink.addEventListener('click', showRegistrationForm);
    closeIcon.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registrationForm.classList.remove('active');
    });

    // Optionally, show login form by default on page load
    showLoginForm();
});
