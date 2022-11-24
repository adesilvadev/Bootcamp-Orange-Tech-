// ----------------------------------------------------------------------------------------------
// DEPURAÇÃO DE CÓDIGO
// ----------------------------------------------------------------------------------------------

// É UMA ESPÉCIE DE DEBUG, QUE NOS PERMITIRÁ PERCEBER O FUNCIONAMENTO DO CÓDIGO E AUXILIARÁ EM POSSÍVEIS PROBLEMAS DE COMPILAÇÃO.
// ISSO INCLUSIVE PERMITIRÁ VER LINHA A LINHA...


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