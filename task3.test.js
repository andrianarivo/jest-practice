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

describe('subtract', () => {
  it('positive numbers', () => {
    const a = 1;
    const b = 1;

    const result = calculator.subtract(a, b);

    expect(result).toBe(0);
  });
  it('negative numbers', () => {
    const a = -1;
    const b = -1;

    const result = calculator.subtract(a, b);

    expect(result).toBe(0);
  });
  it('mixed numbers', () => {
    const a = 1;
    const b = -1;

    const result = calculator.subtract(a, b);

    expect(result).toBe(2);
  });
});

describe('multiply', () => {
  it('positive numbers', () => {
    const a = 1;
    const b = 1;

    const result = calculator.multiply(a, b);

    expect(result).toBe(1);
  });
  it('negative numbers', () => {
    const a = -1;
    const b = -1;

    const result = calculator.multiply(a, b);

    expect(result).toBe(1);
  });
  it('mixed numbers', () => {
    const a = 1;
    const b = -1;

    const result = calculator.multiply(a, b);

    expect(result).toBe(-1);
  });
});

describe('divide"', () => {
  it('positive numbers', () => {
    const a = 1;
    const b = 1;

    const result = calculator.divide(a, b);

    expect(result).toBe(1);
  });
  it('negative numbers', () => {
    const a = -1;
    const b = -1;

    const result = calculator.divide(a, b);

    expect(result).toBe(1);
  });
  it('mixed numbers', () => {
    const a = 1;
    const b = -1;

    const result = calculator.divide(a, b);

    expect(result).toBe(-1);
  });
});
