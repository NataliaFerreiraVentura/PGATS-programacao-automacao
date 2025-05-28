/*
escolha (condicao)
 caso X: faça
 caso Y: faça
 caso Z: faça
*/

const peso = 30

switch(peso){
  case 10:
    console.log('P')
    break
  case 20:
    console.log('M')
    break
  case 30:
    console.log('G') 
    break
  default:
    console.log('ND')
}
console.log(`-----------------------------------`)

switch (true) {
  case (peso <= 10):
    console.log('P');
    break;
  case (peso <= 20):
    console.log('M');
    break;
  case (peso <= 30):
    console.log('G');
    break;
  default:
    console.log('ND');
}
