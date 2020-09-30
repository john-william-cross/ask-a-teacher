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
