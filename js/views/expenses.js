// Displays the collection

const ExpensesView = Backbone.View.extend({
    tagName: "div",
    id: "expenses",

    initialize() {
        this.listenTo(this.collection, "add", this.render);
    },

    render() {
        this.el.innerHTML = this.collection.length;
        return this;
    }
});