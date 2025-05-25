/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

const nomeDog = " jane@  Mari@   23";

let nomeFormatado = nomeDog.trim();
nomeFormatado = removerCaracteresEspeciais(nomeFormatado);
nomeFormatado = removerTodosEspacos(nomeFormatado); // <- aqui está o segredo
nomeFormatado = capitalizarCadaPalavra(nomeFormatado);

const valido = verificarSeONomeEValido(nomeFormatado);

console.log("Nome original:", nomeDog);
console.log("Nome formatado:", nomeFormatado);
console.log(valido);

function removerCaracteresEspeciais(nome) {
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerTodosEspacos(nome) {
  return nome.replace(/\s+/g, " ").trim();
}

function capitalizarCadaPalavra(nome) {
  return nome
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(" ");
}

function verificarSeONomeEValido(nome) {
  const palavras = nome.trim().split(" ");
  return palavras.length >= 1 && palavras.length <= 2;
}

