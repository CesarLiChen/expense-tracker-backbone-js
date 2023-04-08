// Backbone.js uses Collections a lot

const Expenses = Backbone.Collection.extend({
    model: Expense, // Kind of model it is expecting

    initialize() {
        this.addFromDB();

        this.on("add", this.addToDB);
    },

    addToDB(expense) {
        console.log(expense)
        const id = expense.get("id");

        localStorage.setItem(id, JSON.stringify(expense));
    },

    addFromDB() {
        for (let id in localStorage) {
            const expenseData = JSON.parse(localStorage.getItem(id)); // Turns it back into a JavaScript object
            console.log(expenseData);

            const expense = new Expense(expenseData);
            this.add(expense);
        }
    }
});