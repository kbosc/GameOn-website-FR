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
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const numberTournament = document.getElementById("quantity");
const radios = document.getElementsByName("location");
const formSubmit = document.getElementById("submit");
const checkAgree = document.getElementById("checkbox1");
const errorMsg = document.getElementById("error--msg");
const radiosBorder = document.getElementById("radio--error");
const termsError = document.getElementById("terms--error");
const agreeChecked = document.getElementById("agree--checked");

// Event listener
document.querySelector(".close").addEventListener("click", onClick);
mail.addEventListener("focus", reset);
mail.addEventListener("blur", validateMail);
formSubmit.addEventListener("click", agreeAccepted);
formSubmit.addEventListener("click", validateForm);
radiosBorder.addEventListener("click", resetRadio);
agreeChecked.addEventListener("click", resetAgree);

// Reset error message and style function
function reset() {
  this.style.border = "none";
  this.nextElementSibling.remove();
  console.log("focus");
}
function resetAgree() {
  termsError.innerHTML = "";
  console.log("check");
}
function resetRadio() {
  this.style.border = "none";
  errorMsg.textContent = "";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function onClick(e) {
  console.log("close modal");
  modalbg.style.display = "none";
}
// Validate age
function validateDate(d){
  if (!isNaN((new Date(d)).getTime()))
}
// let age = document.getElementById("birthdate")

// Terms of use checked
function agreeAccepted(event) {
  if (!checkAgree.checked) {
    event.preventDefault();
    termsError.innerHTML =
      "You must verify that you agree to the terms and conditions.";
    // alert("please accept the terms of use");
  }
}

// Validation Radio Button
function validateForm(event) {
  let formValid = false;
  let i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) {
      formValid = true;
    }
    i++;
  }
  if (!formValid) {
    event.preventDefault();
    radiosBorder.classList.add("border--error--bis");
    errorMsg.textContent = "You must choose an option.";
  }
  // return formValid;
}

// Validate Mail
function validateMail() {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(mail.value).toLowerCase())) {
    // return true;
  } else {
    // event.preventDefault();
    this.style.border = "2px solid red";
    this.insertAdjacentHTML(
      "afterend",
      "<p class='error--msg'>Must be a valid email address.<p>"
    );
    console.log("blur");
    // return false;
  }
}
