const calculadora = require("../models/calculadora");

// Testes da função somar()
test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("somar 5 + 'banana' deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("Erro");
});

test("somar null + undefined deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(null, undefined);
  expect(resultado).toBe("Erro");
});

test("passar um único argumento na função multiplicar deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(6);
  expect(resultado).toBe("Erro");
});

// Testes da função multiplicar()
test("multiplicar 3 * 3 deveria retornar 9", () => {
  const resultado = calculadora.multiplicar(3, 3);
  expect(resultado).toBe(9);
});

test("multiplicar 5 * 0 deveria retornar 0", () => {
  const resultado = calculadora.multiplicar(5, 0);
  expect(resultado).toBe(0);
});

test("multiplicar 'banana' * 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.multiplicar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("multiplicar 5 * 'banana' deveria retornar 'Erro'", () => {
  const resultado = calculadora.multiplicar(5, "banana");
  expect(resultado).toBe("Erro");
});

test("multiplicar null * undefined deveria retornar 'Erro'", () => {
  const resultado = calculadora.multiplicar(null, undefined);
  expect(resultado).toBe("Erro");
});

test("passar um único argumento na função multiplicar deveria retornar 'Erro'", () => {
  const resultado = calculadora.multiplicar(6);
  expect(resultado).toBe("Erro");
});

// Testes da função dividir()
test("dividir 5 / 5 deveria retornar 1", () => {
  const resultado = calculadora.dividir(5, 5);
  expect(resultado).toBe(1);
});

test("dividir 25 / 5 deveria retornar 1", () => {
  const resultado = calculadora.dividir(25, 5);
  expect(resultado).toBe(5);
});

test("dividir 5 / 25 deveria retornar 1", () => {
  const resultado = calculadora.dividir(5, 25);
  expect(resultado).toBe(0.2);
});

test("dividir 5 / 0 deveria retornar 'Não é possível dividir por zero'", () => {
  const resultado = calculadora.dividir(5, 0);
  expect(resultado).toBe("Não é possível dividir por zero");
});

test("dividir 0 / 5 deveria retornar 0", () => {
  const resultado = calculadora.dividir(0, 5);
  expect(resultado).toBe(0);
});

test("dividir 'banana' / 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.dividir("banana", 100);
  expect(resultado).toBe("Erro");
});

test("dividir 5 / 'banana' deveria retornar 'Erro'", () => {
  const resultado = calculadora.dividir(5, "banana");
  expect(resultado).toBe("Erro");
});

test("dividir null / undefined deveria retornar 'Erro'", () => {
  const resultado = calculadora.dividir(null, undefined);
  expect(resultado).toBe("Erro");
});

test("passar um único argumento na função dividir deveria retornar 'Erro'", () => {
  const resultado = calculadora.dividir(6);
  expect(resultado).toBe("Erro");
});
