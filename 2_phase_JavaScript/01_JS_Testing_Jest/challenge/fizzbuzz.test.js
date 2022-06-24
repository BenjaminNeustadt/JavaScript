const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('returns Fizz for multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz for a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz for multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns number if not multiple of 3, 5, or 15', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
