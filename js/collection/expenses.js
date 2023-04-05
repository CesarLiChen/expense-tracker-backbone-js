// Backbone.js uses Collections a lot

const Expenses = Backbone.Collection.extend({
    model: Expense, // Kind of model it is expecting

    initialize() {
        this.on("add", this.add);
    },

    add() {
        alert("We have a new expense");
    }
});