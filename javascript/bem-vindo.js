//alert('Olá, Mundo!');
const saudacao = window.document.getElementById("saudacao");
let aceitarInstrucao = window.document.getElementById('aceitarInstrucao');
let botaoComecarJogo = window.document.getElementsByTagName('button')[0];
let linguagemLocal = window.navigator.language;
let hora = new Date().toLocaleString(linguagemLocal, {hour: "numeric"});
const anoAtual = window.document.getElementById("ano-atual");

anoAtual.innerHTML = "\u00A9 " + new Date().toLocaleString(linguagemLocal, {year: "numeric"})

//Verificação da Hora para a adaptação da Saudação
if(hora < 12){
    saudacao.innerHTML = "Bom dia";
    saudacao.style.color = "#F07A50";
}else if(hora < 18){
    saudacao.innerHTML = "Boa tarde";
    saudacao.style.color = "#455755"
}else{
    saudacao.innerHTML = "Boa noite";
    saudacao.style.color = "#020620";
}


//Funcção para aceitar a Instrução do jogo
aceitarInstrucao.addEventListener('click', verificarInstrucao)

function verificarInstrucao(){
    if(aceitarInstrucao.checked){
        botaoComecarJogo.style.opacity = '1';
        botaoComecarJogo.disabled = false;
        botaoComecarJogo.style.cursor = 'pointer'
    }else{;
        botaoComecarJogo.style.opacity = '0.5';
        botaoComecarJogo.disabled = true;
        botaoComecarJogo.style.cursor = 'auto'
    }
}

botaoComecarJogo.addEventListener("click", ()=>{
    window.location.assign("categorias.html");
})