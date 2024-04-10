const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

const passwordError = document.querySelector("#passwordConfirm-error");

passwordConfirm.addEventListener("input", function (event) {
    if (passwordConfirm.value !== password.value) {
        passwordError.textContent = "Passwords do not match";
    } else {
        passwordError.textContent = "";
    }
})

