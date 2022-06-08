import {validateInput} from "./__validation.js";

const output = document.querySelector(".form__output");
const validationBtn = document.querySelector(".form__button");
const message = document.querySelector(".message");
const input = document.querySelector(".form__input");

validationBtn.addEventListener("click", () => {
    message.innerHTML = "";
    output.innerHTML = "";

    validateInput(input.value);

    if (input.value == null || input.value == "") {
        message.innerHTML = "Zadejte SPZ";
    }
    else if(validateInput(input.value)) {
        output.innerHTML = `${input.value}`;
    }
    else {
        message.innerHTML = "SPZ není validní.\r\nPožadovaný formát 1AA 1111 nebo 1A1 1111";
    }
})


