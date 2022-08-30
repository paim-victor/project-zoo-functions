const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.some((manager) => manager.managers.includes(id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((empregados) => empregados.managers.includes(managerId))
    .map((empregados) => `${empregados.firstName} ${empregados.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
