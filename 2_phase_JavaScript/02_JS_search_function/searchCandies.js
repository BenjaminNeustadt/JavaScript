  const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 },
  { name: 'Mad Max', price: 10.99 },

  ];

const searchCandies = (string, max) => {
  return candies.filter(n => n.price < max)
    .filter(n => n.name.includes(string.charAt(0).toUpperCase() + string.slice(1)))
    .map(n => n.name);
}
//ANOTHER WAY TO CAPITALIZE THE FIRST CHARACTER OF THE STRING (instead of ".charAt(0)[...]"):
// .replace(/(^\w|\s\w)/g, m => m.toUpperCase()))

//console.log(searchCandies('Ma', 10))

module.exports = searchCandies;

