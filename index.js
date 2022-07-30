//form validation
let registrationForm = document.querySelector("#register-form");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); //stops auto form submission.

  if (validateForm()) {
    alert("form is submitted successfully");
  } else {
    alert("Something went wrong");
  }
});

let validateForm = () => {
  // checkUserName();
  // checkEmail();
  // checkPassword();
  // checkConfirmPassword();

  if (
    checkUserName() &
    checkEmail() &
    checkPassword() &
    checkConfirmPassword()
  ) {
    return true;
  } else {
    return false;
  }
};

//check username
let checkUserName = () => {
  let inputEl = document.querySelector("#username");
  let inputFeedbackEl = document.querySelector("#username-feedback");
  let regExp = /^[a-zA-Z0-9]{4,10}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

//check email
let checkEmail = () => {
  let inputEl = document.querySelector("#email");
  let inputFeedbackEl = document.querySelector("#email-feedback");
  let regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

//check password
let checkPassword = () => {
  let inputEl = document.querySelector("#password");
  let inputFeedbackEl = document.querySelector("#password-feedback");
  let regExp = /^[A-Za-z]\w{7,14}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

//check confirm- password
let checkConfirmPassword = () => {
  let inputEl = document.querySelector("#c-password");
  let passwordEl = document.querySelector("#password");
  let inputFeedbackEl = document.querySelector("#c-password-feedback");
  let regExp = /^[A-Za-z]\w{7,14}$/;
  if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value) {
    makeValid(inputEl, inputFeedbackEl);
    return true;
  } else {
    makeInValid(inputEl, inputFeedbackEl);
    return false;
  }
};

//make valid
let makeValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.add("is-form-valid");
  inputEl.classList.remove("is-form-invalid");
  inputFeedbackEl.classList.add("text-success");
  inputFeedbackEl.classList.remove("text-danger");
  inputFeedbackEl.innerText = "Looks Good";
};

//make invalid
let makeInValid = (inputEl, inputFeedbackEl) => {
  inputEl.classList.remove("is-form-valid");
  inputEl.classList.add("is-form-invalid");
  inputFeedbackEl.classList.remove("text-success");
  inputFeedbackEl.classList.add("text-danger");
};

//username field with key event
let usernameEl = document.querySelector("#username");
usernameEl.addEventListener("keyup", function () {
  checkUserName();
});

//email field with key event
let emailEl = document.querySelector("#email");
emailEl.addEventListener("keyup", function () {
  checkEmail();
});

//password field with key event
let passwordEl = document.querySelector("#password");
passwordEl.addEventListener("keyup", function () {
  checkPassword();
});

//c-password field with key event
let confirmpasswordEl = document.querySelector("#c-password");
confirmpasswordEl.addEventListener("keyup", function () {
  checkConfirmPassword();
});
