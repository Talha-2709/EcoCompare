// signup.js

// submissions 
document.addEventListener('DOMContentLoaded', function ()
 {
    const loginForm = document.querySelector('.auth-form.login form');
    const signupForm = document.querySelector('.auth-form.signup form');
    const googleButton = document.querySelector('.google-btn');

    // loin form sub,isson
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) 
        {
            e.preventDefault(); // preventing real submisson

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (!email || !password)
                 {
                alert('Please fill in both email and password.');
                return;
            }

            if (!validateEmail(email)) 
            {
                alert('Please enter a valid email address.');
                return;
            }

            // successful login
            alert('Login successful! (Simulation)');
        });
    }

    // Signup Form Submission
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) 
        {
            e.preventDefault(); // Prevent real submission

            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            if (!name || !email || !password) 
            {
                alert('Please fill in all the fields.');
                return;
            }

            if (!validateEmail(email)) 
                {
                alert('Please enter a valid email address.');
                return;
            }

            if (password.length < 6) 
            {
                alert('Password must be at least 6 characters.');
                return;
            }

            // Simulate successful signup
            alert('Signup successful! (Simulation)');
        });
    }

    // for google buttpn
    if (googleButton)
         {
        googleButton.addEventListener('click', function ()
         {
            alert('Google Sign-In coming soon!');
        });
    }
});

//  email validation function
function validateEmail(email) 
{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
