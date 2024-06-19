document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    function activateSignInPanel() {
        container.classList.remove("active");
    }

    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address ending with @gmail.com or @yahoo.com');
                return;
            }

            let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            const existingAccount = accounts.find(account => account.email === email);
            if (existingAccount) {
                alert('An account with this email already exists. Please sign in instead.');
                signUpForm.reset();
                return;
            }

            accounts.push({ name, email, password });

            localStorage.setItem('accounts', JSON.stringify(accounts));

            alert('Sign Up Successful!');

            // Activate sign-in panel after successful sign-up
            activateSignInPanel();

            signUpForm.reset();
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            const matchedAccount = accounts.find(account => account.email === loginEmail && account.password === loginPassword);

            if (matchedAccount) {
                alert('Sign In Successful!');
                window.location.href = 'index1.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }

            signInForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
        return emailRegex.test(email);
    }
});
