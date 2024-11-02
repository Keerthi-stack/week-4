const numbers = [1, 2, 3, 4, 5];
const sumOfOdds = numbers
    .filter(num => num % 2 !== 0) 
    .reduce((sum, num) => sum + num, 0); 

console.log("Sum of odd numbers:", sumOfOdds);