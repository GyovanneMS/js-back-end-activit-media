/*=========================================================
* Objetivo: Criação da conta da média;
* Data: 04/08/22 - 08/08/22
* Autor: Gyovanne Martins
* Versão: 1.2.0
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
        aprovacao = 'reprovad';
    }else if(nota >= 50 && nota < 70){
        aprovacao = 1;
    }else{
        aprovacao = 'aprovad';
    }

    return aprovacao;
}

const mediaExame = function(valor1, eValor){
    let media = parseFloat(valor1);
    let exame = parseFloat(eValor);
    let soma;
    let eMedia;
    console.log(media)
    console.log(exame)

    soma = media + exame;
    eMedia = soma/2;

    console.log(eMedia)
    return eMedia;
}

const mediaAprov = function(media){
    let aprovacao = media;
    let aprov;

    if(aprovacao < 60){
        aprov = 'reprovad';
    } else{
        aprov = 'aprovad';
    }

    return aprov;

}



module.exports = {
    mediaNotas, mediaExame, aprovacao, mediaAprov
}