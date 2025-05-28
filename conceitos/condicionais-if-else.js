/*
if,else if / Se entao senao
switch case / Escolha caso

condicao (se verdadeira)
  acao dentro do if
senao se (ouutra condicao)
  acao dentro do if
senao
  acao dentro do else
*/

if(10 > 5){
    console.log('Valor é maior'
    )
}else {
    console.log('Valor é menor')
}
const idade = 1
const porte = 'G'

if(idade>=2){
  console.log(`Pode ser adotado,pela idade`)
}else if (porte === 'P') {
  console.log(`Pode ser adotado,pelo porte`)
}else{
  console.log(`Não pode ser adotado`)
}