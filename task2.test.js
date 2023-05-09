const reverseString = require('./task2');

it('Reverse string', () => {
  // Arrange
  const var1 = 'abcde';

  // Act
  const result = reverseString(var1);

  // Assert
  expect(result).toBe('edcba');
});
