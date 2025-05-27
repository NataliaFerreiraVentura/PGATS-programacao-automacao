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
const nome = "Natalia";
console.log(`Olá ${nome}, seja bem-vinda!`);
```

### 🗂️ Arrays e Objetos

```javascript
console.table(listaOuObjeto);
```
