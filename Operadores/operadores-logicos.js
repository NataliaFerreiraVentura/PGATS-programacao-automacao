/*
&& - E/AND
|| - OU/ OR
!  - NAO/ NOT

comparaçoes logicas entre expreçoes que retorna valor boleanos
*/

//&& - E / AND
const nomeDog = "Pipoca"
const nomeEhValido = nomeDog.split(" ").length === 1
const numeroCaractersNome = nomeDog.length <= 10
console.log(nomeDog.length)
console.log(nomeEhValido && numeroCaractersNome)

// || - OU / OR

const dog ={
    adotado: false,
    peso: 20
}
console.log(dog.adotado || dog.peso < 10)
console.log(`dog.adotado || dog.peso < 10 = ${dog.adotado || dog.peso < 10}`)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// !  - NAO/ NOT
console.log(!false)