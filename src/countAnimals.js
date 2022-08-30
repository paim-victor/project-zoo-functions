const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species
      .reduce((acc, b) => { acc[b.name] = b.residents.length; return acc; }, {});
  }
  const { specie, sex } = animal;
  if (sex) {
    return data.species.find((nome) => nome.name === specie).residents
      .filter((sexo) => sexo.sex === sex).length;
  }
  return data.species.find((nome) => nome.name === specie).residents.length;
}

module.exports = countAnimals;
