// alert("Olá, Mundo!");
let Seccoes = window.document.getElementsByTagName('section');
const todosBotoesSeccoes = window.document.querySelectorAll(".seccoes button");

//Desabilitação e Opacidade de todas Secções e Botões
for(const botoes of todosBotoesSeccoes){
    botoes.disabled = true;
    botoes.style.cursor = "auto";
}
for(const secc of Seccoes){
    secc.style.opacity = "0.1";
}

function desabilitarBotoesAtuais(btnSeccao){
    for(const botoes of btnSeccao){
        botoes.disabled = true;
        botoes.style.color = "black";
        botoes.style.cursor = "auto";
    }
}

function desabilitarProximaSeccao(btnSeccao, seccao){
    setTimeout(()=>{
        seccao.style.opacity = "1";
        for(const botoes of btnSeccao){
            botoes.disabled = false;
            botoes.style.cursor = "pointer";
        }
    }, 5000);
}