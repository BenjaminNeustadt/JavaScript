

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
    if ((this.basket).length === 0) {
      console.log('this is if basket empty:', 0);
    }else {
      const sum = (this.basket.map(n => n.getPrice()).reduce((p, i) => p + i));
      console.log('The total expense:', sum);
    }
  }


  addItem(candy) {
    this.basket.push(candy);
    console.log('What is this:', this.basket);
  }
}



const candy = new Candy('Mars', 4.99);

candy.getName();
candy.getPrice();



const basket = new ShoppingBasket();

basket.addItem(candy);

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

basket.getTotalPrice();









// const basket = new ShoppingBasket([new Candy('Snickers', 1.5), new Candy('Bounty', 2)])


