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
const formData = document.querySelectorAll(".formData");

const firstName = document.getElementById("first");
const firstNameError = document.getElementById("error--firstname");
// const firstNameError = document.getElementsByClassName("error--firstname");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("error--lastname");

const mail = document.getElementById("email");
const mailError = document.getElementById("error--mail");

const birthDate = document.getElementById("birthdate");
const birthDateError = document.getElementById("error--birthdate");

const numberTournament = document.getElementById("quantity");
const numberTournamentError = document.getElementById("error--quantity");

const radios = document.getElementsByName("location");
const formSubmit = document.getElementById("submit");
const checkAgree = document.getElementById("checkbox1");
const errorMsg = document.getElementById("error--msg");
const radiosBorder = document.getElementById("radio--error");
const termsError = document.getElementById("terms--error");
const agreeChecked = document.getElementById("agree--checked");
// const modalBody = document.getElementsByClassName("modal-body");
const modalBody = document.getElementById("modal-body");
// const modalBody = document.getElementById("reserve");

// Event listener
document.querySelector(".close").addEventListener("click", onClick);
// mail.addEventListener("focus", reset);
// mail.addEventListener("blur", validateMail);
// formSubmit.addEventListener("click", agreeAccepted);
// formSubmit.addEventListener("click", validateRadio);
// radiosBorder.addEventListener("click", resetRadio);
// agreeChecked.addEventListener("click", resetAgree);
// birthDate.addEventListener("blur", validateDate);
// lastName.addEventListener("blur", validateName);
// lastName.addEventListener("focus", reset);
// firstName.addEventListener("blur", validateName);
// firstName.addEventListener("focus", reset);
// numberTournament.addEventListener("focus", reset);
// numberTournament.addEventListener("blur", validateNumber);
formSubmit.addEventListener("click", validateForm);
// birthDate.addEventListener("focus", validateDate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// document
//   .getElementById("close--submit")
//   .addEventListener("click", onClickSubmit);
// closeSubmit;
// close modal
// function onClickSubmit() {
//   console.log("close modal");
//   modalbgSubmit.display = "none";
// }
function onClick() {
  console.log("close modal");
  modalbg.style.display = "none";
}

function validateNumber() {
  if (/^\d+$/.test(String(numberTournament.value))) {
    return true;
  } else {
    numberTournament.style.border = "2px solid red";
    numberTournamentError.textContent = "Must be a whole number";
    // numberTournament.insertAdjacentHTML(
    //   "afterend",
    //   "<p class='error--msg'>Must be a whole number<p>"
    // );
    return false;
  }
}
// validate lastname
function validateName() {
  const regex = /^.{2,}$/;
  if (regex.test(String(lastName.value))) {
    console.log("lastname true");
    // lastName.style.border = "none";
    // lastName.nextElementSibling.remove();
    return true;
  } else {
    lastName.style.border = "2px solid red";
    console.log("lastname false");
    lastNameError.textContent =
      "Please enter 2 or more characters for the name field.";
    // lastName.insertAdjacentHTML(
    //   "afterend",
    //   "<p class='error--msg'>Please enter 2 or more characters for the name field.<p>"
    // );
    return false;
  }
}
function validateFirstName() {
  const regex = /^.{2,}$/;
  if (regex.test(String(firstName.value))) {
    console.log("firstname true");
    // firstName.style.border = "none";
    // firstName.nextElementSibling.remove();
    return true;
  } else {
    firstName.style.border = "2px solid red";
    console.log("firtname false");
    firstNameError.textContent =
      "Please enter 2 or more characters for the name field.";
    // firstName.insertAdjacentHTML(
    //   "afterend",
    //   "<p class='error--msg'>Please enter 2 or more characters for the name field.<p>"
    // );
    return false;
  }
}
// Validate age
function validateDate() {
  const regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  if (regex.test(String(birthDate.value))) {
    console.log("date true");
    // birthDate.style.border = "none";
    // birthDate.nextElementSibling.remove();
    return true;
  } else {
    birthDate.style.border = "2px solid red";
    console.log("date false");
    birthDateError.textContent = "You must enter your date of birth.";
    // birthDate.insertAdjacentHTML(
    //   "afterend",
    //   "<p class='error--msg'>You must enter your date of birth.<p>"
    // );
    return false;
  }
}

// Terms of use checked
function agreeAccepted() {
  if (!checkAgree.checked) {
    termsError.innerHTML =
      "You must verify that you agree to the terms and conditions.";
    return false;
  } else {
    return true;
  }
}

// Validation Radio Button
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

// Validate Mail
function validateMail() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(mail.value).toLowerCase())) {
    return true;
  } else {
    mail.style.border = "2px solid red";
    mailError.textContent = "Must be a valid email address.";
    // mail.insertAdjacentHTML(
    //   "afterend",
    //   "<p class='error--msg'>Must be a valid email address.<p>"
    // );
    return false;
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
    // onClick();
    // modalBodyContent();
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

const modalbgSubmit = document.querySelector(".bground--submit");
// formSubmit.addEventListener("click", launchModalSubmit);
function launchModalSubmit() {
  modalbgSubmit.style.display = "block";
}
// document.querySelector(".active").addEventListener("click", launchModalSubmit);
// function modalBodyContent() {
//   modalBody.innerHTML =
//     "<p class='submit--registration>Thank you for submitting your registration details</p><input class='btn-submit' id='submit--close' type='submit' class='button' value='Close'/>";
// }
// Reset error message and style function
function reset() {
  // firstName.style.border = "none";
  // firstName.nextElementSibling.remove();
  // lastName.style.border = "none";
  // lastName.nextElementSibling.remove();
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
// function resetAgree() {
//   termsError.innerHTML = "";
//   console.log("check");
// }
// function resetRadio() {
//   radiosBorder.style.border = "none";
//   errorMsg.textContent = "";
// }
