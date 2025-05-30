/**
 * for - quando você já tem um conjunto de dados (lista, intervalo, string, etc.) ou sabe o número de repetições.
 * par, faça
 * 
 * contador: condiçao; manipulação do contador (incremento / decremento)
 * quantidadeDePeticos: quantidadeDePeticos <= quantidadeCalculada; quantidadeDePeticos ++
 */

// dar petisco 3 vezes
const quantidadeCalculada = 3
for(let quantidadeDePeticos = 1; quantidadeDePeticos <= quantidadeCalculada; quantidadeDePeticos++){
   console.log(`Dando um petisco de n* ${quantidadeDePeticos}`)
}

// alimentando cada gato na lista
const gatos = ['Gamora', 'Thor','Charlote']
for(let indice = 0;indice < gatos.length; indice ++){
   console.log(`Dando um petisco para ${gatos[indice]}`)
}

// dando 3 petiscos para cada gato

for(let quantidadeDePeticos = 1; quantidadeDePeticos <= quantidadeCalculada; quantidadeDePeticos++){
  
  console.log(`Dando um petisco de n* ${quantidadeDePeticos}`)

  for(let indice = 0;indice < gatos.length; indice ++){
    console.log(`Dando um petisco para ${gatos[indice]}`)
  }
  
}
