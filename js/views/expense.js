const SingleExpenseView = Backbone.View.extend({
    tagName: "div",
    className: "expense",

    render() {
        this.el.innerHTML = "Expense";
        return this;
    }
});