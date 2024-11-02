const personWithThis = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
personWithThis.greet();