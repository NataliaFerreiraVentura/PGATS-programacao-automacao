/* 
funçoes nomeadas 
funçoes Setadas

funçoes tradicionais
function saudacao(nome){
   return `Ola, ${nome}! `
} 
console.log (saudacao("Julio"))
// saida : Ola,julio!"

funçoes setadas 

const saudacao = (nome) => {
    `Ola, ${nome}! `;
}
    console.log (saudacao("Julio"))
// saida : Ola,julio!"
*/
// funçoes nomeadas com parametro sem retorno
function exibirNomeDoDog(nome){
    console.log(nome)
}
exibirNomeDoDog("Pipoca")
console.log(`---------`)

// funçoes nomeadas com parametro + valor default sem retorno
function exibirPorteDoDog(porte = 'ND'){
    console.log(porte)
}
exibirPorteDoDog()
console.log(`---------`)
// funçoes nomeadas com parametro com retorno
function ObterNomeDoDogFormatado(nome){
  return nome.toUpperCase()
}
console.log(ObterNomeDoDogFormatado("tHor"))

console.log(`-----------`)

function ObterObjeto(){
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao:{
        nome: 'Thor'
    },
    adotado: true
  }
}

function listarObjetoDog(){
  return [{
    nome: 'Bailey Maria',
    peso: 11.5
  },
  {
    nome: 'Charlote',
    peso: 2.5
  }]
}

function listarNomesDeDogs(){
  return [
    'Thor',
    'Charlorte',
    'Gamora',
    'Pituca'
  ]
}
console.log(ObterObjeto())
console.log(listarObjetoDog())
console.log(listarNomesDeDogs())
const nomeDeDogs = listarNomesDeDogs()
console.log(nomeDeDogs)
console.log(`-----------------------------------`)