const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });
  test('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('Retorna undefined caso não seja passado argumentos a função', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants('Paim')).toBeNull();
  });
  test('Caso o argumento seja diferente de uma string, deve retornar a string `Parâmetro inválido, é necessário uma string` ', () => {
    expect(handlerElephants(10)).toHaveReturned('Parâmetro inválido, é necessário uma string');
  });
});
