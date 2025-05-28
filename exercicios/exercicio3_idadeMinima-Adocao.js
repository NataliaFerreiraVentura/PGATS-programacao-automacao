/* crie um script que refica se um dog pode ser adotado com base na idade minima definica por exemplo 2 anos
use os operadores adequados e exiba:
- nome do dog
- idade
- se está apto ou não para adoção

extra: aplique uma regra com operador logico para permitir que se o cao for de pequeno porte, pode ser adotado independente da idade 

exemplo:
minimo = 2
idade 1 + porte medio = nao
idade 2 + porte M = sim
idade 2 + porte P = sim
idade 1 + porte P = sim
idade 2 + porte G = sim
idade 1 + port G = nao
*/

const idadeDog = 2
const nomeDog = "Bylu"
const porte = 'Pequeno'

const statusAdocao = idadeDog >= 2 || porte === "Pequeno"
  ? 'Apto para adoção'
  : 'Não está apto para adoção'
const dadosAdocao = [{
  Nome: nomeDog,
  Idade: idadeDog,
  Status: statusAdocao
} ];

console.log(dadosAdocao)


/* 
idade 1 + porte medio = nao
idade 2 + porte M = sim
idade 2 + porte P = sim
idade 1 + porte P = sim
idade 2 + porte G = sim
idade 1 + port G = nao 
*/