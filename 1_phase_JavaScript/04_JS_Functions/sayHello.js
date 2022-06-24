const sayHello = (a) => {
  console.log(`Hello ${a}`);
}       

module.exports = sayHello;

// Above is another way of writing the simpe concantenation: console.log('Hello' + a)

// Also another way of writing the function [Hafiz pointer]: 

// ```
// function sayHello(a){
//   console.log(`Hello ${a}`)            $ is similar to # in RUBY
// }
// ```


// Debugging question

// Your colleague is trying to call the function sayHello and print its result using console.log — however, it doesn't work as expected: why? 
// Make the fix so it prints the return value of the function, as expected.

// console.log(sayHello);


// SOLUTION:

// No parenthesis, along with sayHello, like so:

// sayHello()

// The parenthesis is what makes it a method. 

// # EXERCISE

// Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah') displays a personalised message:

// > sayHello('Sarah');
// 'Hello Sarah'
// Bonus: can you find another way to write the sayHello function, without using the sign + to concatenate the strings?

// > sayHello();
// 'Hello'

