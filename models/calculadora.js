function somar(numero1, numero2) {
  if (!_valorNumerico(numero1, numero2)) {
    return "Erro";
  }
  return numero1 + numero2;
}
exports.somar = somar;

function multiplicar(numero1, numero2) {
  if (!_valorNumerico(numero1, numero2)) {
    return "Erro";
  }
  return numero1 * numero2;
}
exports.multiplicar = multiplicar;

function dividir(numero1, numero2) {
  if (!_valorNumerico(numero1, numero2)) {
    return "Erro";
  }
  if (numero2 === 0) {
    return "Não é possível dividir por zero";
  }
  return numero1 / numero2;
}
exports.dividir = dividir;

function _valorNumerico(...numeros) {
  for (const numero of numeros) {
    if (typeof numero !== "number") {
      return false;
    }
  }
  return true;
}
