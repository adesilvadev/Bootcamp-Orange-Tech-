//-----------------------------------------------------------------------
// ARRAYS
//-----------------------------------------------------------------------

// EXEMPLO 1:
/*
const nomes = ['Ademilton','Priscila','Ignázio'];

console.log(nomes); // 1ª FORMA SIMPLES >> CHAMANDO TODA LISTA DO ARRAY;
*/


// EXEMPLO 2:

/*
const nomes = ['Ademilton','Priscila','Ignázio'];

console.log(nomes[2]); // 2ª FORMA SIMPLES >> CHAMANDO UMA POSIÇÃO NO ARRAY;
*/


// EXEMPLO 3: COMO ADICIONAR ITENS AO ARRAY >> 1ª maneira.

/*
const nomes = ['Ademilton','Priscila','Ignázio'];

nomes.push('Mirella'); // Usando usando a função PUSH, adicionando de forma dinâmica

console.log(nomes); 
*/


// EXEMPLO 4: COMO ADICIONAR ITENS AO ARRAY >> 2ª maneira.


/*
const nomes = ['Ademilton','Priscila','Ignázio'];

nomes[3] = 'Mirella'; // Atribuindo uma posição direta dentro do Array;
nomes[4] = 'Gustavo';

console.log(nomes); 
*/


// EXEMPLO 5: SUBSTITUINDO 1 POSIÇÃO DE UMA ARRAY.

/*
const nomes = ['Ademilton','Priscila','Ignázio'];

nomes[1] = 'Mirella'; // SUBSTITUINDO uma posição direta dentro do Array;


console.log(nomes); 
*/


// EXEMPLO 6: É POSSÍVEL COMEÇAR UMA LISTA VAZIA E IR ATRIBUINDO POSIÇÕES (NESSA CONDIÇÃO O ARRAY PODE RECEBER TIPOS DIFERENTES DE DADOS).

/*
const tudo = [];

tudo.push('Ademilton'); // RECEBENDO STRING

tudo.push(10); // RECEBENDO NUMBER

console.log(tudo);
*/


// CURIOSIDADE SOBRE ALGUMAS FUNÇÕES

/*
tudo.push('Gustavo'); // Adiciona um novo item no Array.

tudo.pop(); // Retira a última posição do Array.

tudo.shift(); // Retira a primeira posição do Array.
*/


// EXEMPLO 7: É POSSÍVEL COMEÇAR UMA LISTA VAZIA E IR ATRIBUINDO POSIÇÕES

// Vamos explorar um exemplo de média de notas de alunos:

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(9);

//console.log(notas.length); CURIOSIDADE: RETORNA A QUANTIDADE DE POSIÇÕES JÁ IMPUTADAS NO ARRAY;

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / notas.length);

// --------------------

//A PARTIR DAQUI COMEÇAMOS A LIÇÃO DE ESTRUTURAS DE REPETIÇÃO... AULA5_1.JS