//-------------------------------------------------------------------------
// OBJETOS
//-------------------------------------------------------------------------

// OBEJETO É UMA COLEÇÃO DINÂMICA DE CHAVE E VALOR...
// 1º EXEMPLO, É DE UM OBJETO LITERAL... SEGUE O EXEMPLO DE SINTAXE:

/*
const ademilton = {

        nome: 'Ademilton da Silva',
        idade: 42

};

// NOTA: É constituido por nome, chave e valor (dentro das chaves). Os dados entre as chaves são chamados de coleção (de dados).
// Podem ser acessados da seguinte forma:

console.log(ademilton.nome);
console.log(ademilton.idade);

// E também

console.log(ademilton);
*/

// 2º EXEMPLO: ELE PODE SER IMCREMENTADO...

/*
const ademilton = {

    nome: 'Ademilton da Silva',
    idade: 42

};

ademilton.altura = 1.92;

console.log('Ademilton possui: ' + ademilton.altura);
*/

// 3º EXEMPLO: A ESTRUTURA PODE SER DECREMENTADA TAMBÉM...

/*
const ademilton = {

    nome: 'Ademilton da Silva',
    idade: 42

};

delete ademilton.idade;

console.log(ademilton);
*/

// 4º EXEMPLO: É POSSÍVEL UTILIZAR UMA FUNÇÃO DENTRO DE UM OBJETO, CHAMADO DE MÉTODO...

/*
const pessoa = {

    nome: 'Ademilton da Silva',
    idade: 42,

    descrever: function () {

        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};

pessoa.descrever();
*/

// 5º EXEMPLO: É POSSÍVEL INCREMENTAR UM MÉTODO... ALTERANDO SEUS VALORES, OS CHAMANDO ANTES DE UM CONSOLE (POR EXEMPLO)

/*
const pessoa = {

    nome: 'Ademilton da Silva',
    idade: 42,

    descrever: function () {

        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // OBS: A estrutura está entre crases (e não entre aspas).
    }

};

pessoa.nome = 'Priscila';
pessoa.idade = '36';

pessoa.descrever();
*/

// 6º EXEMPLO: É POSSIVEL INCREMENTAR O MÉTODO, ALTERANDO A ESTRUTURA DO MÉTODO TAMBÉM...

const pessoa = {

    nome: 'Ademilton da Silva',
    idade: 42,

    descrever: function () {

        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // OBS: A estrutura está entre crases (e não entre aspas).
    }

};

pessoa.descrever = function () {
        
    console.log(`Meu nome é ${this.nome}`); // OBS: A estrutura está entre crases (e não entre aspas).

}

pessoa.descrever();