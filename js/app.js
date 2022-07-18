//==========$ open signup form $==========\\

const createAccount = document.querySelector(`#create-account`);
const cover = document.querySelector(`#cover`);
const signupForm = document.querySelector(`.signup-form`);
createAccount.addEventListener(`click`, (e) => {
  e.preventDefault();
  cover.classList.add(`cover`);
  signupForm.style.display = `block`;
});

//==========$ close signup form $==========\\

const closeSignup = document.querySelector(`#close-signup`);
closeSignup.addEventListener(`click`, () => {
  signupForm.style.display = `none`;
  cover.classList.remove(`cover`);
});

//==========$ date of birth $==========\\

const day = document.querySelector(`#day`);
const month = document.querySelector(`#month`);
const year = document.querySelector(`#year`);
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDate();

for (let i = 1; i < 32; i++) {
  let generateDay = document.createElement(`option`);
  generateDay.innerHTML = `${i}`;
  day.appendChild(generateDay);
}

const months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];
for (let i = 0; i < months.length; i++) {
  let generateMonth = document.createElement(`option`);
  generateMonth.innerHTML = `${months[i]}`;
  month.appendChild(generateMonth);
}

for (let i = currentYear; i > 1899; i--) {
  let generateYear = document.createElement(`option`);
  generateYear.innerHTML = `${i}`;
  year.appendChild(generateYear);
}

month.value = months[currentMonth];
day.value = currentDay;

//==========$ show & hide info $==========\\

const infoBtns = document.querySelectorAll(`.info`);

window.addEventListener(`click`, () => {
  infoBtns.forEach((e) => {
    if (event.target != e.firstElementChild) {
      e.nextElementSibling.style.display = `none`;
    }
  });
});

infoBtns.forEach((e) =>
  e.addEventListener(
    `click`,
    () => (e.nextElementSibling.style.display = `block`)
  )
);

//==========$ show & hide custom gender details $==========\\

const male = document.querySelector(`#male`);
const female = document.querySelector(`#female`);
const custom = document.querySelector(`#custom`);
const customDetails = document.querySelector(`.custom-details`);

custom.addEventListener(`click`, () => (customDetails.style.display = `block`));
male.addEventListener(`click`, () => {
  customDetails.style.display = `none`;
  genderError.style.display = `none`;
});
female.addEventListener(`click`, () => {
  customDetails.style.display = `none`;
  genderError.style.display = `none`;
});

//==========$ quick validation (before submit) $==========\\

const firstName = document.querySelector(`[name = 'first-name']`);
const surname = document.querySelector(`[name = 'surname']`);
const email = document.querySelector(`[name = 'email']`);
const reEmailContainer = document.querySelector(`#re-email`);
const reEmail = document.querySelector(`[name = 're-email']`);
const password = document.querySelector(`[name = 'password']`);
const gender = document.querySelectorAll(`[name = 'gender']`);
const pronoun = document.querySelector(`#pronoun`);

const dobError = document.querySelector(`#dob-error`);
const genderError = document.querySelector(`#gender-error`);
const pronounError = document.querySelector(`#pronoun-error`);

const dobTip = document.querySelector(`#dob-tip`);
const genderTip = document.querySelector(`#gender-tip`);
const pronounTip = document.querySelector(`#pronoun-tip`);

const inputs = [firstName, surname, email, password];

let inputsValidate = () => {
  inputs.forEach((e) => {
    e.addEventListener(`focusout`, () => {
      if (e.value == "") {
        e.style.border = `1px solid red`;
        e.nextElementSibling.style.display = `block`;
        e.previousElementSibling.style.display = `none`;
        e.classList.add(`clicked`);
      } else {
        e.style.border = `1px solid #ccd0d5`;
        e.nextElementSibling.style.display = `none`;
        e.previousElementSibling.style.display = `none`;
        e.classList.remove(`clicked`);
      }
    });
  });
  inputs.forEach((e) => {
    e.addEventListener(`focusin`, () => {
      e.style.border = `1px solid #ccd0d5`;
      e.nextElementSibling.style.display = `none`;
      if (e.classList.contains(`clicked`)) {
        e.previousElementSibling.style.display = `block`;
      }
    });
  });
};

