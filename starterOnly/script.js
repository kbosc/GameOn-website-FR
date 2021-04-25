function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");

const firstName = document.getElementById("first");
const firstNameError = document.getElementById("error--firstname");

const lastName = document.getElementById("last");
const lastNameError = document.getElementById("error--lastname");

const mail = document.getElementById("email");
const mailError = document.getElementById("error--mail");

const birthDate = document.getElementById("birthdate");
const birthDateError = document.getElementById("error--birthdate");

const numberTournament = document.getElementById("quantity");
const numberTournamentError = document.getElementById("error--quantity");

const radios = document.getElementsByName("location");
const radiosBorder = document.getElementById("radio--error");

const checkAgree = document.getElementById("checkbox1");
const agreeChecked = document.getElementById("agree--checked");

const formSubmit = document.getElementById("submit");
const errorMsg = document.getElementById("error--msg");
const termsError = document.getElementById("terms--error");
const modalBody = document.getElementById("modal-body");
const heroSection = document.getElementById("hero-section");
const footer = document.querySelector("footer");

// Event listener
document.getElementById("close-submit").addEventListener("click", onClick);
document.querySelector(".close").addEventListener("click", onClick);
formSubmit.addEventListener("click", validateForm);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  modalResponsive();
}

function onClick() {
  console.log("close modal");
  modalResponsiveClose();
  modalbg.style.display = "none";
  // modalbg.style = "display: none";
}
function launchModalSubmit() {
  const modalSubmit = document.getElementById("modal--submit");
  modalSubmit.style.display = "inline-block";
  modalBody.style.display = "none";
}
// ------------------Responsive Modal-------------------
function modalResponsive() {
  if (window.matchMedia("(max-width:500px)").matches) {
    heroSection.style = "display: none";
    footer.style = "display: none";
    console.log("le match media");
  }
}
function modalResponsiveClose() {
  if (window.matchMedia("(max-width:500px)").matches) {
    heroSection.style = "display: block";
    footer.style = "display: bloc";
    console.log("le match media close");
  }
}
// ------------------Responsive Modal-------------------

// -----------------Validate Submit------------------------
function validateFirstName() {
  const regex = /^.{2,}$/;
  if (regex.test(String(firstName.value))) {
    console.log("firstname true");
    return true;
  } else {
    firstName.style.border = "2px solid red";
    console.log("firtname false");
    firstNameError.textContent =
      "Please enter 2 or more characters for the name field.";
    return false;
  }
}
function validateName() {
  const regex = /^.{2,}$/;
  if (regex.test(String(lastName.value))) {
    console.log("lastname true");
    return true;
  } else {
    lastName.style.border = "2px solid red";
    console.log("lastname false");
    lastNameError.textContent =
      "Please enter 2 or more characters for the name field.";
    return false;
  }
}
function validateMail() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(mail.value).toLowerCase())) {
    return true;
  } else {
    mail.style.border = "2px solid red";
    mailError.textContent = "Must be a valid email address.";
    return false;
  }
}
function validateDate() {
  const regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  if (regex.test(String(birthDate.value))) {
    console.log("date true");
    return true;
  } else {
    birthDate.style.border = "2px solid red";
    console.log("date false");
    birthDateError.textContent = "You must enter your date of birth.";
    return false;
  }
}
function validateNumber() {
  if (/^\d+$/.test(String(numberTournament.value))) {
    return true;
  } else {
    numberTournament.style.border = "2px solid red";
    numberTournamentError.textContent = "Must be a whole number";
    return false;
  }
}
function validateRadio() {
  let formValid = false;
  let i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) {
      formValid = true;
    }
    i++;
  }
  if (!formValid) {
    radiosBorder.classList.add("border--error--bis");
    radiosBorder.style.borderLeft = "solid 5px red";
    errorMsg.textContent = "You must choose an option.";
  }
  return formValid;
}
function agreeAccepted() {
  if (!checkAgree.checked) {
    termsError.innerHTML =
      "You must verify that you agree to the terms and conditions.";
    return false;
  } else {
    return true;
  }
}
function validateForm(event) {
  reset();
  if (
    validateFirstName() &&
    validateName() &&
    validateMail() &&
    validateDate() &&
    validateNumber() &&
    validateRadio() &&
    agreeAccepted()
  ) {
    event.preventDefault();
    console.log("Win");
    launchModalSubmit();
    // return true;
  } else {
    event.preventDefault();
    // validateFirstName();
    validateName();
    validateMail();
    validateDate();
    validateNumber();
    validateRadio();
    agreeAccepted();
    console.log("failed");

    return false;
  }
}
// -----------------Validate Submit------------------------

// Reset error message and style function of modal
function reset() {
  firstNameError.textContent = "";
  firstName.style.border = "none";

  lastNameError.textContent = "";
  lastName.style.border = "none";

  mailError.textContent = "";
  mail.style.border = "none";

  birthDateError.textContent = "";
  birthDate.style.border = "none";

  numberTournamentError.textContent = "";
  numberTournament.style.border = "none";

  termsError.innerHTML = "";
  radiosBorder.style.border = "none";
  errorMsg.textContent = "";
}
