//Challenge

// Let's go back to our candy promotion texts. 
// Your friend now wants to have a specific discount percentage for each customer. 
// After processing the list you're given, you end up with the following array:


//    Questions:
// 1. Modify the function generateMessages so it uses this new structure 
  // and write the correct discount percentage in each message.
  // Once your function is written, you should be able to type 
  // the following code and have the exact same output:

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];


const generateMessages = (names) => {
  return names.map((n) => 'Hi ' + n.name + '! ' + n.discount + '% off our best candies for you today!');
}

//NOTE: the argument called names, does not need to be the same as the function given previously.

//OUTPUT in node: 

// > generateMessages(namesAndDiscounts);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 40% off our best candies for you today!',
//   'Hi Josh! 30% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 60% off our best candies for you today!'
// ]
// > 


