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

let inputPasswordCharCount = 0;

$("#password-input").keypress(function () {
   inputPasswordCharCount++;
   console.log("total inputted chars: ", inputPasswordCharCount);
   $("#input-password-char-count").html(inputPasswordCharCount);
});

let createPasswordCharCount = 0;

$("#create-password-input").keypress(function () {
   createPasswordCharCount++;
   console.log("total inputted chars: ", createPasswordCharCount);
   $("#create-password-char-count").html(createPasswordCharCount);
});
