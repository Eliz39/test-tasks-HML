const input = document.querySelector(".form__input");
const output = document.querySelector(".form__output");
const validationBtn = document.querySelector(".form__button");
const message = document.querySelector(".message");

function validateInput() {
    message.innerHTML = "";
    output.innerHTML = "";
    const validExp = new RegExp("/(^[0-9][(ABCEHJKLMPSTUZ)]?[0-9]){3}\\s[0-9]{4}$/", "g")
    if (input.value == null || input.value == "") {
        message.innerHTML = "Zadejte SPZ";
    }
    else if (validExp.test(input.value)) {
        output.innerHTML = `${input.value}`;
    }
    else {
        message.innerHTML = "SPZ není validní.\nPožadovaný formát 1AA 1111 nebo 1A1 1111";
    }
    console.log(validExp.test(input.value))
}

validationBtn.addEventListener("click", validateInput);