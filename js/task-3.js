const inputField = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputField.addEventListener("input", (event) => { 
    const trimmedValue = inputField.value.trim();
    if (trimmedValue === '') {
        return 'Anonymous'
    } else {
        return outputText.textContent = trimmedValue;  
    }
});
