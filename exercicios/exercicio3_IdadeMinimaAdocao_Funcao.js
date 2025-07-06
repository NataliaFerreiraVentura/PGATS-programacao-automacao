function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 2 || (idade === 1 && porte === 'M')
    ? "True"
    : "False"
}

function criarDog(nome, idade, porte) {
  return {
    Nome: nome,
    Idade: idade,
    Status: verificarSePodeSerAdotado(idade, porte)
  }
}

const dog1 = criarDog("Bylu", 1, "Medio")
const dog2 = criarDog("Thor", 3, "Grande")
const dog3 = criarDog("Luna", 3, "Pequeno")

const dadosAdocao = [dog1, dog2, dog3]

console.log(dadosAdocao)