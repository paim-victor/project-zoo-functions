const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionario = data.employees
    .filter((a) => a.firstName === employeeName || a.lastName === employeeName)[0];
  if (funcionario === undefined) return {}; return funcionario;
}

module.exports = getEmployeeByName;
