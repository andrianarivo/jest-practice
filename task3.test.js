const calculator = require('./task3');

describe('addition', () => {
  it('positive numbers', () => {
    const a = 1;
    const b = 1;

    const result = calculator.add(a, b);

    expect(result).toBe(2);
  });
  it('negative numbers', () => {
    const a = -1;
    const b = -1;

    const result = calculator.add(a, b);

    expect(result).toBe(-2);
  });
  it('mixed numbers', () => {
    const a = 1;
    const b = -1;

    const result = calculator.add(a, b);

    expect(result).toBe(0);
  });
});
