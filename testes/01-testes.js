/**
  describe --> agrupador de testes
  it --> implementação do teste unitario

  tdd
  crio o teste
  vejo o teste falhar
  cria a implementacao para o teste passar
  roda o teste de novo
  refatoro o codigo para melhorar
 */
// testes/01-testes.js
import { exibirNomeDogFormatado } from '../conceitos/teste-unidade.js'; // nome exatamente como no arquivo
import assert from 'node:assert'

describe('Testes do projeto', () => {
  it('Exibir o nome do dog com letrar maiusculas', () => {
    assert.strictEqual(exibirNomeDogFormatado('Pantera'), 'PANTERA')
    // verifique se valor atual >  igual ao valor esperado
  })

  it('segundo teste', async function() {
    // throw new Error()    
    assert.equal(exibirNomeDogFormatado('piTÁgoraS'), 'PITÁGORAS');
  })
})