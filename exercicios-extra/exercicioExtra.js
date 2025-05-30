function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number')
}

const entrada = [1, 'a', 3, 'b', 5, 'teste', 7]
const resultado = filtrarNumeros(entrada)

console.log(resultado)


function contarVogais(texto) {
  let contadorVogais = 0
  const vogais = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < texto.length; i++) {
    const caractere = texto[i]
    if (vogais.includes(caractere)) {
      contadorVogais++
    }
  }
  return contadorVogais
}

console.log(contarVogais('Nathanael'))
console.log(contarVogais('Naty ferreira'))
