const ExpensesRouter = Backbone.Router.extend({
    routes: {
        "sort/:field": "sort",
        "sort/:field/:direction": "sort",
    },

    initialize(collection) {
        this.collection = collection;
    },

    sort(field, direction) {
        console.log("I'm routing OVAH HEAH");

        if (direction === null) {
            direction = "desc";
        }

        this.collection.changeSort({
            field,
            direction,
        });
    }
});