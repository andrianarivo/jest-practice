const capitalize = (str) => {
  const arr = str.split(' ');
  const newArr = [];
  arr.forEach((word) => {
    newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return newArr.join(' ');
};

module.exports = capitalize;
