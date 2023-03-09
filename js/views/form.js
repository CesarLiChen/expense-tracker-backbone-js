console.log("form")

const FormView = Backbone.View.extend({
    render() {
        // By default Backbone's elements are <div>
        this.el.innerHTML = "Hello";
        return this;
    }
})