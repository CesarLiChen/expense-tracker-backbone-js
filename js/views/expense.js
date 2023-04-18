const SingleExpenseView = Backbone.View.extend({
    tagName: "div",
    className: "expense",

    // Event: click on an obj with class "delete"
    events: {
        "click .delete": "removeExpense",
        "click .edit": "setExpenseEditable",
    },

    // Templates with Underscore.js
    template: _.template(`
        <div class="field">
            <h2><%= description %></h2>
        </div>    
        
        <div class="field">
            <h2><%= date %></h2>
        </div>

        <div class="field">
            <h2><%= amount %></h2>
        </div>

        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `),

    formTemplate: _.template(`
        <form class="edit-expense-form">
            <input type="text" name="description" value="<%= description %>" />
            <input type="text" name="date" value="<%= date %>" />
            <input type="text" name="amount" value="<%= amount %>" />

            <button type="reset">Cancel</button>
            <button type="submit">Save</button>
        </form>
    `),

    render() {
        const model = this.model.toJSON();
        console.log(this);

        this.el.innerHTML = this.template(model);
        return this;
    },

    removeExpense() {
        this.collection.remove(this.model); // remove is built-in from Backbone
        this.remove(); //Function from Backbone.js
    },

    setExpenseEditable() {
        this.el.innerHTML = this.formTemplate(this.model.toJSON());
    }
});