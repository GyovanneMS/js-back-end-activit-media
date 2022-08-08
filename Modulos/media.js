/*=========================================================
* Objetivo: Criação da conta da média;
* Data: 04/08/22 - 08/08/22
* Autor: Gyovanne Martins
* Versão: 1.1.0
=========================================================*/

const mediaNotas = function (valor1, valor2, valor3, valor4){
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;
    let soma;
    let media;

    soma = nota1 + nota2 + nota3 + nota4;
    media = soma/4;

    return media;
}

const aprovacao = function(notaAprovadora){
    let nota = notaAprovadora;
    let aprovacao;

    if(nota < 50){
        aprovacao = 0;
    }else if(nota >= 50 && nota <= 70){
        aprovacao = 1;
    }else{
        aprovacao = 2;
    }

    return aprovacao;
}

const mediaExame = function(valor1, eValor){
    let media = valor1;
    let exame = eValor;
    let soma;
    let eMedia;

    soma = media + exame;
    eMedia = soma/2;

    return eMedia;
}

const mediaAprov = function(media){
    let aprovacao = media;
    let aprov = true;

    if(aprovacao < 60){
        aprov = false;
    } else{
        aprov = true;
    }

    return aprov;

}

module.exports = {
    mediaNotas, mediaExame, aprovacao, mediaAprov
}