// Backbone.js uses Collections a lot

const Expenses = Backbone.Collection.extend({
    model: Expense, // Kind of model it is expecting

    initialize() {
        this.on("add", this.addToDB);
    },

    addToDB(expense) {
        console.log(expense)
        const id = expense.get("id");

        localStorage.setItem(id, JSON.stringify(expense));
    }
});