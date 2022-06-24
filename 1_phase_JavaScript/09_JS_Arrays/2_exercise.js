const numbers = [1, 2, 10, 10]

// numbers.sum
// numbers.forEach(n => console.log(n));

// const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// WORKS (our solution): WITH 'REDUCE'
// console.log(
//   numbers.reduce((a, b) => a + b)
// )


// WHAT IS THE DIFFERENCE BETWEEN `forEach` and `reduce`? 

// counter = 0 

// console.log(
//   numbers.forEach( n => (counter += n)
// )

// numbers.forEach((n) => {
//   console.log(n);
// })

// const iterateFunction = (n) => {
//   console.log(n);
// }


// EXAMPLE SOULTION (with 'forEach'):

let sum = 0; 

numbers.forEach((n) => {
  sum += n
});

console.log(sum)