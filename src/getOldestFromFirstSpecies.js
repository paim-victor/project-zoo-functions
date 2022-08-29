const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.find((especie) => id === especie.id);
  const especieId = pessoa.responsibleFor[0];
  const primeira = data.species.find((especies) => especieId === especies.id);
  const residentes = primeira.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(residentes);
}

module.exports = getOldestFromFirstSpecies;
