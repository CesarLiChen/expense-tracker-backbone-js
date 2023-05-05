const Expense = Backbone.Model.extend({

    // initialize method only tells us when something is created.
    
    initialize() {
        this.on("change", this.formatProperties);
        console.log("I'm a new expense")

        if (!this.validationError) {
            if (!this.get("id")) {
                this.set("id", this.generateId());
            }

            this.formatProperties();
        }
    },
    
    formatProperties() {
        this.formatAmount();
        this.formatDate();
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

    formatDate() {
        const date = this.get("date");

        let [year, month, day] = date.split("-");
        console.log(year, month, day)
        if (month.length === 1) {
            month = "0" + month;
        }
        if (day.length === 1) {
            day = "0" + day;
        }

        const formattedDate = [year, month, day].join("-");

        this.set("date", formattedDate);
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