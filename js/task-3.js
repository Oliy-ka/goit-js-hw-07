const inputField = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputField.addEventListener("input", (event) => {
    const trimmedValue = inputField.value.trim();
    
    if (trimmedValue === '') {
        outputText.textContent = 'Anonymous';
    } else {
        outputText.textContent = trimmedValue;
    }
});
