import {validateInput} from "./__validation.js";

const output = document.querySelector(".form__output");
const validationBtn = document.querySelector(".form__button");
const message = document.querySelector(".message");
const input = document.querySelector(".form__input");

function eventHandler() {
    message.innerHTML = "";
    output.innerHTML = "";
    input.classList.remove("invalid");
    input.classList.remove("valid");

    if (input.value == null || input.value == "") {
        message.innerHTML = "Zadejte SPZ";
        input.classList.add("invalid");
    }
    else if(validateInput(input.value)) {
        output.innerHTML = `${input.value}`;
        input.classList.add("valid");
    }
    else {
        message.innerHTML = "SPZ není validní.";
        input.classList.add("invalid");
    }
}

validationBtn.addEventListener("click", eventHandler);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        validationBtn.click();
    }
});


