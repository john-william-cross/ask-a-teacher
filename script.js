//**************************************//
//--------Index Page JavaScript---------//
//**************************************//

$(".form-control").on("input", function () {
   // code below targets the id "overlay-sucess"; for toggleClass,
   // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
   $(".question").toggleClass("d-none");
   $(".submit-new-question").toggleClass("d-none");
});

$(".answer-a-question").click(function () {
   $(".sign-up-sign-in").toggleClass("d-flex d-none");
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

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string

   if (passwordError !== ``) {
      showError(`#sign-up-password`, passwordError);
   } else {
      hideError(`#sign-up-password`, passwordError);
   }

   const emailError = getEmailError(email);
   console.log(`this is the email error`, emailError);

   if (emailError !== ``) {
      showError(`#sign-up-email`, emailError);
   } else {
      hideError(`#sign-up-email`, emailError);
   }
   console.log(`The date is\n`, getCreatedAt());
});

//**************************************//
//----Submit Question Page JavaScript---//
//**************************************//

$(`#question-input`).keyup(function (e) {
   console.log(`Event: `, e);

   const text = e.target.value;
   const username = `John`;
   console.log(`${username} inputted: ${text}`);

   const textLength = text.length;

   console.log(`Total inputted chars: ${textLength}`);

   $(`#question-input-char-count`).html(textLength);

   if (textLength > 0 && textLength < 501) {
      console.log(`text was entered`);
      $(`#ask-a-teacher-submit-button`).removeAttr(`disabled`);
      $(`#question-input-char-count`).removeClass(`text-danger`);
      $(`#question-input-char-count`).addClass(`text-muted`);
   }
   if (textLength > 500 || textLength === 0) {
      console.log(`not enough or too many characters`);
      $(`#ask-a-teacher-submit-button`).attr(`disabled`, `disabled`);
      $(`#question-input-char-count`).removeClass(`text-muted`);
      $(`#question-input-char-count`).addClass(`text-danger`);
   }
});

$(`#ask-a-teacher-submit-button`).click(function () {
   const emailEntered = $(`#questioner-email-input`).val();
   console.log(emailEntered);
   if (emailEntered.length === 0) {
      $(`#questioner-enter-email-notification`).removeClass(`d-none`);
      $(`#questioner-email-input`).addClass(`is-invalid`);
   } else {
      $(`#questioner-enter-email-notification`).addClass(`d-none`);
      $(`#questioner-email-input`).removeClass(`is-invalid`);
   }
});

//**************************************//
//-------Question Page JavaScript-------//
//**************************************//

$(`#answer-input`).keyup(function (e) {
   console.log(`Event: `, e);

   const text = e.target.value;
   const username = `John`;
   console.log(`${username} inputted: ${text}`);

   const textLength = text.length;

   console.log(`Total inputted chars: ${textLength}`);

   $(`#answer-input-char-count`).html(textLength);

   if (textLength > 0 && textLength < 2001) {
      console.log(`text was entered`);
      $(`#submit-answer`).removeAttr(`disabled`);
      $(`#answer-input-char-count`).removeClass(`text-danger`);
      $(`#answer-input-char-count`).addClass(`text-muted`);
   }
   if (textLength > 2000 || textLength === 0) {
      console.log(`not enough or too many characters`);
      $(`#submit-answer`).attr(`disabled`, `disabled`);
      $(`#answer-input-char-count`).removeClass(`text-muted`);
      $(`#answer-input-char-count`).addClass(`text-danger`);
   }
});

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

function showCharCountValidation(id, input) {
   $(id).html(input.length);

   if (input.length <= maxCharCardInput) {
      $(id).removeClass(`text-danger`);
   } else {
      $(id).addClass(`text-danger`);
   }

   toggleDisabled();
}

function toggleDisabled() {
   const topText = $(`#edit-input-top-card`).val();
   const bottomText = $(`#edit-input-bottom-card`).val();
   if (
      topText.length > 0 &&
      topText.length <= maxCharCardInput &&
      bottomText.length > 0 &&
      bottomText.length <= maxCharCardInput
   ) {
      $(`#save-card`).removeClass(`disabled`);
   } else {
      $(`#save-card`).addClass(`disabled`);
   }
}
