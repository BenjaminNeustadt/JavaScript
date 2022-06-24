// Exercise
// An object is composed of key-values pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// 2_Question:

// Print the value of the city attribute ('London').
// Answer:
console.log(person.address['city']);
//OR, this works also: 
console.log(person.address.city)

// 1_Question:

// Print the value of the second hobbies value ('tennis').
// console.log(person.hobbies[1]);
// Answer:
console.log(person.london.city);