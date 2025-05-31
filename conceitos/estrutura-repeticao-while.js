/*
O while é uma estrutura de repetição condicional usada quando não sabemos com antecedência quantas vezes uma ação precisa ser repetida.
Ele executa o bloco de código repetidamente enquanto a condição especificada for verdadeira.

Se a condição nunca se tornar falsa, o while entra em loop infinito, o que pode travar o programa.
Bom uso usar para comparar um condição booleana ate que ela se torne falsa
*/


let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0
while(quantidadeVoltasAtual < voltasAteFicarCansado){
  console.log(`Dar uma volta na quadra`)
  quantidadeVoltasAtual++
}

// over engineering - Complicar demais um projeto ou solução,
// boilerplate - código de estrutura padrão que serve como ponto de partida para novos projetos.
// templates -  ex:  Um template de tela de login, ou um template de teste já com describe, it, e beforeEach.