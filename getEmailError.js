function getTeacherEmailError(email) {
   const emailPatternCcsd = /@nv.ccsd.net$/;

   const isValidEmail = emailPatternCcsd.test(email);

   if (email === ``) {
      return `Please enter your email address.`;
   } else if (isValidEmail === false) {
      return `Please enter a CCSD email address.`;
   } else {
      return ``;
   }
}

function getUserEmailError(email) {
   if (email === ``) {
      return `Please enter your email address.`;
   }
   // else if (isValidEmail === false) {
   //    return `Please enter a valid email address.`;
   // }
   else {
      return ``;
   }
}
