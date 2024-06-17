let listaNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

document.getElementById('pararChute').removeAttribute('disabled');

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('pararChute').setAttribute('disabled', true);
    } else {
        document.getElementById('pararChute').removeAttribute('disabled');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }  
        limparCampo()
    }
    tentativas++; 


    // = atribuir, == comparar
}

function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
        let quantidadeElementosLista = listaNumerosSorteados.length;

        if (quantidadeElementosLista == numeroLimite) {
            listaNumerosSorteados = []
        }

        if (listaNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
    }   else {
        listaNumerosSorteados.push(numeroEscolhido); 
        console.log(listaNumerosSorteados);   
        return numeroEscolhido;
    }
} 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('pararChute').removeAttribute('disabled');
   document.getElementById('reiniciar').setAttribute('disabled', true)
}

    // return = para que a informação "retorne" para a variaevel e fique armazenada