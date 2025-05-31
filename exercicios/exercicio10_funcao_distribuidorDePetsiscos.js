/*
Distribuidor de petiscos

Você tem uma lista de cães: Pantera, Luna e Thor
Crie um script que “entregue” 1 petisco para cada cão da lista.
Exiba uma mensagem como:
“Entregando petisco para Pantera”

Mantenha os dados e a função em arquivos separados; use modularização para organizar.
*/


function entregarPetiscos(listaDogs,petiscos){
    listaDogs.forEach((nome, index) => {
        console.log(`🐾 ${nome} ganhou um petisco de ${petiscos[index]}! 🦴`)
    })
    console.log("Todos os petiscos foram entregues!")
}

export{
    entregarPetiscos
}