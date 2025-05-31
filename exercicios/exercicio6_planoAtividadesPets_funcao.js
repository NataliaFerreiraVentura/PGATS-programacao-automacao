function planoDeAtividades(nome, porte, tempo) {
  let atividade;

  switch (porte) {
    case 'pequeno':
     atividade = 'brincar dentro de casa'
    break
    case 'medio':
     atividade = 'caminhada no quarteirão'
    break
    case 'grande':
      atividade = 'correr no parque'
    break
    default:
    atividade = 'porte inválido'
}


  let mensagem;
  if (tempo < 15) {
    mensagem = 'atividade rápida: '
  } else if (tempo <= 30) {
    mensagem = 'tempo ideal: ' 
  } else {
    mensagem = 'hora da diversão: '
  }

  console.log(`${nome} - ${mensagem}: [${atividade}]`)
}

planoDeAtividades('Pantera', 'medio', 10);
