let listaNSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function mostrarNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto 
}

function exibirMensagemInicial() {
  mostrarNaTela('h1', 'Jogo: Advinhe o número');
  mostrarNaTela('p', 'Escolha um número de 1 a 100');
}

exibirMensagemInicial()

function verificarChute () {
  let chute = document.querySelector('input').value
  
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    mostrarNaTela('h1', 'Acertou!');
    let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`
    mostrarNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto){
      mostrarNaTela('p', 'O número da sorte é menor');
  } else {
      mostrarNaTela('p', 'O número da sorte é maior');
  }   
  tentativas++
  limpaCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNalista = listaNSorteados.length;

  if (quantidadeDeElementosNalista == 100) {
    listaNSorteados = [];
  }
  if (listaNSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limpaCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limpaCampo();
  tentativas = 1;
  exibirMensagemInicial();

}
