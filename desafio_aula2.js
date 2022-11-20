/*
Faça um programa para calcular o calor de gasto de combustível em uma viagem;

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da Gasolina;
3 - O tipode combustível que está no seu carro;
4 - Valor médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor gasto de comustível para realizar a viagem.
*/

//Declaração das Variaveis

const tipoCombustivel = 'gasolina';

const precoEtanol = 3.49;
const precoGasolina = 4.98;
const mediaConsumoCarro = 13;
const distanciaEmKm = 247;

const ConsumoPordistancia = distanciaEmKm / mediaConsumoCarro;

const custoGasolina = precoGasolina * ConsumoPordistancia;
const custoEtanol = precoEtanol * ConsumoPordistancia;

if (tipoCombustivel === 'gasolina') {

    console.log('O valor de combustível para a viagem usando Gasolina é de:');
    console.log(custoGasolina.toFixed(2));

} else if (tipoCombustivel === 'etanol') {

    console.log('O valor de combustível para a viagem usando Etanol é de:');
    console.log(custoEtanol.toFixed(2));

} else {

    console.log('Tipo de combustível invalido. Informe novamente.')
}



