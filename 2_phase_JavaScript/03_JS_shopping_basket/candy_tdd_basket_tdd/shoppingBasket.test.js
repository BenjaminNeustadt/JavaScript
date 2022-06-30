const ShoppingBasket = require('./shoppingBasket');

describe('basket', () => {
  xit('returns 0 when getTotalPrice() is called and basket is empty', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
  })

  xit('returns price when item added getTotalPrice()', () => {
    const basket = new ShoppingBasket();
    let candy = { getName: () => 'Haribo', getPrice: () => 4.99 };
    basket.addItem(candy)
    expect(basket.getTotalPrice()).toEqual(4.99)
  })

  xit('returns price when multiple items added getTotalPrice()', () => {
    const basket = new ShoppingBasket();
    let candy_1 = { getPrice: () => 4.99 };
    let candy_2 = { getName: () => 'Skittle', getPrice: () => 3.99 };
    basket.addItem(candy_1)
    basket.addItem(candy_2)
    basket.addItem(candy_2)
    expect(basket.getTotalPrice()).toEqual(12.97)
  })

  it('returns price minus discount with applyDiscount()', () => {
    const basket = new ShoppingBasket();
    const candy_2 = { getName: () => 'Skittle', getPrice: () => 3.99 };
    // let discount = { applyDiscount: () => 2}
    basket.addItem(candy_2)
    basket.applyDiscount(1)
    expect(basket.getTotalPrice()).toEqual(2.99)
  })
})







// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97

// - - - - - - - - - - - - - - -

// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'             DONE
// > candy.getPrice();
// 4.99               DONE

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();              DONE
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();              DONE
// 4.99

// - - - - - - - - - - - - - - - - - - -


// describe('basket', () => {
//   it('returns the total price when getTotalPrice() is called', () => {
//     const basket = new ShoppingBasket();
//     const candy = { getName: () => 'Mars', getPrice: () => 4 };
//     const basket.add(candy) 
//     expect(basket.getTotalPrice()).toEqual(4)
//   })
// })

