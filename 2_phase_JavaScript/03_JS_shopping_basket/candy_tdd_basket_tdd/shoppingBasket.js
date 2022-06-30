const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.basket = []
    this.discount = 0
  }
  
  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice(basket) {
    if ((this.basket).length === 0) {
      return 0;
    }else {
      const sum = (this.basket.map(n => n.getPrice()).reduce((p, i) => p + i));
    return sum - this.discount;
    }
  }

  // getTotalPrice() {
  //   let totalPrice = 0;
  //   this.basket.forEach((n) => {
  //     totalPrice += n.getPrice();
  //   });

  

  addItem(candy) {
    this.basket.push(candy)
  }

}

module.exports = ShoppingBasket;

const basket = new ShoppingBasket()
basket.addItem(new Candy('Mars', 3.99))
basket.applyDiscount(1)
console.log(basket.getTotalPrice())