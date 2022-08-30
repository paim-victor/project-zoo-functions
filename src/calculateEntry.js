const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const valorEntrada = {
    child: (entrants.filter((cliente) => cliente.age < 18)).length,
    adult: (entrants.filter((cliente) => cliente.age < 50 && cliente.age >= 18)).length,
    senior: (entrants.filter((cliente) => cliente.age >= 50)).length,
  }; return valorEntrada;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const todos = countEntrants(entrants);
  let dinheiro = 0;
  dinheiro += todos.adult * data.prices.adult;
  dinheiro += todos.child * data.prices.child;
  dinheiro += todos.senior * data.prices.senior; return dinheiro;
}

module.exports = { calculateEntry, countEntrants };
