// function fizzBuzz(n) {
//   for (let i = 0 ; i <= n ; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//       return 'Fizzbuzz'
//     }else if (i % 3 === 0){
//       return 'Fizz'
//     }else if(i % 5 === 0){
//       return 'Buzz'
//     }else {
//       return i
//     }
//   }
// }

// #SOLUTION (Use the 'while loop'):

module.exports = fizzBuzzUntil;

function fizzBuzzUntil(n) {
  let i = 0
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log('Fizzbuzz')
    }else if (i % 3 === 0){
      console.log('Fizz')
    }else if (i % 5 === 0){
      console.log('Buzz')
    }else {
      console.log(i)
    }
    i += 1;
  }
}


