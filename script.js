//**************************************//
//--------Index Page JavaScript---------//
//**************************************//

// $(".form-control").on("input", function () {
//    // code below targets the id "overlay-sucess"; for toggleClass,
//    // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
//    $(".question").toggleClass("d-none");
//    $(".submit-new-question").toggleClass("d-none");
// });

// $(".answer-a-question").click(function () {
//    $(".sign-up-sign-in").toggleClass("d-flex d-none");
// });

//**************************************//
//----Sign-in-Sign-Up Page JavaScript---//
//**************************************//

$(".sign-up-prompt").click(function () {
   $(".return-user-sign-in").addClass("d-none");
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});

// $(`#return-user-sign-in-button`).click(function (e) {
//    console.log(`you clicked on sign in!`);
//    const returnUserEmail = $(`#return-user-email-input`).val();
//    console.log(`value of return user email is: ${returnUserEmail}`);
//    const returnUserEmailLength = returnUserEmail.length;
//    console.log(`length of return user email is: ${returnUserEmailLength}`);
//    if (returnUserEmailLength === 0) {
//       $(`#return-user-no-email-error`).removeClass(`d-none`);
//       $(`#return-user-email-input`).addClass(`is-invalid`);
//    } else {
//       $(`#return-user-no-email-error`).addClass(`d-none`);
//       $(`#return-user-email-input`).removeClass(`is-invalid`);
//    }
//    const returnUserPassword = $(`#return-user-password-input`).val();
//    const returnUserPasswordLength = returnUserPassword.length;

//    if (returnUserPasswordLength === 0) {
//       $(`#return-user-password-input`).addClass(`is-invalid`);
//       $(`#return-user-no-password-error`).removeClass(`d-none`);
//       $(`#return-user-password-length-error`).addClass(`d-none`);
//    } else if (returnUserPasswordLength < 8) {
//       $(`#return-user-password-length-error`).removeClass(`d-none`);
//       $(`#return-user-no-password-error`).addClass(`d-none`);
//       $(`#return-user-password-input`).addClass(`is-invalid`);
//    } else {
//       $(`#return-user-password-length-error`).addClass(`d-none`);
//       $(`#return-user-no-password-error`).addClass(`d-none`);
//       $(`#return-user-password-input`).removeClass(`is-invalid`);
//    }

//    trimmedReturnUserEmail = returnUserEmail.trim();
//    console.log(`Returning user email address is ${returnUserEmail}`);
//    console.log(`Trimmed new user email address is ${trimmedReturnUserEmail}.`);

//    const delimiter = `@`;
//    const indexofAtSymbolDelimiter = trimmedReturnUserEmail.indexOf(delimiter);
//    console.log(
//       `the @ symbol in the trimmed return user email is at index: ${indexofAtSymbolDelimiter}`
//    );

//    const localPartTrimmedReturnUserEmail = trimmedReturnUserEmail.slice(
//       0,
//       indexofAtSymbolDelimiter
//    );
//    console.log(
//       `the local part of the trimmed return user email is ${localPartTrimmedReturnUserEmail}`
//    );

//    console.log(
//       `the length of the local part trimmed return user email is: ${localPartTrimmedReturnUserEmail.length}.`
//    );

//    const localPartTrimmedReturnUserEmailLength =
//       localPartTrimmedReturnUserEmail.length;

//    if (
//       returnUserPassword.includes(localPartTrimmedReturnUserEmail) &&
//       localPartTrimmedReturnUserEmailLength >= 4
//    ) {
//       console.log(
//          `The password ${returnUserPassword} includes the string ${localPartTrimmedReturnUserEmail}, so it can't be used!`
//       );
//       $(`#reused-string-error-message`).removeClass(`d-none`);
//       $(`#return-user-password-input`).addClass(`is-invalid`);
//    } else {
//       console.log(
//          `the return user password does not contain the string: ${localPartTrimmedReturnUserEmail}. Good on you, return user.`
//       );
//       $(`#reused-string-error-message`).addClass(`d-none`);
//       $(`#return-user-password-input`).removeClass(`is-invalid`);
//    }
// });

