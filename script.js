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

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string

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
});

//**************************************//
//----Submit Question Page JavaScript---//
//**************************************//

$(`#question-input`).keyup(function (e) {
   console.log(`Event: `, e);

   const text = e.target.value;

   const textLength = text.length;

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
const maxCharCardInput = 2000;
// $(`#answer-input`).keyup(function (e) {

$(`#answer-input`).keyup(function (e) {
   showCharCountValidation(
      `#answer-input-char-count`,
      $(`#answer-input`).val()
   );

   // const text = e.target.value;

   // const textLength = text.length;

   // console.log(`Total inputted chars: ${textLength}`);

   // $(`#answer-input-char-count`).html(textLength);

   // if (textLength > 0 && textLength < 2001) {
   //    $(`#submit-answer`).removeAttr(`disabled`);
   //    $(`#answer-input-char-count`).removeClass(`text-danger`);
   //    $(`#answer-input-char-count`).addClass(`text-muted`);
   // }
   // if (textLength > 2000 || textLength === 0) {
   //    $(`#submit-answer`).attr(`disabled`, `disabled`);
   //    $(`#answer-input-char-count`).removeClass(`text-muted`);
   //    $(`#answer-input-char-count`).addClass(`text-danger`);
   // }
});

//**************************************//
//--------------FUNCTIONS---------------//
//**************************************//

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
   const text = $(`#answer-input`).val();

   if (text.length > 0 && text.length <= maxCharCardInput) {
      $(`#submit-answer`).removeClass(`disabled`);
   } else {
      $(`#submit-answer`).addClass(`disabled`);
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
