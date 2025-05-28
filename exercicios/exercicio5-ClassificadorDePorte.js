/*
classificação de porte automatico

muitos tutores não fazem ideia do porte de seu dog
croe um script que classifique o porte de forma simplicada, sendo:
- até 10 kg -> pequeno, acima disso -> Medio
Use o operador ternario para determinar o porte exiba:
- Nome
- Peso
- Porte Classificado

extra: transforme a logica em uma função 
*/

const pesoDoDog = 20
const nomeDog = "Bylu"
const verificarPorteDog = pesoDoDog <= 10
  ? 'Porte Pequeno'
  : 'Porte Medio'

console.log(`Nome: ${nomeDog}`)
console.log(`Peso: ${pesoDoDog}`)
console.log(`Porte Classificado: ${verificarPorteDog}`)
console.log(`-----------------------------------`)

function classificarPortePorPeso(nome,peso) {
  const porte = peso <= 10 ? 'Porte Pequeno' : 'Porte Medio'

  console.log(`Nome: ${nome}`)
  console.log(`Peso: ${peso}`)
  console.log(`Porte Classificado: ${porte}`)
  console.log(`-----------------------------------`)
}

classificarPortePorPeso (`Charlote`, 2)
classificarPortePorPeso (`Thor`, 15)