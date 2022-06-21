import {validateInput} from "./__validation.js";

const output = document.querySelector(".form__output");
const form = document.querySelector(".form");
const message = document.querySelector(".message");
const input = document.querySelector(".form__input");

function eventHandler(event) {
    event.preventDefault()
    message.innerText = "";
    output.innerText = "";
    input.classList.remove("invalid");
    input.classList.remove("valid");

    if (input.value == null || input.value == "") {
        message.innerText = "Zadejte SPZ";
        input.classList.add("invalid");
    }
    else if(validateInput(input.value)) {
        output.innerText = `${input.value}`;
        input.classList.add("valid");
    }
    else {
        message.innerText = "SPZ není validní.";
        input.classList.add("invalid");
    }
}

form.addEventListener("submit", eventHandler);

