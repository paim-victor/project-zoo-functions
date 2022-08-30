const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((a) => a.name === animal).residents
  .every((b) => b.age > age);

module.exports = getAnimalsOlderThan;
