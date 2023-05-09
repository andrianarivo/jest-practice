const capitalize = require('./task4');

it('Capitalize word', () => {
  const str = 'uncapitalized';

  const result = capitalize(str);

  expect(result).toBe('Uncapitalized');
});

it('Capitalize sentence', () => {
  const str = 'uncapitalized uncapitalized';

  const result = capitalize(str);

  expect(result).toBe('Uncapitalized Uncapitalized');
});
