/*
async: torna uma função assíncrona (sempre retorna uma Promise)

await: pausa a execução até a Promise ser resolvida
*/ 
//async - assincrono
async function exibirNomeDogFormatado(nome){
    return nome.toUpperCase()
}

//await - esperar

console.log(await exibirNomeDogFormatado('Pantera'))