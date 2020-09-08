function findUserByName(array, name) {
  return array.find((user) => user.name.toLowerCase() === name.toLowerCase());
}

function getAvreageAge(array) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    res += array[i].age;
  }
  return res / array.length;
}

module.exports = {
  findUserByName,
  getAvreageAge,
};
