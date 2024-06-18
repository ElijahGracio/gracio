
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Sign Up Successful!');

            signUpForm.reset();
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();

        
            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            
            const savedEmail = localStorage.getItem('email');
            const savedPassword = localStorage.getItem('password');

           
            if (loginEmail === savedEmail && loginPassword === savedPassword) {
           
                window.location.href = 'index1.html';
            } else {
                
                alert('Invalid email or password. Please try again.');
            }

            
            signInForm.reset();
        });
    }
});
