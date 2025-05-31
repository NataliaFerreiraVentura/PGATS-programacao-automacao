// crie um script para gerar a etiqueta(tag) de identificação qie sera presa na coleira de um cachorro no abrigo.O dono ira infrmar nome,idade,peso ,raça e se é adotado ou não
// a tag deve ter (Nome em letras maiusculas, a raça com a primeira letra maicuscula e peso

const nomeAnimal = "thor"
const raca = "pastor alemao"
let idade = 3,peso = 3.0, adotado = true
const nomeFormatado = nomeAnimal.toUpperCase()
const formatacaoraca = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    Nome: nomeFormatado,
    Raca: formatacaoraca,
    Peso: peso

}]

console.log(animal);

let nomePet = "charlote"
let racaPet = "shih tzu"
let idadePet = 3,pesoPet = 3.0, adotadoPet = true
nomePet = nomePet.toUpperCase()
racaPet = racaPet.slice(0,1).toUpperCase() + racaPet.slice(1).toLowerCase()

const dogTag = [{
    Nome: nomePet,
    Raca: racaPet,
    Peso: pesoPet
}]
console.log(dogTag)

