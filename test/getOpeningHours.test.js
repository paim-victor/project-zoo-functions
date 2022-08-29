const getOpeningHours = require('../src/getOpeningHours');

const fechado = 'The zoo is closed';
const aberto = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  test('Teste caso não seja passado nenhum parametro, retorne todos os dias de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Teste caso segunda-feira seja usado como parametro, retorna que o zoologico não abre', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(fechado);
  });
  test('Teste caso terça-feira às 9hrs am seja usado como parametro, retorna que o zoologico está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(aberto);
  });
  test('Teste caso segunda-feira às 12hrs am seja usado como parametro, retorna que o zoologico esta fechado', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toEqual(fechado);
  });
  test('Teste caso quarta-feira às 12hrs pm seja usado como parametro, retorna que o zoologico está aberto', () => {
    expect(getOpeningHours('Wednesday', '12:00-PM')).toEqual(aberto);
  });
  test('Teste caso quarta-feira às 9hrs pm seja usado como parametro, retorna que o zoologico está fechado', () => {
    expect(getOpeningHours('Wednesday', '9:00-PM')).toEqual(fechado);
  });
  test('Teste caso o formato do horário esta incorreto', () => {
    expect(getOpeningHours('Sunday', 'X9:00-PM')).toThrowError(new Error('The hour should represent a number'));
  });
});
