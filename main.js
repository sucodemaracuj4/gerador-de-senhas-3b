const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const botoes = ducument.querySelectorAll('parametro-senha-botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho (){
    if (tamanhoSenha <1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho (){
    if(tamanhoSenha<20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}