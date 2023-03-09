console.log("app")

const formView = new FormView();
formView.render();
console.log(formView.el);
$("body").append(formView.el);

// $ = function
// ("[css selector]")
// $("h1").hide();
