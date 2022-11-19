/*
Faça um programa para calcular o calor de gasto de combustível em uma viagem;

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível;
2 - Valor médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor gasto de comustível para realizar a viagem.ss
*/

const precoCombustivel = 4.89;
const kmPorLitro = 11;
const DistanciaEmkm = 230;

const DistanciaPeloConsumo = DistanciaEmkm / kmPorLitro
const ValorGasto = DistanciaPeloConsumo * precoCombustivel

console.log('O gasto de combustivel para a viagem sera:')
console.log(ValorGasto.toFixed(2));

// Nota: Foi utilizado o ".toFixed" para fazer o arredondamento;