class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    // console.log ('getName:', this.name);
    return this.name;
  }

  getPrice() {
    // console.log ('getName:', this.name);
    return this.price;
  }
}

module.exports = Candy;