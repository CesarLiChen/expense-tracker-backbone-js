const Expense = Backbone.Model.extend({

    // initialize method only tells us when something is created.
    
    initialize() {
        console.log("I'm a new expense")
        this.set("id", this.generateId())
    },
    
    generateId() {
        return new Date().getTime();
    }
});