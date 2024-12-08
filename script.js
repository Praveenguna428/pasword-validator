document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    const message = document.getElementById('message');
    const length = document.getElementById('length');
    const letter = document.getElementById('letter');
    const capital = document.getElementById('capital');
    const number = document.getElementById('number');
    const special = document.getElementById('special');
    const result = document.getElementById('result');

    // Show/Hide Password
    showPassword.addEventListener('change', function () {
        password.type = this.checked ? 'text' : 'password';
    });

    // Show Message on Focus
    password.onfocus = function () {
        message.style.display = 'block';
    };

    // Hide Message on Blur
    password.onblur = function () {
        message.style.display = 'none';
    };

    // Validate Password
    password.onkeyup = function () {
        // Validate Length
        if (password.value.length >= 8) {
            length.classList.remove('invalid');
            length.classList.add('valid');
        } else {
            length.classList.remove('valid');
            length.classList.add('invalid');
        }

        // Validate Lowercase Letters
        const lowerCaseLetters = /[a-z]/g;
        if (password.value.match(lowerCaseLetters)) {
            letter.classList.remove('invalid');
            letter.classList.add('valid');
        } else {
            letter.classList.remove('valid');
            letter.classList.add('invalid');
        }

        // Validate Uppercase Letters
        const upperCaseLetters = /[A-Z]/g;
        if (password.value.match(upperCaseLetters)) {
            capital.classList.remove('invalid');
            capital.classList.add('valid');
        } else {
            capital.classList.remove('valid');
            capital.classList.add('invalid');
        }

        // Validate Numbers
        const numbers = /[0-9]/g;
        if (password.value.match(numbers)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        } else {
            number.classList.remove('valid');
            number.classList.add('invalid');
        }

        // Validate Special Characters
        const specialCharacters = /[!@#$%^&*]/g;
        if (password.value.match(specialCharacters)) {
            special.classList.remove('invalid');
            special.classList.add('valid');
        } else {
            special.classList.remove('valid');
            special.classList.add('invalid');
        }

        checkPassword();
    };

    // Check Password Strength
    function checkPassword() {
        let passwordValue = password.value;
        let strengthMessage = "";

        if (passwordValue.length < 8) {
            strengthMessage = "Password is too short";
            result.style.color = 'red';
        } else {
            let strength = 0;
            if (passwordValue.match(/[a-z]/)) strength++;
            if (passwordValue.match(/[A-Z]/)) strength++;
            if (passwordValue.match(/[0-9]/)) strength++;
            if (passwordValue.match(/[^a-zA-Z0-9]/)) strength++;
            
            if (strength < 2) {
                strengthMessage = "Weak password";
                result.style.color = 'red';
            } else if (strength < 4) {
                strengthMessage = "Moderate password";
                result.style.color = 'orange';
            } else {
                strengthMessage = "Strong password";
                result.style.color = 'green';
            }
        }

        result.textContent = strengthMessage;
    }
});
