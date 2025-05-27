function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 2 || porte === "Pequeno"
    ? "Apto para adoção"
    : "Não está apto para adoção";
}

function criarDog(nome, idade, porte) {
  return {
    Nome: nome,
    Idade: idade,
    Status: verificarSePodeSerAdotado(idade, porte)
  };
}

const dog1 = criarDog("Bylu", 1, "Medio");
const dog2 = criarDog("Thor", 3, "Grande");
const dog3 = criarDog("Luna", 3, "Pequeno");

const dadosAdocao = [dog1, dog2, dog3];

console.log(dadosAdocao);