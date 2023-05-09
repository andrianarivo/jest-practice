const stringLength = require('./task1');

it('Length is of string', () => {
  // Arrange
  const var1 = '1234';

  // Act
  const result = stringLength(var1);

  // Assert
  expect(result).toBe(4);
});

it('Length is more than one', () => {
  // Arrange
  const var1 = '';

  // Assert
  expect(() => stringLength(var1)).toThrow(/too small/);
});

it('Length is less than ten', () => {
  // Arrange
  const var1 = '0123456789a';

  // Assert
  expect(() => stringLength(var1)).toThrow(/too long/);
});
