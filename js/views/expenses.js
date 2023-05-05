// Displays the collection

const ExpensesView = Backbone.View.extend({
    tagName: "div",
    id: "expenses",

    ASC_SYMBOL: "&#9660;", 
    DESC_SYMBOL: "&#9650;",

    template: _.template(`
        <div id="sort-actions">
            Sort:
            <a href="#/sort/date/<%= dateDirection %>" id="sort-date">
                Date <%= dateSymbol %>
            </a>
            <a href="#/sort/amount/<%= amountDirection %>" id="sort-amount">
                Amount <%= amountSymbol %>
            </a>
        </div>
    `),

    initialize() {
        this.listenTo(this.collection, "add sort", this.render);
    },

    render() {
        // this.el.innerHTML = ""; //Clears view before adding expenses
        const sortDirection = this.collection.sortDirection;
        const sortField = this.collection.sortField;

        const oppositeDirection = sortDirection === "asc" ? "desc" : "asc"; //Ternary op

        const isSortedByDate = sortField === "date";
        const isSortedByAmount = sortField === "amount";

        const dateDirection = isSortedByDate ? oppositeDirection : "desc";
        const amountDirection = isSortedByAmount ? oppositeDirection : "desc";

        this.el.innerHTML = this.template({
            dateDirection,
            amountDirection,

            dateSymbol: "",
            amountSymbol: this.ASC_SYMBOL,
        });

        this.collection.forEach( (expense) => {
            this.addExpense(expense);
        });
        return this;
    },

    addExpense(expense) {
        const expenseView = new SingleExpenseView({
            collection: this.collection,
            model: expense,
        });
        expenseView.render();

        this.$el.append(expenseView.el);
    }
});