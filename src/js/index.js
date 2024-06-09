const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0; 
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () { //A2
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return; 

    esconderCartaoSelecionado(); //A4

    cartaoAtual++; 
    mostrarCartao();
});

btnVoltar.addEventListener("click", function () { //B2
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;
    
    esconderCartaoSelecionado(); //B4

    cartaoAtual--;
    mostrarCartao(); //B3
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}