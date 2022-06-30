class ShoppingBasket {
  constructor(basket) {
    this.basket = []
  }

  getTotalPrice(basket) {
    if ((this.basket).length === 0) {
      return 0;
    }else {
      const sum = (this.basket.map(n => n.getPrice()).reduce((p, i) => p + i));
      return sum
    }
  }

  addItem(candy) {
    this.basket.push(candy)
  }
}

module.exports = ShoppingBasket;