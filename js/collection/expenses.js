// Backbone.js uses Collections a lot

const Expenses = Backbone.Collection.extend({
    model: Expense, // Kind of model it is expecting

    initialize() {
        this.addFromDB();

        this.on("add", this.addToDB);
        this.on("remove", this.removeFromDB);
    },

    addToDB(expense) {
        console.log(expense)
        const id = expense.get("id");

        localStorage.setItem(id, JSON.stringify(expense));
    },

    addFromDB() {
        // let ids = Object.keys(localStorage)
        // for (let id of ids) {
        //     const expenseData = JSON.parse(localStorage.getItem(id)); // Turns it back into a JavaScript object
        //     console.log(expenseData);

        //     const expense = new Expense(expenseData);
        //     this.add(expense);
        // }

        Object.keys(localStorage).forEach((id) => {
            const expenseData = JSON.parse(localStorage.getItem(id)); // Turns it back into a JavaScript object
            // console.log(expenseData);

            const expense = new Expense(expenseData);
            this.add(expense);
        });
    },

    removeFromDB(expense) {
        console.log(expense);
        const id = expense.get("id");

        localStorage.removeItem(id)
    },

    changeSort(sortProperties) {
        const field = sortProperties.field;
        const direction = sortProperties.direction;

        console.log(field, direction, " FROM COLLECTION ")
    }
});