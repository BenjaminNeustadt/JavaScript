

class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    // console.log(`${this.name}`);
    return(`${this.name}`);
  }

  getPrice() {
    // console.log(`${this.price}`);
    return(`${this.price}`);
  }

}

const candy = new Candy('Mars', 4.99);

candy.getName();

candy.getPrice();


class ShoppingBasket {

  constructor (basket) {
    this.basket = basket
  }

  getTotalPrice(basket) {
    let sum = 0;
    return (this.basket.map(n => sum += n.getPrice()));
    console.log(sum);
  }
}

const basket = new ShoppingBasket([new Candy('Snickers', 1.5), new Candy('Bounty', 2)])
basket.getTotalPrice();

// getNames(users) {
//   console.log (this.users.map((element) => { 
//     return (element.getName()) 
//   }))
// } 

// console.log(element.getPrice())
