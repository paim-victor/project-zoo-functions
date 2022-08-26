const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids
  .map((id) => data.species
    .find((species) => id === species.id));

module.exports = getSpeciesByIds;
