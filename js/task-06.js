const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {

    if (validationInput.value.length < validationInput.dataset.length) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } if (validationInput.value.length >= validationInput.dataset.length) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    };
    
});


