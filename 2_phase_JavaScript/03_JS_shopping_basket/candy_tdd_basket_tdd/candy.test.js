const Candy = require('./candy');

describe('candy', () => {
  it('returns the name when getName is called on candy', () => {
    const candy = new Candy('Mars', 4)
    // const candy = { getName: () => 'Mars' };
    expect(candy.getName()).toEqual('Mars')
  });

  it('returns price when getPrice() is called', () => {
    const candy = new Candy('Mars', 4)
    // const candy = { getPrice: () => 4 };
    expect(candy.getPrice()).toEqual(4)
  });
});

