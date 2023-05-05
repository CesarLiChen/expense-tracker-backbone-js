console.log("app")

const collection = new Expenses();
const formView = new FormView({ collection });
const expensesView = new ExpensesView({ collection });
const expensesRouter = new ExpensesRouter();

formView.render();
expensesView.render();
console.log(formView.el);

$("body").append(formView.el);
$("body").append(expensesView.el);

// $ = function
// ("[css selector]")
// $("h1").hide();

Backbone.history.start();