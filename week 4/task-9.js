function square(num) {
    return num * num;
}
console.log("Square (declaration):", square(5));

// Function Expression
const squareExpression = function(num) {
    return num * num;
};
console.log("Square (expression):", squareExpression(5)); 

// Arrow Function
const squareArrow = (num) => num * num;
console.log("Square (arrow):", squareArrow(4));