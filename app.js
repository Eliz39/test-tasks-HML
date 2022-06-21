document.addEventListener('DOMContentLoaded', (event) => {
    
    const submitBtn = document.querySelector(".form__input-submit");
    const email = document.querySelector(".form__input-email");
    const errorEmpty = document.querySelector(".empty-email");
    const errorWrong = document.querySelector(".wrong-email");
    const succes = document.querySelector(".subscribed");
    const container = document.querySelector(".container");
    const form = document.querySelector(".form");

    function sendForm(event) {
        submitBtn.setAttribute("disabled", "");
        event.preventDefault();

        if (email.value == null || email.value == "") {
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
                .finally(() =>  submitBtn.removeAttribute("disabled"));
        }
    }

    form.addEventListener("submit", sendForm); 
});

