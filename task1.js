const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw Error('String too small or too long');
};

module.exports = stringLength;
