const SingleExpenseView = Backbone.View.extend({
    tagName: "div",
    className: "expense",

    // Event: click on an obj with class "delete"
    events: {
        "click .delete": "removeExpense"
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
            <button class="delete">Delete</button>
        </div>
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
    }
});