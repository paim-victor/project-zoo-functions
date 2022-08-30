const data = require('../data/zoo_data');

function getEmployeeByName(nome) {
  const funcionario = data.employees
    .filter((a) => a.firstName === nome || a.lastName === nome)[0];
  if (funcionario === undefined) return {}; return funcionario;
}

module.exports = getEmployeeByName;
