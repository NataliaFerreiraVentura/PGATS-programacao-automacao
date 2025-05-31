/* entregador de brinquedos para dogs

dado que voce tenha uma lista de brinquedos com: bola,osso,corda e sino

crie um script que passe pela lista de brinquedos e entregue um por vez
exiba o nome de cada brinqueddo que for entegue

use a estrutura de repeticao forEach

extra: transforme em funcao

*/
const listaDeBrinquedos = [
  'Bolinha',
  'Osso',
  'Corda',
  'Sino'
]
const nomesDogs = ['Thor','Charlote','Gamora', 'Banguela']
listaDeBrinquedos.forEach( (brinquedo , index) =>{
    console.log(`Entreguando o brinquedo - ${brinquedo} para o(a) ${nomesDogs[index]}! Espero que ele(a) se divirta muito!`)
})
console.log("Todos os brinquedos foram entregues")
console.log('----------------')
function entregarBrinquedosParaDogs(){
    listaDeBrinquedos.forEach( (brinquedo , index) =>{
       console.log(`Entreguando o brinquedo - ${brinquedo} para o(a) ${nomesDogs[index]}! Espero que ele(a) se divirta muito!`)
    })
    console.log("Todos os brinquedos foram entregues!")
}
entregarBrinquedosParaDogs()