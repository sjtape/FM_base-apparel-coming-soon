
const inpEmail = document.querySelector("#email");
const cValid = document.querySelector("#c-valid");


const warningMark = function () {
    const btn = document.querySelector('.btn')
    btn.classList.add('error');
    inpEmail.style.border = "2px solid #f96262";
}


// OPTIONAL
const popUpMsg = () => {
    document.addEventListener('invalid', (() =>
        e => {
            e.preventDefault();
            inpEmail.focus();
        })(), true);
}


function submitBtn() {
    // CUSTOM VALIDITY
    if (!inpEmail.checkValidity()) {
        cValid.innerText = "Please provide a valid email"

        popUpMsg();
        warningMark();
    }
}

