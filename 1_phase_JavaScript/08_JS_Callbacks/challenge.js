

let counter = 0

const increment = () => {
  console.log(counter);
  counter ++;

  if (counter === 11)
  {
    clearInterval(counting)
  }
  }

  // the if statement here is what we use to clear the
  // continuous counter, in order to do so we create a new function: 
  // const counting, and place the native function setInterval inside of it
  // We are then able to tell setInterval that it should stop if counter === 11. 
  // We put 11 and not 10, because the counter is using each output (including 0)
  // as a counted output. 0, is not the integer 0 but an output of 0.


const counting = (setInterval(increment, 1000));



// NOTES: 

// function and const are the same thing but the syntax is different. 
// E.g. you cannot write: 

// function increment = () => {
//   [stuff inside]
// }

// BUT, you can write: 

// const increment = () => {
//   [stuff inside]
// }


// CF. Part 7 (end), before this challenge for details on  syntax


// NOTES talen on annotation, before solution: 

// function counter() {
//   let i = 0
//   while (i <= 60) {
//     console.log(i);
//     i++;
//   }
// }

// setInterval(5, counter);


// function numbercount() {
//   let i = 0
//   while (i <= 10) {
//     console.log(i);
//     i += 1;
//   }
// }