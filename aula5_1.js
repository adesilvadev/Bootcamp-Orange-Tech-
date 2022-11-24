// ------------------------------------------------------------------------------------
// ESTRUTURAS DE REPETIÇÃO
// ------------------------------------------------------------------------------------

//FOR

// O 'FOR' É DIVIDIDO EM TRÊS PARTES (SEPARADOS POR PONTO E VÍRGULA).

// 1ª É O INDEX (REPRESENTADO PELA LETRA 'i'), TAMBÉM CHAMADA DE VARIÁVEL DE CONTROLE;
//2ª A ESTRUTURA CONDICIONAL (RETORNA UM BOLEANO);
//3ª É O INCREMENTO DA VARIÁVEL.

//1º EXEMPLO: BASE

/*
for (let i = 0; i < 10; i++) {
   
    console.log(i);
    
}
*/

// 2º EXEMPLO: CONTANDO CARACTERES (OU ARRAY DE STRING).

/*
const nome = 'Ademilton da Silva';

for (let i = 0; i < nome.length; i++) { // Observe que invocamos a constante 'nome' com a função 'length' para acessar o array.
   
    console.log(nome[i]); // Na impressão chamamos a constante 'nome', invocamos o array '[]' e passamos o indice 'i' que será o ponto de partida da contagem.
}
*/

// 3º EXEMPLO: TEREMOS UMA LISTA DE NOTAS E FAZEMOS A MÉDIA.

const notas = []; // CRIAMOS UM ARRAY VAZIO

notas.push(10);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(8);
notas.push(9); // ADICIONAMOS AS NOTAS CHAMANDO A CONTANTE 'notas' + A FUNÇÃO 'push'.

let soma = 0; // CRIAMOS UMA VARIÁVEL PARA INICIAR A SOMA.

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota; // VAI SOMAR CADA NOTA À PARTIR DA VARIÁVEL.   
}

const media = soma / notas.length; // CHAMAMOS A VARIÁVEL 'SOMA' (DAS NOTAS) E DIVIDIMOS PELA QUANTIDADE DE NOTAS DENTRO DO ARRAY 'nome.length'.
console.log(media);

// AGORA QUE NOSSO CÓDIGO ESTÁ CRESCENDO, VAMOS APRENDER A DEPURAR O CÓDIGO.