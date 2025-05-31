/* Calculadora de ração diaria
crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. 
Calcule a quantidade diaria deração com base na seguinte formula: Gramas por dia = peso x 30
Exiba:
- Nome do dog
- Peso
- Quantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar

*/
const nomeDog = "Thor"
const pesoKg = 10.5;
const estoqueGramas = 15000

const gramasPorDia = pesoKg * 30
const diasDuracao = Math.floor(estoqueGramas / gramasPorDia)

console.log(`Nome do Dog: ${nomeDog}`)
console.log(`Peso do Dog: ${pesoKg}`)
console.log(`Quantidade Recomendada dia (gramas): ${gramasPorDia}`)
console.log(`Dias que o estoque ira durar: ${diasDuracao}`)

// alternativa com função

function calcularRacaoDiaria(nomeDog, pesoKg, estoqueGramas) {
  const gramasPorDia = pesoKg * 30;
  const diasDuracao = Math.round(estoqueGramas / gramasPorDia)

  console.log(`Nome do Dog: ${nomeDog}`)
  console.log(`Peso do Dog: ${pesoKg}`)
  console.log(`Quantidade Recomendada dia (gramas): ${gramasPorDia}`)
  console.log(`Dias que o estoque ira durar: ${diasDuracao}`)
};
  


calcularRacaoDiaria("Gamora", 2.5, 15000)
calcularRacaoDiaria("Bella", 10.9, 15000)
calcularRacaoDiaria("Charlote", 8, 15000)
