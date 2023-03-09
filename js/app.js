console.log("app")

const formView = new FormView();

formView.render();
console.log(formView.el);

// $ = function
// ("[css selector]")
// $("h1").hide();

$("body").append(formView.el);