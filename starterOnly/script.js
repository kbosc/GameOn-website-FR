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
document.querySelector(".close").addEventListener("click", onClick);
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const numberTournament = document.getElementById("quantity");
const radios = document.getElementsByName("location");
const formSubmit = document.getElementById("submit");
const checkAgree = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function onClick(e) {
  console.log("click");
  modalbg.style.display = "";
}

// Validate Mail
// function ValidateMail {

// }

// Terms of use checked
function agreeAccepted() {
  if (!checkAgree.checked) {
    alert("Must check some option!");
  }
}
// Validation Radio Button
function validateForm() {
  let formValid = false;
  let i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }
  if (!formValid) alert("Must check some option!");
  return formValid;
}
