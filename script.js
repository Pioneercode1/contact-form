// 
const buttonSubmit = document.getElementById("btn-submit");
// 
const pFirstName = document.getElementById("p-first-name");
const pLastName = document.getElementById("p-last-name");
const pEmail = document.getElementById("p-email");
const pGeneral = document.getElementById("P-query");
const pConsent = document.getElementById("p-consent");
const pMessage = document.getElementById("p-message");
const successMessage = document.getElementById("success-message");
// 
buttonSubmit.addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const inputEmail = document.getElementById("email").value.trim();
    const inputMessage = document.getElementById("message").value.trim();
    // 
    const radioGeneral = document.getElementById("general-enquiry").checked;
    const radioSupport = document.getElementById("support-request").checked;
    const checkboxConsent = document.getElementById("consent").checked;
    let hasError = false;
    // 
    if (firstName === "") {
        pFirstName.style.display = "block";
        hasError = true;
    } else {
        pFirstName.style.display = "none";
    }

    if (lastName === "") {
        pLastName.style.display = "block";
        hasError = true;
    } else {
        pLastName.style.display = "none";
    }

    if (inputEmail === "") {
        pEmail.style.display = "block";
        hasError = true;
    } else {
        pEmail.style.display = "none";
    }

    if (!radioGeneral && !radioSupport) {
        pGeneral.style.display = "block";
        hasError = true;
    } else {
        pGeneral.style.display = "none";
    }

    if (inputMessage === "") {
        pMessage.style.display = "block";
        hasError = true;
    } else {
        pMessage.style.display = "none";
    }

    if (!checkboxConsent) {
        pConsent.style.display = "block";
        hasError = true;
    } else {
        pConsent.style.display = "none";
    }

    if (!hasError) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
});