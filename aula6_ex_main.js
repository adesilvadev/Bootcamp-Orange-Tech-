// EXERCÍCIOS

/*

UMA SALA DE AULA CONTÊM 5 ALUNOS E PARA CADA ALUNO, FOI SORTEADO UM NÚMERO DE 1 - 100.
FAÇA UM PROGRAMA QUE RECEBA OS 5 NÚMEROS SORTEADOS PARA OS ALUNOS E MOSTRE O MAIOR VALOR SORTEADO.

DADOS DE ENTRADA:

5  50 10 98 23

SAÍDA:

98
*/

const {gets,print} = require('./aula6_ex_funcoes');


const numerosSorteados = []; // CRIAMOS UM ARRAY PARA COLOCAR OS 'NÚMERO SORTEADOS'


for (let i = 0; i < 5; i++) {      // O 'FOR' ESTÁ INDO BUSCAR OS NÚMEOR DENTRO DA FUNÇÃO 'GETS' (IMPORTADA DE './aula6_ex_funcoes')
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    }


let maiorValor = 0;  // AGORA INICIAMOS UMA VARIÁVEL QUE VAI PEGAR O RETORNO DE 'numerosSorteados.push'


for (let i = 0; i < numerosSorteados.length; i++) {   // O 'FOR' AGORA VAI FAZER A LEITURA DOS NÚMEROS E COMPARANDO AS POSIÇÕES.
    const numeroSorteado = numerosSorteados[1];
    if(numeroSorteado > maiorValor) {

        maiorValor = numeroSorteado;  // 'maiorValor' VAI RECEBER O MAIOR NÚMERO;

    }
    
}

print(maiorValor);  // A IMPRESSÃO DO VALOR SORTEADO.