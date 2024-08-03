document.getElementById('simpleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let isValid = true;

    if (!validateUsername(username)) {
        
        isValid = false;
    }

    if (!validateEmail(email)) {
        errorMessages.innerHTML += '<p>Email must be a valid email address.</p>';
        isValid = false;
    }

    if (!validatePassword(password)) {
   
        isValid = false;
    }
  
    if (isValid) {
        // next page link
        document.location = './coin_converter.html';
    }
}

function validateUsername(username) {
    if (username.length < 3 || username.length > 10) {
        return false;
    }
    for (let i = 0; i < username.length; i++) {
        const char = username.charAt(i);
        if (!isLetterOrDigit(char)) {
            return false;
        }
    }
    return true;
}

function isLetterOrDigit(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);  // a-z
}

function validateEmail(email) {
    const atSymbol = email.indexOf('@');
    const dot = email.lastIndexOf('.');
    return atSymbol > 0 && dot > atSymbol + 1 && dot < email.length - 1 && email.indexOf(' ') === -1;
}

function validatePassword(password) {
    return password.length >= 6;
}