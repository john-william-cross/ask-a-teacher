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
      $(`#return-user-password-input`).addClass(`is-invalid`);
      $(`#return-user-no-password-error`).removeClass(`d-none`);
      $(`#return-user-password-length-error`).addClass(`d-none`);
   } else if (returnUserPasswordLength < 8) {
      $(`#return-user-password-length-error`).removeClass(`d-none`);
      $(`#return-user-no-password-error`).addClass(`d-none`);
      $(`#return-user-password-input`).addClass(`is-invalid`);
   } else {
      $(`#return-user-password-length-error`).addClass(`d-none`);
      $(`#return-user-no-password-error`).addClass(`d-none`);
      $(`#return-user-password-input`).removeClass(`is-invalid`);
   }

   trimmedReturnUserEmail = returnUserEmail.trim();
   console.log(`Returning user email address is ${returnUserEmail}`);
   console.log(`Trimmed new user email address is ${trimmedReturnUserEmail}.`);

   const delimiter = `@`;
   const indexofAtSymbolDelimiter = trimmedReturnUserEmail.indexOf(delimiter);
   console.log(
      `the @ symbol in the trimmed return user email is at index: ${indexofAtSymbolDelimiter}`
   );

   const localPartTrimmedReturnUserEmail = trimmedReturnUserEmail.slice(
      0,
      indexofAtSymbolDelimiter
   );
   console.log(
      `the local part of the trimmed return user email is ${localPartTrimmedReturnUserEmail}`
   );

   console.log(
      `the length of the local part trimmed return user email is: ${localPartTrimmedReturnUserEmail.length}.`
   );

   const localPartTrimmedReturnUserEmailLength =
      localPartTrimmedReturnUserEmail.length;

   if (
      returnUserPassword.includes(localPartTrimmedReturnUserEmail) &&
      localPartTrimmedReturnUserEmailLength >= 4
   ) {
      console.log(
         `The password ${returnUserPassword} includes the string ${localPartTrimmedReturnUserEmail}, so it can't be used!`
      );
      $(`#reused-string-error-message`).removeClass(`d-none`);
      $(`#return-user-password-input`).addClass(`is-invalid`);
   } else {
      console.log(
         `the return user password does not contain the string: ${localPartTrimmedReturnUserEmail}. Good on you, return user.`
      );
      $(`#reused-string-error-message`).addClass(`d-none`);
      $(`#return-user-password-input`).removeClass(`is-invalid`);
   }
});

$(`#new-user-sign-up-button`).click(function (e) {
   console.log("you clicked on sign up!");
   const newUserEmail = $(`#new-user-email-input`).val();
   const newUserEmailLength = newUserEmail.length;

   if (newUserEmailLength === 0) {
      $(`#new-user-no-email-error`).removeClass(`d-none`);
      $(`#new-user-email-input`).addClass(`is-invalid`);
   } else {
      $(`#new-user-no-email-error`).addClass(`d-none`);
      $(`#new-user-email-input`).removeClass(`is-invalid`);
   }

   const newUserPassword = $(`#new-user-password-input`).val();
   const newUserPasswordLength = newUserPassword.length;

   if (newUserPasswordLength === 0) {
      $(`#new-user-no-password-error`).removeClass(`d-none`);
      $(`#new-user-password-input`).addClass(`is-invalid`);
      $(`#new-user-password-length-error`).addClass(`d-none`);
   } else if (newUserPasswordLength < 8) {
      $(`#new-user-password-length-error`).removeClass(`d-none`);
      $(`#new-user-no-password-error`).addClass(`d-none`);
      $(`#new-user-password-input`).addClass(`is-invalid`);
   } else {
      $(`#new-user-password-length-error`).addClass(`d-none`);
      $(`#new-user-no-password-error`).addClass(`d-none`);
      $(`#new-user-password-input`).removeClass(`is-invalid`);
   }

   trimmedNewUserEmail = newUserEmail.trim();

   delimiter = `@`;
   indexofAtSymbolDelimiter = trimmedNewUserEmail.indexOf(delimiter);

   const localPartTrimmedNewUserEmail = trimmedNewUserEmail.slice(
      0,
      indexofAtSymbolDelimiter
   );

   const localPartTrimmedNewUserEmailLength =
      localPartTrimmedNewUserEmail.length;

   if (
      newUserPassword.includes(localPartTrimmedNewUserEmail) &&
      localPartTrimmedNewUserEmailLength >= 4
   ) {
      $(`#reused-string-error-message`).removeClass(`d-none`);
      $(`#return-user-password-input`).addClass(`is-invalid`);
   } else {
      $(`#new-user-reused-string-error-message`).addClass(`d-none`);
      $(`#new-user-password-input`).removeClass(`is-invalid`);
   }
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

$(`#ask-a-teacher-submit-button`).click(function (e) {
   console.log(`Event: `, e);
   const text = e.target.value;
   const textLength = text.length;
   $(`#enter-email-notification`).toggleClass(`d-none`);
   if (textLength > 0) {
   }
   if (emailTextLength === 0) {
      console.log(`you didn't enter anything into the email box`);
      $(`#enter-email-notification`).removeClass(`d-none`);
   } else {
      $(`#enter-email-notification`).removeClass(`d-none`);
   }
});

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
