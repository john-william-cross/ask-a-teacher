//**************************************//
//--------Index Page JavaScript---------//
//**************************************//

$(".form-control").on("input", function () {
   $(".home-page-question").removeClass("d-none");
   $(".submit-new-question").removeClass("d-none");

   if ($(`#question-input-home-page`).val() === 0) {
      console.log(`hey`);
   }
});

$(`#question-input-home-page`).keyup(function (e) {
   const text = e.target.value;

   const textLength = text.length;
   if (textLength === 0) {
      $(".home-page-question").addClass("d-none");
      $(".submit-new-question").addClass("d-none");
   }
});

//**************************************//
//----Sign-in-Sign-Up Page JavaScript---//
//**************************************//

$(".sign-up-prompt").click(function () {
   $(".return-user-sign-in").addClass("d-none");
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});

$("#lets-go-button").click(function (e) {
   const emailInput = $(`#sign-up-email-input`).val();
   const email = emailInput.trim().toLowerCase();
   const password = $(`#sign-up-password-input`).val();

   const passwordError = getPasswordError(password, email);

   if (passwordError !== ``) {
      showError(`#sign-up-password`, passwordError);
   } else {
      hideError(`#sign-up-password`, passwordError);
   }

   const emailError = getEmailError(email);

   if (emailError !== ``) {
      showError(`#sign-up-email`, emailError);
   } else {
      hideError(`#sign-up-email`, emailError);
   }
   console.log(`The date is:`, getCreatedAt());

   // const userProps = [email, password, Number(getCreatedAt()), createId()];
   // if (passwordError !== `` || emailError !== ``) {
   //    console.log(`Array will not be displayed`);
   // } else {
   //    console.log(`Here is the userProps array: `, userProps);
   // }
});

//**************************************//
//----Submit Question Page JavaScript---//
//**************************************//

$(`#question-input`).keyup(function (e) {
   showCharCountValidation(
      `#question-input-char-count`,
      $(`#question-input`).val(),
      `#ask-a-teacher-submit-button`,
      500
   );
});

$("#ask-a-teacher-submit-button").click(function (e) {
   const emailInput = $(`#questioner-email-input`).val();
   const email = emailInput.trim().toLowerCase();
   const emailError = getEmailError(email);
   if (emailError !== ``) {
      showError(`#questioner-email`, emailError);
   } else {
      hideError(`#questioner-email`, emailError);
   }
});

//**************************************//
//-------Question Page JavaScript-------//
//**************************************//

$(`#answer-input`).keyup(function (e) {
   showCharCountValidation(
      `#answer-input-char-count`,
      $(`#answer-input`).val(),
      `#submit-answer`,
      2000
   );
});

//**************************************//
//--------------FUNCTIONS---------------//
//**************************************//

function showCharCountValidation(countId, input, buttonId, maxChars) {
   $(countId).html(input.length);
   if (input.length > 0 && input.length <= maxChars) {
      $(countId).removeClass(`text-danger`);
   } else {
      $(countId).addClass(`text-danger`);
   }
   toggleDisabled(input, buttonId, maxChars);
}

function toggleDisabled(input, buttonId, maxChars) {
   if (input.length > 0 && input.length <= maxChars) {
      $(buttonId).removeAttr(`disabled`);
   } else {
      $(buttonId).attr(`disabled`, `disabled`);
   }
}

function showError(element, message) {
   $(`${element}-input`).addClass(`is-invalid`);
   $(`${element}-error`).html(message);
}

function hideError(element, message) {
   $(`${element}-input`).removeClass(`is-invalid`);
   $(`${element}-error`).html(message);
}

function getCreatedAt() {
   let clickedAt = new Date();
   // clickedAt = new Date(2020, 0, 1); //uncomment to test
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();
   const monthPlusOne = month + 1;
   const dayToString = String(day);
   const yearToString = String(year);
   const monthToString = String(monthPlusOne);
   createdAt = Number(
      yearToString + padLeft(monthToString) + padLeft(dayToString)
   );
   return createdAt;
}

function padLeft(string) {
   if (string < 10) {
      string = 0 + string;
   }
   return string;
}

function createId() {
   function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min); //gives entire range plus minimum
   }

   const randomInt = getRandomInt(0, 999);
   // console.log(`Random int between 0 and 999 is: ${randomInt}`);
   let timeClicked = new Date(Date.now());
   const milliseconds = String(timeClicked.getMilliseconds());
   // console.log(`Let's go was clicked at: ${milliseconds}`);
   const nonPaddedId = randomInt.toString() + milliseconds;
   // console.log(
   // `the id created by combining random int and time clicked is: ${nonPaddedId}`
   // );
   const timeClickedMilliseconds = String(milliseconds);

   const randomIntAsString = String(randomInt);
   //console.log(`here's the random int as a string: `, randomIntAsString);
   const paddedRandomInt = randomIntAsString.padStart(3, `0`);
   //console.log(`here's the padded random int:`, paddedRandomInt);

   const millisecondsAsString = String(timeClickedMilliseconds);
   //console.log(`here's the time clicked: `, millisecondsAsString);
   const paddedTimeClicked = millisecondsAsString.padStart(3, `0`);
   //console.log(`here's the padded time clicked: `, paddedTimeClicked);
   const id = String(paddedRandomInt + paddedTimeClicked);
   return id;
}
