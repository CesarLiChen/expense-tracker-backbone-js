console.log("app")

const collection = new Expenses();
const formView = new FormView({ collection });
const expensesView = new ExpensesView({ collection });

formView.render();
expensesView.render();
console.log(formView.el);

$("body").append(formView.el);
$("body").append(expensesView.el);

// $ = function
// ("[css selector]")
// $("h1").hide();
