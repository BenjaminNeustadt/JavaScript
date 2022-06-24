// let array = [1, 2, 3, 4, 5, 6, 7];

// let number = 8;

// const newArray = array.concat(number);

// console.log(newArray);

// const addToBatch = (array, number) => {
//   console.log;
// };

// challenge solution

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
};

console.log(addToBatch([1, 2, 3, 4], 8));

// array.concat(number);

// const addArray = (array) => {
//   array.concat(number);
// };

// console.log(addArray(array));

// const addToBatch = (arrayFunction, number) => {
//   console.log(array);
// };

// console.log(addToBatch(addArray, number));
