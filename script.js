$(".form-control").on("input", function () {
   // code below targets the id "overlay-sucess"; for toggleClass,
   // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
   $(".question").toggleClass("d-none");
   $(".submit-new-question").toggleClass("d-none");
});

$(".answer-a-question").click(function () {
   $(".sign-up-sign-in").toggleClass("d-flex d-none");
});

$(".sign-up-prompt").click(function () {
   $(".return-user-sign-in").toggleClass("d-none");
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});

$(`#return-user-sign-in-button`).click(function (e) {
   console.log(`you clicked on sign in!`);
   const returnUserEmail = $(`#return-user-email-input`).val();
   console.log(`value of return user email is: ${returnUserEmail}`);
   const returnUserEmailLength = returnUserEmail.length;
   console.log(`length of return user email is: ${returnUserEmailLength}`);
   if (returnUserEmailLength === 0) {
      $(`#return-user-no-email-error`).removeClass(`d-none`);
      $(`#return-user-email-input`).addClass(`is-invalid`);
   } else {
      $(`#return-user-no-email-error`).addClass(`d-none`);
      $(`#return-user-email-input`).removeClass(`is-invalid`);
   }
   const returnUserPassword = $(`#return-user-password-input`).val();
   const returnUserPasswordLength = returnUserPassword.length;

   if (returnUserPasswordLength === 0) {
      $(`#return-user-no-password-error`).removeClass(`d-none`);
      $(`#return-user-password-input`).addClass(`is-invalid`);
   } else if (returnUserPasswordLength < 8) {
      $(`#return-user-password-length-error`).removeClass(`d-none`);
      $(`#return-user-no-password-error`).addClass(`d-none`);
      $(`#return-user-password-input`).addClass(`is-invalid`);
   } else {
      $(`#return-user-password-length-error`).addClass(`d-none`);
      $(`#return-user-no-password-error`).addClass(`d-none`);
      $(`#return-user-password-input`).removeClass(`is-invalid`);
   }

   // if (newUserPasswordLength === 0) {
   //    $(`#missing-password-error-message`).removeClass(`d-none`);
   //    $(`#new-user-password`).addClass(`is-invalid`);
   // } else if (newUserPasswordLength < 9) {
   //    $(`#password-length-error-message`).removeClass(`d-none`);
   //    $(`#missing-password-error-message`).addClass(`d-none`);
   //    $(`#new-user-password`).addClass(`is-invalid`);
   // } else {
   //    $(`#missing-password-error-message`).addClass(`d-none`);
   //    $(`#password-length-error-message`).addClass(`d-none`);
   //    $(`#new-user-password`).removeClass(`is-invalid`);
   // }
});

$(`#question-input, #enter-email-input`).keyup(function (e) {
   const questionText = $(`#question-input`).val();
   const emailText = $(`#enter-email-input`).val();
   console.log(`question input val: ${questionText}`);
   console.log(`email input val: ${emailText}`);

   const questionTextLength = questionText.length;
   console.log(`The question input length is: ${questionTextLength}`);
   const emailTextLength = emailText.length;
   console.log(`The email input length is: ${emailTextLength}`);

   $(`#question-input-char-count`).html(questionTextLength);

   if (questionTextLength <= 500) {
      $(`#question-input-char-count`).removeClass(`text-danger`);
   } else {
      $(`#question-input-char-count`).addClass(`text-danger`);
   }

   if (emailTextLength > 0) {
      $(`#enter-email-notification`).addClass(`d-none`);
   } else {
      $(`#enter-email-notification`).removeClass(`d-none`);
   }

   if (
      questionTextLength > 0 &&
      questionTextLength <= 500 &&
      emailTextLength > 0
   ) {
      $(`#ask-a-teacher-submit-button`).removeAttr(`disabled`);
      $(`#enter-email-input`).removeClass(`is-invalid`);
   } else {
      $(`#ask-a-teacher-submit-button`).attr(`disabled`);
      $(`#enter-email-input`).addClass(`is-invalid`);
   }
});

// $(`#question-input`).keyup(function (e) {
//    console.log(`Event: `, e);

//   // // get the text from the text area
//    const text = e.target.value;
//    const username = `John`;
//    console.log(`${username} inputted: ${text}`);

//    //// check the length of the text
//    const textLength = text.length;
//    console.log(`Total inputted chars: ${textLength}`);

//    //// update the character counter on the page
//    $(`#question-input-char-count`).html(textLength);

//    if (textLength > 0 && textLength < 501) {
//       console.log(`text was entered`);
//       $(`#ask-a-teacher-submit-button`).removeAttr(`disabled`);
//       $(`#question-input-char-count`).removeClass(`text-danger`);
//       $(`#question-input-char-count`).addClass(`text-muted`);
//    }
//    if (textLength > 500 || textLength === 0) {
//       console.log(`incorrect num of characters`);
//       $(`#ask-a-teacher-submit-button`).attr(`disabled`, `disabled`);
//       $(`#question-input-char-count`).removeClass(`text-muted`);
//       $(`#question-input-char-count`).addClass(`text-danger`);
//    }
//   // // else {
//   // //    $(`#ask-a-teacher-submit-button`).attr(`disabled`, `disabled`);
//   // //    $(`#question-input-char-count`).addClass(`text-danger`);
//   // // }
// });

// $(`#ask-a-teacher-submit-button`).click(function (e) {
//    console.log(`Event: `, e);
//    const text = e.target.value;
//    const textLength = text.length;
//    $(`#enter-email-notification`).toggleClass(`d-none`);
//    if (textLength > 0) {
//    }
// });

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
