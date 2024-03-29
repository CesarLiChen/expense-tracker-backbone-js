console.log("form")

const FormView = Backbone.View.extend({
    tagName: "form",
    id: "new-expense-form",

    events: {
        "reset": "hideError",
        "submit": "addNewExpense",
    },

    render() {
        // By default Backbone's elements are <div>
        this.el.innerHTML = this.markup;
        return this;
    },

    addNewExpense(event) {
        event.preventDefault();

        // description refers to the name="" in <input>
        const description = this.el.description.value;
        const date = this.el.date.value;
        const amount = this.el.amount.value;

        const expense = new Expense({
            description, //same as 'description: description' in ES6
            date,
            amount,
        }, {
            validate: true,
        });

        console.log(expense);

        if (expense.validationError) {
            this.renderError(expense.validationError);
        } else {
            this.hideError();
            this.collection.add(expense);
            this.el.reset();
        }

        console.log(description, date, amount);
    },

    renderError(error) {
        this.$(".error").text(error).removeClass("hidden");
    },

    hideError() {
        this.$(".error").addClass("hidden");
        console.log(this.$(".error"));
    },

    markup: `
        <div class="row">
            <div class="form-group">
                <label for="description">Description</label>
                <input id="description" name="description" type="text" placeholder="Electronics">
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label for="date">Date</label>
                <input id="date" name="date" type="text" placeholder="yyyy-mm-dd">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input id="amount" name="amount" type="text" placeholder="29.98">
            </div>
        </div>

        <div class="form-actions">
            <button type="reset">Cancel</button>
            <button type="submit">Save</button>
        </div>

        <div class="error hidden"></div>
    `,
});