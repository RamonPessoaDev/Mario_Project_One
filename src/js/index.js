/* 

Objetivo 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer

Objetivo 2 - Quando o usuário clicar no X devemos fechar a modal

Objetivo 1:
    passo 1 - dar um jeito de pegar o elemento que representa o botão usando o js

    passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    passo 3 - dar um jeito de pegar o elemento da modal no js 

    passo 4 - abrir a modal na tela 

Objetivo 2: 
    passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js

    passo 2 - dar um jeito de identificar quando o usuário clicar no X

    passo 3 - fechar a modal
*/

//Objetivo 1
const botaoTrailer = document.querySelector(".botao-trailer"); //1
//Objetivo 2
const botaoFecharModal = document.querySelector(".fechar-modal"); //1
const modal = document.querySelector(".modal"); //3
//Fechar video no botão
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

//4 //add ->toggle ; remove -> toggle
botaoTrailer.addEventListener("click", () => {   //2
    alternarModal();
    video.setAttribute("src", linkDoVideo);
}); 

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});