email.addEventListener(`keyup`, () => {
  if (
    email.value.match(
      /^[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )
  ) {
    reEmailContainer.style.display = `block`;
  } else {
    reEmailContainer.style.display = `none`;
  }
});

reEmail.addEventListener(`focusout`, () => {
  if (reEmail.value !== email.value) {
    reEmail.style.border = `1px solid red`;
    reEmail.nextElementSibling.style.display = `block`;
    reEmail.previousElementSibling.style.display = `none`;
    reEmail.classList.add(`clicked`);
  } else {
    reEmail.style.border = `1px solid #ccd0d5`;
    reEmail.nextElementSibling.style.display = `none`;
    reEmail.previousElementSibling.style.display = `none`;
    reEmail.classList.remove(`clicked`);
  }
});

reEmail.addEventListener(`focusin`, () => {
  reEmail.style.border = `1px solid #ccd0d5`;
  reEmail.nextElementSibling.style.display = `none`;
  if (reEmail.classList.contains(`clicked`)) {
    reEmail.previousElementSibling.style.display = `block`;
  }
});

inputsValidate();

let dateValidate = () => {
  year.addEventListener(`focusout`, () => {
    if (year.value >= currentYear - 5) {
      year.style.border = `1px solid red`;
      month.style.border = `1px solid red`;
      day.style.border = `1px solid red`;
      dobError.style.display = `block`;
    } else {
      year.style.border = `1px solid #ccd0d5`;
      month.style.border = `1px solid #ccd0d5`;
      day.style.border = `1px solid #ccd0d5`;
      dobError.style.display = `none`;
    }
  });
};

dobError.addEventListener(`click`, () => {
  dobError.style.display = `none`;
  dobTip.style.display = `block`;
  window.addEventListener(`click`, () => {
    if (event.target !== dobError) {
      dobTip.style.display = `none`;
      if (year.value >= currentYear - 5) {
        dobError.style.display = `block`;
      }
    }
  });
});

dateValidate();

let pronounValidate = () => {
  pronoun.addEventListener(`focusout`, () => {
    if (custom.checked == true && pronoun.value == `Select your pronoun`) {
      pronoun.style.border = `1px solid red`;
      pronounError.style.display = `block`;
      pronounError.addEventListener(`click`, () => {
        pronounError.style.display = `none`;
        pronounTip.style.display = `block`;
        window.addEventListener(`click`, () => {
          if (event.target !== pronounError) {
            pronounTip.style.display = `none`;
            if (
              custom.checked == true &&
              pronoun.value == `Select your pronoun`
            ) {
              pronounError.style.display = `block`;
            }
          }
        });
      });
    } else {
      pronoun.style.border = `1px solid #ccd0d5`;
      pronounError.style.display = `none`;
    }
  });
};

pronounValidate();

//==========$ validation $==========\\

signupForm.addEventListener(`submit`, (signup) => {
  if (firstName.value === ``) {
    firstName.style.border = `1px solid red`;
    firstName.nextElementSibling.style.display = `block`;
    signup.preventDefault();
  }

  [...firstName.value].forEach((e) => {
    if (
      !isNaN(e) ||
      e === `!` ||
      e === `@` ||
      e === `#` ||
      e === `$` ||
      e === `%` ||
      e === `^` ||
      e === `&` ||
      e === `*` ||
      e === `(` ||
      e === `)` ||
      e === `/` ||
      e === `+` ||
      e === `-` ||
      e === `~` ||
      e === `{` ||
      e === `}` ||
      e === `[` ||
      e === `]` ||
      e === `,`
    ) {
      firstName.style.border = `1px solid red`;
      firstName.nextElementSibling.style.display = `block`;
      signup.preventDefault();
    }
  });

  if (surname.value === ``) {
    surname.style.border = `1px solid red`;
    surname.nextElementSibling.style.display = `block`;
    signup.preventDefault();
  }

  [...surname.value].forEach((e) => {
    if (
      !isNaN(e) ||
      e === `!` ||
      e === `@` ||
      e === `#` ||
      e === `$` ||
      e === `%` ||
      e === `^` ||
      e === `&` ||
      e === `*` ||
      e === `(` ||
      e === `)` ||
      e === `/` ||
      e === `+` ||
      e === `-` ||
      e === `~` ||
      e === `{` ||
      e === `}` ||
      e === `[` ||
      e === `]` ||
      e === `,`
    ) {
      surname.style.border = `1px solid red`;
      surname.nextElementSibling.style.display = `block`;
      signup.preventDefault();
    }
  });

  if (
    !email.value.match(
      /^(?:\+\d{1,3}[- ]?)?\d{10}|[a-zA-Z0-9_\-\.]+@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    )
  ) {
    email.style.border = `1px solid red`;
    email.nextElementSibling.style.display = `block`;
    signup.preventDefault();
  }

  if (email.value !== reEmail.value) {
    signup.preventDefault();
  }
  if (password.value.length < 6) {
    password.style.border = `1px solid red`;
    password.nextElementSibling.style.display = `block`;
    signup.preventDefault();
  }

  if (year.value >= currentYear - 5) {
    year.style.border = `1px solid red`;
    month.style.border = `1px solid red`;
    day.style.border = `1px solid red`;
    dobError.style.display = `block`;
    signup.preventDefault();
  }

  let isGenderChecked = () => {
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked == true) {
        return true;
      }
    }
    return false;
  };

  isGenderChecked();

  let genderToggle = () => {
    if (event.target !== genderError) {
      genderTip.style.display = `none`;
      genderError.style.display = `block`;
    }
  };

  if (isGenderChecked() === false) {
    male.parentElement.style.border = `1px solid red`;
    female.parentElement.style.border = `1px solid red`;
    custom.parentElement.style.border = `1px solid red`;
    genderError.style.display = `block`;
    genderError.addEventListener(`click`, () => {
      genderError.style.display = `none`;
      genderTip.style.display = `block`;

      window.addEventListener(`click`, genderToggle);
    });
    signup.preventDefault();
  } else {
    male.parentElement.style.border = `1px solid #ccd0d5`;
    female.parentElement.style.border = `1px solid #ccd0d5`;
    custom.parentElement.style.border = `1px solid #ccd0d5`;
    genderError.style.display = `none`;
    window.removeEventListener(`click`, genderToggle);
  }

  if (custom.checked == true && pronoun.value == `Select your pronoun`) {
    pronoun.style.border = `1px solid red`;
    pronounError.style.display = `block`;
    signup.preventDefault();
  }
});
