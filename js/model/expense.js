const Expense = Backbone.Model.extend({

    // initialize method only tells us when something is created.
    
    initialize() {
        console.log("I'm a new expense")

        if (!this.get("id")) {
            this.set("id", this.generateId());
        }

        this.formatProperties();
    },
    
    formatProperties() {
        this.formatAmount();
    },

    formatAmount() {
        let amount = this.get("amount");
        console.log(amount);
        if (amount.indexOf("$") === 0) {
            amount = amount.substring(1);
        }

        let [dollars, cents] = amount.split("."); //ES6 special format
        if (dollars. length === 0) {
            dollars = "0";
        }
        if (!cents || cents.length === 0) {
            cents = "00";
        }
        if (cents && cents.length === 1) {
            cents += "0";
        }
        
        this.set("amount", `${dollars}.${cents}`);
    },

    generateId() {
        return new Date().getTime();
    },

    validate(expense) { // Special method in Backbone
        console.log("validate: ")
        console.log(expense);
        return this.validateAmount(expense.amount) ||
            this.validateDate(expense.date);
       
    },

    validateAmount(amount) {
        if (amount.length === 0 || !amount.match(/^\$?(\d*)(\.\d{0,2})?$/)) {
            return "Invalid amount";
        }
    },

    validateDate(date) {
        if (!date.match(/^\d{4}-\d{1,2}-\d{1,2}$/) || isNaN(Date.parse(date))) {
            return "Invalid date";
        }
    }
});