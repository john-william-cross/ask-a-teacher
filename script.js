$(".form-control").on("input", function () {
   // code below targets the id "overlay-sucess"; for toggleClass,
   // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
   $(".question").toggleClass("d-flex d-none");
   $(".ask-new-question").toggleClass("d-flex d-none");
});

$(".answer-a-question").click(function () {
   $(".sign-up-sign-in").toggleClass("d-flex d-none");
});

$(".submit-question-button, .submit-answer-button").click(function () {
   $(".thank-you-message").toggleClass("d-none");
   $(".answer-submitted").toggleClass("d-none");
   $(".pressed-submit").toggleClass("d-none");
   $(".question").toggleClass("d-none");
});

$(".sign-up-prompt").click(function () {
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});
