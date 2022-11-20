// -----------------------------------------------------------------
// Estruturas Condicionais
// -----------------------------------------------------------------

// NOTA: Como declarar Boleanos

// Exemplos:
//const camisetaAzul = true;
//const camisetaVerde = false;

// Exemplo de Boleano
// Vamos fazer um teste usando uma condição para que ela retorne se a condição é verdadeira ou falsa:

/*

// Exemplo 1: PRIMEIRO EXEMPLO DE TESTE LÓGICO;

const numero = 11;

const numeroPar = (numero % 2) === 0;
// a constante vai se igual ao teste: O resto da divisão de 'número' é igual à zero?
// Se sim, o console devolve 'TRUE'. Se não devolverá 'FALSE'.

console.log(numeroPar);
*/

// Exemplo 2: TESTA SE UM NÚMERO É PAR.

/*
const numero = 11;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {

    console.log('Par');

} else {

    console.log('Impar');
}
*/

// Exemplo 3: TESTA SE UM NÚMERO É DIVISÍVEL POR 5.

/*
const numero = 11;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5) {

    console.log('Sim, é divisível por 5. :D');

} else {

    console.log('Não, não é divisível por 5.');
}
*/

// Exemplo 4: ALEM DE TESTAR SE UM NÚMERO É DIVISÍVEL POR 5... AGORA VAI INFORMAR QUE QUALQUER NÚMERO IGUAL A ZERO, SERÁ INVÁLIDO.


const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){

    console.log('Número inválido. Informe um número maior que zero.')

} else if (numeroDivisivelPor5) {

    console.log('Sim, é divisível por 5. :D');

} else {

    console.log('Não, não é divisível por 5.');
}


