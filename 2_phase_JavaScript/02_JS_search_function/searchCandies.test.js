const { isTypedArray } = require('util/types')
const searchCandies = require('./searchCandies')



describe('searchCandies', () => {

  it('returns all names', () => {
    expect(searchCandies.names(candies)).toBe('Aero', 'Skitties', 'Mars');
  });
});









// const candies = [
//   { name: 'Aero', price: 1.99 },
//   { name: 'Skitties', price: 2.99 },
//   { name: 'Mars', price: 1.49 }
// ];

//   { name: 'Maltesers', price: 3.49 },
//   { name: 'Skittles', price: 1.49 },
//   { name: 'Starburst', price: 5.99 },
//   { name: 'Ricola', price: 1.99 },
//   { name: 'Polkagris', price: 5.99 },
//   { name: 'Pastila', price: 4.99 },
//   { name: 'Mentos', price: 8.99 },
//   { name: 'Raffaello', price: 7.99 },
//   { name: 'Gummi bears', price: 10.99 },
//   { name: 'Fraise Tagada', price: 5.99 }
// ];





// // 2_Question:

// // Print the value of the city attribute ('London').
// // Answer:
// console.log(person.address['city']);
// //OR, this works also: 
// console.log(person.address.city)

// // 1_Question:

// // Print the value of the second hobbies value ('tennis').
// // console.log(person.hobbies[1]);
// // Answer:
// console.log(person.london.city);