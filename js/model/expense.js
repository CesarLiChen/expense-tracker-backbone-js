const Expense = Backbone.Model.extend({

    // initialize method only tells us when something is created.
    
    initialize() {
        console.log("I'm a new expense")

        if (!this.get("id")) {
            this.set("id", this.generateId());
        }
    },
    
    generateId() {
        return new Date().getTime();
    },

    validate(expense) { // Special method in Backbone
        console.log("validate: ")
        console.log(expense);

        if (expense.amount.length === 0) {
            return "Invalid amount";
        }
    }
});