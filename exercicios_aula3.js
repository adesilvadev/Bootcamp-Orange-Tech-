function escreverMeuNome(nome){
    console.log ('Olá senhor ' + nome + '!');
}

// Informar um nome:
escreverMeuNome('Ademilton da Silva');


function verificarMaiorIdade (idade){

    if(idade > 17){

        console.log('Você é MAIOR de idade');
    } else {

        console.log('Você é MENOR de idade');
    }
}

// Informa a idade:
verificarMaiorIdade(42);


function gerarDesconto (precoEtiqueta, formaDePagamento) {

if (formaDePagamento === 1){

    console.log('Seu Pagto à vista com desconto é: ' + (precoEtiqueta - (precoEtiqueta*0.1)));

} else if (formaDePagamento === 2){

    console.log('Seu pagto à vista ou PIX com desconto é: ' + (precoEtiqueta - (precoEtiqueta*0.15)));

} else if (formaDePagamento === 3){

    console.log('Seu pagamento parcelado em 2x não gera desconto. O valor é: ' + (precoEtiqueta));

} else {

    console.log('Seu pagamento parcelado em 3x ou mais, não gera desconto. O valor é: ' + (precoEtiqueta + (precoEtiqueta*0.1)));

}
}

// Informar o valor da etiqueta + tipo de paganto:
gerarDesconto(100,3);


