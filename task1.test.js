const stringLength = require('./task1');

it('Length is of string', () => {
  const var1 = '1234';
  expect(stringLength(var1)).toBe(4);
});

it('Length is more than one', () => {
  const var1 = '';
  expect(() => stringLength(var1)).toThrow(/too small/);
});

it('Length is less than ten', () => {
  const var1 = '0123456789a';
  expect(() => stringLength(var1)).toThrow(/too long/);
});
