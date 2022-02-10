document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'abbas@gmail.com' && userPassword == 'abbas') {
        window.location.href = "banking.html"
    }
})

