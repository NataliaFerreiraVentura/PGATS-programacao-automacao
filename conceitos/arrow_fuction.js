// funçoes setadas com parametro sem retorno
const exibirNomeDoDog = (nome) => {
  console.log(nome)
}
// funçoes setadas com parametro + valor default sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
  console.log(porte)
}

// funçoes setadas com parametro com retorno

const ObterNomeDoDogFormatado = (nome) => {
  return nome.toUpperCase()
}

exibirNomeDoDog('Charlote')
exibirPorteDoDog()
console.log(ObterNomeDoDogFormatado('ThoR'))
console.log(`-----------------------------------`)

const ObterObjetoDog = () => {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrma:{

        nome: 'Thor'
    },
    adotado: true
  }
}

const listarObjetoDog = () => {
  return [{
    nome: 'Bailey Maria',
    peso: 11.5
  },
  {
    nome: 'Charlote',
    peso: 2.5
  }]
}

const listarNomesDeDogs = () => {
  const nomes = [
    'Thor',
    'Charlorte',
    'Gamora',
    'Pituca'
  ]
  return nomes
}

// arrow function sem bloco + com return 'automocao'
const dobrar = (numero) => numero * 2

console.log(ObterObjetoDog())
console.log(`-----------------------------------`)
console.log(listarObjetoDog())
console.log(`-----------------------------------`)
console.log(listarNomesDeDogs())
console.log(`-----------------------------------`)
console.log(dobrar(2))


//mocha

teste('nome do teste', {tags: 'critico'},function(){

})