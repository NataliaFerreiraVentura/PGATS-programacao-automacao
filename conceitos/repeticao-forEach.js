/*

Use forEach quando você quer percorrer todos os elementos de uma lista e executar algo em cada um deles, sem precisar interromper no meio.
listaDeAlunos
Marcio
Natalia
Nathanael
Ana
 paraCada (item da)listaDealunos
   //dar uma nota aleatoria
   - uma das mais utilizadas
*/

const listaDeAlunos = [
  'Marcio',
  'Natalia',
  'Nathanael',
  'Ana'
]

listaDeAlunos.forEach(aluno =>{
  console.log(aluno)
})
console.log('----------------')

const listaDeAlunosENotas = [
  {
    nome: 'Natalia',
    nota: 9
  },
  {
    nome: 'Nathanael',
    nota: 10
  },
  {
    nome: 'Marcio',
    nota: 6
  },
  {
    nome: 'Ana',
    nota: 6.9
  }
]
function notaDaAna (){
    return 1
}

listaDeAlunosENotas.forEach(aluno =>{
    if (aluno.nota < 7){
        console.log(`O Aluno ${aluno.nome} precisa do trabalho extra`)
    }
    console.log(`O Aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})

console.log('----------------')

function verificarAprovacao (aluno){
     if (aluno.nota < 7){
        console.log(`O Aluno ${aluno.nome} precisa do trabalho extra`)
    }
    console.log(`O Aluno ${aluno.nome} tem a nota ${aluno.nota}`)
}

listaDeAlunosENotas.forEach(aluno =>{
    verificarAprovacao(aluno)
})