$(`#lets-go-button`).click(function (e) {
   const newUserEmailAddress = $(`#new-user-email`).val();
   const newUserEmailAddressLength = newUserEmailAddress.length;
   // console.log(`val is ${newUserEmailAddress}`);
   // console.log(
   //    `new user email address length is: ${newUserEmailAddressLength}`
   // );

   const newUserPassword = $(`#new-user-password`).val();
   // console.log(`password length is ${newUserPassword.length}`);

   trimmedNewUserEmailAddress = newUserEmailAddress.trim();
   //console.log(trimmedNewUserEmailAddress);
   // console.log(`New user email address is ${newUserEmailAddress}`);
   // console.log(
   //    `Trimmed new user email address is ${trimmedNewUserEmailAddress}.`
   // );

   const localPartTrimmedNewUserEmail = trimmedNewUserEmailAddress.split(`@`);
   //console.log(localPartTrimmedNewUserEmail);
   trimmedNewUserEmailAddress = localPartTrimmedNewUserEmail.slice(0, 1);

   console.log(
      `the local part of the trimmed new user email is ${trimmedNewUserEmailAddress}`
   );

   // console.log(
   //    `length of the localparttrimmed new user email is: ${localPartTrimmedNewUserEmail.length}`
   // );
   const localPartTrimmedNewUserEmailLength =
      localPartTrimmedNewUserEmail.length;

   const unacceptablePasswordsLists = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );

   const flattenedUnacceptablePasswordsLists = unacceptablePasswordsLists.flat();
   // console.log(
   //    `flatted unacceptable passwords:\n`,
   //    flattenedUnacceptablePasswords
   // );

   const allUniqUnacceptablePasswords = [
      ...new Set(flattenedUnacceptablePasswordsLists),
   ];
   // console.log(
   //    `Here's a list of all unique unacceptable passwords:\n`,
   //    allUniqUnacceptablePasswords
   // );

   const firstUniqPasswords = allUniqUnacceptablePasswords.slice(
      0,
      allUniqUnacceptablePasswords.indexOf(`skywalker`)
   );

   // console.log(
   //    `here is the first part of the unique passwords:\n`,
   //    firstUniqPasswords
   // );

   const secondUniqPasswords = allUniqUnacceptablePasswords.slice(
      4,
      allUniqUnacceptablePasswords.indexOf(`obama2016`)
   );
   // console.log(
   //    `here is the second part of the unique passwords:\n`,
   //    secondUniqPasswords
   // );

   const thirdUniqPasswords = allUniqUnacceptablePasswords.slice(7);
   // console.log(
   //    `here is the third part of the unique passwords:\n`,
   //    thirdUniqPasswords
   // );

   allCleanedUpUniqPasswords = firstUniqPasswords.concat(
      secondUniqPasswords,
      thirdUniqPasswords
   );

   // console.log(
   //    `Here are all the cleaned-up unique passwords:\n`,
   //    allCleanedUpUniqPasswords
   // );

   const unacceptablePasswordsWithBoolsAndNums = allCleanedUpUniqPasswords;
   let unacceptablePasswordsWithNums = [];
   for (let i = 0; i < unacceptablePasswordsWithBoolsAndNums.length; i++) {
      // console.log(unacceptablePasswordsWithBoolsAndNums[i]);

      const password = unacceptablePasswordsWithBoolsAndNums[i];

      if (typeof password !== "boolean") {
         unacceptablePasswordsWithNums = unacceptablePasswordsWithNums.concat([
            unacceptablePasswordsWithBoolsAndNums[i],
         ]);
      }
   }

   // console.log(
   //    `Here are the passwords made up of strings and numbers:\n`,
   //    unacceptablePasswordsWithNums
   // );

   let unacceptablePasswordStrings = [];
   for (let i = 0; i < unacceptablePasswordsWithNums.length; i++) {
      const value = unacceptablePasswordsWithNums[i];
      unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
         String(value)
      );
   }
   //console.log(`here are the old passwords:\n`, unacceptablePasswordStrings);

   let unacceptablePasswordsForwardAndReversed = [];
   //creates empty array
   for (i = 0; i < unacceptablePasswordStrings.length; i++) {
      //keep doing the following until i < unacceptablePasswordStrings.length
      let passwordChars = unacceptablePasswordStrings[i].split(``);
      //splits each word in oldUnacccetablePasswords list and assigns it to passwordChars
      ///console.log(`Split password chars:\n`, passwordChars);
      const copyOfPasswordChars = [...passwordChars];
      //makes a copy of passwordChars
      //console.log(`copy of password chars:\n`, copyOfPasswordChars);
      const reversePasswordChars = copyOfPasswordChars.reverse();
      //reverses each split password
      //console.log(`Reversed password chars:\n`, reversePasswordChars);
      const reversedUnacceptablePasswords = reversePasswordChars.join(``);
      //joins (un-splits) each reverse password back together
      //console.log(reversedUnacceptablePasswords);
      unacceptablePasswordsForwardAndReversed = unacceptablePasswordsForwardAndReversed.concat(
         reversedUnacceptablePasswords
      ); //fills empty array with reversedUnacceptablePasswords
   }
   let forwardAndReversedPasswords = unacceptablePasswordStrings.concat(
      unacceptablePasswordsForwardAndReversed
   ); //combines forward passwords array with reverse passwords array into a new array called
   //forwardAndReversedPasswords
   // console.log(
   //    `Here's the new list of unacceptable passwords in forward and reverse order:\n`,
   //    forwardAndReversedPasswords
   // );

   let normalizedPasswords = [];
   for (let i = 0; i < forwardAndReversedPasswords.length; i++) {
      const password = forwardAndReversedPasswords[i];
      const lowerCasedPassword = password.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   }
   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let unacceptablePasswords = [...new Set(normalizedPasswords)];
   console.log(
      `Here are the unacceptable passwords, all of which are unique and normalized\n`,
      unacceptablePasswords
   );

   const clickedOn = new Date();
   const year = clickedOn.getFullYear();
   //console.log(year);
   const month = clickedOn.getMonth();

   if (month < 12) {
      monthPlusOne = month + 1;
      //console.log(monthPlusOne);
   }

   const day = clickedOn.getDate();
   //console.log(day);

   yearToString = year.toString();
   monthToString = monthPlusOne.toString();
   //console.log(monthToString);
   dayToString = day.toString();

   if (monthToString < 10) {
      monthToString = 0 + monthToString;
   }

   const fullDate = yearToString + monthToString + dayToString;
   fulldate = parseInt(fullDate);
   const createdAt = fullDate;
   console.log(`The date is\n`, createdAt);

   if (newUserEmailAddressLength === 0) {
      $(`#email-error-message`).removeClass(`d-none`);
      $(`#new-user-email`).addClass(`is-invalid`);
   } else if (newUserEmailAddressLength > 0) {
      $(`#email-error-message`).addClass(`d-none`);
      $(`#new-user-email`).removeClass(`is-invalid`);
   }
   const passwordEmptyError = `Please create a password.`;
   const passwordLengthError = `Your password must be at least 9 characters.`;
   const passwordContainsEmailCharsError = `All or part of your email address cannot be in your password.`;
   const passwordMostInsecurePasswordsError = `Your password contains a commonly used password, "${newUserPassword}" and can be easily discovered by attackers. Please use something else.`;
   const lowerCasedPassword = newUserPassword.toLowerCase();
   if (lowerCasedPassword.length === 0) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordEmptyError);
   } else if (lowerCasedPassword.length < 9) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordLengthError);
   } else if (
      lowerCasedPassword.includes(localPartTrimmedNewUserEmail) &&
      localPartTrimmedNewUserEmailLength >= 4
   ) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordContainsEmailCharsError);
   } else if (unacceptablePasswords.includes(lowerCasedPassword)) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#password-error-message`).html(passwordMostInsecurePasswordsError);
      $(`#new-user-password`).addClass(`is-invalid`);
   } else {
      $(`#password-error-message`).addClass(`d-none`);
      $(`#new-user-password`).removeClass(`is-invalid`);
   }
});

//**************************************//
//-------Question Page JavaScript-------//
//**************************************//

// $(`#answer-input`).keyup(function (e) {
//    console.log(`Event: `, e);

//    const text = e.target.value;
//    const username = `John`;
//    console.log(`${username} inputted: ${text}`);

//    const textLength = text.length;

//    console.log(`Total inputted chars: ${textLength}`);

//    $(`#answer-input-char-count`).html(textLength);

//    if (textLength > 0 && textLength < 2001) {
//       console.log(`text was entered`);
//       $(`#submit-answer`).removeAttr(`disabled`);
//       $(`#answer-input-char-count`).removeClass(`text-danger`);
//       $(`#answer-input-char-count`).addClass(`text-muted`);
//    }
//    if (textLength > 2000 || textLength === 0) {
//       console.log(`not enough or too many characters`);
//       $(`#submit-answer`).attr(`disabled`, `disabled`);
//       $(`#answer-input-char-count`).removeClass(`text-muted`);
//       $(`#answer-input-char-count`).addClass(`text-danger`);
//    }
// });
