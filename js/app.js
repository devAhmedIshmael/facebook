//==========$  $==========\\

//==========$ creating a popup form $==========\\

let newAccountBtn = document.querySelector(`#create-new-account`);
let cover = document.querySelector(`#cover`);
let signup = document.querySelector(`.signup`);
newAccountBtn.addEventListener(`click`, () => {
  cover.classList.add(`cover`);
  signup.style.display = `block`;
});

//==========$ show password $==========\\

let showPasswordBtn = document.querySelector(`#show-password`);
let password = document.querySelector(`[name = 'password']`);

showPasswordBtn.addEventListener(`click`, () => {
  if (password.type == `password`) {
    password.type = `text`;
  } else {
    password.type = `password`;
  }
});

//==========$ validation $==========\\

let signupForm = document.querySelector(`#signup-form`);
let firstName = document.querySelector(`[name = 'first-name']`);
let errorFirstName = document.querySelector(`.error-fname`);
let surName = document.querySelector(`[name = 'sur-name']`);
let errorSurName = document.querySelector(`.error-sname`);
let errorPassword = document.querySelector(`.error-password`);
let email = document.querySelector(`[name = 'email']`);
let errorEmail = document.querySelector(`.error-email`);
let birthDate = document.querySelector(`[name = 'birth-date']`);
let errorBirthDate = document.querySelector(`.error-birthdate`);
let gender = document.querySelector(`[name = 'gender']`);
let errorGender = document.querySelector(`.error-gender`);

signupForm.addEventListener(`submit`, (e) => {
  let firstNameValidation = false;
  let surNameValidation = false;
  let emailValidation = false;
  let passwordValidation = false;
  let birthDateValidation = false;
  let genderValidation = false;

  if (firstName.value !== "") {
    firstNameValidation = true;
    firstName.style.border = `1px solid gray`;
    errorFirstName.innerHTML = ``;
  }
  if (firstNameValidation === false) {
    e.preventDefault();
    errorFirstName.innerHTML = `First name can't be empty`;
    firstName.style.border = `1px solid red`;
  }

  if (surName.value !== "") {
    surNameValidation = true;
  }
  if (surNameValidation === false) {
    e.preventDefault();
    errorSurName.innerHTML = `Surname can't be empty`;
    surName.style.border = `1px solid red`;
  }

  if (password.value.length > 6) {
    passwordValidation = true;
  }
  if (passwordValidation === false) {
    e.preventDefault();
    errorPassword.innerHTML = `Password must be more than 6 chars`;
    password.style.border = `1px solid red`;
  }

  if (email.value.includes(`@`) && email.value.includes(`.com`)) {
    emailValidation = true;
  }
  if (emailValidation === false) {
    e.preventDefault();
    errorEmail.innerHTML = `Enter a valid email`;
    email.style.border = `1px solid red`;
  }

  if (birthDate.value !== "") {
    birthDateValidation = true;
  }

  if (birthDateValidation === false) {
    e.preventDefault();
    errorBirthDate.innerHTML = `*Required`;
    birthDate.style.border = `1px solid red`;
  }

  if (gender.checked === true) {
    genderValidation = true;
  }

  if (genderValidation === false) {
    e.preventDefault();
    errorGender.innerHTML = `*Required`;
    gender.style.border = `1px solid red`;
  }
});
