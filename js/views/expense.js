const SingleExpenseView = Backbone.View.extend({
    tagName: "div",
    className: "expense",

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
    `),

    render() {
        const model = this.model.toJSON();
        console.log(this);

        this.el.innerHTML = this.template(model);
        return this;
    }
});