// Access the required Elements from DOM
const userFullName = document.getElementById("FullName");
const userPhoneNumer = document.getElementById("PhoneNumber");
const userZipCode = document.getElementById("ZipCode");
const userPassword = document.getElementById("Password");
const userEmail = document.getElementById("Email");
// console.log(userFullName, userPhoneNumer, userZipCode, userPassword, userEmail);

// listen to the events
userFullName.addEventListener("keyup", handleUserName);
userPhoneNumer.addEventListener("keyup", phoneHandler);
userZipCode.addEventListener("keyup", zipCodeHandler);
userPassword.addEventListener("keyup", PasswordHandler);
userEmail.addEventListener("keyup", emailHandler);

// Creating handler functions
function handleUserName() {
  const regexPattern = /^[a-zA-Z]{3,20}( )[a-zA-Z]{3,20}(( )[a-zA-Z]{3,20})?$/;
  if (!regexPattern.test(userFullName.value)) {
    inValidInput(userFullName);
  } else {
    validInput(userFullName);
  }
}
function phoneHandler() {
  const regexPattern = /^\(?(\+?\d{1,3})?\)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regexPattern.test(userPhoneNumer.value)) {
    inValidInput(userPhoneNumer);
  } else {
    validInput(userPhoneNumer);
  }
}
function zipCodeHandler() {
  const regexPattern = /^\d{1,3}[-]?\d{1,4}$/;
  if (!regexPattern.test(userZipCode.value)) {
    inValidInput(userZipCode);
  } else {
    validInput(userZipCode);
  }
}
function PasswordHandler() {
  const regexPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@]).{8,}$/;
  if (!regexPattern.test(userPassword.value)) {
    inValidInput(userPassword);
  } else {
    validInput(userPassword);
  }
}
function emailHandler() {
  const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regexPattern.test(userEmail.value)) {
    inValidInput(userEmail);
  } else {
    validInput(userEmail);
  }
}

function validInput(element) {
  element.classList.remove("invalid");
  element.classList.add("valid");
}
function inValidInput(element) {
  element.classList.remove("valid");
  element.classList.add("invalid");
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
function validateForm() {
  if (
    userFullName.classList.contains("valid") &&
    userPhoneNumer.classList.contains("valid") &&
    userPassword.classList.contains("valid") &&
    userZipCode.classList.contains("valid") &&
    userEmail.classList.contains("valid")
  ) {
    document.querySelector("form").submit();
  } else {
    alert("Validate All Fields");
  }
}
