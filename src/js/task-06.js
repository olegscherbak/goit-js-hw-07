const inputValidation = document.querySelector('#validation-input');
const inputLength = inputValidation.getAttribute('data-length');
inputValidation.addEventListener('blur', errorValidation);
function errorValidation() {
    if (inputValidation.value.length === Number(inputLength)) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }

}


