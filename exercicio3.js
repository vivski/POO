let aluno1 = {
    nome:'Alonso',
    nota:7.5
};

let aluno2 = {
    nome:'Bruna',
    nota:8.0
};

let aluno3 = {
   nome:'Cleiton',
   nota:10
};

let aluno4 = {
    nome:'Dayane',
    nota:9.3
};

let aluno5 = {
    nome:'Elano',
    nota:6.5
};


let indiceMaiorNota = 0;
let resultadoDoConcurso = [];

resultadoDoConcurso=[]
resultadoDoConcurso.push(aluno1)
resultadoDoConcurso.push(aluno2)
resultadoDoConcurso.push(aluno3)
resultadoDoConcurso.push(aluno4)
resultadoDoConcurso.push(aluno5)


let maiorNota = resultadoDoConcurso[0].nota


for( let i = 1 ; i < resultadoDoConcurso.length ; i++ ){
if( resultadoDoConcurso[i].nota > maiorNota ){
    maiorNota = resultadoDoConcurso[i].nota;
    indiceMaiorNota = i;
}
}
console.log("A nota de " + resultadoDoConcurso[indiceMaiorNota].nome + " é a maior nota da turma :" + resultadoDoConcurso[indiceMaiorNota].nota )