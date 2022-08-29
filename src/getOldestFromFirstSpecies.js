const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let pessoa = employees.find((especie) => id === especie.id);
  let especieId = pessoa.responsibleFor[0];
  let primeira = data.species.find((especies) => especieId === especies.id);
  let residentes = primeira.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(residentes);
}

module.exports = getOldestFromFirstSpecies;
