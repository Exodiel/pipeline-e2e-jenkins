const calculator = require('../../src/calculator');

describe('Unit: Calculator Logic', () => {
  it('should add two numbers', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });
  it('should throw an error if inputs are not numbers', () => {
    expect(() => calculator.add('5', 5)).toThrow('Inputs must be numbers');
  });
});