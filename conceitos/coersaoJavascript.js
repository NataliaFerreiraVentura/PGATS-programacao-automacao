let valor = "123";

console.log("🔧 Coerção Explícita")
console.log(Number(valor));   // 123 (número)
console.log(String(456));     // "456" (string)
console.log(Boolean(0));      // false
console.log(Boolean("Oi"));   // true


console.log("🔧 Coerção Implícita")

console.log("5" + 1);    // "51" (converte 1 em string)
console.log("5" - 1);    // 4 (converte "5" em número)
console.log(true + 1);   // 2 (true vira 1)
console.log(false + "1"); // "false1" (false vira string)
