/** 
 * const nomePet = 'Thor'
   console.log(`"O nome do pet é ${nomePet}`) 
   const nomePet2 = 'Gamora'
   console.log(`"O nome do pet é ${nomePet}`) 
   const nomePet3 = 'Charlote'
   console.log(`"O nome do pet é ${nomePet}`) 
*/

function exibirNomePet(paramNomePet){
  console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(exibirIdadePet){
  console.log(`A idade do pet é ${exibirIdadePet}`)
}

export{
  exibirNomePet,
  exibirIdade
}