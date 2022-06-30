const searchCandies = require('./searchCandies')


describe('searchCandies', () => {
  it('searchCandies returns names and prices', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  })

  it('searchCandies returns names and prices', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars']);
  })

  it('searchCandies returns names and prices', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  })

  it('searchCandies returns names and prices', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  })

  it('searchCandies returns names and prices the same with lowercase inputs', () => {
    expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  })

})
