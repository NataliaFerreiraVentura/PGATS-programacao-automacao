
# ✅ Fundamentos de JavaScript

## 🟦 Declaração de Variáveis

- `let` e `var`: variáveis **mutáveis**
- `const`: constantes (valor fixo, **imutável**)
- **Hoisting**: içamento de variáveis com `var`

---

## 🟨 Tipos de Dados

| Tipo        | Descrição                              |
|-------------|----------------------------------------|
| `string`    | Cadeia de caracteres                   |
| `number`    | Números inteiros ou decimais           |
| `boolean`   | Verdadeiro (`true`) ou falso (`false`) |
| `array`     | Listas de valores                      |
| `object`    | Estruturas chave/valor                 |
| `null`      | Ausência proposital de valor           |
| `undefined` | Sem valor atribuído                    |
| `BigInt`    | Números inteiros muito grandes         |
| `Symbol`    | Identificadores únicos (avançado)      |

---

## ✏️ Manipulação de Strings

| Método                   | O que faz                                    |
|-------------------------|-----------------------------------------------|
| `.length`               | Conta caracteres                              |
| `.split(" ")`           | Divide string em array por espaço             |
| `.toLowerCase()`        | Converte para minúsculas                      |
| `.toUpperCase()`        | Converte para maiúsculas                      |
| `.includes("...")`      | Verifica se contém trecho específico          |
| `.replaceAll('a', 'i')` | Substitui todos os caracteres                 |
| `.trim()`               | Remove espaços do início e fim                |
| `.slice(0, 2)`          | Recorte da string (posição inicial/final)     |
| `.substring(0, 2)`      | Parecido com `.slice`, mas mais tolerante     |

---

## 🔢 Operadores

### ➕ Aritméticos
`+`, `-`, `*`, `/`, `%`, `**`

### ⚖️ Comparação
`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

### 🔁 Lógicos
`&&` (E), `||` (OU), `!` (NÃO)

### ❓ Ternário
```javascript
condição ? valor1 : valor2
```

### 🔼 Incremento / Decremento
`++`, `--`

---

## 📋 Console API

```javascript
console.log()    // Saída padrão
console.error()  // Exibe erro
console.warn()   // Exibe alerta
console.table()  // Exibe dados formatados em tabela
```

---

## 📌 Extras

### 💬 Interpolação de Strings (Template Literals)

```javascript
const nome = "Natalia"
console.log(`Olá ${nome}, seja bem-vinda!`)
```

### 🗂️ Arrays e Objetos

```javascript
console.table(listaOuObjeto)
```

---

## 🔀 Condicionais

### if / else if / else
```javascript
const idade = 20

if (idade < 18) {
  console.log("Menor de idade")
} else if (idade < 60) {
  console.log("Adulto")
} else {
  console.log("Idoso")
}
```

### switch (com `true` para expressões)
```javascript
const peso = 25

switch (true) {
  case (peso <= 10):
    console.log('P')
    break;
  case (peso >= 20 && peso < 30):
    console.log('M')
    break;
  case (peso >= 30):
    console.log('G')
    break
  default:
    console.log('ND')
}
```

---

## 🧠 Funções

### Função tradicional
```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Natalia"));
```

### Arrow Function (função de seta)
```javascript
const saudacao = (nome) => `Olá, ${nome}!`;

console.log(saudacao("Natalia"));
```

### Função com valor padrão
```javascript
function bemVindo(nome = "visitante") {
  return `Bem-vindo(a), ${nome}`;
}

console.log(bemVindo());
console.log(bemVindo("Natalia"));
```

---

## 🔁 Laços de Repetição

### `for`
Usado quando sabemos quantas vezes o loop deve acontecer.
```javascript
const gatos = ['Gamora', 'Thor','Charlote']
for(let indice = 0;indice < gatos.length; indice ++){
   console.log(`Dando um petisco para ${gatos[indice]}`)
}
```

### `while`
Usado quando não sabemos quantas vezes será repetido, e a repetição depende de uma condição booleana.
```javascript
let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0
while(quantidadeVoltasAtual < voltasAteFicarCansado){
  console.log(`Dar uma volta na quadra`)
  quantidadeVoltasAtual++
}
```

### `forEach`
Usado para percorrer cada item de um array. Não pode ser interrompido com `break` ou `return` como um `for` tradicional.
```javascript
const listaDeAlunos = [
  'Marcio',
  'Natalia',
  'Nathanael',
  'Ana'
]
listaDeAlunos.forEach(aluno =>{
  console.log(aluno)
})
```
## 🧩 Modularização de Código

A modularização permite dividir o código em **módulos reutilizáveis**, organizando melhor os arquivos e responsabilidades.

### 📁 Exemplo de estrutura

```
meu-projeto/
├── index.js
├── saudacoes.js
```

### saudacoes.js

```javascript
function ola(nome) {
  return `Olá, ${nome}!`;
}

function tchau(nome) {
  return `Tchau, ${nome}!`;
}

module.exports = { ola, tchau };
```

### index.js

```javascript
const { ola, tchau } = require('./saudacoes');

console.log(ola("Natalia"));
console.log(tchau("Natalia"));
```

### ✅ Benefícios

- Reutilização de código
- Facilidade de manutenção
- Separação de responsabilidades


## 🧪 try...catch e throw (explicação)

#### O que é `try...catch`?

Serve para **tratar erros** no seu código sem que o programa "quebre" (pare de funcionar).

**Exemplo:**

```javascript
try {
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}
```

## O que é `throw`?

Usado para **lançar um erro manualmente**.

**Exemplo:**

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}
```

#### Por que usar isso?

* Evita que o app trave com erros inesperados.  
* Permite mensagens de erro mais claras.  
* Garante um comportamento mais controlado e seguro.

Se desejar, posso gerar um exemplo com cachorros e petiscos usando esse recurso também. 🐶🍪
