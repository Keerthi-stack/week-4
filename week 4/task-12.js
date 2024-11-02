const person = {
    name: "Alice",
    age: 30,
    introduce: function() {
        console.log(`Hi, I'm ${this.name}.`);
    }
};
person.introduce();