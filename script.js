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

let questionInputCharCount = 0;

// $("#question-input").keydown(function (e) {
//    const key = e.which;
//    console.log("key inputted: ", key);
//    if (key === 8) {
//       console.log("the user has pressed backspace!");
//       questionInputCharCount--;
//       if (questionInputCharCount < 0) {
//          console.log("You have entered negative territory!");
//          questionInputCharCount = 0;
//       }
//    } else if (key === 16) {
//       console.log("Shift was pressed");
//    } else if (key === 18) {
//       console.log("Option was pressed");
//    } else {
//       console.log("the user pressed any other key");
//       questionInputCharCount++;
//    }

//    console.log("total inputted chars: ", questionInputCharCount);
//    $("#question-input-char-count").html(questionInputCharCount);
// });

$(`#question-input`).keyup(function (e) {
   console.log(`Event: `, e);

   // get the text from the text area
   const text = e.target.value;
   const username = `John`;
   console.log(`${username} inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`Total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#question-input-char-count`).html(textLength);

   if (text.length > 240) {
      console.log(`You've entered more than 500 characters`);
   }
});
