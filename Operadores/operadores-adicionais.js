/*

-- decremento - Reduz 1 unidade do valor da variável.
++ incremento - Adiciona 1 unidade ao valor da variável.

? ternario (condicionais)

*/
// incremento
let pesoDoDog = 10
console.log(pesoDoDog)
pesoDoDog++
console.log(pesoDoDog)

// decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)

// ternario
const porte = pesoDoDog <= 10 ? 'pequeno' : 'medio'
//           <condicao>          se          senao
console.log(porte)
{/*{<condicao> ? <acao se verdadeiro >: <acao se falso> */}
let pesoDoDogTernario = 21
const porteDog = pesoDoDogTernario <=10 // se / if
                 ? 'pequeno' 
                 : pesoDoDogTernario <=20 // senao se / else if
                 ? 'medio'
                 :'grande' //senao

console.log(porteDog)