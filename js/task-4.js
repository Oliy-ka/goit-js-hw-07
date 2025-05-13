const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const formFields = event.currentTarget;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
    
    if (emailInput.value === "" || passwordInput.value === '') {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        [emailInput.name]: emailInput.value.trim(),
        [passwordInput.name]: passwordInput.value.trim()
    };
    console.log(formData);
    formFields.reset();
});
