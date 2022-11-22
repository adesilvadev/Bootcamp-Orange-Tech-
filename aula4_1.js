//----------------------------------------------------------------------------------
// CLASSES
//----------------------------------------------------------------------------------



class Pessoa {   // CLASSE É A DEFINIÇÃO DO QUE OU COMO DEVE SER O OBJETO;

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){    // DEFINE O QUE ACONTECE QUANDO O OBJETO É INSTANCIADO

        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;          

    }

    descrever() {      // MÉTODO

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // OBS: A estrutura está entre crases (e não entre aspas).

    }
    
}


// INSTÂNCIA É A OCORRÊNCIA DO OBJETO;

const ademilton = new Pessoa('Ademilton da Silva',42); // Foi criada uma constante que recebe uma nova chamada de classe (new)

console.log(ademilton);




