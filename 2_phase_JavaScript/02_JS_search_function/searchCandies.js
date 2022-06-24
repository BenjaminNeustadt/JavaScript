class SearchCandies {

  constructor(candies) {
    this.candies = candies
  };

  getNames() {
    // console.log(this.candies.map(n => n.name));
    return(this.candies.map(n => n.name));
   
  };

}

// const candies = [
//   { name: 'Aero', price: 1.99 },
//   { name: 'Skitties', price: 2.99 },
//   { name: 'Mars', price: 1.49 }
// ];

// const searchcandies = new searchCandies(candies);


// searchcandies.getNames();

module.exports = SearchCandies;