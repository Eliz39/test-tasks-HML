const submitBtn = document.querySelector(".form__input-submit");
const email = document.querySelector(".form__input-email");
const errorEmpty = document.querySelector(".empty-email");
const errorWrong = document.querySelector(".wrong-email");
const succes = document.querySelector(".subscribed");
const container = document.querySelector(".container");

function sendForm(event) {
    submitBtn.removeEventListener("click", sendForm);
    event.preventDefault();

    if(email.value == null || email.value == "") {
        errorEmpty.classList.remove("hidden");
        errorWrong.classList.add("hidden");
    } else {
        let fetchData = {
            method: "POST",
            body: JSON.stringify({email: email.value}),
            headers: {"Content-Type":"application/json"}
        }

        fetch("https://email-api.dev.hml.cz/", fetchData)
            .then(res => {
                if(res.ok) {
                    container.classList.add("hidden");
                    succes.classList.remove("hidden");
                } else {
                    errorEmpty.classList.add("hidden");
                    errorWrong.classList.remove("hidden");
                }
                return res.json();
            })
            .then(text => console.log(text))
            .finally(() =>  submitBtn.addEventListener("click", sendForm))
    }
}

submitBtn.addEventListener("click", sendForm);