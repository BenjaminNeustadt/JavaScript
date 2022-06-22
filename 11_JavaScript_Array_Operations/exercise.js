// Questions:

// 1.Declare a function checkLength that takes a phone number (as a string) as argument, 
// and returns true if this phone number contains 10 characters or less.

const numbers = ['1763687364','4763687363','7867867862', '123456789123','aaaaaaaabbbbbbbcccccdddddddd'];

const checkLength = (number) => {
  if (number.length > 10) {
    return (false);
  } else {
    return (true);
  }
}

const correctnumbers = numbers.filter(checkLength);

// const filterLongNumbers = (numbers, checkLength) => {
//   console.log(numbers.filter(checkLength));
// }  attempted with this

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}

filterLongNumbers(numbers);

// It works, if you input this into node, and you can change the array of numbers. 

// console.log(correctnumbers);





// 2.Now declare a function filterLongNumbers that takes an array of phone numbers. 
// This function should return only numbers that contain 10 characters or less. 
// It should make use of the function checkLength written previously.