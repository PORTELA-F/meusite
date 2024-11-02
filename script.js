const buttonSim =
document.getElementById('button-sim')
;
const buttonNao = 
document.getElementById('button-nao')
;
const resposta =
document.getElementById('resposta')
;
function atualizarResposta(texto) {
    resposta.classList.remove('mostrar');
    setTimeout(() => {
        resposta.textContent = texto;
        resposta.classList.add('mostrar');
    }, 100);
}
let respostaUsuario = "";
buttonSim.addEventListener('click', () => {
    respostaUsuario = "Sim";
    resposta.textContent =
respostaUsuario;
    adicionarAnimacao();
});
function adicionarAnimacao() {
    imagem.classList.add('anime');
    setTimeout(() => {
imagem.classList.remove('anime');
    }, 500);
}
// EVENTO PARA O BOTÃO "Sim"
buttonSim.addEventListener('click', () => {
    atualizarResposta ('Tu escolheu SIM, tu é muito GAY!!!');
        adicionarAnimacao();
     /*EXIBE A RESPOSTA*/
});
// EVENTO PARA O BOTÃO "Não" 
buttonNao.addEventListener('mouseover', () => {
    buttonNao.textContent = 'Sim'; // MUDA O TEXTO PARA "Sim"
    buttonNao.style.backgroundColor = 'green'; // MUDA A COR PARA VERDE
    adicionarAnimacao();
});

buttonNao.addEventListener('mouseout', () => {
    buttonNao.textContent = 'Não'; // RETORNA O TEXTO PARA "Não"
    buttonNao.style.backgroundColor = 'red'; //RETORNA A COR PARA VERMELHO
    adicionarAnimacao();
});
buttonNao.addEventListener('click', () => {
    atualizarResposta('Clicou em SIM. Sabia que era Gay mas não tanto...');
     /* EXIBE A RESPOSTA COM EFEITO*/
        adicionarAnimacao();
});

