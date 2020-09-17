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

   if (textLength > 0 && textLength < 501) {
      console.log(`text was entered`);
      $(`#ask-a-teacher-submit-button`).removeAttr(`disabled`);
      $(`#question-input-char-count`).removeClass(`text-danger`);
      $(`#question-input-char-count`).addClass(`text-muted`);
   } else if (textLength > 500 || textLength === 0) {
      console.log(`too many characters`);
      $(`#ask-a-teacher-submit-button`).attr(`disabled`, `disabled`);
   } else {
      $(`#ask-a-teacher-submit-button`).attr(`disabled`, `disabled`);
   }

   if (textLength > 500) {
      $(`#question-input-char-count`).removeClass(`text-muted`);
      $(`#question-input-char-count`).addClass(`text-danger`);
   }
});

$(`#answer-input`).keyup(function (e) {
   //on key release in text area id="answer-input", event function executes
   console.log(`Event: `, e); //the console prints the event that occurs

   const text = e.target.value; //assign the value of the key pressed to variable called "text"
   const username = `John`; //asign string `John` to variable called `username`
   console.log(`${username} inputted: ${text}`); //console logs `John inputted: [whatever key was pressed]`

   const textLength = text.length; //.length when applied to variable `text` gets length of inputted text
   //and assigns it to variable `textLength`
   console.log(`Total inputted chars: ${textLength}`); //console prints out the length of text each time a key is pressed

   $(`#answer-input-char-count`).html(textLength); //html text with id of "answer-input-char-count" is updated to current
   //value of textLength

   if (textLength > 0 && textLength < 2001) {
      //if that value is > 0 and < 2001
      console.log(`text was entered`); //console printes that text was entered
      $(`#submit-answer`).removeAttr(`disabled`); //html element with id of `submit-answer`
      //has `disabled` attribute removed (thus allowing the button to be pressed)
      $(`#answer-input-char-count`).removeClass(`text-danger`); //html element with id `answer-input-char-count` has
      //text-danger class removed
      $(`#answer-input-char-count`).addClass(`text-muted`); //element with that id has `text-muted` class added to it
   }
   if (textLength > 2000 || textLength === 0) {
      //if textLength value is greater than 2000 or equal to 0
      console.log(`not enough or too many characters`); //console prints this message
      $(`#submit-answer`).attr(`disabled`, `disabled`); //***does this mean the disabled function is disabled?***
      $(`#answer-input-char-count`).removeClass(`text-muted`); //remove the text-muted class from the text with this id
      $(`#answer-input-char-count`).addClass(`text-danger`); //add the text-danger class to the same text
   }
});
