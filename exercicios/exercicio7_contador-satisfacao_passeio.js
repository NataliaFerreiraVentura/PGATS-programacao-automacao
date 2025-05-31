/*
contador satisfação passeio

crie um script que avise quando o dog ja passeou o suficiente. 
Para sabe, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra

use a estrutura de repetição while
Exiba:
- Qual o numero da volta atual
- Quando o dog estiver satisfeito

Extra: transforme a logica em uma função 


*/

let voltasPasseioSatisfeito = 5
let voltas = 1
while(voltas <= voltasPasseioSatisfeito ){
  console.log(`Volta ${voltas} com o doguinho`)
  voltas ++ 
}

console.log(`O dog está satisfeito depois de ${voltasPasseioSatisfeito} voltas!`)

console.log('----------------')

function contarSatisfacaoPasseio(){
  let voltasPasseioSatisfeito = 1
  let maxVoltas = 5
  while(voltasPasseioSatisfeito <= maxVoltas ){
    console.log(`Volta ${voltasPasseioSatisfeito} com o doguinho`)  
    voltasPasseioSatisfeito ++ 
  }
   
  console.log("O dog ficou feliz e satisfeito!")
} 

contarSatisfacaoPasseio()
