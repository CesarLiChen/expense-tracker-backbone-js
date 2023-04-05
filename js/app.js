console.log("app")

const collection = new Expenses();
const formView = new FormView({ collection });
formView.render();
console.log(formView.el);
$("body").append(formView.el);

// $ = function
// ("[css selector]")
// $("h1").hide();
