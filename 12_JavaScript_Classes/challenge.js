

class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    console.log ('getName:', this.name);
    return this.name;
  }

  getPrice() {
    console.log ('getPrice:', this.price);
    return this.price;
  }

}

class ShoppingBasket {

  constructor (basket) {
    this.basket = []
  }


  getTotalPrice(basket) {
    if (!(this.basket)) {
      console.log(0);
    }else {
      const sum = (this.basket.map(n => n.getPrice()).reduce((p, i) => p + i));
      console.log(sum);
    }
  }
}

  // addItem(candy) {
  //   newbasket = this.basket.push();
  // }


const candy = new Candy('Mars', 4.99);

candy.getName();
candy.getPrice();



const basket = new ShoppingBasket();

basket.getTotalPrice();
// basket.addItem(candy);

// const basket = new ShoppingBasket([new Candy('Snickers', 1.5), new Candy('Bounty', 2)])

basket.getTotalPrice();

