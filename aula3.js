// FUNÇÕES

/*

// Estrutura básica

function nomeFuncao() {

    console.log('Saída');
}

// Como invocar/chamar a função

nomeFuncao();   

*/

// Exemplo 1:

/*
function sayMyName(name) {

        console.log('Your name is:' + name);

}

sayMyName('Priscila');
sayMyName('Ademilton')
*/

// Exemplo 2:  Função para incrementar juros a um valor.

/*
function incrementarJuros (valor, percentualJuros) {
    const valorDeAcrecime = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecime;
}

// Nesta saída, foi chamada a função e foram passados valor (100) e Percentual de Juros sobre o valor(10)
console.log(incrementarJuros(100,10));

// Nesta saída, foi chamada a função e foram passados valor (100) e Percentual de Juros sobre o valor(50)
console.log(incrementarJuros(100,50));

// Nesta saída, foi chamada a função e foram passados valor (100) e Percentual de Juros sobre o valor(85)
console.log(incrementarJuros(100,85));
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main


(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


// NOTA: A função main foi chamado entre parenteses para que fosse criada e se auto chamasse... Ela poderia ser chamado de uma forma mais convencional.
// Exemplo:

/*
function main() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
};

main();
*/