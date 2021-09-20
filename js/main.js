let newsLetterForm = document.getElementById("formula");

let allAgreeChx = document.getElementById("agreementAll");

const validate = (event) => {

    let txtName = document.getElementById('name');

    let txtEmail = document.getElementById('mail');

    let agree1 = document.getElementById('agreement1');

    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === "") {

        let liError = document.createElement('li');

        liError.innerText = "Wpisz Imię i nazwisko";
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === "") {

        let liError = document.createElement('li');

        liError.innerText = "Wpisz Adres email";
        errors.appendChild(liError);
    }
    if (!txtEmail.value.includes('@')) {

        let liError = document.createElement('li');

        liError.innerText = "Adres email musi zawierać '@'";
        errors.appendChild(liError);
    }

    if (!agree1.checked) {

        let liError = document.createElement('li');

        liError.innerText = "Nie wyraziłeś/aś Zgody1";
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }

}

const allAgree = (event) => {

    let agree1 = document.getElementById('agreement1');
    let agree2 = document.getElementById('agreement2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    // console.log(event.target.checked);
}
newsLetterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);