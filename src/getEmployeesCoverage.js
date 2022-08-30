const data = require('../data/zoo_data');

const semParametro = () => {
  const animaisID = (id, parametro) => id.map((animal) => (data.species
    .find((elemento) => elemento.id === animal))[parametro]);
  const todos = data.employees.map((valor) => {
    const informacoes = { id: valor.id };
    informacoes.fullName = `${valor.firstName} ${valor.lastName}`;
    informacoes.species = animaisID(valor.responsibleFor, 'name');
    informacoes.locations = animaisID(valor.responsibleFor, 'location'); return informacoes;
  }); return todos;
};
const getEmployeesCoverage = (pessoa) => {
  if (!pessoa) return semParametro(); const empregado = semParametro()
    .find((valor) => valor.fullName.includes(pessoa.name) || valor.id === pessoa.id);
  if (empregado) return empregado; throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
