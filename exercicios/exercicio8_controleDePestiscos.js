/* Contador de petiscos

crie um script que receba uma quantidade de petiscos e de 1 por vez ate o dog estiver satisfeito

use a estrutura de repetição for contado
exiba:
- Cada vez que um petisco for entregue
- Quando o dog estiver satisfeito

extra: transforme em função

*/

const quantidadeCalculada = 3
for(let quantidadeDePeticos = 1; quantidadeDePeticos <= quantidadeCalculada; quantidadeDePeticos++){
   console.log(`Dando um petisco de n* ${quantidadeDePeticos} para o Thor`)
}

console.log("O Thor ficou feliz e satisfeito!")

console.log(`-----------------------------------`)
function contarPetiscos(petiscos){
  for(let quantidadeDePeticos = 1; quantidadeDePeticos <= petiscos; quantidadeDePeticos++){
    console.log(`Dando um petisco de n* ${quantidadeDePeticos} para a Charlote`)
  }
  console.log("A Charlote ficou feliz e satisfeito!")
}
contarPetiscos(5)
console.log(`-----------------------------------`)
const contarPetiscos2 = (petiscos) => {
  for(let quantidadeDePeticos = 1; quantidadeDePeticos <= petiscos; quantidadeDePeticos++){
    console.log(`Dando um petisco de n* ${quantidadeDePeticos} para a Gamora`)
  }
  console.log("A Gamora ficou feliz e satisfeito!")
}

contarPetiscos2(4)