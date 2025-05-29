/**
 * console api
 */

console.log("Nathanael totozo")

console.error("Falha na execução")
console.warn ("Atençao")
console.table([{
    nome: 'Natalia',
    turma:'02',
    disciplina:'prog js'
},
{
    nome: 'Nathanel',
    turma:'02',
    disciplina:'prog js'
}
])
/**
 * constantes e variaveis
 * 
 */
// const - para informações que nunca mudam - precisa atribuir o valor antes
// var ou let para informações que podem mudar   - pode atribuir depois e alterar seu valor ao longo do codigo

// informações que não mudam const
const nome = 'Thor'
const raca = 'Pastor Alemão'
const sexo = 'Macho'
const cor = 'Preto'
const dataDeNascimento = '13/12/2022'
const porte = 'G'

// insformaçoes que mudam var ou let

let idade
let peso = 10.5
let vacinado = true
var castrado = false
castrado = true
var tamanho = 'G'
idade = 10

console.log ("Ele é castrado? ",idade)
//hoisting --> içamento ou elevação

const irmaos = [
    {
        nome: "Thor",
        idade: 3
    },
    {
        nome: "Gamora",
        idade: 3
    },
    {
        nome: "Charlote",
        idade: 1
    }
]
console.table(irmaos)



var nomeNamorados = ["Nathanel","Natalia"]
console.log("Os nomes são",nomeNamorados)



/**
 * 1.  Qual palavra-chave permite declarar uma variavel que pode ser alterada depois? Let ou var / Mais recomendada let
 * 2. Qual plavra-chave é usada para declarar constantes em javascript?  const
 * 3. Movida pro topo do arquivo automaticamente pelo javascript, recebe o valor undefined / da prioridade a execução do codigo
 * 4. Quando voce usario o let em vez do const? Quando o valor da variavel irá mudar
 * Tipos de dados: 
 * Javascript - Portugol
 * string     - cadeia
 * number     - inteiro/real
 * boolean    - logico
 * array      - vetor /matriz
 *-----------------------------------------------------
 especiais do javascript
 * underfined - valor com uma variavel sem valor algum
 * null       - atribuo propositalmente para uma variavel que sera nula
 *
 * BigInt = Number para numeros extremamente grandes
 * Symbol = Identificador unico
 */

 
const valor ="50"
console.log(valor)

//strings
/**
 * 'Turma 02 do PGATS' - aspas simples /single quote
 * "Turma 02 do PGATS" - Aspas duplas / double quote
*`Turma 02 do PGATS` - Crase - tamplete strings
 */
// concatenação

const turma = "02"
let data = "05 de abril"
var numeroAula = "03"
console.log ("Aula 3 da turma " + turma + " no sabado dia 05 de Abril")

//interpolação de strings
console.log(`Aula ${numeroAula} da turma ${ turma} no sabado dia ${data}`)
console.log(`Aula ${numeroAula} da turma ${ turma} no sabado dia ${new Date().getDate()}`)
console.log(numeroAula.length) // retorna a quantidade de caracteres. util para saber quatos caracters tem num sequencia de string na validação(nuero conta banco , etc)
console.log(data.length)
// split - separa a string 
const nomesDeAlunos = "Naty Nathan Ana Mayk Sophia"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ") // a cada espaço ele separa a string, sempre ira passar para um vetor
console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())    
console.log(nomesDeAlunos.toUpperCase())

console.log(nomesDeAlunos.includes("thor"))

console.log (nomesDeAlunos.replaceAll('a','i'))

const conceitoLogica = "       inteiro real cadeia de caracters"
const cpf = "01234567890"
console.log(conceitoLogica.trim())

let dataCortar = "05 de abril"
console.log(dataCortar.slice(0,2))
// 05 de abril
// 0123456789
console.log(dataCortar.substring(0,2))

