/*=========================================================
* Objetivo: Criação da interface da conta da média de uma universidade;
* Data: 08/08/22
* Autor: Gyovanne Martins
* Versão: 1.2.0
=========================================================*/

console.log('Média Universitária');

//import do arquivo de função para realizar calculos
const {mediaNotas, aprovacao, mediaExame, mediaAprov} = require('./Modulos/media.js');
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
        let artigo;
        if(gProf != 'FEMININO' && gProf != 'MASCULINO' && gProf != 'NÃO BINÁRIO'){
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
                    entradaDados.question('Do gênero: ', function(generoEstu){
                        let gEstud = generoEstu.toLowerCase();
                        if(gEstud != 'feminino' && gEstud != 'masculino' && gEstud != 'não binário'){
                            console.log('Por favor digite o gênero do estudante!');
                            process.exit(0);
                        } else if(gEstud == 'feminino'){
                            artigo = 'a';
                        } else if(gEstud == 'masculino' || gEstud == 'não binário'){
                            artigo = 'o';
                        }

                        entradaDados.question('Recebe como primeira nota: ', function(valorNota1){
                            let nota1 = parseFloat(valorNota1);
                            entradaDados.question('Recebe como segunda nota: ', function(valorNota2){
                                let nota2 = parseFloat(valorNota2);
                                entradaDados.question('Recebe como terceira nota: ', function(valorNota3){
                                    let nota3 = parseFloat(valorNota3);
                                    entradaDados.question('Recebe como quarta nota: ', function(valorNota4){
                                        let nota4 = parseFloat(valorNota4);
                                            
                                        let media = mediaNotas(nota1, nota2, nota3, nota4);
                                        let aprova = aprovacao(media);
                                        
                                        if(aprova == 1){
                                            entradaDados.question('Qual a nota de exame d' + artigo + ' alun' + artigo + ' ' + estudante + '? ', function(valorExame){
                                                let exame = valorExame;
                                                let aprovExame;
                                                let mExame;
                                                
                                                mExame = mediaExame(media, exame);
                                                aprovExame = mediaAprov(mExame);
                                                console.log('\n' + artigo.toUpperCase() + ' alun' + artigo + ' ' + estudante + ' foi ' + aprovExame + artigo + ' na diciplina ' + diciplina + ' pelo exame.\nCurso: ' + curso + '\n' + generProf + ': ' + professor + '\nNotas d' + artigo + ' alun' + artigo + ': primeira nota: ' + nota1 + ', segunda nota: ' + nota2 + ', terceira nota: ' + nota3 + ', quarta nota: ' + nota4 + ', nota do exame: ' + exame + '\nMédia final: ' + media + '\nMédia final do Exame: ' + String(mExame));
                                                process.exit(0);                                                
                                            });
                                        }else{
                                        console.log('\n' + artigo.toUpperCase() + ' alun' + artigo + ' ' + estudante + ' foi ' + aprova + artigo + ' na diciplina ' + diciplina + '.\nCurso: ' + curso + '\n' + generProf + ': ' + professor + '\nNotas d'+ artigo + ' alun' + artigo + ': '+ 'primeira nota: ' + nota1 + ', ' + ' segunda nota: ' + nota2 + ', ' + ' terceira nota: ' + nota3 + ', ' + ' quarta nota: ' + nota4 + '\nMédia final: ' + media);
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