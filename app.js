/*=========================================================
* Objetivo: Criação da interface da conta da média de uma universidade;
* Data: 08/08/22
* Autor: Gyovanne Martins
* Versão: 1.0.0
=========================================================*/

console.log('Média Universitária');

//import do arquivo de função para realizar calculos
const {mediaNotas, aprovacao} = require('./Modulos/media.js');
var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Bom dia, com quem estou falando? Eu sou a(o) professor(a): ', function(nomeProfessor){
    let professor = nomeProfessor;
    if(professor == ''){
        console.log('Por favor digite seu nome!');
        process.exit(0);
    }
    entradaDados.question('Do gênero: ', function(generoProf){
        let gProf = generoProf.toUpperCase();
        let generProf;
        if(gProf == '' || gProf != 'FEMININO' || gProf != 'MASCULINO' || gProf != 'NÃO BINÁRIO'){
            console.log('Por favor digite seu gênero!');
            process.exit(0);
        }
        if(gProf == 'FEMININO'){
            generProf = 'Professora';
        }else{
            generProf = 'Professor';
        }

        entradaDados.question('Da dicilplina: ', function(nomeDiciplina){
            let diciplina = nomeDiciplina;
            if(diciplina == ''){
                console.log('Por favor digite a diciplina!');
                process.exit(0);
            }
            entradaDados.question('Do curso: ', function(nomeCurso){
                let curso = nomeCurso;
                if(curso == ''){
                    console.log('Por favor digite o curso!');
                    process.exit(0);
                }
                entradaDados.question('Coloco as notas do(da) aluno(a): ', function(nomeEstudante){
                    let estudante = nomeEstudante;
                    if(estudante == ''){
                        console.log('Por favor digite o nome do estudante!');
                        process.exit(0);
                    }
                    entradaDados.question('Do gênero : ', function(generoEstu){
                        let gEstud = generoEstu.toLowerCase();
                        if(gEstud == ''){
                            console.log('Por favor digite o gênero do estudante!');
                            process.exit(0);
                        }
                        entradaDados.question('Recebe como primeira nota: ', function(valorNota1){
                            let nota1 = parseFloat(valorNota1);
                            // if(nota1 != number){
                            //     console.log('Por favor digite um número!');
                            //     process.exit(0);
                            // } else if(nota1 < 0 || nota1 > 100){
                            //     console.log('Por favor, apenas notas validas.')
                            // }
                            entradaDados.question('Recebe como segunda nota: ', function(valorNota2){
                                let nota2 = parseFloat(valorNota2);
                                entradaDados.question('Recebe como terceira nota: ', function(valorNota3){
                                    let nota3 = parseFloat(valorNota3);
                                    entradaDados.question('Recebe como quarta nota: ', function(valorNota4){
                                        let nota4 = parseFloat(valorNota4);
                                        console.log(nota1, nota2, nota3, nota4)
                                            let media = mediaNotas(nota1, nota2, nota3, nota4);
                                            let aprova = aprovacao(media);
                                            
                                        if(aprova == 0){
                                           if(gEstud == 'feminino'){
                                                console.log('A aluna ' + estudante + ' foi reprovada na diciplina ' + diciplina + '.\nCurso: ' + curso + '\n' + generProf + ' : ' + professor + '\nNotas da aluna: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia final: ' + media);
                                            }else{
                                                console.log('O aluno ' + estudante + ' foi reprovado na diciplina ' + diciplina + '.\nCurso: ' + curso + '\n' + generProf + ' : ' + professor + '\nNotas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '\nMédia final: ' + media);
                                            }
                                            process.exit(0);
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});